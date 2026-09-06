# Hunar

**Structured free learning for career skills.**

Hunar is a static learning platform that organizes professional curricula around legal, publicly available resources — official documentation, free tools, and educator-published content. It is designed for learners and organizations that need clear roadmaps without paid course subscriptions.

**Repository:** [github.com/WristMohsin/hunar-academy](https://github.com/WristMohsin/hunar-academy)  
**Live site (after Pages is enabled):** [wristmohsin.github.io/hunar-academy](https://wristmohsin.github.io/hunar-academy/)

---

## Features

- **Curriculum-first structure** — modules, lessons, exercises, quizzes, resource links, and capstones
- **Bilingual interface** — professional English and Roman Urdu
- **Progress tracking** — browser `localStorage` (no account or backend)
- **Light / dark theme** — system-friendly presentation
- **Responsive UI** — designed for desktop and mobile review
- **Zero build step** — pure HTML, CSS, and JavaScript

---

## Course catalog

| Track | Primary free resources |
|-------|------------------------|
| Web Development Foundations | MDN, freeCodeCamp, React docs, GitHub Pages |
| UI/UX Design | Figma, NN/g, Laws of UX |
| Graphics Design | Photopea, Inkscape, Google Fonts |
| Digital Marketing | Google Digital Garage, HubSpot Academy |
| SEO | Google Search Central, Search Console, Lighthouse |
| Content Writing | PlainLanguage.gov, Google helpful content guidance |
| App Store Optimization | Play Console & App Store Connect help |
| Unity 3D | Unity Learn, Unity Manual |
| 3D Modeling | Blender.org and official manual |
| Video Editing | DaVinci Resolve Free, Blackmagic training |

### Learning paths

1. Full Web Developer  
2. Product Designer (Graphics → UI/UX)  
3. Growth & SEO Marketer  
4. Indie Game Creator (Blender → Unity)  
5. Creative Studio (Video + Graphics)

---

## Local development

```bash
git clone https://github.com/WristMohsin/hunar-academy.git
cd hunar-academy
npx serve .
# or: python3 -m http.server 8080
```

Open the printed local URL in a browser.

---

## Deployment (GitHub Pages)

1. Repository **Settings → Pages**
2. **Source:** GitHub Actions
3. Push to `main` (workflow: `.github/workflows/build.yml`)

---

## Resource policy

Hunar links only to resources that are free to access without circumventing paywalls. It does **not** host or distribute pirated or leaked paid courses.

Progress data is stored under the key `hunar-progress-v1` in the learner’s browser.

---

## License note

Site code in this repository is available for the project owner’s use. Third-party documentation, videos, and tools remain under their respective licenses and terms of use.
