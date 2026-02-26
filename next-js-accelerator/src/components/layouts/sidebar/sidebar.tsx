"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/sidebarContext";
import { Gauge, Home } from "lucide-react";

import clsx from "clsx";

const nav = [{ href: "/dashboard", label: "Dashboard", icon: Home }];

const SIDEBAR_OPEN = 260;
const SIDEBAR_CLOSED = 72;

export default function AppSidebar() {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 top-0 z-30 h-dvh overflow-hidden border-r border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--foreground))]"
      style={{
        width: open ? SIDEBAR_OPEN : SIDEBAR_CLOSED,
        transition: "width 300ms ease-in-out",
        willChange: "width",
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-4 py-4">
          <div className="flex h-9 w-9 items-center justify-center">
            <Gauge />
          </div>
          <span
            className={clsx(
              "truncate font-semibold transition-opacity duration-200",
              open ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            Next-JS-Accelerator
          </span>
        </div>

        <nav className="flex-1 px-2">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                        : "text-[rgb(var(--foreground))]/80 hover:bg-[rgb(var(--muted))]",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span
                      className={clsx(
                        "truncate transition-opacity duration-200",
                        open ? "opacity-100" : "opacity-0 pointer-events-none",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
