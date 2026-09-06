(function(){
var _ = [
{
id: 'digital-marketing', slug: 'digital-marketing', category: 'marketing', level: 'beginner', durationHours: 70, path: 'marketing',
title: { en: 'Digital Marketing Foundations', ur: 'Digital Marketing Foundations' },
short: { en: 'Strategy, SEO, content, social, email, GA4 — free tools.', ur: 'Strategy, SEO, content, social, email, GA4 — free tools.' },
description: { en: 'Skill Up Digital Marketing via Google Digital Garage, HubSpot Academy, Meta Blueprint.', ur: 'Google Digital Garage, HubSpot, Meta Blueprint se free path.' },
outcomes: { en: ['Marketing plan', 'Basic SEO/content', 'Free social+email', 'GA4 reports'], ur: ['Plan', 'SEO/content', 'Social+email', 'GA4'] },
modules: [
{ id: 'dm-m1', title: { en: 'Strategy & channels', ur: 'Strategy & channels' }, lessons: [
{ id: 'dm-m1-l1', title: { en: 'Funnel & ICP', ur: 'Funnel & ICP' },
objectives: { en: ['Ideal customer profile', 'Awareness→conversion'], ur: ['ICP', 'Funnel stages'] },
prereq: { en: 'None.', ur: 'Kuch nahi.' },
concept: { en: 'ICP who you serve. Funnel: awareness, consideration, conversion, retention. Start 1–2 channels.', ur: 'ICP. Funnel stages. 1–2 channels se shuru.' },
example: { en: 'Hunar ICP: students 18–28 who cannot afford paid bootcamps.', ur: 'Hunar ICP: students jo paid bootcamps afford nahi kar sakte.' },
exercise: { en: 'Write ICP + funnel for a local skill niche.', ur: 'Local skill ke liye ICP + funnel.' },
quiz: [{ q: { en: '8 channels at once usually…', ur: '8 channels ek sath…' }, options: [{ en: 'Dilutes results', ur: 'Results dilute' }, { en: 'Always wins', ur: 'Hamesha jeet' }], answer: 0, explain: { en: 'Focus beats fragmentation.', ur: 'Focus behtar.' } }],
video: { title: 'Google Digital Marketing overview', url: 'https://www.youtube.com/watch?v=qFYG3GrM4pI', duration: '30m' },
resources: [{ title: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com/digitalgarage', type: 'course' }, { title: 'HubSpot Academy', url: 'https://academy.hubspot.com/', type: 'course' }],
recap: { en: 'Clear ICP + simple funnel + few channels.', ur: 'Clear ICP + simple funnel + kam channels.' } },
{ id: 'dm-m1-l2', title: { en: 'Content & SEO essentials', ur: 'Content & SEO essentials' },
objectives: { en: ['Keyword intent', 'On-page checklist'], ur: ['Intent', 'On-page'] },
prereq: { en: 'Funnel lesson.', ur: 'Funnel lesson.' },
concept: { en: 'Search intent: info, nav, transactional. On-page: title, H1, URL, internal links, helpful content.', ur: 'Intent types. On-page basics + helpful content.' },
example: { en: 'Query free web development course → intent learn; page must teach not only sell.', ur: 'free web course → learn intent.' },
exercise: { en: 'Pick 5 keywords; label intent; draft one title tag.', ur: '5 keywords + intent + title tag.' },
quiz: [{ q: { en: 'Helpful content primarily serves…', ur: 'Helpful content…' }, options: [{ en: 'The reader first', ur: 'Pehle reader' }, { en: 'Only rank bots', ur: 'Sirf bots' }], answer: 0, explain: { en: 'Google rewards people-first content.', ur: 'People-first rank karta hai.' } }],
video: { title: 'SEO for beginners', url: 'https://www.youtube.com/watch?v=xsVTqzratPs', duration: '1h' },
resources: [{ title: 'Google Search Central', url: 'https://developers.google.com/search', type: 'docs' }],
recap: { en: 'Intent + on-page + helpful pages.', ur: 'Intent + on-page + helpful.' } }
]},
{ id: 'dm-m2', title: { en: 'Social, email & analytics', ur: 'Social, email & analytics' }, lessons: [
{ id: 'dm-m2-l1', title: { en: 'Organic social basics', ur: 'Organic social basics' },
objectives: { en: ['Pick one platform', 'Content pillars'], ur: ['1 platform', 'Pillars'] },
prereq: { en: 'ICP.', ur: 'ICP.' },
concept: { en: 'One platform deep beats five shallow. Pillars: teach, show, story. Consistency > virality.', ur: 'Ek platform deep. Pillars. Consistency.' },
example: { en: 'LinkedIn: weekly lesson summary posts for Hunar.', ur: 'LinkedIn weekly lesson posts.' },
exercise: { en: 'Choose platform + 3 pillars + 2 weeks of post ideas.', ur: 'Platform + 3 pillars + 2 weeks ideas.' },
quiz: [{ q: { en: 'Best early social strategy…', ur: 'Early social…' }, options: [{ en: 'Consistent value on one channel', ur: 'Ek channel pe consistent value' }, { en: 'Buy fake followers', ur: 'Fake followers' }], answer: 0, explain: { en: 'Trust compounds with real audience.', ur: 'Real audience se trust.' } }],
video: { title: 'Meta Blueprint intro', url: 'https://www.facebook.com/business/learn', duration: 'self-paced' },
resources: [{ title: 'Meta Blueprint', url: 'https://www.facebook.com/business/learn', type: 'course' }],
recap: { en: 'One channel, clear pillars, ship weekly.', ur: 'Ek channel, pillars, weekly ship.' } },
{ id: 'dm-m2-l2', title: { en: 'Email with free tools', ur: 'Email with free tools' },
objectives: { en: ['ESP setup', 'Welcome sequence'], ur: ['ESP', 'Welcome sequence'] },
prereq: { en: 'ICP.', ur: 'ICP.' },
concept: { en: 'Brevo/MailerLite free tiers. Welcome → best resource → soft ask. Always unsubscribe.', ur: 'Free ESP. Welcome sequence. Unsubscribe zaroori.' },
example: { en: 'Subject: Your free web path is ready — 3 lesson links.', ur: 'Subject + 3 lesson links.' },
exercise: { en: 'Draft 3-email welcome under 150 words each.', ur: '3-email welcome, har <150 words.' },
quiz: [{ q: { en: 'Unsubscribe required for…', ur: 'Unsubscribe…' }, options: [{ en: 'Legal compliance & trust', ur: 'Legal + trust' }, { en: 'Fun only', ur: 'Sirf fun' }], answer: 0, explain: { en: 'Most laws require easy opt-out.', ur: 'Qanoon opt-out chahta hai.' } }],
video: { title: 'Email marketing beginners', url: 'https://www.youtube.com/watch?v=OuZQzZb-KvY', duration: '40m' },
resources: [{ title: 'Brevo free', url: 'https://www.brevo.com/', type: 'tool' }, { title: 'MailerLite free', url: 'https://www.mailerlite.com/', type: 'tool' }],
recap: { en: 'Permission email compounds. Protect trust.', ur: 'Permission email compound. Trust protect.' } },
{ id: 'dm-m2-l3', title: { en: 'Capstone: 30-day growth plan', ur: 'Capstone: 30-day growth plan' },
objectives: { en: ['One-page plan + KPIs', 'Execute week 1'], ur: ['Plan + KPIs', 'Week 1 execute'] },
prereq: { en: 'All marketing modules.', ur: 'Saari modules.' },
concept: { en: 'ICP, offer, max 2 channels, 4-week outline, 3 KPIs, free tools. Ship week 1.', ur: 'ICP, offer, 2 channels, outline, KPIs. Week 1 ship.' },
example: { en: 'KPIs: 50 emails, 100 lesson starts, one long-tail top 20.', ur: '50 emails, 100 starts, top 20 keyword.' },
exercise: { en: 'Publish plan; complete week-1 actions.', ur: 'Plan publish; week-1 complete.' },
quiz: [{ q: { en: 'Good beginner KPI is…', ur: 'Ache KPI…' }, options: [{ en: 'Specific & measurable in 30 days', ur: '30 din measurable' }, { en: 'Become famous', ur: 'Famous ho jao' }], answer: 0, explain: { en: 'Must be checkable.', ur: 'Checkable hona chahiye.' } }],
video: { title: 'Growth planning', url: 'https://www.youtube.com/watch?v=6V7s8dY2y3I', duration: '25m' },
resources: [{ title: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com/digitalgarage', type: 'course' }],
recap: { en: 'Plans without execution are fiction.', ur: 'Bina execution fiction.' } }
]}
]
}
];
for (var i=0;i<_.length;i++) HUNAR_COURSES.push(_[i]);
})();
