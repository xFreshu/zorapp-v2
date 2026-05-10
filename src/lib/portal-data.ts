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
  sourceUrl?: string;
};

export type CityEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  category: string;
  audience: string;
  sourceUrl?: string;
};

export type FreeBusLine = {
  id: string;
  route: string;
  validFrom: string;
  scheduleUrl: string;
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
    name: "Food and dining",
    group: "Food and stays",
    keywords: ["restaurants", "cafes", "pizza", "catering", "bars", "bakeries"],
    examples: ["restaurants", "cafes", "food trucks", "bakeries", "catering"],
  },
  {
    id: "accommodation",
    name: "Accommodation and tourism",
    group: "Food and stays",
    keywords: ["hotel", "apartments", "stays", "tourism", "trips"],
    examples: ["hotels", "apartments", "travel agencies", "tourist information"],
  },
  {
    id: "beauty",
    name: "Beauty and hair",
    group: "Health and style",
    keywords: ["beautician", "hairdresser", "barber", "manicure", "spa", "makeup"],
    examples: ["beauty salons", "barbers", "hairdressers", "nail styling"],
  },
  {
    id: "health",
    name: "Health and rehabilitation",
    group: "Health and style",
    keywords: ["doctor", "dentist", "physiotherapy", "pharmacy", "psychologist", "rehabilitation"],
    examples: ["clinics", "medical offices", "dentists", "physiotherapists"],
  },
  {
    id: "fitness",
    name: "Sports and fitness",
    group: "Health and style",
    keywords: ["gym", "yoga", "trainer", "pool", "dance", "martial arts"],
    examples: ["gyms", "sports clubs", "personal trainers", "dance schools"],
  },
  {
    id: "automotive",
    name: "Automotive",
    group: "Everyday services",
    keywords: ["mechanic", "tires", "car wash", "car", "diagnostics", "paint shop"],
    examples: ["mechanics", "tire services", "car washes", "vehicle inspection stations"],
  },
  {
    id: "law",
    name: "Law and notaries",
    group: "Professional services",
    keywords: ["lawyer", "attorney", "legal counsel", "notary", "mediation"],
    examples: ["law offices", "notaries", "tax advisors", "mediators"],
  },
  {
    id: "finance",
    name: "Finance and accounting",
    group: "Professional services",
    keywords: ["accountant", "bank", "insurance", "credit", "leasing", "accounting office"],
    examples: ["accounting offices", "insurance agencies", "credit advisors", "banks"],
  },
  {
    id: "real-estate",
    name: "Real estate",
    group: "Home and city",
    keywords: ["apartments", "houses", "agent", "valuation", "property manager"],
    examples: ["real estate agencies", "property managers", "valuers"],
  },
  {
    id: "construction",
    name: "Construction and renovation",
    group: "Home and city",
    keywords: ["renovation", "construction", "electrician", "plumber", "carpenter", "installations"],
    examples: ["construction companies", "plumbers", "electricians", "carpenters", "roofers"],
  },
  {
    id: "home-garden",
    name: "Home, garden, and cleaning",
    group: "Home and city",
    keywords: ["garden", "cleaning", "furniture", "laundry", "chimney sweep", "pest control"],
    examples: ["gardeners", "cleaning services", "furniture makers", "chimney sweeps"],
  },
  {
    id: "education",
    name: "Education and courses",
    group: "Family and education",
    keywords: ["tutoring", "languages", "school", "course", "preschool", "driving lessons"],
    examples: ["language schools", "tutors", "nurseries", "driving schools"],
  },
  {
    id: "kids",
    name: "Kids and family",
    group: "Family and education",
    keywords: ["kids", "animation", "birthdays", "care", "toys", "speech therapy"],
    examples: ["playrooms", "children's entertainers", "speech therapists", "kids stores"],
  },
  {
    id: "culture",
    name: "Culture and entertainment",
    group: "Leisure",
    keywords: ["cinema", "theater", "music", "museum", "concert", "workshops"],
    examples: ["cultural institutions", "event organizers", "art studios"],
  },
  {
    id: "events",
    name: "Events and wedding services",
    group: "Leisure",
    keywords: ["wedding", "photographer", "dj", "decorations", "flowers", "video"],
    examples: ["photographers", "florists", "DJs", "decorators", "banquet halls"],
  },
  {
    id: "pets",
    name: "Pets",
    group: "Everyday services",
    keywords: ["vet", "groomer", "pet food", "pet hotel", "dog training"],
    examples: ["veterinarians", "groomers", "pet stores", "behaviorists"],
  },
  {
    id: "retail",
    name: "Retail and shops",
    group: "Shopping",
    keywords: ["store", "clothing", "grocery", "pharmacy", "electronics", "market"],
    examples: ["grocery stores", "clothing", "electronics", "florists", "bookstores"],
  },
  {
    id: "it-marketing",
    name: "IT, marketing, and media",
    group: "Professional services",
    keywords: ["websites", "advertising", "printing", "social media", "computer service"],
    examples: ["software houses", "marketing agencies", "print shops", "IT services"],
  },
  {
    id: "transport",
    name: "Transport and logistics",
    group: "Everyday services",
    keywords: ["taxi", "courier", "moving", "warehouse", "bus", "transport"],
    examples: ["taxis", "moving services", "couriers", "passenger transport"],
  },
  {
    id: "industry",
    name: "Manufacturing and crafts",
    group: "Local business",
    keywords: ["manufacturing", "locksmith", "tailor", "shoemaker", "metal", "crafts"],
    examples: ["manufacturing plants", "tailors", "shoemakers", "locksmiths", "upholsterers"],
  },
  {
    id: "public",
    name: "Public offices and organizations",
    group: "City",
    keywords: ["office", "ngo", "foundation", "library", "support", "institution"],
    examples: ["public offices", "foundations", "associations", "libraries", "support points"],
  },
  {
    id: "energy-waste",
    name: "Energy, waste, and environment",
    group: "City",
    keywords: ["solar", "waste", "recycling", "energy", "sewage", "water"],
    examples: ["solar panels", "waste management", "renewable energy systems", "water and sewage"],
  },
];

type BusinessCategoryText = Pick<BusinessCategory, "name" | "group" | "keywords" | "examples">;

const categoryTranslations: Record<Locale, Partial<Record<string, BusinessCategoryText>>> = {
  en: {},
  pl: {
    food: {
      name: "Gastronomia",
      group: "Jedzenie i noclegi",
      keywords: ["restauracje", "kawiarnie", "pizza", "catering", "bary", "piekarnie"],
      examples: ["restauracje", "kawiarnie", "food trucki", "piekarnie", "catering"],
    },
    accommodation: {
      name: "Noclegi i turystyka",
      group: "Jedzenie i noclegi",
      keywords: ["hotel", "apartamenty", "noclegi", "turystyka", "wycieczki"],
      examples: ["hotele", "apartamenty", "biura podróży", "informacja turystyczna"],
    },
    beauty: {
      name: "Uroda i fryzjerstwo",
      group: "Zdrowie i styl",
      keywords: ["kosmetyczka", "fryzjer", "barber", "manicure", "spa", "makijaż"],
      examples: ["salony urody", "barberzy", "fryzjerzy", "stylizacja paznokci"],
    },
    health: {
      name: "Zdrowie i rehabilitacja",
      group: "Zdrowie i styl",
      keywords: ["lekarz", "dentysta", "fizjoterapia", "apteka", "psycholog", "rehabilitacja"],
      examples: ["przychodnie", "gabinety lekarskie", "dentyści", "fizjoterapeuci"],
    },
    fitness: {
      name: "Sport i fitness",
      group: "Zdrowie i styl",
      keywords: ["siłownia", "joga", "trener", "basen", "taniec", "sztuki walki"],
      examples: ["siłownie", "kluby sportowe", "trenerzy personalni", "szkoły tańca"],
    },
    automotive: {
      name: "Motoryzacja",
      group: "Usługi codzienne",
      keywords: ["mechanik", "opony", "myjnia", "samochód", "diagnostyka", "lakiernia"],
      examples: ["mechanicy", "wulkanizacja", "myjnie", "stacje kontroli pojazdów"],
    },
    law: {
      name: "Prawo i notariusze",
      group: "Usługi profesjonalne",
      keywords: ["prawnik", "adwokat", "radca prawny", "notariusz", "mediacje"],
      examples: ["kancelarie prawne", "notariusze", "doradcy podatkowi", "mediatorzy"],
    },
    finance: {
      name: "Finanse i księgowość",
      group: "Usługi profesjonalne",
      keywords: ["księgowa", "bank", "ubezpieczenia", "kredyt", "leasing", "biuro rachunkowe"],
      examples: ["biura rachunkowe", "agencje ubezpieczeniowe", "doradcy kredytowi", "banki"],
    },
    "real-estate": {
      name: "Nieruchomości",
      group: "Dom i miasto",
      keywords: ["mieszkania", "domy", "agent", "wycena", "zarządca nieruchomości"],
      examples: ["agencje nieruchomości", "zarządcy", "rzeczoznawcy"],
    },
    construction: {
      name: "Budowa i remont",
      group: "Dom i miasto",
      keywords: ["remont", "budowa", "elektryk", "hydraulik", "stolarz", "instalacje"],
      examples: ["firmy budowlane", "hydraulicy", "elektrycy", "stolarze", "dekarze"],
    },
    "home-garden": {
      name: "Dom, ogród i sprzątanie",
      group: "Dom i miasto",
      keywords: ["ogród", "sprzątanie", "meble", "pralnia", "kominiarz", "dezynsekcja"],
      examples: ["ogrodnicy", "firmy sprzątające", "stolarze meblowi", "kominiarze"],
    },
    education: {
      name: "Edukacja i kursy",
      group: "Rodzina i edukacja",
      keywords: ["korepetycje", "języki", "szkoła", "kurs", "przedszkole", "nauka jazdy"],
      examples: ["szkoły językowe", "korepetytorzy", "żłobki", "szkoły jazdy"],
    },
    kids: {
      name: "Dzieci i rodzina",
      group: "Rodzina i edukacja",
      keywords: ["dzieci", "animacje", "urodziny", "opieka", "zabawki", "logopeda"],
      examples: ["sale zabaw", "animatorzy", "logopedzi", "sklepy dziecięce"],
    },
    culture: {
      name: "Kultura i rozrywka",
      group: "Czas wolny",
      keywords: ["kino", "teatr", "muzyka", "muzeum", "koncert", "warsztaty"],
      examples: ["instytucje kultury", "organizatorzy wydarzeń", "pracownie artystyczne"],
    },
    events: {
      name: "Wydarzenia i śluby",
      group: "Czas wolny",
      keywords: ["ślub", "fotograf", "dj", "dekoracje", "kwiaty", "wideo"],
      examples: ["fotografowie", "floryści", "DJ-e", "dekoratorzy", "sale bankietowe"],
    },
    pets: {
      name: "Zwierzęta",
      group: "Usługi codzienne",
      keywords: ["weterynarz", "groomer", "karma", "hotel dla zwierząt", "szkolenie psów"],
      examples: ["weterynarze", "groomerzy", "sklepy zoologiczne", "behawioryści"],
    },
    retail: {
      name: "Handel i sklepy",
      group: "Zakupy",
      keywords: ["sklep", "odzież", "spożywczy", "apteka", "elektronika", "targ"],
      examples: ["sklepy spożywcze", "odzież", "elektronika", "kwiaciarnie", "księgarnie"],
    },
    "it-marketing": {
      name: "IT, marketing i media",
      group: "Usługi profesjonalne",
      keywords: ["strony internetowe", "reklama", "druk", "social media", "serwis komputerowy"],
      examples: ["software house'y", "agencje marketingowe", "drukarnie", "usługi IT"],
    },
    transport: {
      name: "Transport i logistyka",
      group: "Usługi codzienne",
      keywords: ["taxi", "kurier", "przeprowadzki", "magazyn", "bus", "transport"],
      examples: ["taksówki", "przeprowadzki", "kurierzy", "przewozy osób"],
    },
    industry: {
      name: "Produkcja i rzemiosło",
      group: "Lokalny biznes",
      keywords: ["produkcja", "ślusarz", "krawiec", "szewc", "metal", "rzemiosło"],
      examples: ["zakłady produkcyjne", "krawcy", "szewcy", "ślusarze", "tapicerzy"],
    },
    public: {
      name: "Urzędy i organizacje",
      group: "Miasto",
      keywords: ["urząd", "ngo", "fundacja", "biblioteka", "wsparcie", "instytucja"],
      examples: ["urzędy", "fundacje", "stowarzyszenia", "biblioteki", "punkty wsparcia"],
    },
    "energy-waste": {
      name: "Energia, odpady i środowisko",
      group: "Miasto",
      keywords: ["fotowoltaika", "odpady", "recykling", "energia", "kanalizacja", "woda"],
      examples: ["panele solarne", "gospodarka odpadami", "OZE", "wodociągi i kanalizacja"],
    },
  },
  uk: {
    food: {
      name: "Їжа та ресторани",
      group: "Їжа і проживання",
      keywords: ["ресторани", "кав'ярні", "піца", "кейтеринг", "бари", "пекарні"],
      examples: ["ресторани", "кав'ярні", "фудтраки", "пекарні", "кейтеринг"],
    },
    accommodation: {
      name: "Проживання і туризм",
      group: "Їжа і проживання",
      keywords: ["готель", "апартаменти", "проживання", "туризм", "екскурсії"],
      examples: ["готелі", "апартаменти", "туристичні агенції", "туристична інформація"],
    },
    beauty: {
      name: "Краса і перукарні",
      group: "Здоров'я і стиль",
      keywords: ["косметолог", "перукар", "барбер", "манікюр", "спа", "макіяж"],
      examples: ["салони краси", "барбери", "перукарні", "нігтьовий сервіс"],
    },
    health: {
      name: "Здоров'я і реабілітація",
      group: "Здоров'я і стиль",
      keywords: ["лікар", "стоматолог", "фізіотерапія", "аптека", "психолог", "реабілітація"],
      examples: ["клініки", "медичні кабінети", "стоматологи", "фізіотерапевти"],
    },
    fitness: {
      name: "Спорт і фітнес",
      group: "Здоров'я і стиль",
      keywords: ["спортзал", "йога", "тренер", "басейн", "танці", "єдиноборства"],
      examples: ["спортзали", "спортивні клуби", "персональні тренери", "школи танців"],
    },
    automotive: {
      name: "Автомобілі",
      group: "Щоденні послуги",
      keywords: ["механік", "шини", "мийка", "авто", "діагностика", "фарбування"],
      examples: ["автомеханіки", "шиномонтаж", "автомийки", "станції техогляду"],
    },
    law: {
      name: "Право і нотаріуси",
      group: "Професійні послуги",
      keywords: ["юрист", "адвокат", "правник", "нотаріус", "медіація"],
      examples: ["юридичні фірми", "нотаріуси", "податкові радники", "медіатори"],
    },
    finance: {
      name: "Фінанси і бухгалтерія",
      group: "Професійні послуги",
      keywords: ["бухгалтер", "банк", "страхування", "кредит", "лізинг", "бухгалтерія"],
      examples: ["бухгалтерські офіси", "страхові агенції", "кредитні радники", "банки"],
    },
    "real-estate": {
      name: "Нерухомість",
      group: "Дім і місто",
      keywords: ["квартири", "будинки", "агент", "оцінка", "управління нерухомістю"],
      examples: ["агенції нерухомості", "управителі", "оцінювачі"],
    },
    construction: {
      name: "Будівництво і ремонт",
      group: "Дім і місто",
      keywords: ["ремонт", "будівництво", "електрик", "сантехнік", "столяр", "інсталяції"],
      examples: ["будівельні компанії", "сантехніки", "електрики", "столяри", "покрівельники"],
    },
    "home-garden": {
      name: "Дім, сад і прибирання",
      group: "Дім і місто",
      keywords: ["сад", "прибирання", "меблі", "пральня", "сажотрус", "дезінсекція"],
      examples: ["садівники", "клінінгові компанії", "меблярі", "сажотруси"],
    },
    education: {
      name: "Освіта і курси",
      group: "Сім'я і освіта",
      keywords: ["репетиторство", "мови", "школа", "курс", "дитсадок", "водіння"],
      examples: ["мовні школи", "репетитори", "ясла", "автошколи"],
    },
    kids: {
      name: "Діти і сім'я",
      group: "Сім'я і освіта",
      keywords: ["діти", "анімація", "дні народження", "догляд", "іграшки", "логопед"],
      examples: ["ігрові кімнати", "аніматори", "логопеди", "дитячі магазини"],
    },
    culture: {
      name: "Культура і розваги",
      group: "Дозвілля",
      keywords: ["кіно", "театр", "музика", "музей", "концерт", "майстер-класи"],
      examples: ["культурні установи", "організатори подій", "мистецькі студії"],
    },
    events: {
      name: "Події та весілля",
      group: "Дозвілля",
      keywords: ["весілля", "фотограф", "dj", "декорації", "квіти", "відео"],
      examples: ["фотографи", "флористи", "DJ", "декоратори", "банкетні зали"],
    },
    pets: {
      name: "Тварини",
      group: "Щоденні послуги",
      keywords: ["ветеринар", "грумер", "корм", "готель для тварин", "дресирування"],
      examples: ["ветеринари", "грумери", "зоомагазини", "зоопсихологи"],
    },
    retail: {
      name: "Торгівля і магазини",
      group: "Покупки",
      keywords: ["магазин", "одяг", "продукти", "аптека", "електроніка", "ринок"],
      examples: ["продуктові магазини", "одяг", "електроніка", "квіткові магазини", "книгарні"],
    },
    "it-marketing": {
      name: "IT, маркетинг і медіа",
      group: "Професійні послуги",
      keywords: ["сайти", "реклама", "друк", "соцмережі", "комп'ютерний сервіс"],
      examples: ["software house", "маркетингові агенції", "друкарні", "IT-послуги"],
    },
    transport: {
      name: "Транспорт і логістика",
      group: "Щоденні послуги",
      keywords: ["таксі", "кур'єр", "переїзд", "склад", "автобус", "транспорт"],
      examples: ["таксі", "переїзди", "кур'єри", "пасажирські перевезення"],
    },
    industry: {
      name: "Виробництво і ремесла",
      group: "Місцевий бізнес",
      keywords: ["виробництво", "слюсар", "кравець", "швець", "метал", "ремесло"],
      examples: ["виробничі підприємства", "кравці", "шевці", "слюсарі", "оббивники"],
    },
    public: {
      name: "Установи і організації",
      group: "Місто",
      keywords: ["уряд", "ngo", "фундація", "бібліотека", "підтримка", "установа"],
      examples: ["міські установи", "фонди", "асоціації", "бібліотеки", "пункти підтримки"],
    },
    "energy-waste": {
      name: "Енергія, відходи і довкілля",
      group: "Місто",
      keywords: ["сонячні панелі", "відходи", "переробка", "енергія", "каналізація", "вода"],
      examples: ["сонячні панелі", "управління відходами", "відновлювана енергія", "водопостачання"],
    },
  },
};

export const businessPoints: BusinessPoint[] = [
  {
    id: "rynek-bistro",
    name: "Market Square Bistro",
    categoryId: "food",
    district: "City Center",
    address: "Market Square 6",
    phone: "+48 32 000 10 10",
    tags: ["lunch", "coffee", "family friendly"],
    openNow: true,
    featured: true,
  },
  {
    id: "kawiarnia-zory",
    name: "Old Town Cafe",
    categoryId: "food",
    district: "City Center",
    address: "Moniuszki Street 3",
    phone: "+48 32 000 20 20",
    tags: ["desserts", "meetups", "wifi"],
    openNow: true,
  },
  {
    id: "pod-arkadami",
    name: "Pod Arkadami Restaurant",
    categoryId: "food",
    district: "City Center",
    address: "Dolne Przedmiescie 1",
    phone: "+48 32 434 24 91",
    tags: ["Polish cuisine", "catering", "dinner"],
    openNow: true,
    featured: true,
    sourceUrl: "https://pod-arkadami-restauracja.eatbu.com/",
  },
  {
    id: "restauracja-zorska",
    name: "Restauracja Zorska",
    categoryId: "food",
    district: "City Center",
    address: "Rynek 15",
    phone: "+48 602 775 743",
    tags: ["restaurant", "Polish cuisine", "market square"],
    openNow: true,
    sourceUrl: "https://restauracjazorska.pl/",
  },
  {
    id: "restauracja-szeroka",
    name: "Restauracja Szeroka",
    categoryId: "food",
    district: "Szeroka",
    address: "Szeroka 22",
    phone: "+48 570 110 490",
    tags: ["restaurant", "family", "dinner"],
    openNow: true,
    sourceUrl: "https://restauracjaszeroka.pl/",
  },
  {
    id: "la-terra",
    name: "La Terra Aperitivo",
    categoryId: "food",
    district: "City Center",
    address: "Rynek 4",
    phone: "+48 530 802 502",
    tags: ["Mediterranean", "aperitivo", "evening"],
    openNow: true,
    sourceUrl: "https://laterrazory.pl/",
  },
  {
    id: "centrum-smakow",
    name: "Centrum Smakow Bistro",
    categoryId: "food",
    district: "City Center",
    address: "Meczennikow Oswiecimskich 20A",
    phone: "N/A",
    tags: ["breakfast", "bistro", "sandwiches"],
    openNow: true,
    sourceUrl: "https://centrum-smakow.pl/",
  },
  {
    id: "beauty-lab",
    name: "Beauty Lab Zory",
    categoryId: "beauty",
    district: "Kleszczowka",
    address: "Wodzislawska Street 12",
    phone: "+48 32 000 30 30",
    tags: ["manicure", "cosmetology", "makeup"],
    openNow: false,
    featured: true,
  },
  {
    id: "roma-studio",
    name: "Roma Studio Urody",
    categoryId: "beauty",
    district: "Pszczynska",
    address: "Pszczynska 99",
    phone: "N/A",
    tags: ["beauty salon", "cosmetics", "care"],
    openNow: true,
    featured: true,
    sourceUrl: "https://cityon.pl/miejsce/roma-studio-urody-pszczynska-99-zory",
  },
  {
    id: "bs-beauty",
    name: "BS Beauty Studio",
    categoryId: "beauty",
    district: "City Center",
    address: "Wodzislawska 6A",
    phone: "N/A",
    tags: ["beauty salon", "cosmetics", "manicure"],
    openNow: true,
    sourceUrl: "https://www.pkt.pl/firma/bs-beauty-studio-4354578",
  },
  {
    id: "sun-studio",
    name: "Sun Studio Sonia Gorecka",
    categoryId: "beauty",
    district: "City Center",
    address: "Al. Niepodleglosci 3",
    phone: "N/A",
    tags: ["beauty salon", "solarium", "care"],
    openNow: true,
    sourceUrl: "https://cityon.pl/miejsce/sun-studio-sonia-gorecka-al-niepodleglosci-3-zory",
  },
  {
    id: "auto-serwis",
    name: "West Auto Service",
    categoryId: "automotive",
    district: "West",
    address: "John Paul II Avenue 48",
    phone: "+48 32 000 40 40",
    tags: ["diagnostics", "tires", "air conditioning"],
    openNow: true,
  },
  {
    id: "kancelaria-centrum",
    name: "Central Law Office",
    categoryId: "law",
    district: "City Center",
    address: "Szeptyckiego Street 9",
    phone: "+48 32 000 50 50",
    tags: ["family law", "contracts", "mediation"],
    openNow: true,
  },
  {
    id: "fit-zory",
    name: "Fit Zory Studio",
    categoryId: "fitness",
    district: "Sikorskiego",
    address: "Sikorskiego Estate 22",
    phone: "+48 32 000 60 60",
    tags: ["training", "yoga", "movement rehabilitation"],
    openNow: true,
  },
  {
    id: "remont-plus",
    name: "Renovation Plus",
    categoryId: "construction",
    district: "Rogozna",
    address: "Rybnicka Street 71",
    phone: "+48 32 000 70 70",
    tags: ["finishing works", "plumbing", "electrical"],
    openNow: false,
  },
  {
    id: "akademia-jezykowa",
    name: "Language Academy 44",
    categoryId: "education",
    district: "Pawlikowskiego",
    address: "Pawlikowskiego Estate 14",
    phone: "+48 32 000 80 80",
    tags: ["English", "Ukrainian", "exam prep"],
    openNow: true,
  },
];

type BusinessPointText = Pick<BusinessPoint, "name" | "district" | "address" | "tags">;

const businessPointTranslations: Record<Locale, Partial<Record<string, BusinessPointText>>> = {
  en: {},
  pl: {
    "rynek-bistro": {
      name: "Bistro przy Rynku",
      district: "Centrum",
      address: "Rynek 6",
      tags: ["lunch", "kawa", "dla rodzin"],
    },
    "kawiarnia-zory": {
      name: "Kawiarnia Stare Miasto",
      district: "Centrum",
      address: "ul. Moniuszki 3",
      tags: ["desery", "spotkania", "wifi"],
    },
    "pod-arkadami": {
      name: "Restauracja Pod Arkadami",
      district: "Centrum",
      address: "Dolne Przedmieście 1",
      tags: ["kuchnia polska", "catering", "kolacja"],
    },
    "restauracja-zorska": {
      name: "Restauracja Żorska",
      district: "Centrum",
      address: "Rynek 15",
      tags: ["restauracja", "kuchnia polska", "rynek"],
    },
    "restauracja-szeroka": {
      name: "Restauracja Szeroka",
      district: "Szeroka",
      address: "Szeroka 22",
      tags: ["restauracja", "rodzinnie", "kolacja"],
    },
    "la-terra": {
      name: "La Terra Aperitivo",
      district: "Centrum",
      address: "Rynek 4",
      tags: ["śródziemnomorskie", "aperitivo", "wieczór"],
    },
    "centrum-smakow": {
      name: "Centrum Smaków Bistro",
      district: "Centrum",
      address: "ul. Męczenników Oświęcimskich 20A",
      tags: ["śniadania", "bistro", "kanapki"],
    },
    "beauty-lab": {
      name: "Beauty Lab Żory",
      district: "Kleszczówka",
      address: "ul. Wodzisławska 12",
      tags: ["manicure", "kosmetologia", "makijaż"],
    },
    "roma-studio": {
      name: "Roma Studio Urody",
      district: "Pszczyńska",
      address: "ul. Pszczyńska 99",
      tags: ["salon urody", "kosmetyka", "pielęgnacja"],
    },
    "bs-beauty": {
      name: "BS Beauty Studio",
      district: "Centrum",
      address: "ul. Wodzisławska 6A",
      tags: ["salon urody", "kosmetyka", "manicure"],
    },
    "sun-studio": {
      name: "Sun Studio Sonia Górecka",
      district: "Centrum",
      address: "al. Niepodległości 3",
      tags: ["salon urody", "solarium", "pielęgnacja"],
    },
    "auto-serwis": {
      name: "West Auto Serwis",
      district: "Zachód",
      address: "al. Jana Pawła II 48",
      tags: ["diagnostyka", "opony", "klimatyzacja"],
    },
    "kancelaria-centrum": {
      name: "Kancelaria Centrum",
      district: "Centrum",
      address: "ul. Szeptyckiego 9",
      tags: ["prawo rodzinne", "umowy", "mediacje"],
    },
    "fit-zory": {
      name: "Fit Żory Studio",
      district: "Sikorskiego",
      address: "os. Sikorskiego 22",
      tags: ["trening", "joga", "rehabilitacja ruchowa"],
    },
    "remont-plus": {
      name: "Remont Plus",
      district: "Rogoźna",
      address: "ul. Rybnicka 71",
      tags: ["wykończenia", "hydraulika", "elektryka"],
    },
    "akademia-jezykowa": {
      name: "Akademia Językowa 44",
      district: "Pawlikowskiego",
      address: "os. Pawlikowskiego 14",
      tags: ["angielski", "ukraiński", "egzaminy"],
    },
  },
  uk: {
    "rynek-bistro": {
      name: "Бістро біля Ринку",
      district: "Центр",
      address: "Ринок 6",
      tags: ["обід", "кава", "для сімей"],
    },
    "kawiarnia-zory": {
      name: "Кав'ярня Старе Місто",
      district: "Центр",
      address: "вул. Монюшки 3",
      tags: ["десерти", "зустрічі", "wifi"],
    },
    "pod-arkadami": {
      name: "Ресторан Pod Arkadami",
      district: "Центр",
      address: "Dolne Przedmieście 1",
      tags: ["польська кухня", "кейтеринг", "вечеря"],
    },
    "restauracja-zorska": {
      name: "Restauracja Żorska",
      district: "Центр",
      address: "Ринок 15",
      tags: ["ресторан", "польська кухня", "ринок"],
    },
    "restauracja-szeroka": {
      name: "Restauracja Szeroka",
      district: "Szeroka",
      address: "Szeroka 22",
      tags: ["ресторан", "для сімей", "вечеря"],
    },
    "la-terra": {
      name: "La Terra Aperitivo",
      district: "Центр",
      address: "Ринок 4",
      tags: ["середземноморська кухня", "аперитив", "вечір"],
    },
    "centrum-smakow": {
      name: "Centrum Smaków Bistro",
      district: "Центр",
      address: "вул. Męczenników Oświęcimskich 20A",
      tags: ["сніданки", "бістро", "сендвічі"],
    },
    "beauty-lab": {
      name: "Beauty Lab Жори",
      district: "Клешчувка",
      address: "вул. Водзіславська 12",
      tags: ["манікюр", "косметологія", "макіяж"],
    },
    "roma-studio": {
      name: "Roma Studio Urody",
      district: "Pszczyńska",
      address: "вул. Pszczyńska 99",
      tags: ["салон краси", "косметологія", "догляд"],
    },
    "bs-beauty": {
      name: "BS Beauty Studio",
      district: "Центр",
      address: "вул. Wodzisławska 6A",
      tags: ["салон краси", "косметологія", "манікюр"],
    },
    "sun-studio": {
      name: "Sun Studio Sonia Górecka",
      district: "Центр",
      address: "алея Niepodległości 3",
      tags: ["салон краси", "солярій", "догляд"],
    },
    "auto-serwis": {
      name: "West Auto Сервіс",
      district: "Захід",
      address: "алея Яна Павла II 48",
      tags: ["діагностика", "шини", "кондиціонер"],
    },
    "kancelaria-centrum": {
      name: "Юридична фірма Центр",
      district: "Центр",
      address: "вул. Шептицького 9",
      tags: ["сімейне право", "договори", "медіація"],
    },
    "fit-zory": {
      name: "Fit Жори Studio",
      district: "Сікорського",
      address: "ос. Сікорського 22",
      tags: ["тренування", "йога", "рухова реабілітація"],
    },
    "remont-plus": {
      name: "Ремонт Plus",
      district: "Рогозна",
      address: "вул. Рибницька 71",
      tags: ["оздоблення", "сантехніка", "електрика"],
    },
    "akademia-jezykowa": {
      name: "Мовна Академія 44",
      district: "Павліковського",
      address: "ос. Павліковського 14",
      tags: ["англійська", "українська", "іспити"],
    },
  },
};

export const cityEvents: CityEvent[] = [
  {
    id: "bieg-nadziei",
    title: "VIII Charity Run of Hope in Zory",
    description:
      "A morning charity run and walk supporting the local hospice, planned as a city event for active residents and families.",
    date: "2026-05-17",
    time: "08:00",
    place: "Zory",
    category: "Sport",
    audience: "everyone",
    sourceUrl: "https://portalzory.pl/",
  },
  {
    id: "disney-concert",
    title: "Disney music concert",
    description:
      "A family concert with well-known songs from Disney films, prepared for children, parents, and anyone looking for a lighter cultural evening.",
    date: "2026-05-22",
    time: "18:00",
    place: "Zory",
    category: "Culture",
    audience: "families",
    sourceUrl: "https://portalzory.pl/",
  },
  {
    id: "scena-ogniowa",
    title: "5th Zory Fire Stage",
    description:
      "An outdoor meeting around fire arts and local performance, built around the idea of sharing warmth with the city community.",
    date: "2026-05-23",
    time: "15:00",
    place: "Zory",
    category: "Culture",
    audience: "everyone",
    sourceUrl: "https://portalzory.pl/",
  },
  {
    id: "rebeka-tango",
    title: "Rebeka dances tango",
    description:
      "A musical story rooted in Polish tango, performed with live music and aimed at viewers who like theater, dance, and city culture.",
    date: "2026-05-24",
    time: "17:00",
    place: "Zory",
    category: "Theater",
    audience: "adults",
    sourceUrl: "https://portalzory.pl/",
  },
  {
    id: "standup-bomba",
    title: "Stand-up Bomba: Kowalski & Zalewski",
    description:
      "An evening comedy show with Kowalski and Zalewski for adult audiences looking for a sharp, informal stage format.",
    date: "2026-05-25",
    time: "19:00",
    place: "Zory",
    category: "Comedy",
    audience: "adults",
    sourceUrl: "https://portalzory.pl/",
  },
  {
    id: "twinpigs-country",
    title: "TWINPIGS Country Festival 2026",
    description:
      "A country music event in the western setting of Twinpigs, designed as an open-air weekend attraction for families and music fans.",
    date: "2026-06-20",
    time: "17:00",
    place: "Twinpigs",
    category: "Music",
    audience: "families",
    sourceUrl: "https://portalzory.pl/",
  },
];

type CityEventText = Pick<CityEvent, "title" | "description" | "time" | "place" | "category" | "audience">;

const cityEventTranslations: Record<Locale, Partial<Record<string, CityEventText>>> = {
  en: {},
  pl: {
    "bieg-nadziei": {
      title: "VIII Charytatywny Bieg Nadziei w Żorach",
      description:
        "Poranny bieg i marsz charytatywny na rzecz hospicjum, pomyślany jako miejskie wydarzenie dla aktywnych mieszkańców i rodzin.",
      time: "08:00",
      place: "Żory",
      category: "Sport",
      audience: "dla wszystkich",
    },
    "disney-concert": {
      title: "Muzyczny Świat Disneya",
      description:
        "Rodzinny koncert z rozpoznawalnymi piosenkami z filmów Disneya, dobry dla dzieci, rodziców i osób szukających lżejszego wieczoru kulturalnego.",
      time: "18:00",
      place: "Żory",
      category: "Kultura",
      audience: "rodziny",
    },
    "scena-ogniowa": {
      title: "5. Żorska Scena Ogniowa - Podzielmy się ciepłem",
      description:
        "Plenerowe spotkanie wokół sztuki ognia i lokalnych występów, zbudowane wokół idei dzielenia się ciepłem z miejską społecznością.",
      time: "15:00",
      place: "Żory",
      category: "Kultura",
      audience: "dla wszystkich",
    },
    "rebeka-tango": {
      title: "Rebeka tańczy tango",
      description:
        "Muzyczna opowieść osadzona w polskim tangu, grana z muzyką na żywo dla widzów lubiących teatr, taniec i kulturę miejską.",
      time: "17:00",
      place: "Żory",
      category: "Teatr",
      audience: "dorośli",
    },
    "standup-bomba": {
      title: "Stand-up Bomba: Kowalski & Zalewski",
      description:
        "Wieczorny program komediowy z Kowalskim i Zalewskim dla dorosłej publiczności, nastawiony na bezpośredni, sceniczny format.",
      time: "19:00",
      place: "Żory",
      category: "Stand-up",
      audience: "dorośli",
    },
    "twinpigs-country": {
      title: "TWINPIGS Country Festival 2026",
      description:
        "Country w westernowej scenerii Twinpigs, zaplanowane jako plenerowa atrakcja weekendowa dla rodzin i fanów muzyki.",
      time: "17:00",
      place: "Twinpigs",
      category: "Muzyka",
      audience: "rodziny",
    },
  },
  uk: {
    "bieg-nadziei": {
      title: "VIII благодійний Забіг Надії у Жорах",
      description:
        "Ранковий благодійний забіг і прогулянка на підтримку хоспісу, підготовлені як міська подія для активних мешканців і родин.",
      time: "08:00",
      place: "Жори",
      category: "Спорт",
      audience: "для всіх",
    },
    "disney-concert": {
      title: "Музичний світ Disney",
      description:
        "Сімейний концерт із відомими піснями з фільмів Disney для дітей, батьків і всіх, хто шукає легкий культурний вечір.",
      time: "18:00",
      place: "Жори",
      category: "Культура",
      audience: "сім'ї",
    },
    "scena-ogniowa": {
      title: "5. Жорська Вогняна сцена",
      description:
        "Подія просто неба навколо вогняного мистецтва та місцевих виступів, побудована на ідеї ділитися теплом із громадою міста.",
      time: "15:00",
      place: "Жори",
      category: "Культура",
      audience: "для всіх",
    },
    "rebeka-tango": {
      title: "Ребека танцює танго",
      description:
        "Музична історія в ритмі польського танго з живою музикою для глядачів, які люблять театр, танець і міську культуру.",
      time: "17:00",
      place: "Жори",
      category: "Театр",
      audience: "дорослі",
    },
    "standup-bomba": {
      title: "Stand-up Bomba: Kowalski & Zalewski",
      description:
        "Вечірнє комедійне шоу з Kowalski і Zalewski для дорослої аудиторії у прямому сценічному форматі.",
      time: "19:00",
      place: "Жори",
      category: "Стендап",
      audience: "дорослі",
    },
    "twinpigs-country": {
      title: "TWINPIGS Country Festival 2026",
      description:
        "Кантрі у вестерновій атмосфері Twinpigs, заплановане як подія просто неба для родин і шанувальників музики.",
      time: "17:00",
      place: "Twinpigs",
      category: "Музика",
      audience: "сім'ї",
    },
  },
};

export const freeBusLines: FreeBusLine[] = [
  {
    id: "01",
    route:
      "Prawookrężna: Centrum Przesiadkowe - Osińska - Wolontariuszy - Żołnierzy Września - Dąbrowskiego - Centrum Przesiadkowe",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-001_20260101-1.html",
  },
  {
    id: "02",
    route:
      "Lewookrężna: Centrum Przesiadkowe - Dąbrowskiego - Żołnierzy Września - Wolontariuszy - Osińska - Centrum Przesiadkowe",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-002_20260101-1.html",
  },
  {
    id: "03",
    route: "Osiny - Centrum Przesiadkowe",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-003_20260101-1.html",
  },
  {
    id: "04",
    route: "Al. Jana Pawła II, Bajerówka - Rybnicka - Centrum Przesiadkowe",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-004_20260101-1.html",
  },
  {
    id: "05",
    route:
      "Al. Jana Pawła II, Bajerówka - Centrum Przesiadkowe - Wodzisławska - Os. Gwarków - Boguszowicka / Świerklany Dolne / Kopalnia Jankowice",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-005_20260101-1.html",
  },
  {
    id: "06",
    route: "Baranowice - Al. Jana Pawła II - Centrum Przesiadkowe - Kleszczówka - Miasteczko Westernowe",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-006_20260101-1.html",
  },
  {
    id: "07",
    route: "Francuska - Al. Zjedn. Europy - Dąbrowskiego - Centrum Przesiadkowe - Jasna",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-007_20260101-1.html",
  },
  {
    id: "08",
    route: "Al. Jana Pawła II - Al. Zjedn. Europy - Centrum Przesiadkowe - Wygoda - Rybnicka",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-008_20260101-1.html",
  },
  {
    id: "09",
    route: "Al. Jana Pawła II, Bajerówka - Centrum Przesiadkowe - Kleszczówka - Al. Jana Pawła II, Bajerówka",
    validFrom: "2026-01-01",
    scheduleUrl: "https://zory.trasownik.net/start-009_20260101-1.html",
  },
];

export const editorialPosts: EditorialPost[] = [
  {
    id: "drogi-maj",
    title: "Weekend traffic changes in the city center",
    lead: "The city announces temporary detours during outdoor events.",
    category: "Announcements",
    date: "2026-05-09",
    status: "published",
  },
  {
    id: "nabor-ngo",
    title: "Open call for local summer initiatives",
    lead: "Organizations and resident groups can submit neighborhood projects.",
    category: "Community",
    date: "2026-05-08",
    status: "published",
  },
];

type EditorialPostText = Pick<EditorialPost, "title" | "lead" | "category">;

const editorialPostTranslations: Record<Locale, Partial<Record<string, EditorialPostText>>> = {
  en: {},
  pl: {
    "drogi-maj": {
      title: "Weekendowe zmiany w ruchu w centrum",
      lead: "Miasto zapowiada czasowe objazdy podczas plenerowych wydarzeń.",
      category: "Komunikaty",
    },
    "nabor-ngo": {
      title: "Nabór na lokalne inicjatywy wakacyjne",
      lead: "Organizacje i grupy mieszkańców mogą zgłaszać projekty sąsiedzkie.",
      category: "Społeczność",
    },
  },
  uk: {
    "drogi-maj": {
      title: "Зміни руху в центрі на вихідних",
      lead: "Місто оголошує тимчасові об'їзди під час подій просто неба.",
      category: "Оголошення",
    },
    "nabor-ngo": {
      title: "Прийом заявок на літні місцеві ініціативи",
      lead: "Організації та групи мешканців можуть подавати сусідські проєкти.",
      category: "Спільнота",
    },
  },
};

const englishPortalCopy = {
  nav: ["Events", "Food & beauty", "News"],
  portalLabel: "City portal",
  directoryLabel: "Directory",
  eventsLabel: "Events",
  adminLabel: "Admin",
  heroTitle: "Zory.info",
  heroLead:
    "A local city portal for residents: events, news, and a fast search for companies and services in Zory.",
  heroCta: "Open directory",
  stats: ["22 sectors", "16 local places", "3 languages", "dark mode"],
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
  todayLabel: "Today",
  nextEventsTitle: "Nearest events",
  eventScheduleTitle: "Event schedule",
  eventSourceLink: "Open source",
  calendarSource: "Event source: PortalZory and MOK Zory calendar.",
  busesTitle: "Free city buses",
  busesLead:
    "Nine year-round BKM lines connect the transfer center, districts, and nearby stops. Rides are free for every passenger.",
  busesFreeNote: "Free rides, no validators, no ticket inspection.",
  schedule: "Schedule",
  validFrom: "Valid from",
  allSchedules: "All BKM schedules",
  realTimeDepartures: "Real-time departures",
  placesTitle: "Food and beauty points",
  placesLead:
    "A starter directory for restaurants, cafes, bistros, and beauty salons in Zory, ready to swap to Google Places API.",
  mapsList: "Full list in Google Maps",
  website: "Website",
  phoneLabel: "Phone",
  sourceLabel: "Source",
  postsTitle: "News",
  adminTitle: "Admin panel",
  adminLead: "Post creation is prepared as a local prototype. Backend and authorization are documented.",
  titleField: "Title",
  leadField: "Lead",
  categoryField: "Category",
  statusField: "Status",
  addPost: "Add post",
  defaultCategory: "Community",
  draft: "Draft",
  published: "Published",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  sourceNote:
    "The sector list is a directory scaffold based on resident needs and PKD 2025 sections.",
};

const polishPortalCopy: typeof englishPortalCopy = {
  nav: ["Wydarzenia", "Gastro i beauty", "Wiadomości"],
  portalLabel: "Portal miejski",
  directoryLabel: "Katalog",
  eventsLabel: "Wydarzenia",
  adminLabel: "Admin",
  heroTitle: "Zory.info",
  heroLead:
    "Lokalny portal dla mieszkańców: wydarzenia, wiadomości i szybka wyszukiwarka firm oraz usług w Żorach.",
  heroCta: "Otwórz katalog",
  stats: ["22 branże", "16 miejsc lokalnych", "3 języki", "tryb ciemny"],
  directoryTitle: "Katalog miejsc i usług",
  directoryLead:
    "Szukaj po branży, dzielnicy, nazwie, tagach albo hasłach takich jak mechanik, prawnik, uroda, lunch.",
  searchPlaceholder: "Szukaj usług, firm albo tagów",
  allCategories: "Wszystkie branże",
  openNow: "Otwarte teraz",
  featuredOnly: "Wyróżnione",
  openStatus: "Otwarte",
  checkHours: "Sprawdź godziny",
  results: "wyników",
  noResults: "Brak wyników dla tych filtrów.",
  eventsTitle: "Kalendarz wydarzeń",
  eventsLead: "Nadchodzące wydarzenia miejskie i społeczne w jednym miejscu.",
  todayLabel: "Dzisiaj",
  nextEventsTitle: "Najbliższe wydarzenia",
  eventScheduleTitle: "Rozpiska wydarzeń",
  eventSourceLink: "Otwórz źródło",
  calendarSource: "Źródło wydarzeń: PortalŻory i kalendarz MOK Żory.",
  busesTitle: "Darmowe autobusy miejskie",
  busesLead:
    "Dziewięć całorocznych linii BKM łączy centrum przesiadkowe, dzielnice i pobliskie przystanki. Przejazdy są bezpłatne dla wszystkich pasażerów.",
  busesFreeNote: "Darmowe przejazdy, bez kasowników i kontroli biletów.",
  schedule: "Rozkład",
  validFrom: "Ważny od",
  allSchedules: "Wszystkie rozkłady BKM",
  realTimeDepartures: "Odjazdy w czasie rzeczywistym",
  placesTitle: "Gastronomia i beauty",
  placesLead:
    "Startowy spis restauracji, kawiarni, bistro i salonów beauty w Żorach, gotowy do podmiany na Google Places API.",
  mapsList: "Pełna lista w Google Maps",
  website: "Strona",
  phoneLabel: "Telefon",
  sourceLabel: "Źródło",
  postsTitle: "Wiadomości",
  adminTitle: "Panel administracyjny",
  adminLead: "Tworzenie wpisów działa jako lokalny prototyp. Backend i autoryzacja są opisane w dokumentacji.",
  titleField: "Tytuł",
  leadField: "Lead",
  categoryField: "Kategoria",
  statusField: "Status",
  addPost: "Dodaj wpis",
  defaultCategory: "Społeczność",
  draft: "Szkic",
  published: "Opublikowany",
  theme: "Motyw",
  light: "Jasny",
  dark: "Ciemny",
  sourceNote:
    "Lista branż jest szkieletem katalogu opartym na potrzebach mieszkańców i sekcjach PKD 2025.",
};

const ukrainianPortalCopy: typeof englishPortalCopy = {
  nav: ["Події", "Їжа і beauty", "Новини"],
  portalLabel: "Міський портал",
  directoryLabel: "Каталог",
  eventsLabel: "Події",
  adminLabel: "Адмін",
  heroTitle: "Zory.info",
  heroLead:
    "Місцевий портал для мешканців: події, новини та швидкий пошук компаній і послуг у Жорах.",
  heroCta: "Відкрити каталог",
  stats: ["22 сектори", "16 місцевих місць", "3 мови", "темний режим"],
  directoryTitle: "Каталог місць і послуг",
  directoryLead:
    "Шукайте за сектором, районом, назвою, тегами або словами на кшталт механік, юрист, краса, обід.",
  searchPlaceholder: "Шукайте послуги, компанії або теги",
  allCategories: "Усі сектори",
  openNow: "Відкрито зараз",
  featuredOnly: "Рекомендовані",
  openStatus: "Відкрито",
  checkHours: "Перевірте години",
  results: "результатів",
  noResults: "Немає результатів для цих фільтрів.",
  eventsTitle: "Календар подій",
  eventsLead: "Міські та громадські події в одному місці.",
  todayLabel: "Сьогодні",
  nextEventsTitle: "Найближчі події",
  eventScheduleTitle: "Розклад подій",
  eventSourceLink: "Відкрити джерело",
  calendarSource: "Джерело подій: PortalZory і календар MOK Żory.",
  busesTitle: "Безкоштовні міські автобуси",
  busesLead:
    "Дев'ять цілорічних ліній BKM з'єднують пересадковий центр, райони та найближчі зупинки. Проїзд безкоштовний для всіх пасажирів.",
  busesFreeNote: "Безкоштовні поїздки, без валідаторів і контролю квитків.",
  schedule: "Розклад",
  validFrom: "Діє з",
  allSchedules: "Усі розклади BKM",
  realTimeDepartures: "Відправлення в реальному часі",
  placesTitle: "Їжа і beauty",
  placesLead:
    "Стартовий каталог ресторанів, кафе, бістро та салонів краси в Жорах, готовий до заміни на Google Places API.",
  mapsList: "Повний список у Google Maps",
  website: "Сайт",
  phoneLabel: "Телефон",
  sourceLabel: "Джерело",
  postsTitle: "Новини",
  adminTitle: "Адмін-панель",
  adminLead: "Створення дописів підготовлено як локальний прототип. Backend і авторизація описані в документації.",
  titleField: "Заголовок",
  leadField: "Вступ",
  categoryField: "Категорія",
  statusField: "Статус",
  addPost: "Додати допис",
  defaultCategory: "Спільнота",
  draft: "Чернетка",
  published: "Опубліковано",
  theme: "Тема",
  light: "Світла",
  dark: "Темна",
  sourceNote:
    "Список секторів є основою каталогу, створеною на базі потреб мешканців і секцій PKD 2025.",
};

export const dictionary = {
  pl: {
    ...polishPortalCopy,
    langLabel: "Polski",
  },
  en: {
    ...englishPortalCopy,
    langLabel: "English",
  },
  uk: {
    ...ukrainianPortalCopy,
    langLabel: "Українська",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getBusinessCategories(locale: Locale = "en") {
  const translations = categoryTranslations[locale];

  return businessCategories.map((category) => ({
    ...category,
    ...translations[category.id],
  }));
}

export function getBusinessPoints(locale: Locale = "en") {
  const translations = businessPointTranslations[locale];

  return businessPoints.map((point) => ({
    ...point,
    ...translations[point.id],
  }));
}

export function getCityEvents(locale: Locale = "en") {
  const translations = cityEventTranslations[locale];

  return cityEvents.map((event) => ({
    ...event,
    ...translations[event.id],
  }));
}

export function getFreeBusLines() {
  return freeBusLines;
}

export function getEditorialPosts(locale: Locale = "en") {
  const translations = editorialPostTranslations[locale];

  return editorialPosts.map((post) => ({
    ...post,
    ...translations[post.id],
  }));
}

export function getCategory(categoryId: string, locale: Locale = "en") {
  return getBusinessCategories(locale).find((category) => category.id === categoryId);
}
