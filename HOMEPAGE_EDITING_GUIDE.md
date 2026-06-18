# Homepage Editing & Schema Guide

To solve the issue where all fields from all sections were merged and displayed for every section in the **Sitepins CMS visual editor**, the homepage content structure has been updated from a single polymorphic array (`sections: z.array(sectionSchema)`) to **separate top-level fields** for each section type.

---

## 🛠️ Schema Definition

The homepage content schema is defined in [src/types/pages.collections.ts](file:///c:/Development/github/Pontora/fortify-astro/src/types/pages.collections.ts#L385-L409). 

Instead of mapping sections inside a `sections` list, each section type now has its own top-level optional property:

```typescript
export const homepage = defineCollection({
  loader: glob({
    pattern: "*/home.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    keywords: z.string().optional(),
    draft: z.boolean(),
    // Individual sections represented as top-level fields:
    banner: bannerSchema.optional(),
    clients: clientsSchema.optional(),
    how_it_works: howItWorksSchema.optional(),
    features_grid: featuresGridSchema.optional(),
    features_section: featuresSectionSchema.optional(),
    features_explanation: featuresExplanationSchema.optional(),
    pricing: pricingSchema.optional(),
    testimonial: testimonialSchema.optional(),
    faq: faqSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});
```

---

## 📝 Frontmatter Structure

In your homepage files:
- **English:** [src/content/pages/en/home.mdx](file:///c:/Development/github/Pontora/fortify-astro/src/content/pages/en/home.mdx)
- **German:** [src/content/pages/de/home.mdx](file:///c:/Development/github/Pontora/fortify-astro/src/content/pages/de/home.mdx)

The frontmatter data is structured with top-level keys. Each section object **must retain its `type` key** (as literals like `type: clients` are required by the validation schemas).

### Example Structure:

```yaml
---
title: "Homepage Title"
description: "Homepage Description"
draft: false

# Banner Section
banner:
  type: banner
  title: "Unified Operations..."
  content: "Manage workforce administration..."
  button_primary:
    enable: true
    label: "Get Started"
    link: "/contact/"

# Clients Logo Section
clients:
  type: clients
  enable: true
  paragraph: "Trusted by hundreds of companies..."
  logos:
    - image: "/images/clients/1.svg"

# How It Works Section
how_it_works:
  type: how_it_works
  enable: true
  subtitle: "How it Works"
  title: "How Pontora Streamlines Administration"
  description: "Connecting company admins..."
  list:
    - icon: "/images/icons/svg/detection.svg"
      title: "Workspace Setup"
      description: "Set up companies..."
---
```

---

## 💻 Rendering in Astro

The sections are rendered inside [src/pages/index.astro](file:///c:/Development/github/Pontora/fortify-astro/src/pages/index.astro#L50-L82) by checking for each section's presence and whether it is enabled (`enable !== false`):

```astro
<Base
  {...homepage.data}
  banner={bannerSection ? bannerSection.enable !== false : true}
  bannerData={bannerSection}
  schema={homeSchema}
>
  {clients && clients.enable !== false && <Clients content={clients} />}
  {how_it_works && how_it_works.enable !== false && <HowItWorks content={how_it_works} />}
  {features_grid && features_grid.enable !== false && <FeaturesGrid content={features_grid} />}
  {features_section && features_section.enable !== false && <FeatureSection content={features_section} />}
  {features_explanation && features_explanation.enable !== false && <FeaturesExplanation content={features_explanation} />}
  {pricing && pricing.enable !== false && <PricingSection content={pricing} />}
  {testimonial && testimonial.enable !== false && <Testimonial visible_testimonial={3} />}
  {faq && faq.enable !== false && <Faq />}
  {page_cta && page_cta.enable !== false && <CallToAction content={page_cta} />}
</Base>
```

---

## ✏️ Making Updates

### Adding/Editing Fields:
1. Locate the correct Zod schema (e.g. `clientsSchema` or `howItWorksSchema`) in [src/types/pages.collections.ts](file:///c:/Development/github/Pontora/fortify-astro/src/types/pages.collections.ts).
2. Add or modify the field validation rules.
3. Update the YAML data in the homepage `-index.mdx` files.

### Adding a New Section Type:
1. Define the validation schema (e.g., `myNewSectionSchema`) in `pages.collections.ts`.
2. Add it to the `homepage` schema object as an optional field: `my_new_section: myNewSectionSchema.optional()`.
3. In `src/pages/index.astro`, import the layout component and render it conditionally:
   ```astro
   {my_new_section && my_new_section.enable !== false && <MyNewComponent content={my_new_section} />}
   ```
4. Define the initial data under the `my_new_section` key in your `-index.mdx` content files.
