"use client";

import { useEffect, useMemo, useState } from "react";
import { editorialPosts, type EditorialPost } from "@/lib/portal-data";

type AdminCopy = {
  adminTitle: string;
  adminLabel: string;
  adminLead: string;
  postsTitle: string;
  titleField: string;
  leadField: string;
  categoryField: string;
  statusField: string;
  addPost: string;
  draft: string;
  published: string;
};

const storageKey = "zory-editorial-posts";

export function AdminPostComposer({ copy }: { copy: AdminCopy }) {
  const [posts, setPosts] = useState<EditorialPost[]>(() => getInitialPosts());
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [category, setCategory] = useState("Community");
  const [status, setStatus] = useState<EditorialPost["status"]>("draft");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(posts));
  }, [posts]);

  const sortedPosts = useMemo(() => {
    return [...posts].sort((first, second) => second.date.localeCompare(first.date));
  }, [posts]);

  function submitPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !lead.trim()) {
      return;
    }

    const post: EditorialPost = {
      id: `${Date.now()}-${title.toLowerCase().replace(/\s+/g, "-")}`,
      title: title.trim(),
      lead: lead.trim(),
      category: category.trim() || "Community",
      date: new Date().toISOString().slice(0, 10),
      status,
    };

    setPosts((currentPosts) => [post, ...currentPosts]);
    setTitle("");
    setLead("");
    setCategory("Community");
    setStatus("draft");
  }

  return (
    <section id="admin" className="scroll-mt-28 bg-[var(--panel)] py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">{copy.adminLabel}</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{copy.adminTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{copy.adminLead}</p>

          <form
            className="mt-6 grid gap-4 rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-4"
            onSubmit={submitPost}
          >
            <label className="grid gap-2 text-sm font-medium">
              {copy.titleField}
              <input
                className="focus-ring min-h-11 rounded-md border border-[var(--line)] bg-transparent px-3 text-base"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              {copy.leadField}
              <textarea
                className="focus-ring min-h-28 rounded-md border border-[var(--line)] bg-transparent px-3 py-3 text-base"
                value={lead}
                onChange={(event) => setLead(event.target.value)}
                required
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                {copy.categoryField}
                <input
                  className="focus-ring min-h-11 rounded-md border border-[var(--line)] bg-transparent px-3 text-base"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {copy.statusField}
                <select
                  className="focus-ring min-h-11 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-base"
                  value={status}
                  onChange={(event) => setStatus(event.target.value as EditorialPost["status"])}
                >
                  <option value="draft">{copy.draft}</option>
                  <option value="published">{copy.published}</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="focus-ring min-h-11 rounded-md bg-[var(--brand)] px-4 py-3 font-semibold text-white transition hover:bg-[var(--brand-strong)] dark:text-[#071512]"
            >
              {copy.addPost}
            </button>
          </form>
        </div>

        <div id="news" className="scroll-mt-28 space-y-4">
          <h2 className="text-2xl font-semibold">{copy.postsTitle}</h2>
          <div className="grid gap-4">
            {sortedPosts.map((post) => (
              <article key={post.id} className="rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-md bg-[var(--sky)] px-3 py-1.5 text-sm">{post.category}</span>
                  <span className="text-sm text-[var(--muted)]">{post.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.lead}</p>
                <p className="mt-4 text-sm font-medium text-[var(--brand)]">
                  {post.status === "draft" ? copy.draft : copy.published}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getInitialPosts() {
  if (typeof window === "undefined") {
    return editorialPosts;
  }

  const savedPosts = window.localStorage.getItem(storageKey);

  return savedPosts ? (JSON.parse(savedPosts) as EditorialPost[]) : editorialPosts;
}
