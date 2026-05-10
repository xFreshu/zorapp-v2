# Architektura

## Framework

- Next.js `16.2.4`
- React `19.2.4`
- App Router
- Tailwind CSS v4 przez `@tailwindcss/postcss`
- TypeScript strict mode

Przed zmianami w routingu, danych, obrazach, metadanych, formularzach albo cache należy czytać lokalne dokumenty Next.js z `node_modules/next/dist/docs/`.

## Routing

- `/` przekierowuje do `/pl`.
- `/{lang}` renderuje portal dla języka:
  - `pl`
  - `en`
  - `uk`
- `generateStaticParams()` generuje trzy warianty językowe.
- Nie ma jeszcze automatycznego wykrywania `Accept-Language`. Można dodać `proxy.ts`, jeśli portal ma sam wybierać język użytkownika.

## Język aplikacji

Wszystkie widoczne teksty aplikacji, etykiety ARIA, anchor ID i testowe oczekiwania dla UI mają być po angielsku. Trasy `pl`, `en` i `uk` mogą nadal istnieć jako warianty routingu, ale bieżący copy aplikacyjny jest angielski.

Aktualne ID sekcji używane przez nawigację:

- `directory`
- `events`
- `news`
- `admin`

## Standard katalogów

```text
src/
  app/         # routing Next.js App Router, layouty, strony i global CSS
  features/    # komponenty domenowe pogrupowane według funkcji portalu
  lib/         # dane, typy i funkcje pomocnicze

tests/
  features/    # testy mirrorujące katalogi domenowe z src/features
  lib/         # testy danych i logiki pomocniczej
  setup/       # globalny setup Vitest/jsdom

docs/          # pamięć projektu dla Codex i zespołu
public/        # statyczne assety
```

Testy nie są trzymane obok komponentów. Dzięki temu `src/` pozostaje katalogiem kodu produkcyjnego, a cały testowy kontekst jest w `tests/`. Komponenty specyficzne dla portalu trzymamy w `src/features/<obszar>/`, a nie w jednym płaskim katalogu.

## Renderowanie

- Strona `src/app/[lang]/page.tsx` jest Server Component.
- Interaktywne elementy są wydzielone jako Client Components:
  - `DirectorySearch`
  - `AdminPostComposer`
  - `ThemeToggle`

To ogranicza rozmiar klientowego JavaScriptu i pasuje do zaleceń App Routera.

## Motyw

Dark mode działa przez klasę `.dark` na `document.documentElement`.

- `ThemeToggle` zapisuje wybór w `localStorage` pod kluczem `zory-theme`.
- Jeśli nie ma zapisu, komponent bierze `prefers-color-scheme`.
- Tailwind v4 ma wariant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Dane

Na tym etapie dane są lokalne w `src/lib/portal-data.ts`. Docelowo należy przenieść je do backendu lub CMS.

Rekomendowany następny krok techniczny:

- baza PostgreSQL,
- Prisma albo Drizzle,
- auth dla admina,
- osobne modele dla postów, wydarzeń, firm, kategorii, tagów i tłumaczeń,
- moderacja wpisów dodawanych przez firmy.

## Obrazy

Hero używa zdjęcia rynku w Żorach z Wikimedia Commons przez `next/image`. Domena `commons.wikimedia.org` jest dopuszczona w `next.config.ts`.

Atrybucja jest pokazana pod zdjęciem w interfejsie.
