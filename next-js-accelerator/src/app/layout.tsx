import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "./providers";
import RouteShell from "@/components/layouts/shell/routeShell";

export const metadata: Metadata = {
  title: "SaaS APP",
  description: "Next.js accelerator SaaS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>
          <RouteShell>{children}</RouteShell>
        </Providers>
      </body>
    </html>
  );
}
