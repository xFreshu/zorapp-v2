# Changelog

## 2026-05-09

- Zastąpiono startowy ekran Next.js prototypem portalu Żory.info.
- Dodano routing językowy `/pl`, `/en`, `/uk` oraz przekierowanie `/` do `/pl`.
- Dodano dark mode z przełącznikiem i zapisem w `localStorage`.
- Dodano responsywny header, hero z prawdziwym zdjęciem rynku w Żorach i atrybucją.
- Dodano wyszukiwarkę katalogu firm i usług z filtrami po branży, otwarciu i poleceniu.
- Dodano 22 kategorie branż oraz 8 punktów demonstracyjnych.
- Dodano kalendarz wydarzeń miejskich.
- Dodano panel admina do lokalnego dodawania postów.
- Dodano dokumentację projektu w `/docs`.
- Uporządkowano `.gitignore` pod publiczne repozytorium: sekrety, buildy, cache, IDE, lokalne bazy i artefakty testów.
- Zmieniono przełączanie języków na rozwijaną listę z flagami i uproszczono przełącznik motywu do animowanego przycisku z emoji.
- Dodano konfigurację Vitest i React Testing Library oraz pierwsze testy dla danych, katalogu, języków, dark mode i panelu admina.
- Dodano workflow GitHub Actions uruchamiający lint, testy i build.
- Uproszczono workflow CI, aby używał kontenera `node:22` bez ostrzegających inputów `setup-node`.
- Zweryfikowano Git remote/dry-run push; nie odtworzono warningu commit/push w lokalnej konfiguracji repozytorium.
- Ustandaryzowano strukturę katalogów: przeniesiono kod domenowy do `src/features/`, a testy do osobnego katalogu `tests/`.
- Zmieniono anchor ID z polskich na angielskie i ujednolicono widoczne teksty aplikacji po angielsku.
