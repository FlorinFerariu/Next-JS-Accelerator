"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/context/sidebarContext";
import AppShell from "@/components/layouts/shell/appShell";

export default function RouteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/login")) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppShell>{children}</AppShell>
    </SidebarProvider>
  );
}
