/* Hunar Academy — UI application layer */
const HunarApp = {
  initShell() {
    HunarI18n.apply();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', () => { HunarI18n.toggle(); this.refreshDynamic(); });
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('hidden');
        mobileBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    }
    this.applyTheme(localStorage.getItem('hunar-theme') || 'light');
  },
  toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  },
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hunar-theme', theme);
    document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.toggle('hidden', theme === 'dark'));
    document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.toggle('hidden', theme !== 'dark'));
  },
  refreshDynamic() { if (typeof this._refresh === 'function') this._refresh(); },
  levelLabel(level) { return HunarI18n.t('common.' + (level || 'beginner')); },
  courseCard(c) {
    const lessons = countLessons(c);
    const prog = HunarStore.getProgress(c.id, lessons);
    return `<a href="course.html?id=${c.id}" class="card p-6 block group h-full">
      <div class="flex items-start justify-between gap-3 mb-4">
        <span class="badge">${this.levelLabel(c.level)}</span>
        <span class="text-xs text-ink-muted tabular-nums">${c.durationHours}h · ${lessons} ${HunarI18n.t('common.lessons')}</span>
      </div>
      <h3 class="font-display font-semibold text-lg tracking-tight mb-2 group-hover:text-teal transition-colors">${bi(c.title)}</h3>
      <p class="text-sm text-ink-muted leading-relaxed mb-5">${bi(c.short)}</p>
      ${prog.done > 0
        ? `<div class="mt-auto"><div class="progress-bar mb-2"><div style="width:${prog.pct}%"></div></div>
           <p class="text-xs text-ink-muted">${prog.done}/${prog.total} · ${prog.pct}%</p></div>`
        : `<span class="text-xs font-semibold text-teal tracking-wide">${HunarI18n.t('common.free')}</span>`}
    </a>`;
  },
  pathCard(p) {
    return `<a href="paths.html#${p.id}" class="card p-6 block group h-full">
      <h3 class="font-display font-semibold text-lg tracking-tight mb-2 group-hover:text-teal transition-colors">${bi(p.title)}</h3>
      <p class="text-sm text-ink-muted leading-relaxed mb-4">${bi(p.description)}</p>
      <p class="text-xs font-medium text-ink-muted">${p.courseIds.length} course${p.courseIds.length > 1 ? 's' : ''}</p>
    </a>`;
  },
  initHome() {
    this.initShell();
    this._refresh = () => {
      const pathsEl = document.getElementById('paths-grid');
      if (pathsEl) pathsEl.innerHTML = HUNAR_PATHS.slice(0, 3).map(p => this.pathCard(p)).join('');
      const feat = document.getElementById('featured-courses');
      if (feat) feat.innerHTML = HUNAR_COURSES.slice(0, 6).map(c => this.courseCard(c)).join('');
    };
    this._refresh();
  },
  initCourses() {
    this.initShell();
    let filter = 'all';
    this._refresh = () => {
      const list = document.getElementById('courses-list');
      if (!list) return;
      const filtered = filter === 'all'
        ? HUNAR_COURSES
        : HUNAR_COURSES.filter(c => c.category === filter || (filter === 'other' && !['web', 'design', 'marketing', 'games'].includes(c.category)));
      list.innerHTML = filtered.map(c => this.courseCard(c)).join('') || '<p class="text-ink-muted col-span-full">No courses in this category.</p>';
    };
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        filter = btn.getAttribute('data-filter');
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active', 'bg-teal', 'text-paper'));
        btn.classList.add('active');
        this._refresh();
      });
    });
    this._refresh();
  },
  initPaths() {
    this.initShell();
    this._refresh = () => {
      const el = document.getElementById('paths-list');
      if (!el) return;
      el.innerHTML = HUNAR_PATHS.map(p => {
        const courses = p.courseIds.map(id => getCourseById(id)).filter(Boolean);
        return `<article id="${p.id}" class="card p-6 sm:p-8 mb-5">
          <h2 class="font-display text-xl font-bold tracking-tight mb-2">${bi(p.title)}</h2>
          <p class="text-ink-muted mb-6 leading-relaxed">${bi(p.description)}</p>
          <ol class="space-y-4">${courses.map((c, i) => `
            <li class="flex gap-3 items-start">
              <span class="w-8 h-8 rounded-full bg-teal-soft text-teal-dark text-sm font-semibold flex items-center justify-center shrink-0">${i + 1}</span>
              <div>
                <a href="course.html?id=${c.id}" class="font-medium hover:text-teal transition-colors">${bi(c.title)}</a>
                <p class="text-sm text-ink-muted mt-0.5">${bi(c.short)}</p>
              </div>
            </li>`).join('')}
          </ol>
        </article>`;
      }).join('');
    };
    this._refresh();
  },
  initDashboard() {
    this.initShell();
    this._refresh = () => {
      const el = document.getElementById('dashboard-content');
      if (!el) return;
      const all = HunarStore.getAllProgress();
      const ids = Object.keys(all);
      if (!ids.length) {
        el.innerHTML = `<div class="card p-10 text-center max-w-md mx-auto">
          <p class="text-ink-muted mb-6 leading-relaxed">${HunarI18n.t('dashboard.empty')}</p>
          <a href="courses.html" class="btn-primary">${HunarI18n.t('dashboard.start')}</a>
        </div>`;
        return;
      }
      el.innerHTML = ids.map(id => {
        const c = getCourseById(id);
        if (!c) return '';
        const total = countLessons(c);
        const prog = HunarStore.getProgress(id, total);
        const next = getAllLessonsFlat(c).find(l => !prog.completedLessons.includes(l.id));
        return `<div class="card p-6 mb-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="min-w-0">
              <h3 class="font-display font-semibold text-lg tracking-tight">${bi(c.title)}</h3>
              <p class="text-sm text-ink-muted mt-1">${prog.done}/${prog.total} ${HunarI18n.t('dashboard.lessons')} · ${prog.pct}%</p>
              <div class="progress-bar mt-3 max-w-xs"><div style="width:${prog.pct}%"></div></div>
            </div>
            <div class="flex gap-2 shrink-0">
              ${next
                ? `<a href="learn.html?course=${c.id}&lesson=${next.id}" class="btn-primary">${HunarI18n.t('dashboard.continue')}</a>`
                : `<span class="badge badge-accent">${HunarI18n.t('dashboard.completed')}</span>`}
            </div>
          </div>
        </div>`;
      }).join('');
    };
    this._refresh();
  },
  initCourseDetail() {
    this.initShell();
    const params = new URLSearchParams(location.search);
    const course = getCourseById(params.get('id'));
    const root = document.getElementById('course-detail');
    if (!course || !root) {
      if (root) root.innerHTML = '<p class="p-8 text-ink-muted">Course not found. <a href="courses.html" class="text-teal font-medium">Back to catalog</a></p>';
      return;
    }
    this._refresh = () => {
      const total = countLessons(course);
      const prog = HunarStore.getProgress(course.id, total);
      const flat = getAllLessonsFlat(course);
      const next = flat.find(l => !prog.completedLessons.includes(l.id)) || flat[0];
      const outcomes = (HunarI18n.lang === 'ur' ? course.outcomes.ur : course.outcomes.en) || [];
      root.innerHTML = `<div class="max-w-3xl">
        <p class="section-label mb-3">${HunarI18n.t('common.free')} · ${this.levelLabel(course.level)}</p>
        <h1 class="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">${bi(course.title)}</h1>
        <p class="text-ink-muted text-lg leading-relaxed mb-8">${bi(course.description)}</p>
        <div class="flex flex-wrap gap-3 mb-8">
          <a href="learn.html?course=${course.id}&lesson=${next.id}" class="btn-primary">${prog.done ? HunarI18n.t('common.continue') : HunarI18n.t('common.start')}</a>
          <span class="text-sm text-ink-muted self-center">${course.durationHours}h · ${total} lessons · ${course.modules.length} modules</span>
        </div>
        ${prog.done ? `<div class="progress-bar mb-2 max-w-md"><div style="width:${prog.pct}%"></div></div><p class="text-sm text-ink-muted mb-10">${prog.pct}% complete</p>` : ''}
        <h2 class="font-display text-xl font-bold tracking-tight mb-3">Outcomes</h2>
        <ul class="list-disc ml-5 mb-12 text-ink-soft space-y-1.5">${outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        <h2 class="font-display text-xl font-bold tracking-tight mb-5">Curriculum</h2>
        ${course.modules.map((m, mi) => `
          <div class="mb-8">
            <h3 class="font-semibold text-base mb-3 text-ink">Module ${mi + 1}: ${bi(m.title)}</h3>
            <ul class="space-y-0.5 border border-ink/8 rounded-xl overflow-hidden bg-paper-card">
              ${m.lessons.map(l => {
                const done = prog.completedLessons.includes(l.id);
                return `<li><a href="learn.html?course=${course.id}&lesson=${l.id}" class="flex items-center gap-3 py-3 px-4 hover:bg-paper-soft transition-colors ${done ? 'text-teal' : ''}">
                  <span class="w-6 h-6 rounded-full border border-ink/15 flex items-center justify-center text-xs shrink-0 ${done ? 'bg-teal border-teal text-white' : ''}">${done ? '✓' : ''}</span>
                  <span class="text-sm font-medium">${bi(l.title)}</span>
                </a></li>`;
              }).join('')}
            </ul>
          </div>`).join('')}
      </div>`;
    };
    this._refresh();
  },
  initLearn() {
    this.initShell();
    const params = new URLSearchParams(location.search);
    const courseId = params.get('course');
    const lessonId = params.get('lesson');
    const course = getCourseById(courseId);
    const root = document.getElementById('lesson-root');
    if (!course || !root) {
      if (root) root.innerHTML = '<p class="p-8 text-ink-muted">Lesson not found.</p>';
      return;
    }
    const flat = getAllLessonsFlat(course);
    const idx = flat.findIndex(l => l.id === lessonId);
    const lesson = flat[idx];
    if (!lesson) {
      root.innerHTML = '<p class="p-8 text-ink-muted">Lesson not found.</p>';
      return;
    }
    const prev = flat[idx - 1], next = flat[idx + 1];
    const done = HunarStore.isLessonComplete(courseId, lessonId);
    const objs = (HunarI18n.lang === 'ur' ? (lesson.objectives.ur || lesson.objectives.en) : lesson.objectives.en) || [];
    root.innerHTML = `<div class="flex flex-col lg:flex-row gap-10">
      <aside class="lg:w-64 shrink-0 order-2 lg:order-1">
        <div class="lg:sticky lg:top-24">
          <a href="course.html?id=${course.id}" class="text-sm font-medium text-teal hover:underline mb-4 inline-block">← ${bi(course.title)}</a>
          <p class="text-xs font-medium text-ink-muted uppercase tracking-wide mb-2">${bi(lesson.moduleTitle)}</p>
          <nav class="space-y-0.5 max-h-[60vh] overflow-y-auto text-sm border border-ink/8 rounded-xl p-2 bg-paper-card">
            ${flat.map(l => {
              const isDone = HunarStore.isLessonComplete(courseId, l.id);
              const isCurrent = l.id === lessonId;
              return `<a href="learn.html?course=${courseId}&lesson=${l.id}" class="block py-2 px-2.5 rounded-lg ${isCurrent ? 'bg-teal-soft text-teal-dark font-medium' : 'hover:bg-paper-soft'} ${isDone && !isCurrent ? 'text-teal' : ''}">${isDone ? '✓ ' : ''}${bi(l.title)}</a>`;
            }).join('')}
          </nav>
        </div>
      </aside>
      <article class="flex-1 min-w-0 order-1 lg:order-2 lesson-prose">
        <p class="text-sm text-ink-muted mb-2">Lesson ${idx + 1} of ${flat.length}</p>
        <h1 class="font-display text-3xl font-bold tracking-tight mb-8 !mt-0">${bi(lesson.title)}</h1>
        <section><h2>${HunarI18n.t('lesson.objectives')}</h2><ul>${objs.map(o => `<li>${o}</li>`).join('')}</ul></section>
        <section><h2>${HunarI18n.t('lesson.prereq')}</h2><p>${bi(lesson.prereq)}</p></section>
        <section><h2>${HunarI18n.t('lesson.concept')}</h2><div>${bi(lesson.concept).replace(/\n/g, '<br>')}</div></section>
        <section><h2>${HunarI18n.t('lesson.example')}</h2><pre><code>${bi(lesson.example).replace(/\\n/g, '\n')}</code></pre></section>
        <section><h2>${HunarI18n.t('lesson.exercise')}</h2><p>${bi(lesson.exercise)}</p></section>
        ${(lesson.quiz && lesson.quiz.length) ? `<section class="mt-10"><h2>${HunarI18n.t('lesson.quiz')}</h2>
          <div id="quiz-box" class="space-y-6">${lesson.quiz.map((item, qi) => `
            <div class="quiz-item" data-qi="${qi}" data-answer="${item.answer}">
              <p class="font-medium mb-3">${qi + 1}. ${bi(item.q)}</p>
              ${item.options.map((opt, oi) => `<div class="quiz-option" data-oi="${oi}" role="button" tabindex="0"><span class="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-xs shrink-0">${String.fromCharCode(65 + oi)}</span><span>${bi(opt)}</span></div>`).join('')}
              <p class="quiz-explain text-sm text-ink-muted mt-2 hidden"></p>
            </div>`).join('')}
            <button id="quiz-submit" class="btn-primary mt-2">Check answers</button>
            <p id="quiz-result" class="text-sm font-medium mt-3 hidden"></p>
          </div></section>` : ''}
        ${lesson.video ? `<section class="mt-10"><h2>${HunarI18n.t('lesson.video')}</h2>
          <p><a href="${lesson.video.url}" target="_blank" rel="noopener noreferrer" class="font-medium">${lesson.video.title}</a>
          <span class="text-ink-muted text-sm">(${lesson.video.duration || ''})</span></p></section>` : ''}
        <section class="mt-10"><h2>${HunarI18n.t('lesson.resources')}</h2>
          <ul class="!list-none !ml-0 space-y-2">${(lesson.resources || []).map(r =>
            `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a> <span class="text-xs text-ink-muted">(${r.type})</span></li>`
          ).join('')}</ul>
        </section>
        <section class="mt-10"><h2>${HunarI18n.t('lesson.recap')}</h2><p>${bi(lesson.recap)}</p></section>
        <div class="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-ink/10">
          ${prev ? `<a href="learn.html?course=${courseId}&lesson=${prev.id}" class="btn-secondary">${HunarI18n.t('lesson.prev')}</a>` : '<span></span>'}
          <button id="mark-done" class="btn-primary ${done ? 'opacity-70' : ''}">${done ? HunarI18n.t('lesson.done') : HunarI18n.t('lesson.markDone')}</button>
          ${next
            ? `<a href="learn.html?course=${courseId}&lesson=${next.id}" class="btn-secondary ml-auto">${HunarI18n.t('lesson.next')} →</a>`
            : `<a href="course.html?id=${courseId}" class="btn-secondary ml-auto">Back to course</a>`}
        </div>
      </article>
    </div>`;
    const markBtn = document.getElementById('mark-done');
    if (markBtn) markBtn.addEventListener('click', () => {
      HunarStore.markLessonComplete(courseId, lessonId);
      const prog = HunarStore.getProgress(courseId, flat.length);
      if (prog.pct >= 100) HunarStore.markCourseComplete(courseId);
      markBtn.textContent = HunarI18n.t('lesson.done');
      markBtn.classList.add('opacity-70');
    });
    const submit = document.getElementById('quiz-submit');
    if (submit) {
      document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const item = opt.closest('.quiz-item');
          item.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
        });
      });
      submit.addEventListener('click', () => {
        let score = 0;
        const items = document.querySelectorAll('.quiz-item');
        items.forEach(item => {
          const ans = parseInt(item.dataset.answer, 10);
          const selected = item.querySelector('.quiz-option.selected');
          const explain = item.querySelector('.quiz-explain');
          const qi = parseInt(item.dataset.qi, 10);
          item.querySelectorAll('.quiz-option').forEach((o, oi) => {
            o.classList.remove('correct', 'wrong');
            if (oi === ans) o.classList.add('correct');
          });
          if (selected) {
            const oi = parseInt(selected.dataset.oi, 10);
            if (oi === ans) score++; else selected.classList.add('wrong');
          }
          if (lesson.quiz[qi] && lesson.quiz[qi].explain) {
            explain.textContent = bi(lesson.quiz[qi].explain);
            explain.classList.remove('hidden');
          }
        });
        HunarStore.saveQuizScore(courseId, lessonId, score, items.length);
        const res = document.getElementById('quiz-result');
        res.textContent = `Score: ${score}/${items.length}`;
        res.classList.remove('hidden');
        submit.disabled = true;
      });
    }
  },
  initAbout() { this.initShell(); }
};
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('hunar-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
});
