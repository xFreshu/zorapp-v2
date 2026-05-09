"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  labels: {
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

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="focus-ring group relative h-11 w-[5.75rem] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel)] p-1 shadow-sm transition duration-500 hover:-translate-y-0.5 hover:bg-[var(--panel-strong)]"
      onClick={() => changeTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? labels.light : labels.dark}
      aria-pressed={isDark}
    >
      <span
        className={`absolute inset-1 rounded-md transition duration-500 ${
          isDark ? "bg-[#152c44]" : "bg-[#ffe8a3]"
        }`}
        aria-hidden="true"
      />
      <span
        className={`absolute top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md bg-[var(--panel-strong)] text-lg shadow-md transition duration-500 ease-out ${
          isDark ? "translate-x-[3rem] rotate-[18deg]" : "translate-x-0 rotate-[-8deg]"
        }`}
        aria-hidden="true"
      >
        <span key={theme} className="theme-emoji">
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
      <span
        className={`absolute top-1/2 z-0 -translate-y-1/2 text-base transition duration-500 ${
          isDark ? "left-3 opacity-100" : "left-3 opacity-45"
        }`}
        aria-hidden="true"
      >
        ✨
      </span>
      <span
        className={`absolute top-1/2 z-0 -translate-y-1/2 text-base transition duration-500 ${
          isDark ? "right-3 opacity-45" : "right-3 opacity-100"
        }`}
        aria-hidden="true"
      >
        🌤️
      </span>
    </button>
  );
}
