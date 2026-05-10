"use client";

import Link from "next/link";
import { useState } from "react";
import { dictionary, locales, type Locale } from "@/lib/portal-data";

const languageFlags: Record<Locale, string> = {
  pl: "🇵🇱",
  en: "🇬🇧",
  uk: "🇺🇦",
};

type LanguageSelectProps = {
  currentLang: Locale;
};

export function LanguageSelect({ currentLang }: LanguageSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="focus-ring flex h-11 min-w-16 items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 text-xl shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--panel-strong)]"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
      >
        <span aria-hidden="true">{languageFlags[currentLang]}</span>
        <span className={`text-xs text-[var(--muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      <div
        className={`absolute right-0 top-[3.25rem] z-30 w-52 origin-top-right rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-2 shadow-xl transition duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
        role="listbox"
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            className={`focus-ring flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition hover:bg-[var(--panel)] ${
              locale === currentLang ? "bg-[var(--accent-soft)] font-semibold" : ""
            }`}
            href={`/${locale}`}
            onClick={() => setOpen(false)}
            role="option"
            aria-selected={locale === currentLang}
          >
            <span className="text-xl" aria-hidden="true">
              {languageFlags[locale]}
            </span>
            <span>{dictionary[locale].langLabel}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
