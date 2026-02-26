import { ReactNode } from "react";
import AppHeader from "@/components/layouts/header";
import AppSidebar from "@/components/layouts/sidebar/sidebar";
import ContentContainer from "@/components/layouts/shell/contentContainer";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[rgb(var(--background))]">
      <div className="flex">
        <AppSidebar />
        <ContentContainer>
          <AppHeader />
          <main className="p-4 lg:p-6">{children}</main>
        </ContentContainer>
      </div>
    </div>
  );
}
