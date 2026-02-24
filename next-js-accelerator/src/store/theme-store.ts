import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark";

type ThemeState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggle: (resolvedTheme?: "light" | "dark") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
      toggle: (resolvedTheme) => {
        const current = resolvedTheme || get().theme;

        const next = current === "dark" ? "light" : "dark";
        set({ theme: next });
      },
    }),
    {
      name: "na-ui-theme",
      partialize: (s) => ({ theme: s.theme }),
    },
  ),
);
