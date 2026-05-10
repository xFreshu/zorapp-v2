"use client";

import { useMemo, useState } from "react";
import {
  businessCategories,
  businessPoints,
  getCategory,
  type BusinessCategory,
  type BusinessPoint,
} from "@/lib/portal-data";

type DirectoryCopy = {
  directoryTitle: string;
  directoryLabel: string;
  directoryLead: string;
  searchPlaceholder: string;
  allCategories: string;
  openNow: string;
  featuredOnly: string;
  openStatus: string;
  checkHours: string;
  results: string;
  noResults: string;
  sourceNote: string;
};

export function DirectorySearch({ copy }: { copy: DirectoryCopy }) {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");
  const [openNow, setOpenNow] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const groupedCategories = useMemo(() => {
    return businessCategories.reduce<Record<string, BusinessCategory[]>>((groups, category) => {
      groups[category.group] = groups[category.group] ?? [];
      groups[category.group].push(category);
      return groups;
    }, {});
  }, []);

  const filteredPoints = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return businessPoints.filter((point) => {
      const category = getCategory(point.categoryId);
      const searchable = [
        point.name,
        point.district,
        point.address,
        ...point.tags,
        category?.name,
        category?.group,
        ...(category?.keywords ?? []),
        ...(category?.examples ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
      const matchesCategory = categoryId === "all" || point.categoryId === categoryId;
      const matchesOpen = !openNow || point.openNow;
      const matchesFeatured = !featuredOnly || point.featured;

      return matchesQuery && matchesCategory && matchesOpen && matchesFeatured;
    });
  }, [categoryId, featuredOnly, openNow, query]);

  return (
    <section className="border-y border-[var(--line)] bg-[var(--panel)]/85 py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="space-y-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">
              {copy.directoryLabel}
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">{copy.directoryTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              {copy.directoryLead}
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-3">
            <label className="text-sm font-medium" htmlFor="directory-search">
              {copy.searchPlaceholder}
            </label>
            <input
              id="directory-search"
              className="focus-ring min-h-12 rounded-md border border-[var(--line)] bg-transparent px-4 text-base"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
            />

            <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
              <select
                className="focus-ring min-h-11 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
              >
                <option value="all">{copy.allCategories}</option>
                {businessCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <label className="flex min-h-11 items-center gap-2 rounded-md border border-[var(--line)] px-3 text-sm">
                <input
                  type="checkbox"
                  checked={openNow}
                  onChange={(event) => setOpenNow(event.target.checked)}
                />
                {copy.openNow}
              </label>
              <label className="flex min-h-11 items-center gap-2 rounded-md border border-[var(--line)] px-3 text-sm">
                <input
                  type="checkbox"
                  checked={featuredOnly}
                  onChange={(event) => setFeaturedOnly(event.target.checked)}
                />
                {copy.featuredOnly}
              </label>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {Object.entries(groupedCategories).map(([group, categories]) => (
              <div key={group} className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-4">
                <h3 className="text-base font-semibold">{group}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {categories.map((category) => category.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-6 text-[var(--muted)]">{copy.sourceNote}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">
              {filteredPoints.length} {copy.results}
            </h3>
            <span className="rounded-md bg-[var(--accent-soft)] px-3 py-2 text-sm text-[var(--foreground)]">
              Zory
            </span>
          </div>

          {filteredPoints.length === 0 ? (
            <div className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-6 text-[var(--muted)]">
              {copy.noResults}
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredPoints.map((point) => (
                <BusinessResult
                  key={point.id}
                  point={point}
                  labels={{ openStatus: copy.openStatus, checkHours: copy.checkHours }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BusinessResult({
  point,
  labels,
}: {
  point: BusinessPoint;
  labels: Pick<DirectoryCopy, "openStatus" | "checkHours">;
}) {
  const category = getCategory(point.categoryId);

  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--brand)]">{category?.name}</p>
          <h4 className="mt-1 text-xl font-semibold">{point.name}</h4>
        </div>
        <span
          className={`rounded-md px-3 py-2 text-sm ${
            point.openNow
              ? "bg-[var(--leaf)] text-[var(--foreground)]"
              : "bg-[var(--sky)] text-[var(--foreground)]"
          }`}
        >
          {point.openNow ? labels.openStatus : labels.checkHours}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        {point.address}, {point.district} · {point.phone}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {point.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-[var(--line)] px-2.5 py-1.5 text-sm">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
