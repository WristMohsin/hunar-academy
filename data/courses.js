/**
 * Hunar Free Academy — Course catalog
 * Scripts: courses.js + courses-1..N.js (in order)
 */
var HUNAR_COURSES = [];

const HUNAR_PATHS = [
  { id: 'path-web', title: { en: 'Full Web Developer', ur: 'Full Web Developer' }, description: { en: 'HTML to React and deploy — portfolio ready.', ur: 'HTML se React aur deploy.' }, courseIds: ['web-dev-regular'], color: 'teal' },
  { id: 'path-design', title: { en: 'Product Designer', ur: 'Product Designer' }, description: { en: 'Graphics → UI/UX → case study portfolio.', ur: 'Graphics → UI/UX → case study.' }, courseIds: ['graphics-design', 'uiux-bootcamp'], color: 'accent' },
  { id: 'path-marketing', title: { en: 'Growth & SEO Marketer', ur: 'Growth & SEO Marketer' }, description: { en: 'Marketing, SEO, content, ASO, lead gen.', ur: 'Marketing, SEO, content, ASO, lead gen.' }, courseIds: ['digital-marketing', 'seo-regular', 'content-writing', 'aso', 'lead-generation'], color: 'teal' },
  { id: 'path-games', title: { en: 'Indie Game Creator', ur: 'Indie Game Creator' }, description: { en: 'Blender props + Unity micro-game.', ur: 'Blender + Unity micro-game.' }, courseIds: ['3d-modeling', 'unity-3d'], color: 'accent' },
  { id: 'path-creative', title: { en: 'Creative Studio', ur: 'Creative Studio' }, description: { en: 'Video + graphics for content teams.', ur: 'Video + graphics.' }, courseIds: ['video-editing', 'graphics-design'], color: 'teal' },
  { id: 'path-mobile', title: { en: 'Mobile & CMS Builder', ur: 'Mobile & CMS Builder' }, description: { en: 'Flutter apps and WordPress client sites.', ur: 'Flutter apps + WordPress sites.' }, courseIds: ['flutter-dev', 'wordpress-dev'], color: 'accent' }
];

function getCourseById(id) { return HUNAR_COURSES.find(c => c.id === id); }
function getCourseBySlug(slug) { return HUNAR_COURSES.find(c => c.slug === slug); }
function countLessons(course) { return course.modules.reduce((n, m) => n + m.lessons.length, 0); }
function getAllLessonsFlat(course) {
  const list = [];
  course.modules.forEach(m => m.lessons.forEach(l => list.push(Object.assign({}, l, { moduleId: m.id, moduleTitle: m.title }))));
  return list;
}
