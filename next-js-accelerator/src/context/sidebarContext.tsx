"use client";

import { createContext, useContext, useMemo, useState } from "react";

type SidebarContextValue = {
  open: boolean;
  toggle: () => void;
  setOpen: (v: boolean) => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const value = useMemo(
    () => ({
      open,
      toggle: () => setOpen((v) => !v),
      setOpen,
    }),
    [open],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}
