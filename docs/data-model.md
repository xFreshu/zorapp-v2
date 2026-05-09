# Model danych

Wszystkie dane startowe są teraz w `src/lib/portal-data.ts`.

## Locale

```ts
type Locale = "pl" | "en" | "uk";
```

Słowniki są trzymane w obiekcie `dictionary`. UI jest przygotowany pod polski, angielski i ukraiński.

## BusinessCategory

Opisuje branżę w katalogu.

```ts
type BusinessCategory = {
  id: string;
  name: string;
  group: string;
  keywords: string[];
  examples: string[];
};
```

Aktualne grupy obejmują lokalne potrzeby mieszkańców i firm:

- Jedzenie i noclegi
- Zdrowie i styl
- Usługi codzienne
- Profesjonaliści
- Dom i miasto
- Rodzina i edukacja
- Czas wolny
- Zakupy
- Biznes lokalny
- Miasto

Aktualne branże:

- Gastronomia
- Noclegi i turystyka
- Beauty i fryzjerstwo
- Zdrowie i rehabilitacja
- Sport i fitness
- Motoryzacja
- Prawo i notariusze
- Finanse i księgowość
- Nieruchomości
- Budownictwo i remonty
- Dom, ogród i sprzątanie
- Edukacja i kursy
- Dzieci i rodzina
- Kultura i rozrywka
- Eventy i usługi ślubne
- Zwierzęta
- Handel i sklepy
- IT, marketing i media
- Transport i logistyka
- Produkcja i rzemiosło
- Urzędy i organizacje
- Energia, odpady i środowisko

Lista jest szkieletem produktu. Nie jest jeszcze pełną bazą wszystkich firm z Żor.

## BusinessPoint

Opisuje pojedynczy punkt katalogu.

```ts
type BusinessPoint = {
  id: string;
  name: string;
  categoryId: string;
  district: string;
  address: string;
  phone: string;
  tags: string[];
  openNow: boolean;
  featured?: boolean;
};
```

Następny krok: dodać godziny otwarcia jako strukturę tygodniową zamiast `openNow`.

## CityEvent

Opisuje wydarzenie w kalendarzu.

```ts
type CityEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  place: string;
  category: string;
  audience: string;
};
```

Następny krok: dodać organizatora, link do zapisów, cenę, obraz, status i lokalizację mapy.

## EditorialPost

Opisuje post redakcyjny.

```ts
type EditorialPost = {
  id: string;
  title: string;
  lead: string;
  category: string;
  date: string;
  status: "draft" | "published";
};
```

Panel admina zapisuje posty w `localStorage` pod kluczem `zory-editorial-posts`.

Następny krok: baza danych, autoryzacja admina i edycja/usuwanie postów.
