"use client";

import { signIn } from "next-auth/react";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-4 p-8 border rounded-lg shadow-sm">
      <button
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="bg-black text-white p-2 rounded-md"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
