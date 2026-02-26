"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store/useThemeStore";

export function ThemeSync() {
  const { setTheme } = useTheme();
  const theme = useThemeStore((s) => s.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    setTheme(theme);
  }, [mounted, theme, setTheme]);

  return null;
}
