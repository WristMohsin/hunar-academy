/* Hunar progress store — localStorage only */
const HunarStore = {
  KEY: 'hunar-progress-v1',

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : { courses: {}, lastVisited: null };
    } catch {
      return { courses: {}, lastVisited: null };
    }
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
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
      this.save(data);
    }
  },

  getAllProgress() {
    return this.load().courses;
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
