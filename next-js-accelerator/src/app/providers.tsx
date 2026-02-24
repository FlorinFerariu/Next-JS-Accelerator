"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ThemeSync } from "@/components/layouts/theme-sync";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="na-theme"
      >
        <ThemeSync />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
