"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError("Invalid email or password.");
      return;
    }

    setLoading(false);

    router.replace("/admin-dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f6f2] px-6">

      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172019] font-extrabold text-[#c9ef45]">
            MI
          </div>

          <h1 className="mt-4 text-2xl font-extrabold text-[#172019]">
            Mandal Industries
          </h1>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[2px] text-gray-500">
            Admin Portal
          </p>

        </div>


        {/* LOGIN CARD */}
        <div className="rounded-3xl border border-[#dfe3dc] bg-white p-8 shadow-xl sm:p-10">

          <h2 className="text-2xl font-extrabold text-[#172019]">
            Admin Login
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage customer enquiries.
          </p>


          {/* ERROR */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}


          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            {/* EMAIL */}
            <div>

              <label className="text-sm font-bold text-[#172019]">
                Admin Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-[#dfe3dc] px-4 py-3 outline-none transition focus:border-[#718044] focus:ring-2 focus:ring-[#c9ef45]/30"
              />

            </div>


            {/* PASSWORD */}
            <div>

              <label className="text-sm font-bold text-[#172019]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className="mt-2 w-full rounded-xl border border-[#dfe3dc] px-4 py-3 outline-none transition focus:border-[#718044] focus:ring-2 focus:ring-[#c9ef45]/30"
              />

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#172019] px-6 py-4 font-bold text-white transition hover:bg-[#28372c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>

          </form>


          {/* BACK */}
          <a
            href="/"
            className="mt-6 block text-center text-sm font-semibold text-gray-500 transition hover:text-[#172019]"
          >
            ← Back to Website
          </a>

        </div>


        {/* SECURITY NOTE */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Authorized access only • Mandal Industries
        </p>

      </div>

    </main>
  );
}