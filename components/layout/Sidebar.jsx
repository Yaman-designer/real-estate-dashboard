"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquareMore,
  Settings,
  BarChart3,
  X,
} from "lucide-react";

const menu = [
  { name: "إحصائيات الموقع", href: "/", icon: LayoutDashboard },
  { name: "إدارة العقارات", href: "/properties", icon:Building2 },
  { name: "إدارة المستخدمين", href: "/users", icon: Users },
  { name: "الطلبات/الرسائل", href: "/requests-messages", icon: MessageSquareMore },
  { name: "الإعدادات العامة", href: "/settings", icon: Settings },
  { name: "صفحة التقارير", href: "/reports", icon: BarChart3 },
];


export default function Sidebar({ open, setopen }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 w-64 border-l border-border bg-background transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:static"
      )}
    >
      <div className="lg:hidden flex justify-end p-4">
        <Button variant="ghost" onClick={() => setopen(false)}>
          <X className="w-6 h-6 text-foreground" />
        </Button>
      </div>

      <div className="h-16 flex items-center justify-center text-xl font-bold text-foreground">
        <img src="/larana.png" alt="Logo" className="w-40 h-40 mt-2" />
      </div>

      <nav className="flex flex-col gap-2 px-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-row  items-center gap-2 rounded-lg py-4 transition group",
                isActive
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "h-6 w-6 transition",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )}
              />

              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
