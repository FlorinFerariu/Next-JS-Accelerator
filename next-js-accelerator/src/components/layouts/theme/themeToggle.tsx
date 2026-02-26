"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store/useThemeStore";
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]"
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
