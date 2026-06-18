import type { IslandRegistry } from "@tinacms/astro/experimental";
import type { QueryResult } from "@tinacms/astro/data";
import type { PagesQuery } from "../../../tina/__generated__/types";
import PageSections from "../../layouts/partials/PageSections.astro";
import { resolvePageData } from "./data";
import type { CollectionKey } from "astro:content";

export const islands: IslandRegistry = {
  "page-layout": {
    component: PageSections,
    fetch: async (_request, params) => {
      const slug = params.get("slug") ?? "";
      const locale = params.get("locale") ?? "de";
      const type = (params.get("type") ?? "pages") as CollectionKey;

      const { data, tinaPage } = await resolvePageData(slug, type, undefined, {
        priority: "primary",
      });

      return { page: tinaPage, data, locale, type };
    },
    propsFromData: (result) => {
      const payload = result as {
        page: QueryResult<PagesQuery>;
        data: PagesQuery["pages"];
        locale: string;
        type: string;
      };

      return {
        type: payload.type || "pages",
        locale: payload.locale || "de",
        data: payload.data ?? payload.page?.data?.pages,
      };
    },
    wrapper: { tag: "div", className: "tina-page-layout" },
  },
};