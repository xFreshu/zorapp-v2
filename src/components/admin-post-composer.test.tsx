import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { dictionary } from "@/lib/portal-data";
import { AdminPostComposer } from "./admin-post-composer";

const copy = dictionary.pl;

describe("AdminPostComposer", () => {
  it("adds a local editorial post from the admin form", async () => {
    const user = userEvent.setup();
    render(<AdminPostComposer copy={copy} />);

    await user.type(screen.getByLabelText(copy.titleField), "Nowy wpis testowy");
    await user.type(screen.getByLabelText(copy.leadField), "Krótki opis wpisu do testów.");
    await user.clear(screen.getByLabelText(copy.categoryField));
    await user.type(screen.getByLabelText(copy.categoryField), "Testy");
    await user.selectOptions(screen.getByLabelText(copy.statusField), "published");
    await user.click(screen.getByRole("button", { name: copy.addPost }));

    expect(screen.getByRole("heading", { name: "Nowy wpis testowy" })).toBeInTheDocument();
    expect(screen.getByText("Krótki opis wpisu do testów.")).toBeInTheDocument();
    expect(screen.getByText("Testy")).toBeInTheDocument();
    expect(screen.getAllByText(copy.published).length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(window.localStorage.getItem("zory-editorial-posts")).toContain("Nowy wpis testowy");
    });
  });
});
