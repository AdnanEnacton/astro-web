import type { QueryResult } from "@tinacms/astro/data";
import { requestWithMetadata } from "@tinacms/astro/data";
import { getEntry, type CollectionKey } from "astro:content";
import { client } from "../../../tina/__generated__/client";
import type { PagesQuery } from "../../../tina/__generated__/types";

function toRelativePath(slug: string): string {
  return slug.endsWith(".mdx") || slug.endsWith(".md") ? slug : `${slug}.mdx`;
}

export function getPage(slug: string, options?: { priority?: "primary" }) {
  return requestWithMetadata(
    client.queries.pages({ relativePath: toRelativePath(slug) }),
    options
  );
}

export async function resolvePageData<T extends Record<string, unknown>>(
  slug: string,
  collectionType: CollectionKey,
  fallbackData?: T,
  options?: { priority?: "primary" }
): Promise<{ data: T; tinaPage: QueryResult<PagesQuery> }> {
  const tinaPage = await getPage(slug, options);
  const tinaData = tinaPage.data?.pages;

  if (tinaData) {
    return { data: tinaData as unknown as T, tinaPage };
  }

  if (fallbackData) {
    return { data: fallbackData, tinaPage };
  }

  try {
    const entry = await getEntry(collectionType, slug);
    return { data: (entry?.data ?? {}) as T, tinaPage };
  } catch {
    return { data: {} as T, tinaPage };
  }
}