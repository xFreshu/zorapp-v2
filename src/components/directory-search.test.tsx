import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { dictionary } from "@/lib/portal-data";
import { DirectorySearch } from "./directory-search";

const copy = dictionary.pl;

describe("DirectorySearch", () => {
  it("renders demo business points and sector groups", () => {
    render(<DirectorySearch copy={copy} />);

    expect(screen.getByRole("heading", { name: "Katalog miejsc i usług" })).toBeInTheDocument();
    expect(screen.getByText("Rynek Bistro")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Beauty i fryzjerstwo" })).toBeInTheDocument();
  });

  it("filters business points by search query", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} />);

    await user.type(screen.getByLabelText(copy.searchPlaceholder), "mechanik");

    expect(screen.getByText("Auto Serwis Zachód")).toBeInTheDocument();
    expect(screen.queryByText("Rynek Bistro")).not.toBeInTheDocument();
  });

  it("filters business points by open status", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} />);

    await user.click(screen.getByLabelText(copy.openNow));

    expect(screen.getByText("Rynek Bistro")).toBeInTheDocument();
    expect(screen.queryByText("Beauty Lab Żory")).not.toBeInTheDocument();
  });
});
