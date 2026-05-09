export const locales = ["pl", "en", "uk"] as const;

export type Locale = (typeof locales)[number];

export type BusinessCategory = {
  id: string;
  name: string;
  group: string;
  keywords: string[];
  examples: string[];
};

export type BusinessPoint = {
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

export type CityEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  place: string;
  category: string;
  audience: string;
};

export type EditorialPost = {
  id: string;
  title: string;
  lead: string;
  category: string;
  date: string;
  status: "draft" | "published";
};

export const businessCategories: BusinessCategory[] = [
  {
    id: "food",
    name: "Gastronomia",
    group: "Jedzenie i noclegi",
    keywords: ["restauracje", "kawiarnie", "pizza", "catering", "bary", "cukiernie"],
    examples: ["restauracje", "kawiarnie", "food trucki", "cukiernie", "catering"],
  },
  {
    id: "accommodation",
    name: "Noclegi i turystyka",
    group: "Jedzenie i noclegi",
    keywords: ["hotel", "apartamenty", "noclegi", "turystyka", "wycieczki"],
    examples: ["hotele", "apartamenty", "biura podróży", "informacja turystyczna"],
  },
  {
    id: "beauty",
    name: "Beauty i fryzjerstwo",
    group: "Zdrowie i styl",
    keywords: ["kosmetyczka", "fryzjer", "barber", "manicure", "spa", "makijaż"],
    examples: ["salony kosmetyczne", "barberzy", "fryzjerzy", "stylizacja paznokci"],
  },
  {
    id: "health",
    name: "Zdrowie i rehabilitacja",
    group: "Zdrowie i styl",
    keywords: ["lekarz", "dentysta", "fizjoterapia", "apteka", "psycholog", "rehabilitacja"],
    examples: ["przychodnie", "gabinety lekarskie", "stomatolodzy", "fizjoterapeuci"],
  },
  {
    id: "fitness",
    name: "Sport i fitness",
    group: "Zdrowie i styl",
    keywords: ["siłownia", "joga", "trener", "basen", "taniec", "sztuki walki"],
    examples: ["siłownie", "kluby sportowe", "trenerzy personalni", "szkoły tańca"],
  },
  {
    id: "automotive",
    name: "Motoryzacja",
    group: "Usługi codzienne",
    keywords: ["mechanik", "wulkanizacja", "myjnia", "auto", "diagnostyka", "lakiernik"],
    examples: ["mechanicy", "wulkanizacje", "myjnie", "stacje kontroli pojazdów"],
  },
  {
    id: "law",
    name: "Prawo i notariusze",
    group: "Profesjonaliści",
    keywords: ["prawnik", "radca", "adwokat", "notariusz", "mediacje"],
    examples: ["kancelarie prawne", "notariusze", "doradcy podatkowi", "mediatorzy"],
  },
  {
    id: "finance",
    name: "Finanse i księgowość",
    group: "Profesjonaliści",
    keywords: ["księgowa", "bank", "ubezpieczenia", "kredyt", "leasing", "biuro rachunkowe"],
    examples: ["biura rachunkowe", "ubezpieczenia", "doradcy kredytowi", "banki"],
  },
  {
    id: "real-estate",
    name: "Nieruchomości",
    group: "Dom i miasto",
    keywords: ["mieszkania", "domy", "pośrednik", "wycena", "zarządca"],
    examples: ["biura nieruchomości", "zarządcy wspólnot", "rzeczoznawcy"],
  },
  {
    id: "construction",
    name: "Budownictwo i remonty",
    group: "Dom i miasto",
    keywords: ["remont", "budowa", "elektryk", "hydraulik", "stolarz", "instalacje"],
    examples: ["firmy budowlane", "hydraulicy", "elektrycy", "stolarze", "dekarze"],
  },
  {
    id: "home-garden",
    name: "Dom, ogród i sprzątanie",
    group: "Dom i miasto",
    keywords: ["ogród", "sprzątanie", "meble", "pranie", "kominiarz", "dezynsekcja"],
    examples: ["ogrodnicy", "serwisy sprzątające", "meblarze", "kominiarze"],
  },
  {
    id: "education",
    name: "Edukacja i kursy",
    group: "Rodzina i edukacja",
    keywords: ["korepetycje", "języki", "szkoła", "kurs", "przedszkole", "nauka jazdy"],
    examples: ["szkoły językowe", "korepetytorzy", "żłobki", "szkoły jazdy"],
  },
  {
    id: "kids",
    name: "Dzieci i rodzina",
    group: "Rodzina i edukacja",
    keywords: ["dzieci", "animacje", "urodziny", "opieka", "zabawki", "logopeda"],
    examples: ["sale zabaw", "animatorzy", "logopedzi", "sklepy dziecięce"],
  },
  {
    id: "culture",
    name: "Kultura i rozrywka",
    group: "Czas wolny",
    keywords: ["kino", "teatr", "muzyka", "muzeum", "koncert", "warsztaty"],
    examples: ["instytucje kultury", "organizatorzy wydarzeń", "pracownie artystyczne"],
  },
  {
    id: "events",
    name: "Eventy i usługi ślubne",
    group: "Czas wolny",
    keywords: ["ślub", "fotograf", "dj", "dekoracje", "kwiaty", "wideo"],
    examples: ["fotografowie", "floryści", "DJ-e", "dekoratorzy", "sale bankietowe"],
  },
  {
    id: "pets",
    name: "Zwierzęta",
    group: "Usługi codzienne",
    keywords: ["weterynarz", "groomer", "karma", "hotel dla zwierząt", "szkolenie psów"],
    examples: ["weterynarze", "groomerzy", "sklepy zoologiczne", "behawioryści"],
  },
  {
    id: "retail",
    name: "Handel i sklepy",
    group: "Zakupy",
    keywords: ["sklep", "odzież", "spożywczy", "apteka", "elektronika", "market"],
    examples: ["sklepy spożywcze", "odzież", "elektronika", "kwiaciarnie", "księgarnie"],
  },
  {
    id: "it-marketing",
    name: "IT, marketing i media",
    group: "Profesjonaliści",
    keywords: ["strony www", "reklama", "druk", "social media", "serwis komputerowy"],
    examples: ["software house", "agencje marketingowe", "drukarnie", "serwisy IT"],
  },
  {
    id: "transport",
    name: "Transport i logistyka",
    group: "Usługi codzienne",
    keywords: ["taxi", "kurier", "przeprowadzki", "magazyn", "bus", "transport"],
    examples: ["taksówki", "przeprowadzki", "kurierzy", "transport osobowy"],
  },
  {
    id: "industry",
    name: "Produkcja i rzemiosło",
    group: "Biznes lokalny",
    keywords: ["produkcja", "ślusarz", "krawiec", "szewc", "metal", "rzemiosło"],
    examples: ["zakłady produkcyjne", "krawcy", "szewcy", "ślusarze", "tapicerzy"],
  },
  {
    id: "public",
    name: "Urzędy i organizacje",
    group: "Miasto",
    keywords: ["urząd", "ngo", "fundacja", "biblioteka", "pomoc", "instytucja"],
    examples: ["urzędy", "fundacje", "stowarzyszenia", "biblioteki", "punkty pomocy"],
  },
  {
    id: "energy-waste",
    name: "Energia, odpady i środowisko",
    group: "Miasto",
    keywords: ["fotowoltaika", "odpady", "recykling", "energia", "kanalizacja", "woda"],
    examples: ["fotowoltaika", "gospodarka odpadami", "instalacje OZE", "wod-kan"],
  },
];

export const businessPoints: BusinessPoint[] = [
  {
    id: "rynek-bistro",
    name: "Rynek Bistro",
    categoryId: "food",
    district: "Śródmieście",
    address: "Rynek 6",
    phone: "+48 32 000 10 10",
    tags: ["obiady", "kawa", "rodzinnie"],
    openNow: true,
    featured: true,
  },
  {
    id: "kawiarnia-zory",
    name: "Kawiarnia na Starówce",
    categoryId: "food",
    district: "Śródmieście",
    address: "ul. Moniuszki 3",
    phone: "+48 32 000 20 20",
    tags: ["desery", "spotkania", "wifi"],
    openNow: true,
  },
  {
    id: "beauty-lab",
    name: "Beauty Lab Żory",
    categoryId: "beauty",
    district: "Kleszczówka",
    address: "ul. Wodzisławska 12",
    phone: "+48 32 000 30 30",
    tags: ["manicure", "kosmetologia", "makijaż"],
    openNow: false,
    featured: true,
  },
  {
    id: "auto-serwis",
    name: "Auto Serwis Zachód",
    categoryId: "automotive",
    district: "Zachód",
    address: "al. Jana Pawła II 48",
    phone: "+48 32 000 40 40",
    tags: ["diagnostyka", "opony", "klimatyzacja"],
    openNow: true,
  },
  {
    id: "kancelaria-centrum",
    name: "Kancelaria Centrum",
    categoryId: "law",
    district: "Śródmieście",
    address: "ul. Szeptyckiego 9",
    phone: "+48 32 000 50 50",
    tags: ["prawo rodzinne", "umowy", "mediacje"],
    openNow: true,
  },
  {
    id: "fit-zory",
    name: "Fit Żory Studio",
    categoryId: "fitness",
    district: "Sikorskiego",
    address: "os. Sikorskiego 22",
    phone: "+48 32 000 60 60",
    tags: ["trening", "joga", "rehabilitacja ruchowa"],
    openNow: true,
  },
  {
    id: "remont-plus",
    name: "Remont Plus",
    categoryId: "construction",
    district: "Rogoźna",
    address: "ul. Rybnicka 71",
    phone: "+48 32 000 70 70",
    tags: ["wykończenia", "hydraulik", "elektryk"],
    openNow: false,
  },
  {
    id: "akademia-jezykowa",
    name: "Akademia Językowa 44",
    categoryId: "education",
    district: "Pawlikowskiego",
    address: "os. Pawlikowskiego 14",
    phone: "+48 32 000 80 80",
    tags: ["angielski", "ukraiński", "matura"],
    openNow: true,
  },
];

export const cityEvents: CityEvent[] = [
  {
    id: "majowka-park",
    title: "Rodzinny piknik w Parku Cegielnia",
    date: "2026-05-16",
    time: "12:00",
    place: "Park Cegielnia",
    category: "Rodzina",
    audience: "wszyscy",
  },
  {
    id: "koncert-mok",
    title: "Koncert lokalnych zespołów",
    date: "2026-05-22",
    time: "19:00",
    place: "MOK Żory",
    category: "Kultura",
    audience: "młodzież i dorośli",
  },
  {
    id: "targi-pracy",
    title: "Targi pracy i przedsiębiorczości",
    date: "2026-06-04",
    time: "10:00",
    place: "Hala sportowa MOSiR",
    category: "Biznes",
    audience: "dorośli",
  },
  {
    id: "warsztaty-uk",
    title: "Warsztaty integracyjne PL/UA",
    date: "2026-06-11",
    time: "17:30",
    place: "Biblioteka Centralna",
    category: "Społeczność",
    audience: "rodziny",
  },
];

export const editorialPosts: EditorialPost[] = [
  {
    id: "drogi-maj",
    title: "Weekendowe zmiany w organizacji ruchu",
    lead: "Miasto zapowiada czasowe objazdy w centrum podczas wydarzeń plenerowych.",
    category: "Komunikaty",
    date: "2026-05-09",
    status: "published",
  },
  {
    id: "nabor-ngo",
    title: "Nabór inicjatyw lokalnych na lato",
    lead: "Organizacje i grupy mieszkańców mogą zgłaszać projekty sąsiedzkie.",
    category: "Społeczność",
    date: "2026-05-08",
    status: "published",
  },
];

export const dictionary = {
  pl: {
    langLabel: "Polski",
    nav: ["Katalog", "Wydarzenia", "Aktualności", "Admin"],
    portalLabel: "Portal miejski",
    directoryLabel: "Katalog",
    eventsLabel: "Wydarzenia",
    adminLabel: "Admin",
    heroTitle: "Żory.info",
    heroLead:
      "Lokalny portal dla mieszkańców: wydarzenia, aktualności i szybka wyszukiwarka firm oraz usług w Żorach.",
    heroCta: "Przejdź do katalogu",
    stats: ["22 branże", "8 punktów demo", "3 języki", "dark mode"],
    directoryTitle: "Katalog miejsc i usług",
    directoryLead:
      "Szukaj po branży, dzielnicy, nazwie, tagach albo słowach typu mechanik, prawnik, beauty, obiad.",
    searchPlaceholder: "Szukaj usług, firm albo tagów",
    allCategories: "Wszystkie branże",
    openNow: "Otwarte teraz",
    featuredOnly: "Polecane",
    openStatus: "Otwarte",
    checkHours: "Sprawdź godziny",
    results: "wyników",
    noResults: "Brak wyników dla tych filtrów.",
    eventsTitle: "Kalendarz wydarzeń",
    eventsLead: "Najbliższe wydarzenia miejskie i społeczne w jednym miejscu.",
    postsTitle: "Aktualności",
    adminTitle: "Panel admina",
    adminLead: "Dodawanie postów jest przygotowane jako prototyp lokalny. Backend i autoryzacja są opisane w dokumentacji.",
    titleField: "Tytuł",
    leadField: "Lead",
    categoryField: "Kategoria",
    statusField: "Status",
    addPost: "Dodaj post",
    draft: "Szkic",
    published: "Opublikowany",
    theme: "Tryb",
    light: "Jasny",
    dark: "Ciemny",
    sourceNote:
      "Lista branż jest szkieletem katalogu opartym o typowe potrzeby mieszkańców i sekcje PKD 2025.",
  },
  en: {
    langLabel: "English",
    nav: ["Directory", "Events", "News", "Admin"],
    portalLabel: "City portal",
    directoryLabel: "Directory",
    eventsLabel: "Events",
    adminLabel: "Admin",
    heroTitle: "Żory.info",
    heroLead:
      "A local city portal for residents: events, news, and a fast search for companies and services in Żory.",
    heroCta: "Open directory",
    stats: ["22 sectors", "8 demo places", "3 languages", "dark mode"],
    directoryTitle: "Places and services directory",
    directoryLead:
      "Search by sector, district, name, tags, or terms like mechanic, lawyer, beauty, lunch.",
    searchPlaceholder: "Search services, companies, or tags",
    allCategories: "All sectors",
    openNow: "Open now",
    featuredOnly: "Featured",
    openStatus: "Open",
    checkHours: "Check hours",
    results: "results",
    noResults: "No results for these filters.",
    eventsTitle: "Event calendar",
    eventsLead: "Upcoming city and community events in one place.",
    postsTitle: "News",
    adminTitle: "Admin panel",
    adminLead: "Post creation is prepared as a local prototype. Backend and authorization are documented.",
    titleField: "Title",
    leadField: "Lead",
    categoryField: "Category",
    statusField: "Status",
    addPost: "Add post",
    draft: "Draft",
    published: "Published",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    sourceNote:
      "The sector list is a directory scaffold based on resident needs and PKD 2025 sections.",
  },
  uk: {
    langLabel: "Українська",
    nav: ["Каталог", "Події", "Новини", "Адмін"],
    portalLabel: "Міський портал",
    directoryLabel: "Каталог",
    eventsLabel: "Події",
    adminLabel: "Адмін",
    heroTitle: "Żory.info",
    heroLead:
      "Міський портал для мешканців: події, новини та швидкий пошук компаній і послуг у Жорах.",
    heroCta: "Відкрити каталог",
    stats: ["22 галузі", "8 демо-місць", "3 мови", "темний режим"],
    directoryTitle: "Каталог місць і послуг",
    directoryLead:
      "Шукайте за галуззю, районом, назвою, тегами або словами на кшталт механік, юрист, beauty, обід.",
    searchPlaceholder: "Шукати послуги, компанії або теги",
    allCategories: "Усі галузі",
    openNow: "Відкрито зараз",
    featuredOnly: "Рекомендовані",
    openStatus: "Відкрито",
    checkHours: "Перевірте години",
    results: "результатів",
    noResults: "Немає результатів для цих фільтрів.",
    eventsTitle: "Календар подій",
    eventsLead: "Найближчі міські та громадські події в одному місці.",
    postsTitle: "Новини",
    adminTitle: "Адмін-панель",
    adminLead: "Додавання постів підготовлено як локальний прототип. Backend і авторизацію описано в документації.",
    titleField: "Заголовок",
    leadField: "Опис",
    categoryField: "Категорія",
    statusField: "Статус",
    addPost: "Додати пост",
    draft: "Чернетка",
    published: "Опубліковано",
    theme: "Режим",
    light: "Світлий",
    dark: "Темний",
    sourceNote:
      "Список галузей є каркасом каталогу на основі потреб мешканців і секцій PKD 2025.",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getCategory(categoryId: string) {
  return businessCategories.find((category) => category.id === categoryId);
}
