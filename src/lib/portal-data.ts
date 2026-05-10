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

export const cityEvents: CityEvent[] = [
  {
    id: "majowka-park",
    title: "Family picnic in Cegielnia Park",
    date: "2026-05-16",
    time: "12:00",
    place: "Park Cegielnia",
    category: "Family",
    audience: "everyone",
  },
  {
    id: "koncert-mok",
    title: "Local bands concert",
    date: "2026-05-22",
    time: "19:00",
    place: "MOK Zory",
    category: "Culture",
    audience: "teens and adults",
  },
  {
    id: "targi-pracy",
    title: "Jobs and entrepreneurship fair",
    date: "2026-06-04",
    time: "10:00",
    place: "MOSiR sports hall",
    category: "Business",
    audience: "adults",
  },
  {
    id: "warsztaty-uk",
    title: "PL/UA integration workshops",
    date: "2026-06-11",
    time: "17:30",
    place: "Central Library",
    category: "Community",
    audience: "families",
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

const englishPortalCopy = {
  nav: ["Directory", "Events", "News", "Admin"],
  portalLabel: "City portal",
  directoryLabel: "Directory",
  eventsLabel: "Events",
  adminLabel: "Admin",
  heroTitle: "Zory.info",
  heroLead:
    "A local city portal for residents: events, news, and a fast search for companies and services in Zory.",
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
};

export const dictionary = {
  pl: {
    ...englishPortalCopy,
    langLabel: "Polish",
  },
  en: {
    ...englishPortalCopy,
    langLabel: "English",
  },
  uk: {
    ...englishPortalCopy,
    langLabel: "Ukrainian",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getCategory(categoryId: string) {
  return businessCategories.find((category) => category.id === categoryId);
}
