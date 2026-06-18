type SectionLike = {
  _template?: string | null;
  __typename?: string | null;
};

/** Tina GraphQL sections use `__typename`; MDX frontmatter uses `_template`. */
export function getSectionTemplate(section: SectionLike): string | undefined {
  if (section._template) return section._template;
  const typename = section.__typename;
  if (!typename) return undefined;

  const marker = "Sections";
  const idx = typename.indexOf(marker);
  if (idx === -1) return undefined;

  const name = typename.slice(idx + marker.length);
  return name.charAt(0).toLowerCase() + name.slice(1);
}

export function normalizeSections<T extends SectionLike>(
  sections: T[] | null | undefined
): Array<T & { _template: string }> {
  if (!sections) return [];

  return sections.map((section) => ({
    ...section,
    _template: getSectionTemplate(section) ?? "",
  }));
}