# 🌍 Fork the Law

> A civic platform for collaboratively reimagining constitutions. Inspired by the idea that people should be free to draft and share their vision for a better future.

## 🧠 What is Fork the Law?

ForkTheLaw is a web platform that lets people explore, edit, and share new versions of their constitution. Think of it as a collaborative code editor, but for laws and social contracts.

* 📜 Start from an existing constitution
* ✍️ Fork and edit it like a developer edits code
* 🔗 Share your version on social media
* 🌐 Discover versions created by others

This project is not affiliated with any government or political entity. It's a **tool for civic imagination**.

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+

### 1. Clone the Repo

```bash
git clone https://github.com/rekino/fork-the-law.git
cd fork-the-law
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🛠️ Tech Stack

* **React** (with Vite)
* **Tailwind CSS** for styling
* **shadcn/ui** for accessible UI components
* **TypeScript**

Optional integrations:

* [ ] i18n (Farsi & English)
* [ ] Markdown-based constitution editing
* [ ] Auth for publishing forks
* [ ] Git-like diff engine

## 📁 Folder Structure

```
public/                # public files
src/
├── assets/
├── components/        # UI elements (shadcn/ui-based)
├── pages/             # Routes like homepage, editor, explore
├── lib/               # Utility functions (e.g., cn.ts)
├── assets/            # pictures and other assets
└── main.tsx           # Entry point
```

---

## ❤️ Contributing

Pull requests welcome! Fork the repo and suggest a better structure, fix bugs, or improve the UI.

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit and push
4. Open a PR 🚀

---

## 📜 License

MIT License — see [`LICENSE`](./LICENSE)

---

## 🙏 Acknowledgements

* Tailwind CSS
* shadcn/ui
* Everyone who believes in the power of collaborative imagination
