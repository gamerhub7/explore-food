<div align ="center">
  <br />
    <a href="https://explore-taste.vercel.app/
" target="_blank">
      <img src="public/scr/img/food.png" alt="Project Banner" />"
    </a>
  <br />

  </div>

🌐 Explore Food
Discover food, categories & cuisines with a clean, modern UI built on Next.js 13+
<p align="center"> <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" /> <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/TailwindCSS-3.0-0ea5e9?style=for-the-badge&logo=tailwindcss" /> <img src="https://img.shields.io/badge/TypeScript-4.0-blue?style=for-the-badge&logo=typescript" /> <img src="https://img.shields.io/badge/ShadCN-UI-black?style=for-the-badge" /> </p> <p align="center"> <strong>A beautifully designed food discovery web app.</strong><br/> Browse categories → subcategories → final food items with a smooth, responsive experience. </p>
✨ Demo Preview

(Add screenshots here later — I can design them for you if you want)

🍽️ Features at a Glance
🔍 Category → Subcategory → Final Type Navigation

A fully dynamic and multi-level browsing flow:

/subcategories/[id]

/subcategories/subcategorytype/[subcategoryId]

/subcategories/subcategorytype/finaltype/[finalId]

🎨 Modern UI with Tailwind + ShadCN

Clean, minimal, and professional interface

Reusable UI components:

Buttons

Cards

Dialogs

Dropdowns

Toasts

Tooltip

Themes

Sheets

Hover Cards

🌙 Dark & Light Theme Support

Auto-detect system theme

Manual toggle option

Smooth transition

⚡ Optimized Performance

Next.js App Router

Server Components + Client Components

Highly modular architecture

Fast load times

📱 Fully Responsive

Looks great on:

Mobile

Tablet

Desktop

🛠️ Tech Stack
Layer	Technology
Framework	Next.js 13 (App Router)
Frontend	React 18 + TypeScript
Styling	Tailwind CSS
UI Components	ShadCN/UI
Icons	Lucide Icons
State	React Hooks
Utilities	Custom hooks, utility helpers
📂 Project Structure
explore-food-main/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── subcategories/
│       ├── [id]/page.tsx
│       └── subcategorytype/
│           ├── [subcategoryId]/page.tsx
│           └── finaltype/
│               └── [finalId]/page.tsx
│
├── components/
│   ├── ui/               # ShadCN Components
│   ├── card.tsx
│   ├── categorycard.tsx
│   ├── subcategory.tsx
│   ├── typedialogs.tsx
│   └── theme-provider.tsx
│
├── hooks/
│   └── use-toast.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── scr/img/
│         food.png
│         food1.png
│
└── package.json

🚀 Getting Started
1️⃣ Clone the Project
git clone https://github.com/your-username/explore-food.git
cd explore-food

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


Your app is now running at:
👉 http://localhost:3000

📦 Production Build
npm run build
npm start

💡 Core Concepts
🧭 Dynamic Routing

Your project uses multi-level dynamic routing for hierarchical food browsing.

🧃 Modular Components

Every major UI element is placed under /components for scalability.

🔔 Toast Notifications

Easy notification system powered by ShadCN's use-toast.

🌗 Theme Provider

Manages dark/light mode using context.

🎉 UI Components Used (ShadCN)

Including but not limited to:

Button

Card

Dialog

DropdownMenu

Separator

Toggle

Toast

Tooltip

HoverCard

Sheet

Carousel (if added later)

📸 Screenshots (Add yours here)
![Home Page]()
![Category Page]()
![Subcategory]()
![Final Item Page]()


If you want, I’ll generate beautiful framed mockups of your UI.

📌 Roadmap

 Add API integration

 Add search functionality

 Add user authentication

 Add restaurant details

 Add review/rating system

 Add favorites/bookmark feature



❤️ Acknowledgements

Built using Next.js and ShadCN UI

Designed for clean UX and smooth navigation
