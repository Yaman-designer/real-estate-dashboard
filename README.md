# Hotel Booking Dashboard

A modern and fully responsive hotel management dashboard built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**. The project includes full support for **Dark/Light Mode**, reusable components, data filtering, tables, dialogs, charts, and a clean UI optimized for real hotel operations.

---

## 🌟 Project Overview

This dashboard is designed to help hotel staff efficiently manage:

- Room information (add, edit, delete, update status)
- Guest profiles and current bookings
- Concierge requests
- Weekly booking statistics
- Real-time statuses and summaries

It represents a realistic, production-style admin panel suitable for portfolio and professional use.

---

## 🤖 Note on Development Process

AI assistance was used throughout the development to speed up implementation **while fully understanding, modifying, and customizing all components manually**.  
AI was used as a helper — not a replacement — and every part of the codebase is fully understood and tailored to the project’s needs.

---

## ✨ Key Features

- 🌗 **Dark / Light Mode** using theme tokens
- 📱 Fully **Responsive Design** (mobile, tablet, desktop)
- 🧱 Reusable UI Components (cards, tables, dialogs, dropdowns…)
- 📊 **Charts & Stats** using Recharts
- 🧾 Guest Profile + Current Booking Card
- 🖼 Room Gallery with slider
- 🔔 Concierge Requests with status cycling
- 📦 Interactive data tables:
  - Row selection
  - Select all
  - Filtering
  - Multi-delete
  - View dialogs

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **shadcn/ui**
- **Recharts**
- **lucide-react**
- **next-themes**

---

## 🌗 Dark / Light Mode System

Dark mode is implemented using:

- `darkMode: "class"` in Tailwind
- ThemeProvider from `next-themes`
- Consistent use of CSS variables/tokens:
  - `bg-background`
  - `text-foreground`
  - `bg-card`
  - `text-muted-foreground`
  - `border-border`
  - `bg-popover`

This ensures scalable theming across all pages and components.

---

## 📊 Charts

Recharts is fully customized to match the theme by using CSS variables:

- Grid color from: `hsl(var(--border))`
- Text color from: `hsl(var(--muted-foreground))`
- Primary color from: `hsl(var(--primary))`
- Dark-mode compatible tooltips

---

## 🌍 Multi-Language Support (Coming Soon)

Planned features:

- Arabic + English
- RTL/LTR auto support
- Centralized translation files (i18n)

The project structure is already prepared for future localization.

---

## 🚀 How to Run Locally

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd <project-folder>
  


🧠 What I Learned

Building a complete dashboard using modern Next.js (App Router)

Using shadcn/ui effectively and customizing components

Implementing a scalable theming system with tokens

Creating reusable UI components

Implementing tables with actions, dialogs, and filtering

Using Recharts and integrating them with Dark Mode

Improving code structure, UX decisions, and responsive layouts




License

This project is built for educational and portfolio purposes.
Feel free to use and modify it.

