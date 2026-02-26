"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SidebarActiveLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
        active
          ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
          : "text-[rgb(var(--foreground))]/80 hover:bg-[rgb(var(--muted))]",
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}
