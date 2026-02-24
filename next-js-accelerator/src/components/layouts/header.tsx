"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "./theme-toggle";
import { Gauge } from "lucide-react";

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black">
            <Gauge />
          </div>
          <span className="text-lg font-semibold">NextAccel</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {status === "loading" ? (
            <div className="h-9 w-24 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-900" />
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <div className="text-sm font-medium leading-tight">
                  {session.user.name ?? "User"}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
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
                <div className="h-9 w-9 rounded-full border dark:border-gray-800" />
              )}

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
