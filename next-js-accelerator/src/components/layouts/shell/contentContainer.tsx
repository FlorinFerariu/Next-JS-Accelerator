"use client";

import { ReactNode } from "react";
import { useSidebar } from "@/context/sidebarContext";

const SIDEBAR_OPEN = 260;
const SIDEBAR_CLOSED = 72;

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { open } = useSidebar();

  return (
    <div
      className="min-w-0 flex-1"
      style={{
        marginLeft: `${open ? SIDEBAR_OPEN : SIDEBAR_CLOSED}px`,
        transition: "margin-left 300ms ease-in-out",
        willChange: "margin-left",
      }}
      aria-live="polite"
    >
      {children}
    </div>
  );
}
