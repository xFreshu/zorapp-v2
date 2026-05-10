import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminPostComposer } from "@/features/admin/admin-post-composer";
import { DirectorySearch } from "@/features/directory/directory-search";
import { LanguageSelect } from "@/features/i18n/language-select";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import {
  cityEvents,
  dictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/portal-data";

type LocalizedPageProps = {
  params: Promise<{ lang: string }>;
};

const anchors = ["directory", "events", "news", "admin"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = dictionary[lang];

  return (
    <main className="min-h-screen">
      <SiteHeader lang={lang} nav={copy.nav} themeLabels={copy} />
      <Hero copy={copy} />
      <div id="directory" className="scroll-mt-28">
        <DirectorySearch copy={copy} />
      </div>
      <EventsSection lang={lang} copy={copy} />
      <AdminPostComposer copy={copy} />
    </main>
  );
}

function SiteHeader({
  lang,
  nav,
  themeLabels,
}: {
  lang: Locale;
  nav: string[];
  themeLabels: {
    light: string;
    dark: string;
  };
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--background)]/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link className="focus-ring rounded-md text-xl font-bold" href={`/${lang}`}>
            Zory.info
          </Link>
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSelect currentLang={lang} />
            <ThemeToggle labels={themeLabels} />
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto pb-1 text-sm xl:pb-0" aria-label="Main navigation">
          {nav.map((item, index) => (
            <a
              key={item}
              className="focus-ring whitespace-nowrap rounded-md px-3 py-2 text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
              href={`#${anchors[index]}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden items-center gap-2 xl:flex">
            <LanguageSelect currentLang={lang} />
            <ThemeToggle labels={themeLabels} />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: (typeof dictionary)[Locale] }) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm font-semibold uppercase text-[var(--accent)]">{copy.portalLabel}</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">{copy.heroTitle}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{copy.heroLead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring rounded-md bg-[var(--brand)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--brand-strong)] dark:text-[#071512]"
            href="#directory"
          >
            {copy.heroCta}
          </a>
          <span className="rounded-md border border-[var(--line)] bg-[var(--panel)] px-5 py-3 font-medium">
            {copy.stats[0]}
          </span>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {copy.stats.map((stat) => (
            <div key={stat} className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
              <dt className="text-sm text-[var(--muted)]">Zory.info</dt>
              <dd className="mt-1 font-semibold">{stat}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
        <Image
          className="aspect-[4/3] h-full w-full object-cover"
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Rynek%20%C5%BCory.jpg?width=1280"
          alt="Market square in Zory"
          width={1280}
          height={720}
          priority
        />
        <figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
          Photo by Kamil Kubica / Wikimedia Commons, CC BY-SA 4.0.
        </figcaption>
      </figure>
    </section>
  );
}

function EventsSection({ lang, copy }: { lang: Locale; copy: (typeof dictionary)[Locale] }) {
  const dateLocale = {
    pl: "pl-PL",
    en: "en-GB",
    uk: "uk-UA",
  }[lang];

  return (
    <section id="events" className="scroll-mt-28 py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">{copy.eventsLabel}</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{copy.eventsTitle}</h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">{copy.eventsLead}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cityEvents.map((event) => {
            const eventDate = new Intl.DateTimeFormat(dateLocale, {
              day: "2-digit",
              month: "short",
            }).format(new Date(event.date));

            return (
              <article
                key={event.id}
                className="grid min-h-64 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5"
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--brand)]">{event.category}</p>
                  <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
                </div>
                <div className="mt-8 self-end">
                  <p className="text-3xl font-bold">{eventDate}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {event.time} · {event.place}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{event.audience}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
