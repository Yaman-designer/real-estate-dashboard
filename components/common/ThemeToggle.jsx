"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},          // subscribe (ما بدنا اشتراك فعلي)
    () => true,              // على الكلاينت
    () => false              // على السيرفر
  );
}

export default function ThemeToggle() {
  const isClient = useIsClient();
  const { theme, setTheme, systemTheme } = useTheme();

  // على السيرفر / قبل ما يركب، ما نعرض شي لتجنب mismatch
  if (!isClient) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
