/* Hunar streak overlay — loads after app-enhance */
(function () {
  if (typeof HunarApp === 'undefined' || typeof HunarStore === 'undefined') return;
  var prev = HunarApp.initDashboard;
  HunarApp.initDashboard = function () {
    if (typeof prev === 'function') prev.call(this);
    var self = this;
    var orig = this._refresh;
    this._refresh = function () {
      if (typeof orig === 'function') orig.call(self);
      var el = document.getElementById('dashboard-content');
      if (!el) return;
      if (el.querySelector('[data-hunar-streak]')) return;
      var streak = typeof HunarStore.getStreak === 'function' ? HunarStore.getStreak() : 0;
      var daysWeek = typeof HunarStore.getDaysActiveThisWeek === 'function' ? HunarStore.getDaysActiveThisWeek() : 0;
      var last = typeof HunarStore.getLastStudied === 'function' ? HunarStore.getLastStudied() : null;
      var lastLabel = 'Not started yet';
      if (last) {
        try { lastLabel = new Date(last).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }); }
        catch (e) { lastLabel = last; }
      }
      var bar = document.createElement('div');
      bar.setAttribute('data-hunar-streak', '1');
      bar.className = 'grid sm:grid-cols-3 gap-4 mb-6';
      bar.innerHTML =
        '<div class="card p-4"><p class="text-xs uppercase tracking-wide text-ink-muted mb-1">Streak</p><p class="font-display text-2xl font-bold text-teal">' + streak + ' day' + (streak === 1 ? '' : 's') + '</p><p class="text-xs text-ink-muted mt-1">Consecutive active days</p></div>' +
        '<div class="card p-4"><p class="text-xs uppercase tracking-wide text-ink-muted mb-1">This week</p><p class="font-display text-2xl font-bold">' + daysWeek + ' / 7</p><p class="text-xs text-ink-muted mt-1">Days active</p></div>' +
        '<div class="card p-4"><p class="text-xs uppercase tracking-wide text-ink-muted mb-1">Last studied</p><p class="font-display text-base font-semibold leading-snug">' + lastLabel + '</p></div>';
      el.insertBefore(bar, el.firstChild);
    };
    this._refresh();
  };
})();
