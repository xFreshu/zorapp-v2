import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DirectorySearch } from "@/features/directory/directory-search";
import { dictionary } from "@/lib/portal-data";

const copy = dictionary.pl;

describe("DirectorySearch", () => {
  it("renders demo business points and sector groups", () => {
    render(<DirectorySearch copy={copy} />);

    expect(screen.getByRole("heading", { name: "Places and services directory" })).toBeInTheDocument();
    expect(screen.getByText("Market Square Bistro")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Beauty and hair" })).toBeInTheDocument();
  });

  it("filters business points by search query", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} />);

    await user.type(screen.getByLabelText(copy.searchPlaceholder), "mechanic");

    expect(screen.getByText("West Auto Service")).toBeInTheDocument();
    expect(screen.queryByText("Market Square Bistro")).not.toBeInTheDocument();
  });

  it("filters business points by open status", async () => {
    const user = userEvent.setup();
    render(<DirectorySearch copy={copy} />);

    await user.click(screen.getByLabelText(copy.openNow));

    expect(screen.getByText("Market Square Bistro")).toBeInTheDocument();
    expect(screen.queryByText("Beauty Lab Zory")).not.toBeInTheDocument();
  });
});
