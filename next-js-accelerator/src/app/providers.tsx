"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ThemeSync } from "@/components/layouts/theme/themeSync";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="na-ui-theme"
        enableSystem={false}
      >
        <ThemeSync />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
