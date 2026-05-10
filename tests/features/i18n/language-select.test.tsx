import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageSelect } from "@/features/i18n/language-select";

describe("LanguageSelect", () => {
  it("opens a flag language menu with Polish selected by default", async () => {
    const user = userEvent.setup();
    render(<LanguageSelect currentLang="pl" />);

    const trigger = screen.getByRole("button", { name: "Choose language" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("option", { name: "Polski" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("option", { name: "English" })).toHaveAttribute("href", "/en");
    expect(screen.getByRole("option", { name: "Українська" })).toHaveAttribute("href", "/uk");
  });
});
