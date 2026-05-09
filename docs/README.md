# Żory.info - dokumentacja projektu

Ten folder jest roboczą pamięcią projektu dla Codex. Po każdej większej zmianie należy dopisać aktualizację do `docs/changelog.md` i, jeśli zmieniła się architektura albo dane, uzupełnić odpowiedni plik w tym folderze.

## Cel produktu

Żory.info ma być responsywnym, nowoczesnym portalem miejskim dla Żor:

- aktualności i komunikaty miejskie,
- kalendarz wydarzeń,
- katalog firm, usług i instytucji,
- wyszukiwarka branż, punktów i tagów,
- panel administracyjny do dodawania postów,
- dark mode,
- wersje językowe: polska, angielska, ukraińska.

## Aktualny stan

Projekt jest prototypem frontendowym w Next.js 16.2.4 App Router. Dane są lokalne i demonstracyjne. Panel admina zapisuje posty w `localStorage`, więc pokazuje docelowy przepływ redakcyjny bez backendu, autoryzacji i bazy danych.

## Główne pliki

- `src/app/page.tsx` - przekierowanie z `/` na `/pl`.
- `src/app/[lang]/page.tsx` - główny widok portalu dla `pl`, `en`, `uk`.
- `src/app/layout.tsx` - globalny layout i metadata.
- `src/app/globals.css` - motyw, dark mode przez klasę `.dark`, bazowe style Tailwind v4.
- `src/lib/portal-data.ts` - locale, słowniki, kategorie branż, punkty demo, wydarzenia, posty startowe.
- `src/components/directory-search.tsx` - interaktywna wyszukiwarka katalogu.
- `src/components/admin-post-composer.tsx` - lokalny panel dodawania postów.
- `src/components/theme-toggle.tsx` - przełącznik jasny/ciemny.
- `vitest.config.ts` - konfiguracja testów jednostkowych i komponentowych.
- `vitest.setup.ts` - globalny setup testów.
- `docs/testing.md` - opis strategii testowania, komend i aktualnych testów.

## Zasada pracy na przyszłość

1. Najpierw przeczytać `AGENTS.md`.
2. Przy zmianach w Next.js sprawdzić lokalne guide'y w `node_modules/next/dist/docs/`, bo projekt używa wersji 16.2.4.
3. Po zmianach w kodzie uzupełnić `docs/changelog.md`.
4. Po zmianach w modelach danych uzupełnić `docs/data-model.md`.
5. Po zmianach architektonicznych uzupełnić `docs/architecture.md`.
6. Po zmianach w testach uzupełnić `docs/testing.md`.
