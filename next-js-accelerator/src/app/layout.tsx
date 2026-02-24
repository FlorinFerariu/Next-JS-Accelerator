import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

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
      <body className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
