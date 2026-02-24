"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store/theme-store";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => toggle(resolvedTheme === "dark" ? "dark" : "light")}
      className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
    >
      {isDark ? <Sun /> : <Moon color="white" />}
    </button>
  );
}
