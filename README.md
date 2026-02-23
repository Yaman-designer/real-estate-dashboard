# Real Estate Management Dashboard

A modern and fully responsive **real estate management** dashboard built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**.  
The project includes full support for **Dark/Light Mode**, reusable components, data filtering, tables, dialogs, charts, and a clean UI optimized for real estate operations.

---

## 🌟 Project Overview

This dashboard is designed to help real estate teams efficiently manage:

- Property listings (add, edit, delete, update status)
- Property details (city, type, price, owner/agent, status)
- Leads, inquiries, and viewing requests
- User / agent management (coming soon)
- Activity and performance reports

It represents a realistic, production-style **admin panel for real estate** suitable for portfolio and professional use.

---

## 🤖 Note on Development Process

AI assistance was used throughout the development to speed up implementation **while fully understanding, modifying, and customizing all components manually**.  
AI was used as a helper — not a replacement — and every part of the codebase is fully understood and tailored to the project’s needs.

---

## ✨ Key Features

- 🌗 **Dark / Light Mode** using theme tokens  
- 📱 Fully **Responsive Design** (mobile, tablet, desktop)  
- 🧱 Reusable UI Components (cards, tables, dialogs, dropdowns…)  
- 📊 **Reports & Stats** using Recharts  
- 🏠 Property management table with:
  - Property name, city, type, price, owner/agent, status
  - Status toggling (active / pending / rejected)
  - Row selection & “select all”
  - Filtering by status
  - Bulk delete
- 📩 Requests & Messages page for:
  - Contact requests
  - Viewing bookings
  - General inquiries
- ⚙ General settings page (branding, language, contact info, etc.)

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

This makes theming scalable across all pages and components.

---

## 📊 Charts

Recharts is integrated and styled using design tokens:

- Grid color: `hsl(var(--border))`
- Text color: `hsl(var(--muted-foreground))`
- Primary color: `hsl(var(--primary))`
- Dark-mode friendly tooltips

Used mainly for:

- Property performance overview
- Requests / messages analytics
- Time-based reports (weekly / monthly / yearly)

---

## 🌍 Multi-Language Support (Coming Soon)

Planned features:

- Arabic + English
- RTL/LTR auto support
- Centralized translation files (i18n-ready structure)

The project structure is already prepared for future localization.

---

## 🚀 How to Run Locally

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm run dev