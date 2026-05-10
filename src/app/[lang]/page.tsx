import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSelect } from "@/features/i18n/language-select";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import {
  dictionary,
  getBusinessPoints,
  getCategory,
  getCityEvents,
  getEditorialPosts,
  isLocale,
  locales,
  type BusinessPoint,
  type CityEvent,
  type Locale,
} from "@/lib/portal-data";

type LocalizedPageProps = {
  params: Promise<{ lang: string }>;
};

type PortalCopy = (typeof dictionary)[Locale];

const anchors = ["events", "places", "news"];
const dateLocales: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-GB",
  uk: "uk-UA",
};
const placeCategoryIds = new Set(["food", "beauty"]);

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = dictionary[lang];
  const events = getCityEvents(lang).sort((first, second) => first.date.localeCompare(second.date));
  const places = getBusinessPoints(lang).filter((point) => placeCategoryIds.has(point.categoryId));

  return (
    <main className="min-h-screen lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
      <Sidebar copy={copy} lang={lang} />
      <div className="min-w-0">
        <SiteHeader lang={lang} copy={copy} />
        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8">
          <EventDashboard copy={copy} events={events} lang={lang} />
          <PlacesSection copy={copy} lang={lang} places={places} />
          <NewsSection copy={copy} lang={lang} />
        </div>
      </div>
    </main>
  );
}

function Sidebar({ copy, lang }: { copy: PortalCopy; lang: Locale }) {
  return (
    <aside className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--panel-strong)]/95 shadow-sm backdrop-blur lg:h-screen lg:border-b-0 lg:border-r lg:shadow-none">
      <div className="flex gap-4 overflow-x-auto px-4 py-3 lg:flex-col lg:overflow-visible lg:p-5">
        <Link className="focus-ring flex min-w-fit items-center gap-3 rounded-md font-bold" href={`/${lang}`}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--brand)] text-sm text-white dark:text-[#071512]">
            ZI
          </span>
          <span className="hidden text-lg sm:inline lg:block">Zory.info</span>
        </Link>
        <nav className="flex min-w-max gap-2 text-sm lg:mt-6 lg:min-w-0 lg:flex-col" aria-label="Main navigation">
          {copy.nav.map((item, index) => (
            <a
              key={item}
              className="focus-ring rounded-md px-3 py-2.5 font-medium text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
              href={`#${anchors[index]}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function SiteHeader({ lang, copy }: { lang: Locale; copy: PortalCopy }) {
  return (
    <header className="sticky top-[4.125rem] z-20 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-xl lg:top-0">
      <div className="mx-auto flex w-full max-w-[96rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-[var(--accent)]">{copy.portalLabel}</p>
          <h1 className="truncate text-2xl font-bold tracking-normal sm:text-3xl">Zory.info</h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelect currentLang={lang} />
          <ThemeToggle labels={copy} />
        </div>
      </div>
    </header>
  );
}

function EventDashboard({ copy, events, lang }: { copy: PortalCopy; events: CityEvent[]; lang: Locale }) {
  const dateLocale = dateLocales[lang];
  const monthDate = parseISODate(events[0]?.date ?? "2026-05-01");
  const todayKey = new Date().toISOString().slice(0, 10);

  return (
    <section id="events" className="scroll-mt-32">
      <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm sm:p-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase text-[var(--accent)]">{copy.eventsLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{copy.eventsTitle}</h2>
          </div>
          <div className="max-w-2xl rounded-md bg-[var(--panel-strong)] px-4 py-3 text-sm leading-6 text-[var(--muted)] shadow-sm">
            {copy.eventsLead}
          </div>
        </div>
        <CalendarGrid events={events} monthDate={monthDate} todayKey={todayKey} dateLocale={dateLocale} />
        <EventSchedule copy={copy} events={events} dateLocale={dateLocale} />
        <p className="mt-5 text-xs leading-5 text-[var(--muted)]">{copy.calendarSource}</p>
      </div>
    </section>
  );
}

function CalendarGrid({
  events,
  monthDate,
  todayKey,
  dateLocale,
}: {
  events: CityEvent[];
  monthDate: Date;
  todayKey: string;
  dateLocale: string;
}) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const monthLabel = new Intl.DateTimeFormat(dateLocale, { month: "long", year: "numeric" }).format(monthDate);
  const weekdays = getWeekdays(dateLocale);
  const cells = getCalendarCells(year, month);
  const eventsByDay = events.reduce<Record<string, CityEvent[]>>((groups, event) => {
    groups[event.date] = groups[event.date] ?? [];
    groups[event.date].push(event);
    return groups;
  }, {});

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold capitalize">{monthLabel}</h3>
        <span className="rounded-md bg-[var(--leaf)] px-3 py-2 text-sm font-semibold text-[var(--brand-strong)]">
          2026
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-[var(--muted)]">
        {weekdays.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          const dateKey = day ? formatDateKey(year, month, day) : "";
          const dayEvents = eventsByDay[dateKey] ?? [];
          const isToday = dateKey === todayKey;

          return (
            <div
              key={`${day ?? "empty"}-${index}`}
              className={`min-h-[5.75rem] rounded-md border p-2 text-left transition sm:min-h-28 ${
                day
                  ? "border-[var(--line)] bg-[var(--panel-strong)] hover:border-[var(--brand)]"
                  : "border-transparent bg-transparent"
              } ${isToday ? "ring-2 ring-[var(--brand)]" : ""}`}
            >
              {day ? (
                <>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-semibold">{day}</span>
                    {dayEvents.length > 0 ? (
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-label="Event day" />
                    ) : null}
                  </div>
                  <div className="mt-2 grid gap-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <p key={event.id} className="truncate rounded-md bg-[var(--accent-soft)] px-2 py-1 text-xs font-medium">
                        {event.time} {event.title}
                      </p>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventSchedule({ copy, events, dateLocale }: { copy: PortalCopy; events: CityEvent[]; dateLocale: string }) {
  return (
    <div className="mt-7 border-t border-[var(--line)] pt-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">{copy.nextEventsTitle}</p>
          <h3 className="mt-1 text-2xl font-semibold">{copy.eventScheduleTitle}</h3>
        </div>
      </div>
      <div className="grid gap-3">
        {events.map((event) => (
          <EventScheduleItem key={event.id} copy={copy} event={event} dateLocale={dateLocale} />
        ))}
      </div>
    </div>
  );
}

function EventScheduleItem({ copy, event, dateLocale }: { copy: PortalCopy; event: CityEvent; dateLocale: string }) {
  const date = parseISODate(event.date);
  const day = new Intl.DateTimeFormat(dateLocale, { day: "2-digit", month: "short", weekday: "short" }).format(date);

  return (
    <article className="grid gap-4 rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-center">
      <div className="rounded-md bg-[var(--background)] px-3 py-3">
        <p className="text-sm font-semibold capitalize text-[var(--brand)]">{day}</p>
        <p className="mt-1 text-lg font-bold">{event.time}</p>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold">
            {event.category}
          </span>
          <span className="text-xs font-medium text-[var(--muted)]">{event.place}</span>
        </div>
        <h4 className="mt-2 text-xl font-semibold leading-7">{event.title}</h4>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{event.description}</p>
      </div>
      {event.sourceUrl ? <ExternalButton href={event.sourceUrl}>{copy.eventSourceLink}</ExternalButton> : null}
    </article>
  );
}

function PlacesSection({ copy, lang, places }: { copy: PortalCopy; lang: Locale; places: BusinessPoint[] }) {
  return (
    <section id="places" className="scroll-mt-32">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">{copy.directoryLabel}</p>
          <h2 className="mt-2 text-3xl font-semibold">{copy.placesTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy.placesLead}</p>
        </div>
        <ExternalButton href="https://www.google.com/maps/search/restauracje+i+salony+beauty+Żory/">
          {copy.mapsList}
        </ExternalButton>
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.id} copy={copy} lang={lang} place={place} />
        ))}
      </div>
    </section>
  );
}

function PlaceCard({ copy, lang, place }: { copy: PortalCopy; lang: Locale; place: BusinessPoint }) {
  const category = getCategory(place.categoryId, lang);
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(`${place.name} ${place.address} Żory`)}`;

  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--brand)]">{category?.name}</p>
          <h3 className="mt-1 text-xl font-semibold leading-7">{place.name}</h3>
        </div>
        <span className="rounded-md bg-[var(--accent-soft)] px-3 py-2 text-sm font-medium">{place.district}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{place.address}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        {copy.phoneLabel}: {place.phone}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {place.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-[var(--line)] px-2.5 py-1.5 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <ExternalButton href={mapsUrl}>{copy.mapsList}</ExternalButton>
        {place.sourceUrl ? <ExternalButton href={place.sourceUrl}>{copy.sourceLabel}</ExternalButton> : null}
      </div>
    </article>
  );
}

function NewsSection({ copy, lang }: { copy: PortalCopy; lang: Locale }) {
  const posts = getEditorialPosts(lang);
  const dateLocale = dateLocales[lang];

  return (
    <section id="news" className="scroll-mt-32 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase text-[var(--accent)]">{copy.postsTitle}</p>
        <h2 className="mt-2 text-3xl font-semibold">{copy.postsTitle}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-5">
            <p className="text-sm font-semibold text-[var(--brand)]">{post.category}</p>
            <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.lead}</p>
            <p className="mt-4 text-xs font-medium text-[var(--muted)]">
              {new Intl.DateTimeFormat(dateLocale).format(parseISODate(post.date))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExternalButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="focus-ring inline-flex min-h-10 items-center rounded-md border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-2 text-sm font-semibold transition hover:bg-[var(--panel)]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function parseISODate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getCalendarCells(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingEmptyDays = (firstDay.getDay() + 6) % 7;

  return [
    ...Array.from({ length: leadingEmptyDays }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
}

function getWeekdays(dateLocale: string) {
  const monday = new Date(2026, 4, 4);

  return Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(dateLocale, { weekday: "short" }).format(
      new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + index),
    ),
  );
}
