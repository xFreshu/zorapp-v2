import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { dictionary } from "@/lib/portal-data";

const labels = dictionary.pl;

describe("ThemeToggle", () => {
  it("toggles dark mode and persists the selected theme", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle labels={labels} />);

    await user.click(screen.getByRole("button", { name: labels.dark }));

    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("zory-theme")).toBe("dark");
    expect(screen.getByRole("button", { name: labels.light })).toBeInTheDocument();
  });
});
