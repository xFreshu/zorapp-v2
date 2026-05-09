"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  labels: {
    theme: string;
    light: string;
    dark: string;
  };
};

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("zory-theme") as Theme | null;
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = savedTheme ?? preferredTheme;

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function changeTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    window.localStorage.setItem("zory-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <div
      className="inline-grid grid-cols-[auto_1fr_1fr] items-center gap-1 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-1 text-sm"
      aria-label={labels.theme}
    >
      <span className="px-2 text-[var(--muted)]">{labels.theme}</span>
      <button
        type="button"
        className={`focus-ring rounded-md px-3 py-2 transition ${
          theme === "light"
            ? "bg-[var(--brand)] text-white"
            : "text-[var(--foreground)] hover:bg-[var(--panel-strong)]"
        }`}
        onClick={() => changeTheme("light")}
        aria-pressed={theme === "light"}
      >
        {labels.light}
      </button>
      <button
        type="button"
        className={`focus-ring rounded-md px-3 py-2 transition ${
          theme === "dark"
            ? "bg-[var(--brand)] text-[#071512]"
            : "text-[var(--foreground)] hover:bg-[var(--panel-strong)]"
        }`}
        onClick={() => changeTheme("dark")}
        aria-pressed={theme === "dark"}
      >
        {labels.dark}
      </button>
    </div>
  );
}
