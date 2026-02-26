import { LoginForm } from "@/features/auth/components/loginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[rgb(var(--muted))] px-6">
      <div className="w-full max-w-md rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to continue to NextAccel
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
