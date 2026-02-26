"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/layouts/theme/themeToggle";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/sidebarContext";

export default function AppHeader() {
  const { toggle } = useSidebar();
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--foreground))] backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {status === "loading" ? (
            <div className="h-9 w-24 animate-pulse rounded-xl bg-[rgb(var(--muted))]" />
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <div className="text-sm font-medium leading-tight text-[rgb(var(--foreground))]">
                  {session.user.name ?? "User"}
                </div>
                <div className="text-xs text-[rgb(var(--foreground))]/70">
                  {session.user.email ?? ""}
                </div>
              </div>

              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt="avatar"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              ) : (
                <div className="h-9 w-9 rounded-full border border-[rgb(var(--border))]" />
              )}

              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 text-sm text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="rounded-xl bg-[rgb(var(--foreground))] px-4 py-2 text-sm font-medium text-[rgb(var(--background))] hover:opacity-90"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
