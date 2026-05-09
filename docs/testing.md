# Testy

Projekt ma przygotowany startowy zestaw testów jednostkowych i komponentowych oparty o:

- Vitest
- React Testing Library
- jest-dom matchers
- jsdom

## Komendy

```bash
npm test
npm run test:watch
npm run test:ui
```

## Konfiguracja

- `vitest.config.ts` - konfiguracja Vitesta, React plugin, alias `@` do `src`, jsdom i coverage.
- `vitest.setup.ts` - cleanup po testach, `jest-dom`, czyszczenie `localStorage`, reset klasy `dark`, mock `matchMedia`.
- `.github/workflows/ci.yml` - GitHub Actions dla `lint`, `test` i `build` na pushach do `main` oraz pull requestach; job działa w kontenerze `node:22`.

## Aktualny zakres testów

- `src/lib/portal-data.test.ts`
  - domyślny język `pl`,
  - obecność kluczowych branż,
  - spójność punktów katalogu z kategoriami.

- `src/components/directory-search.test.tsx`
  - render katalogu,
  - filtrowanie po frazie,
  - filtrowanie po statusie otwarcia.

- `src/components/language-select.test.tsx`
  - rozwijana lista języków,
  - linki do `/pl`, `/en`, `/uk`,
  - domyślne zaznaczenie polskiego.

- `src/components/theme-toggle.test.tsx`
  - przełączanie dark mode,
  - zapis wyboru w `localStorage`.

- `src/components/admin-post-composer.test.tsx`
  - dodawanie posta z panelu admina,
  - zapis posta w `localStorage`.

## Znane uwagi

`npm audit` zgłasza obecnie `2 moderate severity vulnerabilities` dla `postcss` zagnieżdżonego w `next@16.2.4`. `npm audit fix --force` proponuje breaking downgrade do `next@9.3.3`, więc nie należy uruchamiać tej komendy automatycznie. Trzeba poczekać na poprawkę Next.js albo świadomie zaktualizować Next do wersji, która rozwiązuje advisory bez regresji.
