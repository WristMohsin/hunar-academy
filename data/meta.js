/** Course presentation metadata for catalog cards & paths */
var HUNAR_META = {
  'web-dev-regular': {
    icon: '💻',
    outcome: { en: 'Junior Web Developer — portfolio ready', ur: 'Junior Web Developer — portfolio ready' },
    weeks: '8–12',
    builds: { en: ['Personal website', 'Responsive landing page', 'JS interactive app', 'React UI', 'GitHub Pages deploy'], ur: ['Personal website', 'Landing page', 'JS app', 'React UI', 'GitHub Pages'] },
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React']
  },
  'uiux-bootcamp': {
    icon: '🎨',
    outcome: { en: 'UI/UX portfolio with case study', ur: 'UI/UX portfolio + case study' },
    weeks: '6–10',
    builds: { en: ['User journey map', 'Wireframes', 'Figma UI kit', 'Usability test report', 'Case study'], ur: ['Journey map', 'Wireframes', 'Figma UI', 'Usability report', 'Case study'] },
    skills: ['Research', 'Wireframing', 'Figma', 'Usability']
  },
  'digital-marketing': {
    icon: '📈',
    outcome: { en: 'Growth marketer with a 30-day plan', ur: 'Growth marketer — 30-day plan' },
    weeks: '5–8',
    builds: { en: ['ICP & funnel', 'Content plan', 'Email sequence', '30-day growth plan'], ur: ['ICP & funnel', 'Content plan', 'Email sequence', '30-day plan'] },
    skills: ['Strategy', 'Content', 'Social', 'Email', 'GA4']
  },
  'seo-regular': {
    icon: '🔍',
    outcome: { en: 'SEO specialist who can audit and fix pages', ur: 'SEO specialist — audit & fix' },
    weeks: '4–6',
    builds: { en: ['Keyword list', 'On-page optimized page', 'Search Console setup', 'Full SEO audit'], ur: ['Keywords', 'On-page page', 'Search Console', 'SEO audit'] },
    skills: ['Keywords', 'On-page', 'Technical SEO', 'Search Console']
  },
  'graphics-design': {
    icon: '🖌️',
    outcome: { en: 'Brand kit and social creative set', ur: 'Brand kit + social creatives' },
    weeks: '4–6',
    builds: { en: ['Clean poster redesign', 'Logo/wordmark', '3 social templates'], ur: ['Poster redesign', 'Logo', '3 social templates'] },
    skills: ['Hierarchy', 'Typography', 'Photopea', 'Inkscape']
  },
  'unity-3d': {
    icon: '🎮',
    outcome: { en: 'Indie game creator with a playable micro-game', ur: 'Playable micro-game ship' },
    weeks: '8–12',
    builds: { en: ['Scene with player', 'Collect/win mechanic', 'Playable build'], ur: ['Player scene', 'Collect mechanic', 'Playable build'] },
    skills: ['Unity Editor', 'C# basics', 'Prefabs', 'Build']
  },
  'video-editing': {
    icon: '🎬',
    outcome: { en: 'Editor who can ship social-ready promos', ur: 'Social-ready promo editor' },
    weeks: '3–5',
    builds: { en: ['60s educational cut', 'Captioned promo export'], ur: ['60s cut', 'Captioned promo'] },
    skills: ['DaVinci Resolve', 'Audio', 'Captions', 'Export']
  },
  'content-writing': {
    icon: '✍️',
    outcome: { en: 'Clear writer with published guides', ur: 'Published clear guides' },
    weeks: '3–5',
    builds: { en: ['Lesson intro draft', 'Published guide'], ur: ['Lesson intro', 'Published guide'] },
    skills: ['Outlining', 'Plain language', 'Editing']
  },
  'aso': {
    icon: '📱',
    outcome: { en: 'ASO-ready store listing pack', ur: 'Store listing pack' },
    weeks: '2–4',
    builds: { en: ['Keyword set', 'Listing copy', 'Screenshot plan'], ur: ['Keywords', 'Listing', 'Screenshots'] },
    skills: ['Keywords', 'Listings', 'Creatives']
  },
  '3d-modeling': {
    icon: '🧊',
    outcome: { en: 'Game-ready prop modeler', ur: 'Game-ready prop modeler' },
    weeks: '5–8',
    builds: { en: ['Simple mesh prop', 'Exported FBX/OBJ asset'], ur: ['Mesh prop', 'Exported asset'] },
    skills: ['Blender', 'Mesh modeling', 'Export']
  }
};

var HUNAR_PATH_STEPS = {
  'path-web': {
    outcome: { en: 'Become a Junior Web Developer', ur: 'Junior Web Developer bano' },
    steps: ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Projects', 'Portfolio']
  },
  'path-design': {
    outcome: { en: 'Become a Product Designer', ur: 'Product Designer bano' },
    steps: ['Design principles', 'Graphics kit', 'UX research', 'Wireframes', 'Figma UI', 'Case study']
  },
  'path-marketing': {
    outcome: { en: 'Become a Growth & SEO Marketer', ur: 'Growth & SEO Marketer bano' },
    steps: ['Strategy', 'Content', 'SEO', 'Social & email', 'Analytics', 'Growth plan']
  },
  'path-games': {
    outcome: { en: 'Become an Indie Game Creator', ur: 'Indie Game Creator bano' },
    steps: ['Blender basics', 'Game prop', 'Unity editor', 'C# gameplay', 'Micro-game']
  },
  'path-creative': {
    outcome: { en: 'Become a Creative Studio generalist', ur: 'Creative Studio generalist bano' },
    steps: ['Editing basics', 'Promo video', 'Graphics', 'Brand kit']
  }
};

function getMeta(courseId) {
  return HUNAR_META[courseId] || {
    icon: '📘',
    outcome: { en: 'Career-ready skills', ur: 'Career-ready skills' },
    weeks: '4–8',
    builds: { en: [], ur: [] },
    skills: []
  };
}
