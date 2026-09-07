/* Hunar progress store — localStorage only */
const HunarStore = {
  KEY: 'hunar-progress-v1',

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      const data = raw ? JSON.parse(raw) : { courses: {}, lastVisited: null, activity: [] };
      if (!Array.isArray(data.activity)) data.activity = [];
      if (!data.courses) data.courses = {};
      return data;
    } catch {
      return { courses: {}, lastVisited: null, activity: [] };
    }
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  _touchActivity(data) {
    const day = new Date().toISOString().slice(0, 10);
    if (!Array.isArray(data.activity)) data.activity = [];
    if (!data.activity.includes(day)) data.activity.push(day);
    if (data.activity.length > 90) data.activity = data.activity.slice(-90);
  },

  getCourse(courseId) {
    const data = this.load();
    return data.courses[courseId] || { completedLessons: [], quizScores: {}, startedAt: null, completedAt: null };
  },

  markLessonComplete(courseId, lessonId) {
    const data = this.load();
    if (!data.courses[courseId]) {
      data.courses[courseId] = { completedLessons: [], quizScores: {}, startedAt: new Date().toISOString(), completedAt: null };
    }
    const c = data.courses[courseId];
    if (!c.completedLessons.includes(lessonId)) {
      c.completedLessons.push(lessonId);
    }
    if (!c.startedAt) c.startedAt = new Date().toISOString();
    data.lastVisited = { courseId, lessonId, at: new Date().toISOString() };
    this._touchActivity(data);
    this.save(data);
    return c;
  },

  isLessonComplete(courseId, lessonId) {
    return this.getCourse(courseId).completedLessons.includes(lessonId);
  },

  saveQuizScore(courseId, lessonId, score, total) {
    const data = this.load();
    if (!data.courses[courseId]) {
      data.courses[courseId] = { completedLessons: [], quizScores: {}, startedAt: new Date().toISOString(), completedAt: null };
    }
    data.courses[courseId].quizScores[lessonId] = { score, total, at: new Date().toISOString() };
    data.lastVisited = { courseId, lessonId, at: new Date().toISOString() };
    this._touchActivity(data);
    this.save(data);
  },

  getProgress(courseId, totalLessons) {
    const c = this.getCourse(courseId);
    const done = c.completedLessons.length;
    const pct = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;
    return { done, total: totalLessons, pct, completedLessons: c.completedLessons };
  },

  markCourseComplete(courseId) {
    const data = this.load();
    if (data.courses[courseId]) {
      data.courses[courseId].completedAt = new Date().toISOString();
      this._touchActivity(data);
      this.save(data);
    }
  },

  getAllProgress() {
    return this.load().courses;
  },

  getLastStudied() {
    const data = this.load();
    return data.lastVisited && data.lastVisited.at ? data.lastVisited.at : null;
  },

  getStreak() {
    const data = this.load();
    const set = new Set(data.activity || []);
    if (!set.size) return 0;
    const today = new Date();
    const iso = (d) => d.toISOString().slice(0, 10);
    let cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (!set.has(iso(cursor))) {
      cursor.setDate(cursor.getDate() - 1);
      if (!set.has(iso(cursor))) return 0;
    }
    let streak = 0;
    while (set.has(iso(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  },

  getWeeklyLessonGoal(goal = 5) {
    const data = this.load();
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    let count = 0;
    Object.values(data.courses || {}).forEach((c) => {
      if (c.quizScores) {
        Object.values(c.quizScores).forEach((q) => {
          if (q && q.at && new Date(q.at).getTime() >= weekAgo) count += 1;
        });
      }
    });
    const daysActiveThisWeek = this.getDaysActiveThisWeek();
    if (data.lastVisited && data.lastVisited.at && new Date(data.lastVisited.at).getTime() >= weekAgo) {
      count = Math.max(count, daysActiveThisWeek);
    }
    return { done: Math.min(Math.max(daysActiveThisWeek, count), goal), total: goal, daysActive: daysActiveThisWeek };
  },

  getDaysActiveThisWeek() {
    const data = this.load();
    const set = new Set(data.activity || []);
    let n = 0;
    const d = new Date();
    for (let i = 0; i < 7; i++) {
      const day = new Date(d.getFullYear(), d.getMonth(), d.getDate() - i);
      if (set.has(day.toISOString().slice(0, 10))) n += 1;
    }
    return n;
  },

  resetCourse(courseId) {
    const data = this.load();
    delete data.courses[courseId];
    this.save(data);
  },

  resetAll() {
    localStorage.removeItem(this.KEY);
  }
};
