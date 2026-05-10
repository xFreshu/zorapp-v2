import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AdminPostComposer } from "@/features/admin/admin-post-composer";
import { dictionary } from "@/lib/portal-data";

const copy = dictionary.pl;

describe("AdminPostComposer", () => {
  it("adds a local editorial post from the admin form", async () => {
    const user = userEvent.setup();
    render(<AdminPostComposer copy={copy} locale="pl" />);

    await user.type(screen.getByLabelText(copy.titleField), "New test post");
    await user.type(screen.getByLabelText(copy.leadField), "Short test post summary.");
    await user.clear(screen.getByLabelText(copy.categoryField));
    await user.type(screen.getByLabelText(copy.categoryField), "Tests");
    await user.selectOptions(screen.getByLabelText(copy.statusField), "published");
    await user.click(screen.getByRole("button", { name: copy.addPost }));

    expect(screen.getByRole("heading", { name: "New test post" })).toBeInTheDocument();
    expect(screen.getByText("Short test post summary.")).toBeInTheDocument();
    expect(screen.getByText("Tests")).toBeInTheDocument();
    expect(screen.getAllByText(copy.published).length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(window.localStorage.getItem("zory-editorial-posts-pl")).toContain("New test post");
    });
  });
});
