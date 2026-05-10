import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DirectorySearch } from "@/features/directory/directory-search";
import { dictionary } from "@/lib/portal-data";

const copy = dictionary.pl;

describe("DirectorySearch", () => {
  it("renders demo business points and sector groups", () => {
    render(<DirectorySearch copy={copy} locale="pl" />);

    expect(screen.getByRole("heading", { name: "Katalog miejsc i usług" })).toBeInTheDocument();
    expect(screen.getByText("Bistro przy Rynku")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Uroda i fryzjerstwo" })).toBeInTheDocument();
  });

  it("filters business points by search query", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} locale="pl" />);

    await user.type(screen.getByLabelText(copy.searchPlaceholder), "mechanik");

    expect(screen.getByText("West Auto Serwis")).toBeInTheDocument();
    expect(screen.queryByText("Bistro przy Rynku")).not.toBeInTheDocument();
  });

  it("filters business points by open status", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} locale="pl" />);

    await user.click(screen.getByLabelText(copy.openNow));

    expect(screen.getByText("Bistro przy Rynku")).toBeInTheDocument();
    expect(screen.queryByText("Beauty Lab Żory")).not.toBeInTheDocument();
  });
});
