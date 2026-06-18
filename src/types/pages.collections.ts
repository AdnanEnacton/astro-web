import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
  sections: z.array(z.any()).optional(),
};

export const pages = defineCollection({
  loader: glob({
    pattern: "*/!(home|about|features|pricing|contact|blog).{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
  }),
});

const bannerSchema = z.object({
  _template: z.literal("banner"),
  enable: z.boolean().optional(),
  title: z.string(),
  content: z.string(),
  button_primary: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
  button_secondary: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }).optional(),
  show_video: z.boolean().optional(),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string(),
  })).optional(),
});

const clientsSchema = z.object({
  _template: z.literal("clients"),
  enable: z.boolean(),
  paragraph: z.string().optional(),
  logos: z.array(z.object({
    image: z.string(),
  })).optional(),
});

const howItWorksSchema = z.object({
  _template: z.literal("how_it_works"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
});

const featuresGridSchema = z.object({
  _template: z.literal("features_grid"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    })
  ),
});

const featuresSectionSchema = z.object({
  _template: z.literal("features_section"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      title: z.string(),
      image: z.string(),
      description: z.string().optional(),
      bulletpoints: z.array(
        z.object({
          icon: z.string().optional(),
          title: z.string().optional(),
          description: z.string(),
        })
      ).optional(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    })
  ),
});

const featuresExplanationSchema = z.object({
  _template: z.literal("features_explanation"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  list: z.array(
    z.object({
      row: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    })
  ),
});

const pricingSchema = z.object({
  _template: z.literal("pricing"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  plans_labels: z.array(z.string()).optional(),
  plans: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      price_prefix: z.string(),
      price_monthly: z.string(),
      price_yearly: z.string(),
      price_description_monthly: z.string(),
      price_description_yearly: z.string(),
      features: z.array(z.string()),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
      }).optional(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    })
  ).optional(),
});


const testimonialSchema = z.object({
  _template: z.literal("testimonial"),
  enable: z.boolean(),
});

const faqSchema = z.object({
  _template: z.literal("faq"),
  enable: z.boolean(),
});

const pageCtaSchema = z.object({
  _template: z.literal("page_cta"),
  enable: z.boolean(),
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
});

const aboutBannerSchema = z.object({
  _template: z.literal("about_banner"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  left_image: z.string().optional(),
  right_image: z.string().optional(),
  quote: z.object({
    avatar: z.string(),
    name: z.string(),
    designation: z.string(),
    content: z.string(),
  }).optional(),
});

const ourValuesSchema = z.object({
  _template: z.literal("our_values"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ).optional(),
  stats: z.array(
    z.object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
  ).optional(),
});

const ourTeamSchema = z.object({
  _template: z.literal("our_team"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      name: z.string().optional(),
      image: z.string().optional(),
      company: z.string().optional(),
    })
  ).optional(),
});

const contactHeroSchema = z.object({
  _template: z.literal("contact_hero"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ).optional(),
});

const blogSectionSchema = z.object({
  _template: z.literal("blog_section"),
  enable: z.boolean().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  visible_posts: z.number().optional(),
  card_layout: z.string().optional(),
  large_heading: z.boolean().optional(),
});

const paginationSchema = z.object({
  _template: z.literal("pagination"),
  enable: z.boolean().optional(),
});

const blogSingleContentSchema = z.object({
  _template: z.literal("blog_single_content"),
  enable: z.boolean().optional(),
});

const sectionSchema = z.discriminatedUnion("_template", [
  bannerSchema,
  clientsSchema,
  howItWorksSchema,
  featuresGridSchema,
  featuresSectionSchema,
  featuresExplanationSchema,
  pricingSchema,
  testimonialSchema,
  faqSchema,
  pageCtaSchema,
  aboutBannerSchema,
  ourValuesSchema,
  ourTeamSchema,
  contactHeroSchema,
  blogSectionSchema,
  paginationSchema,
  blogSingleContentSchema,
]);

export const about = defineCollection({
  loader: glob({
    pattern: "*/about.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
    about_banner: aboutBannerSchema.optional(),
    clients: clientsSchema.optional(),
    our_values: ourValuesSchema.optional(),
    our_team: ourTeamSchema.optional(),
    faq: faqSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "*/contact.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
    contact_hero: contactHeroSchema.optional(),
    faq: faqSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});

export const pricing = defineCollection({
  loader: glob({
    pattern: "*/pricing.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
    pricing: pricingSchema.optional(),
    clients: clientsSchema.optional(),
    testimonial: testimonialSchema.optional(),
    faq: faqSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});

export const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    ...commonFields,
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    blog_single_content: blogSingleContentSchema.optional(),
  }),
});

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
    sections: z.array(z.any()).optional(),
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

export const features = defineCollection({
  loader: glob({
    pattern: "*/features.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
    features_grid: featuresGridSchema.optional(),
    features_section: featuresSectionSchema.optional(),
    features_explanation: featuresExplanationSchema.optional(),
    how_it_works: howItWorksSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});

export const testimonial = defineCollection({
  loader: glob({
    pattern: "**/-index.{md,mdx}",
    base: "src/content/testimonial",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        content: z.string(),
      })
    ),
  }),
});

export const faq = defineCollection({
  loader: glob({
    pattern: "**/-index.{md,mdx}",
    base: "src/content/faq",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        active: z.boolean().optional(),
      })
    ),
  }),
});

export const blogPage = defineCollection({
  loader: glob({
    pattern: "*/blog.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
    hero: z
      .object({
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    blog_section: blogSectionSchema.optional(),
    pagination: paginationSchema.optional(),
    page_cta: pageCtaSchema.optional(),
  }),
});

