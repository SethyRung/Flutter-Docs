# Flutter-Docs

> ✨ A beautifully crafted documentation website for Flutter.

**Flutter-Docs** is an open-source project designed to deliver a modern, elegant, and developer-friendly documentation experience for Flutter. While Flutter powers the content, the site itself is built using **Nuxt 3** and **Nuxt Content**, offering fast performance, file-based routing, Markdown support, and a smooth editing workflow.

---

## 📌 Purpose

This project was created with the goal of:

- Designing a **new beautiful documentation website** for Flutter
- Delivering a clean and modern UI for easier Flutter exploration

---

## 🧱 Tech Stack

- [Nuxt 3](https://nuxt.com/) – Intuitive Vue 3 framework
- [Nuxt Content](https://content.nuxt.com/) – File-based Markdown content system
- [Nuxt UI](https://ui.nuxt.com/) - The Intuitive Vue UI Library
- [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework packed

---

## 🧩 Project Structure

```
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app
├── app.config.ts
├── app.vue
├── assets
│ └── css
│ │ └── main.css
├── layouts
│ └── default.vue
└── pages
│ ├── docs
│ └── [slug].vue
│ └── index.vue
├── content.config.ts
├── eslint.config.mjs
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── public
├── favicon.ico
└── robots.txt
├── server
└── tsconfig.json
├── shared
└── utils
│ └── date-helper.ts
└── tsconfig.json
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
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

---

## 🧪 Build & Deploy

To generate a static version of the site:

```bash
npm run generate
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

If you're submitting Flutter documentation content, use the Markdown format inside the `content/flutter/` directory.

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
