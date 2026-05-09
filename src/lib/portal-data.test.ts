import { describe, expect, it } from "vitest";
import { businessCategories, businessPoints, dictionary, getCategory, locales } from "./portal-data";

describe("portal data", () => {
  it("keeps the Polish locale as the first and default locale", () => {
    expect(locales[0]).toBe("pl");
    expect(dictionary.pl.langLabel).toBe("Polski");
  });

  it("contains the core city directory sectors", () => {
    const categoryNames = businessCategories.map((category) => category.name);

    expect(categoryNames).toEqual(
      expect.arrayContaining([
        "Gastronomia",
        "Beauty i fryzjerstwo",
        "Motoryzacja",
        "Prawo i notariusze",
      ]),
    );
  });

  it("links every demo business point to an existing category", () => {
    const missingCategories = businessPoints.filter((point) => !getCategory(point.categoryId));

    expect(missingCategories).toHaveLength(0);
  });
});
