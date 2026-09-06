/* Hunar i18n — English + Roman Urdu */
const HunarI18n = {
  lang: localStorage.getItem('hunar-lang') || 'en',

  strings: {
    en: {
      'nav.courses': 'Courses',
      'nav.paths': 'Learning Paths',
      'nav.dashboard': 'Dashboard',
      'nav.about': 'About',
      'hero.badge': '100% Free · Legal Resources Only',
      'hero.title': 'Master skills that get you hired — without paying for a course.',
      'hero.sub': 'Hunar replaces paid bootcamps with structured free curricula: official docs, university materials, freeCodeCamp, YouTube educators, and real projects. English + Roman Urdu.',
      'hero.cta1': 'Browse Courses',
      'hero.cta2': 'View Learning Paths',
      'hero.stat1': '14 learning tracks',
      'hero.stat2': '200+ free lessons',
      'hero.stat3': 'Projects & quizzes',
      'paths.title': 'Learning Paths',
      'paths.sub': 'Pick a track. Follow the roadmap. Build a portfolio.',
      'paths.seeAll': 'See all paths →',
      'courses.title': 'Featured Courses',
      'courses.sub': 'Mapped from Skill Up programs — rebuilt with free, legal resources.',
      'courses.seeAll': 'All courses →',
      'how.title': 'How Hunar works',
      'how.s1t': 'Choose a path',
      'how.s1d': 'Web, Design, Marketing, Games, SEO — structured from beginner to job-ready.',
      'how.s2t': 'Learn for free',
      'how.s2d': 'Official docs, freeCodeCamp, MDN, free YouTube series, open university material.',
      'how.s3t': 'Practice & build',
      'how.s3d': 'Exercises, quizzes, milestone projects, and a final capstone for your portfolio.',
      'how.s4t': 'Track progress',
      'how.s4d': 'Local dashboard saves your progress. No account required. Certificates on completion.',
      'promise.title': 'No paid courses. No piracy. Only free & legal.',
      'promise.body': 'Every resource is official documentation, Creative Commons material, free university content, or educator-shared free videos. You can finish every track without spending a rupee on course fees.',
      'promise.cta': 'Start your first course',
      'footer.tag': 'Free learning academy. Skills without the fee.',
      'footer.learn': 'Learn',
      'footer.about': 'About',
      'footer.copy': '© 2026 Hunar Free Academy. Built to replace paid courses with legal free learning.',
      'courses.pageTitle': 'All Courses',
      'courses.pageSub': 'Every Skill Up program mapped to free resources. Choose Regular (foundations) or Bootcamp (job-ready) depth.',
      'courses.filterAll': 'All',
      'courses.filterWeb': 'Web',
      'courses.filterDesign': 'Design',
      'courses.filterMarketing': 'Marketing',
      'courses.filterGames': 'Games & 3D',
      'courses.filterOther': 'Other',
      'dashboard.title': 'Your Dashboard',
      'dashboard.sub': 'Progress is saved in this browser. No login needed.',
      'dashboard.empty': 'You have not started any course yet.',
      'dashboard.start': 'Browse courses',
      'dashboard.continue': 'Continue',
      'dashboard.completed': 'Completed',
      'dashboard.lessons': 'lessons done',
      'paths.pageTitle': 'Learning Paths',
      'paths.pageSub': 'Ordered roadmaps from zero to portfolio-ready. Follow in sequence for best results.',
      'about.title': 'About Hunar',
      'lesson.objectives': 'Learning objectives',
      'lesson.prereq': 'Prerequisites',
      'lesson.concept': 'Core concepts',
      'lesson.example': 'Worked example',
      'lesson.exercise': 'Practice exercise',
      'lesson.quiz': 'Quick quiz',
      'lesson.resources': 'Free resources',
      'lesson.video': 'Recommended video',
      'lesson.recap': 'Recap',
      'lesson.next': 'Next lesson',
      'lesson.prev': 'Previous',
      'lesson.markDone': 'Mark as complete',
      'lesson.done': 'Completed',
      'lesson.project': 'Project',
      'common.beginner': 'Beginner',
      'common.intermediate': 'Intermediate',
      'common.advanced': 'Advanced',
      'common.hours': 'hours',
      'common.modules': 'modules',
      'common.lessons': 'lessons',
      'common.free': '100% Free',
      'common.start': 'Start course',
      'common.continue': 'Continue',
      'common.view': 'View curriculum'
    },
    ur: {
      'nav.courses': 'Courses',
      'nav.paths': 'Learning Paths',
      'nav.dashboard': 'Dashboard',
      'nav.about': 'About',
      'hero.badge': '100% Free · Sirf Legal Resources',
      'hero.title': 'Woh skills seekho jo job dilwati hain — bina course fee ke.',
      'hero.sub': 'Hunar paid bootcamps ki jagah structured free curricula deta hai: official docs, university material, freeCodeCamp, YouTube educators, aur real projects. English + Roman Urdu.',
      'hero.cta1': 'Courses dekho',
      'hero.cta2': 'Learning Paths dekho',
      'hero.stat1': '14 learning tracks',
      'hero.stat2': '200+ free lessons',
      'hero.stat3': 'Projects & quizzes',
      'paths.title': 'Learning Paths',
      'paths.sub': 'Track choose karo. Roadmap follow karo. Portfolio banao.',
      'paths.seeAll': 'Saari paths dekho →',
      'courses.title': 'Featured Courses',
      'courses.sub': 'Skill Up programs se map kiye gaye — free, legal resources ke sath.',
      'courses.seeAll': 'Saare courses →',
      'how.title': 'Hunar kaise kaam karta hai',
      'how.s1t': 'Path choose karo',
      'how.s1d': 'Web, Design, Marketing, Games, SEO — beginner se job-ready tak.',
      'how.s2t': 'Free mein seekho',
      'how.s2d': 'Official docs, freeCodeCamp, MDN, free YouTube series, open university material.',
      'how.s3t': 'Practice aur build karo',
      'how.s3d': 'Exercises, quizzes, milestone projects, aur final capstone portfolio ke liye.',
      'how.s4t': 'Progress track karo',
      'how.s4d': 'Local dashboard progress save karta hai. Account zaroori nahi. Completion pe certificate.',
      'promise.title': 'Koi paid course nahi. Koi piracy nahi. Sirf free & legal.',
      'promise.body': 'Har resource official documentation, Creative Commons, free university content, ya educator-shared free videos hai. Har track bina course fee ke complete kar sakte ho.',
      'promise.cta': 'Apna pehla course shuru karo',
      'footer.tag': 'Free learning academy. Skills without the fee.',
      'footer.learn': 'Seekho',
      'footer.about': 'About',
      'footer.copy': '© 2026 Hunar Free Academy. Paid courses ko legal free learning se replace karne ke liye banaya gaya.',
      'courses.pageTitle': 'Saare Courses',
      'courses.pageSub': 'Har Skill Up program free resources se map. Regular (foundations) ya Bootcamp (job-ready) depth choose karo.',
      'courses.filterAll': 'Sab',
      'courses.filterWeb': 'Web',
      'courses.filterDesign': 'Design',
      'courses.filterMarketing': 'Marketing',
      'courses.filterGames': 'Games & 3D',
      'courses.filterOther': 'Other',
      'dashboard.title': 'Aapka Dashboard',
      'dashboard.sub': 'Progress is browser mein save hoti hai. Login zaroori nahi.',
      'dashboard.empty': 'Abhi koi course start nahi kiya.',
      'dashboard.start': 'Courses dekho',
      'dashboard.continue': 'Continue',
      'dashboard.completed': 'Complete',
      'dashboard.lessons': 'lessons complete',
      'paths.pageTitle': 'Learning Paths',
      'paths.pageSub': 'Zero se portfolio-ready tak ordered roadmaps. Best results ke liye sequence follow karo.',
      'about.title': 'Hunar ke baare mein',
      'lesson.objectives': 'Learning objectives',
      'lesson.prereq': 'Prerequisites',
      'lesson.concept': 'Core concepts',
      'lesson.example': 'Worked example',
      'lesson.exercise': 'Practice exercise',
      'lesson.quiz': 'Quick quiz',
      'lesson.resources': 'Free resources',
      'lesson.video': 'Recommended video',
      'lesson.recap': 'Recap',
      'lesson.next': 'Agli lesson',
      'lesson.prev': 'Pichli',
      'lesson.markDone': 'Complete mark karo',
      'lesson.done': 'Complete ho gaya',
      'lesson.project': 'Project',
      'common.beginner': 'Beginner',
      'common.intermediate': 'Intermediate',
      'common.advanced': 'Advanced',
      'common.hours': 'hours',
      'common.modules': 'modules',
      'common.lessons': 'lessons',
      'common.free': '100% Free',
      'common.start': 'Course shuru karo',
      'common.continue': 'Continue',
      'common.view': 'Curriculum dekho'
    }
  },

  t(key) {
    return (this.strings[this.lang] && this.strings[this.lang][key]) || this.strings.en[key] || key;
  },

  setLang(lang) {
    this.lang = lang === 'ur' ? 'ur' : 'en';
    localStorage.setItem('hunar-lang', this.lang);
    this.apply();
  },

  toggle() {
    this.setLang(this.lang === 'en' ? 'ur' : 'en');
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) el.textContent = val;
    });
    const label = document.querySelector('[data-lang-label]');
    if (label) label.textContent = this.lang === 'en' ? 'EN' : 'UR';
    document.documentElement.lang = this.lang === 'ur' ? 'ur' : 'en';
  },

  bi(en, ur) {
    return this.lang === 'ur' ? (ur || en) : en;
  }
};

function bi(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return HunarI18n.lang === 'ur' ? (obj.ur || obj.en || '') : (obj.en || '');
}
