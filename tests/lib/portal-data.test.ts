import { describe, expect, it } from "vitest";
import {
  businessCategories,
  businessPoints,
  dictionary,
  getBusinessCategories,
  getBusinessPoints,
  getCategory,
  getCityEvents,
  getFreeBusLines,
  locales,
} from "@/lib/portal-data";

describe("portal data", () => {
  it("keeps the Polish locale as the first and default locale", () => {
    expect(locales[0]).toBe("pl");
    expect(dictionary.pl.langLabel).toBe("Polski");
  });

  it("uses different visible copy for each supported locale", () => {
    expect(dictionary.pl.directoryTitle).toBe("Katalog miejsc i usług");
    expect(dictionary.en.directoryTitle).toBe("Places and services directory");
    expect(dictionary.uk.directoryTitle).toBe("Каталог місць і послуг");
    expect(getBusinessCategories("pl").find((category) => category.id === "automotive")?.name).toBe(
      "Motoryzacja",
    );
    expect(getBusinessPoints("uk").find((point) => point.id === "rynek-bistro")?.name).toBe(
      "Бістро біля Ринку",
    );
    expect(getCityEvents("pl").find((event) => event.id === "disney-concert")?.title).toBe(
      "Muzyczny Świat Disneya",
    );
  });

  it("contains the core city directory sectors", () => {
    const categoryNames = businessCategories.map((category) => category.name);

    expect(categoryNames).toEqual(
      expect.arrayContaining([
        "Food and dining",
        "Beauty and hair",
        "Automotive",
        "Law and notaries",
      ]),
    );
  });

  it("links every demo business point to an existing category", () => {
    const missingCategories = businessPoints.filter((point) => !getCategory(point.categoryId));

    expect(missingCategories).toHaveLength(0);
  });

  it("contains the official free bus lines", () => {
    const lines = getFreeBusLines();

    expect(lines).toHaveLength(9);
    expect(lines.map((line) => line.id)).toEqual(["01", "02", "03", "04", "05", "06", "07", "08", "09"]);
  });

  it("keeps event descriptions and source links available for the homepage schedule", () => {
    const events = getCityEvents("pl");

    expect(events.every((event) => event.description.length > 24)).toBe(true);
    expect(events.every((event) => event.sourceUrl?.startsWith("https://"))).toBe(true);
  });
});
