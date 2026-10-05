# Tiago Graça · Portfolio

Welcome to my online portfolio and CV. A personal, responsive, bilingual (PT/EN) dark-themed site.

![Preview](img/preview.png)

🔗 **Live:** [tiagograca03.github.io/digital_tiago](https://tiagograca03.github.io/digital_tiago/)

## ✨ Features

- Responsive layout, from mobile up to 4K (proportional scaling above 1920x1080)
- Real-time PT/EN language switch, no page reload
- Professional experience timeline
- CV download as PDF (header button, plus a floating button on mobile)
- Anchor navigation with smooth scrolling

## 🛠️ Built with

A static site with no JavaScript framework: plain HTML, Tailwind CSS and a small amount of vanilla JavaScript for translations. I kept it light and easy to maintain.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Running locally

The compiled CSS is included, so you can just clone the repo and open `index.html` in your browser (or use the Live Server extension).

To change styles you need Node.js 20+:

```bash
git clone https://github.com/TiagoGraca03/digital_tiago.git
cd digital_tiago
npm install
npm run watch   # rebuilds Tailwind on save
```

To generate the final minified CSS: `npm run build`.

## 📁 Project structure

```
├── index.html
├── langs.js         # PT/EN translations
├── src/input.css    # Tailwind entry point
├── dist/output.css  # compiled CSS
├── img/             # favicon, profile picture and preview
└── pdf/             # CV
```

## 📬 Contact

[LinkedIn](https://linkedin.com/in/t-graca/) · [GitHub](https://github.com/TiagoGraca03) · tiago.graca.dev@gmail.com