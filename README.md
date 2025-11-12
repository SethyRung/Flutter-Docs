# Flutter-Docs

> ✨ A beautifully crafted documentation website for Flutter.

**Flutter-Docs** is an open-source project designed to deliver a modern, elegant, and developer-friendly documentation experience for Flutter. While Flutter powers the content, the site itself is built using **Nuxt 3** and **Nuxt Content**, offering fast performance, file-based routing, Markdown support, and a smooth editing workflow.

---

## 📌 Purpose

This project was created with the goal of:

- Designing a **new beautiful documentation website** for Flutter
- Delivering a clean and modern UI for easier Flutter exploration

---

## ✨ Key Features

- **Modern Documentation Experience**: Clean, responsive UI built with Nuxt UI and Tailwind CSS
- **File-based Routing**: Simple content management with Markdown files
- **Advanced Navigation**: Sophisticated navigation system with content categorization
- **Search Functionality**: Built-in search powered by better-sqlite3
- **Mobile-Friendly**: Responsive design that works on all devices
- **Fast Performance**: Static site generation with Nuxt 4
- **Developer Experience**: Hot reload, ESLint, Prettier, and TypeScript support

### Navigation System

The project features a sophisticated navigation architecture:

- **useNavigation.ts**: Provides header links, footer links, and search functionality
- **useGroupNavigation.ts**: Automatically categorizes content by `category` frontmatter
- **Auto-generated Navigation**: Navigation is built automatically from file structure
- **Content Grouping**: Related pages are grouped into logical sections (Get Started, User Interface, Beyond UI, Tools & Editors)

---

## 🧱 Tech Stack

- [Nuxt 4](https://nuxt.com/) – Intuitive Vue 3 framework (latest version)
- [Nuxt Content](https://content.nuxt.com/) – File-based Markdown content system
- [Nuxt UI](https://ui.nuxt.com/) - The Intuitive Vue UI Library
- [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) – State management
- [Iconify](https://iconify.design/) – Icon system with custom collections
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) – Database for search/content indexing
- [Zod](https://zod.dev/) – Data validation

---

## 🧩 Project Structure

```
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app/                          # Nuxt 3 app structure
│   ├── components/               # Vue components (AppHeader.vue, AppFooter.vue)
│   ├── composables/              # Shared composables for navigation logic
│   │   ├── useNavigation.ts      # Main navigation composable
│   │   └── useGroupNavigation.ts # Content grouping and categorization
│   ├── layouts/                  # Layout templates
│   │   ├── default.vue           # Main site layout
│   │   └── docs.vue              # Documentation layout with aside navigation
│   └── pages/                    # File-based routing
│       ├── docs/                 # Documentation pages
│       └── index.vue             # Homepage
├── assets/                       # Static assets and CSS
│   └── css/
│       └── main.css
├── content/                      # Markdown content
│   └── docs/                     # All documentation content
├── public/                       # Static files
│   ├── favicon.ico
│   └── robots.txt
├── server/                       # Server-side code
├── CLAUDE.md                     # Claude Code instructions
├── app.config.ts
├── app.vue
├── content.config.ts             # Content configuration
├── eslint.config.mjs
├── nuxt.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SethyRung/Flutter-Docs.git
cd Flutter-Docs
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Additional Development Commands

```bash
# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview

# Lint code
npx eslint .

# Format code
npx prettier --write .
```

---

## 🧪 Build & Deploy

To generate a static version of the site:

```bash
pnpm generate
```

Then you can deploy it via:

- Vercel
- Netlify
- Cloudflare Pages

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push to your fork and submit a PR

If you're submitting Flutter documentation content, use the Markdown format inside the `content/docs/` directory with appropriate frontmatter including `category` for content grouping.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Created by [**Sethy Rung**](https://github.com/SethyRung)
📫 Reach out via GitHub if you'd like to collaborate!

---

## 🧠 Inspiration

This project was inspired by the desire to make Flutter documentation:

- Easier to read
- Visually engaging
- Developer-first

---

## 🌟 Star the Repo

If you find this project helpful, please consider starring ⭐ it to show your support!
