(function(){
var _ = [
{
id: 'seo-regular', slug: 'seo', category: 'marketing', level: 'beginner', durationHours: 50, path: 'marketing',
title: { en: 'SEO Specialist Path', ur: 'SEO Specialist Path' },
short: { en: 'Search fundamentals with Google Search Central + free tools.', ur: 'Google Search Central + free tools se SEO.' },
description: { en: 'Replace paid SEO courses with official Google guidance, Lighthouse, Search Console.', ur: 'Paid SEO course ki jagah official Google + free tools.' },
outcomes: { en: ['Keyword research', 'On-page SEO', 'Technical basics', 'Search Console use'], ur: ['Keywords', 'On-page', 'Technical', 'Search Console'] },
modules: [
{ id: 'seo-m1', title: { en: 'Search foundations', ur: 'Search foundations' }, lessons: [
{ id: 'seo-m1-l1', title: { en: 'How search works', ur: 'Search kaise kaam karta hai' },
objectives: { en: ['Crawl, index, rank', 'People-first content'], ur: ['Crawl index rank', 'People-first'] },
prereq: { en: 'None.', ur: 'Kuch nahi.' },
concept: { en: 'Google crawls links, indexes pages, ranks by relevance and experience. Helpful content wins long term.', ur: 'Crawl → index → rank. Helpful content long-term.' },
example: { en: 'A thin doorway page may rank briefly then drop; a thorough guide stays.', ur: 'Thin page drop; thorough guide rehti hai.' },
exercise: { en: 'Read Google How Search Works overview; note 5 takeaways.', ur: 'How Search Works padho; 5 points.' },
quiz: [{ q: { en: 'Indexing means…', ur: 'Indexing…' }, options: [{ en: 'Storing page in search database', ur: 'Search DB mein store' }, { en: 'Deleting the site', ur: 'Site delete' }], answer: 0, explain: { en: 'Indexed pages can rank.', ur: 'Indexed pages rank kar sakti hain.' } }],
video: { title: 'How Google Search works', url: 'https://www.youtube.com/watch?v=BNHR6IQJGZs', duration: '15m' },
resources: [{ title: 'Google Search Central', url: 'https://developers.google.com/search', type: 'docs' }, { title: 'How Search Works', url: 'https://www.google.com/search/howsearchworks/', type: 'docs' }],
recap: { en: 'Crawl, index, rank — help people first.', ur: 'Crawl index rank — pehle log.' } },
{ id: 'seo-m1-l2', title: { en: 'Keyword research free', ur: 'Free keyword research' },
objectives: { en: ['Seed keywords', 'Long-tail ideas'], ur: ['Seed', 'Long-tail'] },
prereq: { en: 'Search foundations.', ur: 'Foundations.' },
concept: { en: 'Start from audience questions. Free: Google autocomplete, People Also Ask, Related searches, free Keyword Planner tier.', ur: 'Audience questions. Autocomplete, PAA, free tools.' },
example: { en: 'Seed: learn HTML → long-tail: HTML forms validation example.', ur: 'learn HTML → forms validation example.' },
exercise: { en: 'Build a 20-keyword list with intent labels.', ur: '20 keywords + intent labels.' },
quiz: [{ q: { en: 'Long-tail keywords are usually…', ur: 'Long-tail…' }, options: [{ en: 'More specific, often easier to rank', ur: 'Specific, rank asaan' }, { en: 'Always impossible', ur: 'Impossible' }], answer: 0, explain: { en: 'Specific queries convert well for beginners.', ur: 'Specific queries beginners ke liye ache.' } }],
video: { title: 'Keyword research tutorial', url: 'https://www.youtube.com/watch?v=OMJGuo7l9P4', duration: '30m' },
resources: [{ title: 'Google Keyword Planner', url: 'https://ads.google.com/home/lib/us/keyword-planner/', type: 'tool' }],
recap: { en: 'Audience questions → keyword list → intent.', ur: 'Questions → list → intent.' } }
]},
{ id: 'seo-m2', title: { en: 'On-page & technical', ur: 'On-page & technical' }, lessons: [
{ id: 'seo-m2-l1', title: { en: 'On-page checklist', ur: 'On-page checklist' },
objectives: { en: ['Title, meta, headings', 'Internal links'], ur: ['Title meta H', 'Internal links'] },
prereq: { en: 'Keywords.', ur: 'Keywords.' },
concept: { en: 'Unique title ~50–60 chars, meta description, one H1, logical H2s, descriptive URLs, internal links to related lessons.', ur: 'Title, meta, H1/H2, URL, internal links.' },
example: { en: 'Title: Free HTML Forms Tutorial for Beginners | Hunar', ur: 'Clear title with brand.' },
exercise: { en: 'Rewrite title+H1+meta for one lesson page.', ur: 'Ek lesson ka title+H1+meta rewrite.' },
quiz: [{ q: { en: 'Multiple H1s on one page…', ur: 'Kai H1…' }, options: [{ en: 'Usually confuse structure', ur: 'Structure confuse' }, { en: 'Always required', ur: 'Hamesha zaroori' }], answer: 0, explain: { en: 'Prefer a single clear H1.', ur: 'Ek clear H1 behtar.' } }],
video: { title: 'On-page SEO tutorial', url: 'https://www.youtube.com/watch?v=dv2mIWyBFF0', duration: '25m' },
resources: [{ title: 'SEO starter guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', type: 'docs' }],
recap: { en: 'Clear titles, structure, internal links.', ur: 'Titles, structure, internal links.' } },
{ id: 'seo-m2-l2', title: { en: 'Search Console & Lighthouse', ur: 'Search Console & Lighthouse' },
objectives: { en: ['Verify site', 'Read coverage & CWV'], ur: ['Verify', 'Coverage + CWV'] },
prereq: { en: 'A live page (GitHub Pages ok).', ur: 'Live page (GitHub Pages ok).' },
concept: { en: 'Search Console shows indexing and queries. Lighthouse checks performance, accessibility, SEO audits.', ur: 'GSC indexing/queries. Lighthouse audits.' },
example: { en: 'Fix missing meta description flagged by Lighthouse.', ur: 'Lighthouse meta warning fix.' },
exercise: { en: 'Run Lighthouse on your page; fix 3 issues.', ur: 'Lighthouse chalao; 3 issues fix.' },
quiz: [{ q: { en: 'Search Console is for…', ur: 'Search Console…' }, options: [{ en: 'Monitoring search performance', ur: 'Search performance monitor' }, { en: 'Editing photos', ur: 'Photos edit' }], answer: 0, explain: { en: 'Official Google search diagnostics.', ur: 'Google search diagnostics.' } }],
video: { title: 'Google Search Console tutorial', url: 'https://www.youtube.com/watch?v=XLi8x45Yd38', duration: '40m' },
resources: [{ title: 'Search Console', url: 'https://search.google.com/search-console', type: 'tool' }, { title: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse', type: 'docs' }],
recap: { en: 'Measure with GSC + Lighthouse; fix real issues.', ur: 'GSC + Lighthouse se measure aur fix.' } },
{ id: 'seo-m2-l3', title: { en: 'Capstone: SEO audit', ur: 'Capstone: SEO audit' },
objectives: { en: ['Full page audit', 'Fix list'], ur: ['Audit', 'Fix list'] },
prereq: { en: 'All SEO lessons.', ur: 'Saari SEO lessons.' },
concept: { en: 'Audit: intent match, title/meta, headings, content depth, links, speed, mobile. Prioritize top 5 fixes.', ur: 'Audit checklist. Top 5 fixes prioritize.' },
example: { en: 'Priority: unique title, H1, 800+ word guide, 3 internal links, image alt.', ur: 'Title, H1, depth, links, alt.' },
exercise: { en: 'Write audit PDF/markdown for one URL; implement 5 fixes.', ur: 'Ek URL audit + 5 fixes.' },
quiz: [{ q: { en: 'Best first SEO investment…', ur: 'Pehla SEO investment…' }, options: [{ en: 'Helpful content + clear on-page', ur: 'Helpful content + on-page' }, { en: 'Buy links randomly', ur: 'Random links khareedo' }], answer: 0, explain: { en: 'Foundations before advanced tactics.', ur: 'Pehle foundations.' } }],
video: { title: 'Website SEO audit', url: 'https://www.youtube.com/watch?v=R8tQ5b0s2pI', duration: '35m' },
resources: [{ title: 'Search Central docs', url: 'https://developers.google.com/search/docs', type: 'docs' }],
recap: { en: 'Audit, prioritize, fix, re-measure.', ur: 'Audit, prioritize, fix, measure.' } }
]}
]
}
];
for (var i=0;i<_.length;i++) HUNAR_COURSES.push(_[i]);
})();
