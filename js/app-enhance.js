/* Enhances HunarApp with rich cards, path roadmaps, search, export */
(function () {
  if (typeof HunarApp === 'undefined') return;

  HunarApp.courseCard = function (c) {
    const lessons = countLessons(c);
    const prog = HunarStore.getProgress(c.id, lessons);
    const meta = typeof getMeta === 'function' ? getMeta(c.id) : { icon: '📘', weeks: '—', skills: [], outcome: { en: '', ur: '' } };
    const skills = (meta.skills || []).slice(0, 5).map(s =>
      '<span class="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md bg-paper-soft text-ink-soft">' + s + '</span>'
    ).join('');
    const outcome = bi(meta.outcome);
    return '<a href="course.html?id=' + c.id + '" class="card p-6 block group h-full flex flex-col">' +
      '<div class="flex items-start justify-between gap-3 mb-3">' +
      '<span class="text-2xl" aria-hidden="true">' + (meta.icon || '📘') + '</span>' +
      '<span class="badge">' + this.levelLabel(c.level) + '</span></div>' +
      '<h3 class="font-display font-semibold text-lg tracking-tight mb-1 group-hover:text-teal transition-colors">' + bi(c.title) + '</h3>' +
      '<p class="text-sm text-ink-muted leading-relaxed mb-3 flex-1">' + bi(c.short) + '</p>' +
      (outcome ? '<p class="text-xs font-medium text-teal mb-3">→ ' + outcome + '</p>' : '') +
      '<div class="flex flex-wrap gap-1.5 mb-4">' + skills + '</div>' +
      '<div class="flex items-center justify-between gap-2 pt-3 border-t border-ink/8 text-xs text-ink-muted">' +
      '<span>⏱ ' + (meta.weeks || c.durationHours + 'h') + ' · 📚 ' + lessons + ' lessons</span>' +
      (prog.done > 0
        ? '<span class="font-semibold text-teal">' + prog.pct + '%</span>'
        : '<span class="font-semibold text-teal">' + HunarI18n.t('common.free') + '</span>') +
      '</div>' +
      (prog.done > 0 ? '<div class="progress-bar mt-2"><div style="width:' + prog.pct + '%"></div></div>' : '') +
      '</a>';
  };

  HunarApp.pathCard = function (p) {
    const steps = (typeof HUNAR_PATH_STEPS !== 'undefined' && HUNAR_PATH_STEPS[p.id]) ? HUNAR_PATH_STEPS[p.id] : null;
    const outcome = steps ? bi(steps.outcome) : bi(p.description);
    let stepRow = '';
    if (steps) {
      stepRow = '<div class="flex flex-wrap items-center gap-1 mt-4 text-[11px] text-ink-muted">' +
        steps.steps.map(function (s, i) {
          return (i ? '<span class="text-teal/50">→</span>' : '') +
            '<span class="font-medium text-ink-soft">' + s + '</span>';
        }).join('') + '</div>';
    }
    return '<a href="paths.html#' + p.id + '" class="card p-6 block group h-full">' +
      '<h3 class="font-display font-semibold text-lg tracking-tight mb-2 group-hover:text-teal transition-colors">' + bi(p.title) + '</h3>' +
      '<p class="text-sm text-ink-muted leading-relaxed">' + outcome + '</p>' + stepRow +
      '<p class="text-xs font-semibold text-teal mt-4">' + p.courseIds.length + ' course' + (p.courseIds.length > 1 ? 's' : '') + ' →</p></a>';
  };

  HunarApp.initHome = function () {
    this.initShell();
    const self = this;
    this._refresh = function () {
      const pathsEl = document.getElementById('paths-grid');
      if (pathsEl) pathsEl.innerHTML = HUNAR_PATHS.map(function (p) { return self.pathCard(p); }).join('');
      const feat = document.getElementById('featured-courses');
      if (feat) feat.innerHTML = HUNAR_COURSES.slice(0, 6).map(function (c) { return self.courseCard(c); }).join('');
      const countEl = document.getElementById('course-count');
      if (countEl) countEl.textContent = String(HUNAR_COURSES.length);
    };
    this._refresh();
  };

  HunarApp.initCourses = function () {
    this.initShell();
    let filter = 'all';
    let query = '';
    const self = this;
    this._refresh = function () {
      const list = document.getElementById('courses-list');
      if (!list) return;
      let items = filter === 'all' ? HUNAR_COURSES.slice() :
        HUNAR_COURSES.filter(function (c) {
          return c.category === filter || (filter === 'other' && ['web', 'design', 'marketing', 'games'].indexOf(c.category) < 0);
        });
      if (query) {
        const q = query.toLowerCase();
        items = items.filter(function (c) {
          const meta = typeof getMeta === 'function' ? getMeta(c.id) : { skills: [] };
          const t = (bi(c.title) + ' ' + bi(c.short) + ' ' + (meta.skills || []).join(' ')).toLowerCase();
          return t.indexOf(q) >= 0;
        });
      }
      list.innerHTML = items.length
        ? items.map(function (c) { return self.courseCard(c); }).join('')
        : '<p class="text-ink-muted col-span-full py-12 text-center">No courses match this filter.</p>';
      const countEl = document.getElementById('catalog-count');
      if (countEl) countEl.textContent = items.length + ' / ' + HUNAR_COURSES.length;
    };
    document.querySelectorAll('[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filter = btn.getAttribute('data-filter');
        document.querySelectorAll('[data-filter]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        self._refresh();
      });
    });
    const search = document.getElementById('course-search');
    if (search) search.addEventListener('input', function () { query = search.value.trim(); self._refresh(); });
    this._refresh();
  };

  HunarApp.initPaths = function () {
    this.initShell();
    const self = this;
    this._refresh = function () {
      const el = document.getElementById('paths-list');
      if (!el) return;
      el.innerHTML = HUNAR_PATHS.map(function (p) {
        const courses = p.courseIds.map(function (id) { return getCourseById(id); }).filter(Boolean);
        const steps = (typeof HUNAR_PATH_STEPS !== 'undefined' && HUNAR_PATH_STEPS[p.id]) ? HUNAR_PATH_STEPS[p.id] : null;
        const outcome = steps ? bi(steps.outcome) : bi(p.description);
        let roadmap = '';
        if (steps) {
          roadmap = '<div class="mt-6 mb-8 overflow-x-auto"><div class="flex items-center gap-2 min-w-max pb-2">' +
            '<span class="badge">START</span>' +
            steps.steps.map(function (s) {
              return '<span class="text-teal/40">→</span><span class="px-3 py-1.5 rounded-lg bg-paper-soft text-sm font-medium text-ink-soft whitespace-nowrap">' + s + '</span>';
            }).join('') +
            '<span class="text-teal/40">→</span><span class="badge badge-accent">JOB READY</span></div></div>';
        }
        let builds = [];
        courses.forEach(function (c) {
          const m = typeof getMeta === 'function' ? getMeta(c.id) : null;
          if (m) builds = builds.concat(HunarI18n.lang === 'ur' ? m.builds.ur : m.builds.en);
        });
        builds = builds.filter(Boolean).filter(function (b, i, a) { return a.indexOf(b) === i; }).slice(0, 8);
        const buildList = builds.length
          ? '<div class="mt-6 p-4 rounded-xl bg-teal-soft/50 border border-teal/10">' +
            '<p class="text-xs font-semibold uppercase tracking-wide text-teal-dark mb-2">What you\'ll build</p>' +
            '<ul class="grid sm:grid-cols-2 gap-1.5 text-sm text-ink-soft">' +
            builds.map(function (b) { return '<li class="flex gap-2"><span class="text-teal">✓</span>' + b + '</li>'; }).join('') +
            '</ul></div>'
          : '';
        return '<article id="' + p.id + '" class="card p-6 sm:p-8 mb-6 scroll-mt-24">' +
          '<p class="section-label mb-2">Career path</p>' +
          '<h2 class="font-display text-2xl font-bold tracking-tight mb-2">' + bi(p.title) + '</h2>' +
          '<p class="text-lg text-teal font-medium mb-2">' + outcome + '</p>' +
          '<p class="text-ink-muted leading-relaxed mb-2">' + bi(p.description) + '</p>' +
          roadmap +
          '<h3 class="font-semibold text-sm uppercase tracking-wide text-ink-muted mb-3">Courses in this path</h3>' +
          '<ol class="space-y-3">' +
          courses.map(function (c, i) {
            const m = typeof getMeta === 'function' ? getMeta(c.id) : { icon: '📘' };
            return '<li class="flex gap-3 items-start p-3 rounded-xl hover:bg-paper-soft transition-colors">' +
              '<span class="w-9 h-9 rounded-full bg-teal-soft text-teal-dark text-sm font-bold flex items-center justify-center shrink-0">' + (i + 1) + '</span>' +
              '<div class="min-w-0 flex-1">' +
              '<a href="course.html?id=' + c.id + '" class="font-semibold hover:text-teal transition-colors">' + (m.icon || '') + ' ' + bi(c.title) + '</a>' +
              '<p class="text-sm text-ink-muted mt-0.5">' + bi(c.short) + '</p></div>' +
              '<a href="course.html?id=' + c.id + '" class="btn-secondary text-xs py-1.5 px-3 shrink-0">' + HunarI18n.t('common.view') + '</a></li>';
          }).join('') +
          '</ol>' + buildList + '</article>';
      }).join('');
    };
    this._refresh();
  };

  HunarApp.initDashboard = function () {
    this.initShell();
    const self = this;
    this._refresh = function () {
      const el = document.getElementById('dashboard-content');
      if (!el) return;
      const all = HunarStore.getAllProgress();
      const ids = Object.keys(all);
      const exportBar = '<div class="flex flex-wrap gap-2 mb-4">' +
        '<button type="button" id="export-progress" class="btn-secondary text-sm">Export progress</button>' +
        '<button type="button" id="import-progress" class="btn-ghost text-sm border border-ink/10 rounded-lg px-3">Import</button>' +
        '<input type="file" id="import-file" accept="application/json,.json" class="hidden" /></div>' +
        '<p class="text-xs text-ink-muted mb-6 flex items-center gap-2"><span>🔒</span> No account required. Progress stays in this browser. Export a JSON backup anytime.</p>';
      if (!ids.length) {
        el.innerHTML = exportBar + '<div class="card p-10 text-center max-w-md mx-auto"><p class="text-ink-muted mb-6">' +
          HunarI18n.t('dashboard.empty') + '</p><a href="courses.html" class="btn-primary">' + HunarI18n.t('dashboard.start') + '</a></div>';
      } else {
        el.innerHTML = exportBar + ids.map(function (id) {
          const c = getCourseById(id);
          if (!c) return '';
          const total = countLessons(c);
          const prog = HunarStore.getProgress(id, total);
          const next = getAllLessonsFlat(c).find(function (l) { return prog.completedLessons.indexOf(l.id) < 0; });
          const meta = typeof getMeta === 'function' ? getMeta(id) : { icon: '📘' };
          return '<div class="card p-6 mb-4"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">' +
            '<div class="min-w-0"><h3 class="font-display font-semibold text-lg">' + (meta.icon || '') + ' ' + bi(c.title) + '</h3>' +
            '<p class="text-sm text-ink-muted mt-1">' + prog.done + '/' + prog.total + ' · ' + prog.pct + '%</p>' +
            '<div class="progress-bar mt-3 max-w-xs"><div style="width:' + prog.pct + '%"></div></div></div>' +
            '<div class="flex gap-2 shrink-0">' +
            (next
              ? '<a href="learn.html?course=' + c.id + '&lesson=' + next.id + '" class="btn-primary">' + HunarI18n.t('dashboard.continue') + '</a>'
              : '<span class="badge badge-accent">' + HunarI18n.t('dashboard.completed') + '</span>') +
            '</div></div></div>';
        }).join('');
      }
      const exp = document.getElementById('export-progress');
      if (exp) exp.onclick = function () {
        const blob = new Blob([JSON.stringify(HunarStore.load(), null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'hunar-progress.json';
        a.click();
      };
      const impBtn = document.getElementById('import-progress');
      const impFile = document.getElementById('import-file');
      if (impBtn && impFile) {
        impBtn.onclick = function () { impFile.click(); };
        impFile.onchange = function () {
          const file = impFile.files && impFile.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = function () {
            try {
              const data = JSON.parse(reader.result);
              if (data && data.courses) { HunarStore.save(data); self._refresh(); }
              else alert('Invalid progress file');
            } catch (e) { alert('Could not read file'); }
          };
          reader.readAsText(file);
        };
      }
    };
    this._refresh();
  };
})();
