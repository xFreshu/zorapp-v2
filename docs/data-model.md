# Model danych

Wszystkie dane startowe są teraz w `src/lib/portal-data.ts`.

## Locale

```ts
type Locale = "pl" | "en" | "uk";
```

Słowniki są trzymane w obiekcie `dictionary`. Trasy `pl`, `en` i `uk` zostają dostępne, ale widoczne teksty aplikacji są teraz pisane po angielsku.

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

- Food and stays
- Health and style
- Everyday services
- Professional services
- Home and city
- Family and education
- Leisure
- Shopping
- Local business
- City

Aktualne branże:

- Food and dining
- Accommodation and tourism
- Beauty and hair
- Health and rehabilitation
- Sports and fitness
- Automotive
- Law and notaries
- Finance and accounting
- Real estate
- Construction and renovation
- Home, garden, and cleaning
- Education and courses
- Kids and family
- Culture and entertainment
- Events and wedding services
- Pets
- Retail and shops
- IT, marketing, and media
- Transport and logistics
- Manufacturing and crafts
- Public offices and organizations
- Energy, waste, and environment

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
