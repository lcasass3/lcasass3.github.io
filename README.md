# Leon Casas Portfolio

![Tech Stack](https://img.shields.io/badge/Astro-TypeScript-blue)
![Style](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8)
![Components](https://img.shields.io/badge/Components-React-61dafb)

A modern, responsive portfolio website built with Astro, TypeScript, and TailwindCSS, showcasing my skills, experience, and projects as a Full Stack Developer.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works well on devices of all sizes
- **TypeScript Integration**: Type-safe development with TypeScript
- **Fast Performance**: Static site generation with Astro for excellent performance
- **Modern UI**: Clean and modern interface with smooth animations
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility
- **Interactive Components**: React components for dynamic elements
- **Accessibility**: Follows best practices for web accessibility

## 🚀 Project Structure

```
portfolio/
├── public/               # Static assets
│   ├── cv-en.pdf         # English resume
│   ├── cv-es.pdf         # Spanish resume
│   └── lion-head.svg     # Site icon
├── src/
│   ├── components/       # UI components
│   │   ├── icons/        # SVG icons as components
│   │   ├── navbar/       # Navigation components
│   │   └── ...           # Various section components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🧰 Tech Stack

- **[Astro](https://astro.build/)**: Core framework for building the site
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[React](https://reactjs.org/)**: For interactive components
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)**: Typography for code sections
- **[Typewriter Effect](https://github.com/tameemsafi/typewriterjs)**: For dynamic text animations

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup & Installation

```bash
# Clone the repository
git clone https://github.com/lcasass3/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the build locally                   |

## 🚢 Deployment

This site is configured for deployment on GitHub Pages. The build process creates static files that can be hosted anywhere.

```bash
# Build the site
npm run build

# Deploy to GitHub Pages (requires proper configuration)
# This can be automated with GitHub Actions
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Designed & Built by Leon Casas using [Astro](https://astro.build) 🚀
