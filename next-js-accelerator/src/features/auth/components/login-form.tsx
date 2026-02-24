"use client";

import { signIn } from "next-auth/react";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-4 p-8 border rounded-lg shadow-sm">
      <h1 className="text-xl font-bold">Welcome Back</h1>
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="bg-black text-white p-2 rounded-md"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
