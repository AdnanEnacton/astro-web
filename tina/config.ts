import { defineConfig, type TinaField, type Template } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

// Common button schemas
const buttonSchema = {
  type: "object" as const,
  name: "button",
  label: "Button",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "label", label: "Label" },
    { type: "string" as const, name: "link", label: "Link" },
  ],
};

// Section block templates
const bannerTemplate: Template = {
  name: "banner",
  label: "Home Banner",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "content", label: "Content", ui: { component: "textarea" } },
    {
      ...buttonSchema,
      name: "button_primary",
      label: "Primary Button",
    },
    {
      ...buttonSchema,
      name: "button_secondary",
      label: "Secondary Button",
    },
    { type: "boolean" as const, name: "show_video", label: "Show Video" },
    {
      type: "object" as const,
      name: "images",
      label: "Images List",
      list: true,
      fields: [
        { type: "image" as const, name: "src", label: "Image Source" },
        { type: "string" as const, name: "alt", label: "Alt Text" },
      ],
    },
  ],
};

const clientsTemplate: Template = {
  name: "clients",
  label: "Clients Logo Slider",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "paragraph", label: "Paragraph" },
    {
      type: "object" as const,
      name: "logos",
      label: "Client Logos",
      list: true,
      fields: [
        { type: "image" as const, name: "image", label: "Logo Image" },
      ],
    },
  ],
};

const howItWorksTemplate: Template = {
  name: "how_it_works",
  label: "How It Works Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Steps List",
      list: true,
      fields: [
        { type: "string" as const, name: "icon", label: "Icon Path (SVG)" },
        { type: "string" as const, name: "title", label: "Step Title" },
        { type: "string" as const, name: "description", label: "Step Description", ui: { component: "textarea" } },
      ],
    },
  ],
};

const featuresGridTemplate: Template = {
  name: "features_grid",
  label: "Features Grid Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Feature Cards List",
      list: true,
      fields: [
        { type: "string" as const, name: "title", label: "Card Title" },
        { type: "string" as const, name: "description", label: "Card Description", ui: { component: "textarea" } },
        { type: "image" as const, name: "image", label: "Card Image Source" },
        buttonSchema,
      ],
    },
  ],
};

const featuresSectionTemplate: Template = {
  name: "features_section",
  label: "Features List Details",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Feature Rows List",
      list: true,
      fields: [
        { type: "string" as const, name: "title", label: "Row Title" },
        { type: "image" as const, name: "image", label: "Row Image Source" },
        { type: "string" as const, name: "description", label: "Row Description", ui: { component: "textarea" } },
        {
          type: "object" as const,
          name: "bulletpoints",
          label: "Bulletpoints List",
          list: true,
          fields: [
            { type: "string" as const, name: "icon", label: "Icon Path (SVG)" },
            { type: "string" as const, name: "title", label: "Bullet Title" },
            { type: "string" as const, name: "description", label: "Bullet Description" },
          ],
        },
        buttonSchema,
      ],
    },
  ],
};

const featuresExplanationTemplate: Template = {
  name: "features_explanation",
  label: "Features Explanation Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image" as const, name: "image", label: "Main Section Image" },
    {
      type: "object" as const,
      name: "list",
      label: "Rows Comparison Layout List",
      list: true,
      fields: [
        {
          type: "object" as const,
          name: "row",
          label: "Comparison Row List",
          list: true,
          fields: [
            { type: "string" as const, name: "title", label: "Comparison Item Title" },
            { type: "string" as const, name: "description", label: "Comparison Item Description", ui: { component: "textarea" } },
          ],
        },
      ],
    },
  ],
};

const pricingTemplate: Template = {
  name: "pricing",
  label: "Pricing Tiers Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "string" as const, name: "plans_labels", label: "Plans Billing Labels", list: true },
    {
      type: "object" as const,
      name: "plans",
      label: "Pricing Plans List",
      list: true,
      fields: [
        { type: "string" as const, name: "title", label: "Plan Title" },
        { type: "string" as const, name: "description", label: "Plan Description" },
        { type: "string" as const, name: "price_prefix", label: "Price Prefix (e.g. $)" },
        { type: "string" as const, name: "price_monthly", label: "Monthly Price" },
        { type: "string" as const, name: "price_yearly", label: "Yearly Price" },
        { type: "string" as const, name: "price_description_monthly", label: "Monthly Price Description" },
        { type: "string" as const, name: "price_description_yearly", label: "Yearly Price Description" },
        { type: "string" as const, name: "features", label: "Plan Features List", list: true },
        {
          type: "object" as const,
          name: "badge",
          label: "Badge",
          fields: [
            { type: "boolean" as const, name: "enable", label: "Enable" },
            { type: "string" as const, name: "label", label: "Badge Label" },
          ],
        },
        buttonSchema,
      ],
    },
  ],
};

const testimonialTemplate: Template = {
  name: "testimonial",
  label: "Testimonials Section Placeholder",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
  ],
};

const faqTemplate: Template = {
  name: "faq",
  label: "FAQ Accordion Section Placeholder",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
  ],
};

const pageCtaTemplate: Template = {
  name: "page_cta",
  label: "Call To Action Banner Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image" as const, name: "image", label: "CTA Background Image" },
    buttonSchema,
  ],
};

const aboutBannerTemplate: Template = {
  name: "about_banner",
  label: "About Page Banner",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image" as const, name: "left_image", label: "Left Image Path" },
    { type: "image" as const, name: "right_image", label: "Right Image Path" },
    {
      type: "object" as const,
      name: "quote",
      label: "Customer/Founder Quote",
      fields: [
        { type: "image" as const, name: "avatar", label: "Avatar Image" },
        { type: "string" as const, name: "name", label: "Person Name" },
        { type: "string" as const, name: "designation", label: "Person Designation" },
        { type: "string" as const, name: "content", label: "Quote Text", ui: { component: "textarea" } },
      ],
    },
  ],
};

const ourValuesTemplate: Template = {
  name: "our_values",
  label: "Our Values Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Values List",
      list: true,
      fields: [
        { type: "image" as const, name: "icon", label: "Icon SVG Path" },
        { type: "string" as const, name: "title", label: "Value Title" },
        { type: "string" as const, name: "description", label: "Value Description", ui: { component: "textarea" } },
      ],
    },
    {
      type: "object" as const,
      name: "stats",
      label: "Company Statistics List",
      list: true,
      fields: [
        { type: "string" as const, name: "label", label: "Stat Label" },
        { type: "string" as const, name: "value", label: "Stat Value" },
      ],
    },
  ],
};

const ourTeamTemplate: Template = {
  name: "our_team",
  label: "Meet The Team Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Team Members List",
      list: true,
      fields: [
        { type: "string" as const, name: "name", label: "Name" },
        { type: "image" as const, name: "image", label: "Member Photo" },
        { type: "string" as const, name: "company", label: "Company/Affiliation" },
      ],
    },
  ],
};

const contactHeroTemplate: Template = {
  name: "contact_hero",
  label: "Contact Support Hero Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object" as const,
      name: "list",
      label: "Contact Details List",
      list: true,
      fields: [
        { type: "string" as const, name: "icon", label: "Icon Path (SVG)" },
        { type: "string" as const, name: "title", label: "Detail Title" },
        { type: "string" as const, name: "description", label: "Detail Description", ui: { component: "textarea" } },
      ],
    },
  ],
};

const blogSectionTemplate: Template = {
  name: "blog_section",
  label: "Blog Roll Posts Section",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
    { type: "string" as const, name: "title", label: "Title" },
    { type: "string" as const, name: "subtitle", label: "Subtitle" },
    { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "number" as const, name: "visible_posts", label: "Number of Visible Posts" },
    { type: "string" as const, name: "card_layout", label: "Card Layout Style" },
    { type: "boolean" as const, name: "large_heading", label: "Use Large Heading" },
  ],
};

const paginationTemplate: Template = {
  name: "pagination",
  label: "Blog Pagination Controls",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
  ],
};

const blogSingleContentTemplate: Template = {
  name: "blog_single_content",
  label: "Blog Body Content Block",
  fields: [
    { type: "boolean" as const, name: "enable", label: "Enable" },
  ],
};

// All block configurations in a single array
const sectionTemplatesList: Template[] = [
  bannerTemplate,
  clientsTemplate,
  howItWorksTemplate,
  featuresGridTemplate,
  featuresSectionTemplate,
  featuresExplanationTemplate,
  pricingTemplate,
  testimonialTemplate,
  faqTemplate,
  pageCtaTemplate,
  aboutBannerTemplate,
  ourValuesTemplate,
  ourTeamTemplate,
  contactHeroTemplate,
  blogSectionTemplate,
  paginationTemplate,
  blogSingleContentTemplate,
];

// Reusable fields across page collections
const commonFields: TinaField[] = [
  { type: "string" as const, name: "title", label: "Title", isTitle: true, required: true },
  { type: "string" as const, name: "description", label: "Meta Description", ui: { component: "textarea" } },
  { type: "string" as const, name: "meta_title", label: "Meta Title Override" },
  { type: "datetime" as const, name: "date", label: "Publish Date" },
  { type: "image" as const, name: "image", label: "Featured Image" },
  { type: "boolean" as const, name: "draft", label: "Draft Mode" },
  {
    type: "object" as const,
    list: true,
    name: "sections",
    label: "Page Layout Sections",
    templates: sectionTemplatesList,
  },
];

const menuItemFields = [
  { type: "string" as const, name: "name", label: "Link Name" },
  { type: "string" as const, name: "url", label: "Link URL" },
];

const localeMenuFields = (label: string) => [
  {
    type: "object" as const,
    list: true,
    name: "main",
    label: `${label} Main Navigation`,
    fields: menuItemFields,
  },
  {
    type: "object" as const,
    list: true,
    name: "footer_menu",
    label: `${label} Footer Menu Links`,
    fields: menuItemFields,
  },
  {
    type: "object" as const,
    list: true,
    name: "footer_quick_links",
    label: `${label} Footer Quick Links`,
    fields: menuItemFields,
  },
];

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: ({ document }) => {
            const path = document._sys.relativePath;
            const cleanPath = path.replace(/\.(mdx|md)$/, "");
            if (cleanPath === "de/home") {
              return "/";
            }
            if (cleanPath === "en/home") {
              return "/en/";
            }
            if (cleanPath.startsWith("de/")) {
              return `/${cleanPath.slice(3)}/`;
            }
            if (cleanPath.startsWith("en/")) {
              return `/${cleanPath}/`;
            }
            return undefined;
          },
        },
        templates: [
          {
            name: "homepage",
            label: "Homepage",
            fields: [
              ...commonFields,
              { type: "string" as const, name: "keywords", label: "Keywords Meta" },
            ],
          },
          {
            name: "about",
            label: "About Page",
            fields: commonFields,
          },
          {
            name: "pricing",
            label: "Pricing Page",
            fields: commonFields,
          },
          {
            name: "features",
            label: "Features Page",
            fields: commonFields,
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: commonFields,
          },
          {
            name: "blogPage",
            label: "Blog Listing Page",
            fields: commonFields,
          },
          {
            name: "pages",
            label: "Dynamic Content Page",
            fields: commonFields,
          },
        ],
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        ui: {
          router: ({ document }) => {
            const path = document._sys.relativePath;
            const cleanPath = path.replace(/\.(mdx|md)$/, "");
            if (cleanPath.startsWith("de/")) {
              return `/blog/${cleanPath.slice(3)}/`;
            }
            if (cleanPath.startsWith("en/")) {
              return `/en/blog/${cleanPath.slice(3)}/`;
            }
            return undefined;
          },
        },
        fields: [
          ...commonFields,
          { type: "string" as const, name: "author", label: "Author Name" },
          { type: "string" as const, name: "categories", label: "Categories", list: true },
          { type: "string" as const, name: "tags", label: "Tags", list: true },
        ],
      },
      {
        name: "siteConfig",
        label: "Site Settings",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            type: "object" as const,
            name: "site",
            label: "Site Info",
            fields: [
              { type: "string" as const, name: "title", label: "Title" },
              { type: "string" as const, name: "base_url", label: "Base URL" },
              { type: "string" as const, name: "base_path", label: "Base Path" },
              { type: "boolean" as const, name: "trailing_slash", label: "Trailing Slash" },
              { type: "image" as const, name: "favicon", label: "Favicon" },
              { type: "image" as const, name: "logo", label: "Logo" },
              { type: "string" as const, name: "logo_width", label: "Logo Width" },
              { type: "string" as const, name: "logo_height", label: "Logo Height" },
              { type: "string" as const, name: "logo_text", label: "Logo Text" },
            ],
          },
          {
            type: "object" as const,
            name: "settings",
            label: "Blog Settings",
            fields: [
              { type: "number" as const, name: "pagination", label: "Pagination Limit" },
              { type: "number" as const, name: "summary_length", label: "Summary Length" },
              { type: "string" as const, name: "blog_folder", label: "Blog Folder" },
            ],
          },
          {
            type: "object" as const,
            name: "params",
            label: "Params & Copyright",
            fields: [
              { type: "string" as const, name: "contact_form_action", label: "Contact Form Action API" },
              { type: "string" as const, name: "footer_description", label: "Footer Description", ui: { component: "textarea" } },
              { type: "string" as const, name: "copyright", label: "Copyright text" },
            ],
          },
          {
            type: "object" as const,
            name: "google_tag_manager",
            label: "Google Tag Manager",
            fields: [
              { type: "boolean" as const, name: "enable", label: "Enable GTM" },
              { type: "string" as const, name: "gtm_id", label: "GTM ID" },
            ],
          },
          {
            type: "object" as const,
            name: "navigation_buttons",
            label: "Header Action Buttons",
            fields: [
              {
                type: "object" as const,
                name: "dashboard",
                label: "Dashboard Button",
                fields: [
                  { type: "string" as const, name: "label", label: "Label" },
                  { type: "string" as const, name: "link", label: "Link" },
                ],
              },
              {
                type: "object" as const,
                name: "login",
                label: "Login Button",
                fields: [
                  { type: "string" as const, name: "label", label: "Label" },
                  { type: "string" as const, name: "link", label: "Link" },
                ],
              },
            ],
          },
          {
            type: "object" as const,
            name: "metadata",
            label: "Default Metadata",
            fields: [
              { type: "string" as const, name: "meta_author", label: "Author" },
              { type: "image" as const, name: "meta_image", label: "Featured/OG Image" },
              { type: "string" as const, name: "meta_description", label: "Meta Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "deployConfig",
        label: "Deployment & Triggers",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "deploy",
        },
        fields: [
          {
            type: "object" as const,
            name: "staging",
            label: "Staging Push Trigger",
            fields: [
              { type: "string" as const, name: "trigger", label: "Trigger Counter" },
              { type: "string" as const, name: "_note", label: "Instructional Note" },
            ],
          },
          {
            type: "object" as const,
            name: "production",
            label: "Production Publish Trigger",
            fields: [
              { type: "string" as const, name: "trigger", label: "Trigger Counter" },
              { type: "string" as const, name: "_note", label: "Instructional Note" },
            ],
          },
          { type: "boolean" as const, name: "draft", label: "Draft Site Mode" },
        ],
      },
      {
        name: "menuConfig",
        label: "Menu Configurations",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menu",
        },
        fields: [
          {
            type: "object" as const,
            name: "de",
            label: "German Locale (DE) Menu",
            fields: localeMenuFields("DE"),
          },
          {
            type: "object" as const,
            name: "en",
            label: "English Locale (EN) Menu",
            fields: localeMenuFields("EN"),
          },
        ],
      },
      {
        name: "socialConfig",
        label: "Social Media Links",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "social",
        },
        fields: [
          {
            type: "object" as const,
            list: true,
            name: "main",
            label: "Main Social Platforms",
            fields: [
              { type: "string" as const, name: "name", label: "Platform Name" },
              { type: "string" as const, name: "icon", label: "Icon Class Name (e.g. FaFacebook)" },
              { type: "string" as const, name: "link", label: "Profile Link URL" },
            ],
          },
        ],
      },
      {
        name: "themeConfig",
        label: "Theme & Design Styles",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "theme",
        },
        fields: [
          {
            type: "object" as const,
            name: "colors",
            label: "Site Colors",
            fields: [
              {
                type: "object" as const,
                name: "default",
                label: "Default Colors Palette",
                fields: [
                  {
                    type: "object" as const,
                    name: "theme_color",
                    label: "Theme Primary/Secondary/etc. Colors",
                    fields: [
                      { type: "string" as const, name: "primary", label: "Primary (Gradient/Solid)" },
                      { type: "string" as const, name: "secondary", label: "Secondary" },
                      { type: "string" as const, name: "tertiary", label: "Tertiary" },
                      { type: "string" as const, name: "body", label: "Body Background" },
                      { type: "string" as const, name: "border", label: "Border Color" },
                      { type: "string" as const, name: "light", label: "Light Component Background" },
                    ],
                  },
                  {
                    type: "object" as const,
                    name: "text_color",
                    label: "Text Color Variants",
                    fields: [
                      { type: "string" as const, name: "text", label: "Base Text Color" },
                      { type: "string" as const, name: "text_dark", nameOverride: "text-dark", label: "Dark Text Color (text-dark)" },
                      { type: "string" as const, name: "text_light", nameOverride: "text-light", label: "Light Text Color (text-light)" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object" as const,
            name: "fonts",
            label: "Fonts & Typography",
            fields: [
              {
                type: "object" as const,
                name: "font_family",
                label: "Font Families",
                fields: [
                  { type: "string" as const, name: "primary", label: "Primary Font" },
                  { type: "string" as const, name: "primary_type", label: "Primary Font Generic Type" },
                  { type: "string" as const, name: "secondary", label: "Secondary Font" },
                  { type: "string" as const, name: "secondary_type", label: "Secondary Font Generic Type" },
                ],
              },
              {
                type: "object" as const,
                name: "font_size",
                label: "Font Sizes",
                fields: [
                  { type: "string" as const, name: "base", label: "Base Size (px)" },
                  { type: "string" as const, name: "scale", label: "Scale Factor" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "faq",
        label: "FAQs Content",
        path: "src/content/faq",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: ({ document }) => {
            const path = document._sys.relativePath;
            if (path.startsWith("en/")) {
              return "/en/pricing/";
            }
            return "/pricing/";
          },
        },
        match: {
          include: "**/-index",
        },
        fields: [
          { type: "boolean" as const, name: "enable", label: "Enable FAQs Section" },
          { type: "string" as const, name: "subtitle", label: "Subtitle" },
          { type: "string" as const, name: "title", label: "Title" },
          { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object" as const,
            list: true,
            name: "list",
            label: "FAQ Items List",
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New FAQ Item" };
              },
            },
            fields: [
              { type: "string" as const, name: "title", label: "Question" },
              { type: "string" as const, name: "description", label: "Answer Description", ui: { component: "textarea" } },
              { type: "boolean" as const, name: "active", label: "Active/Expanded by Default" },
            ],
          },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials Content",
        path: "src/content/testimonial",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: ({ document }) => {
            const path = document._sys.relativePath;
            if (path.startsWith("en/")) {
              return "/en/pricing/";
            }
            return "/pricing/";
          },
        },
        match: {
          include: "**/-index",
        },
        fields: [
          { type: "boolean" as const, name: "enable", label: "Enable Testimonials Section" },
          { type: "string" as const, name: "subtitle", label: "Subtitle" },
          { type: "string" as const, name: "title", label: "Title" },
          { type: "string" as const, name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object" as const,
            list: true,
            name: "list",
            label: "Reviews List",
            ui: {
              itemProps: (item) => {
                return { label: item?.name ? `${item.name} (${item.designation || ""})` : "New Review" };
              },
            },
            fields: [
              { type: "string" as const, name: "name", label: "Author Name" },
              { type: "string" as const, name: "designation", label: "Author Designation/Company" },
              { type: "image" as const, name: "avatar", label: "Author Avatar Image" },
              { type: "string" as const, name: "content", label: "Review Content", ui: { component: "textarea" } },
            ],
          },
        ],
      },
    ],
  },
});
