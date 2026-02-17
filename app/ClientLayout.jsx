// components/layout/ClientLayout.js - Client Component
"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function ClientLayout({ children }) {
  const [open, setopen] = useState(false);

  return (
    <div className="flex min-h-screen  bg-background text-foreground ">
      <Sidebar open={open} setopen={setopen} />
      
      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={() => setopen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}