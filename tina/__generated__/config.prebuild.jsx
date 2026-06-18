// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "editor";
var buttonSchema = {
  type: "object",
  name: "button",
  label: "Button",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "label", label: "Label" },
    { type: "string", name: "link", label: "Link" }
  ]
};
var bannerTemplate = {
  name: "banner",
  label: "Home Banner",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "content", label: "Content", ui: { component: "textarea" } },
    {
      ...buttonSchema,
      name: "button_primary",
      label: "Primary Button"
    },
    {
      ...buttonSchema,
      name: "button_secondary",
      label: "Secondary Button"
    },
    { type: "boolean", name: "show_video", label: "Show Video" },
    {
      type: "object",
      name: "images",
      label: "Images List",
      list: true,
      fields: [
        { type: "image", name: "src", label: "Image Source" },
        { type: "string", name: "alt", label: "Alt Text" }
      ]
    }
  ]
};
var clientsTemplate = {
  name: "clients",
  label: "Clients Logo Slider",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "paragraph", label: "Paragraph" },
    {
      type: "object",
      name: "logos",
      label: "Client Logos",
      list: true,
      fields: [
        { type: "image", name: "image", label: "Logo Image" }
      ]
    }
  ]
};
var howItWorksTemplate = {
  name: "how_it_works",
  label: "How It Works Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Steps List",
      list: true,
      fields: [
        { type: "string", name: "icon", label: "Icon Path (SVG)" },
        { type: "string", name: "title", label: "Step Title" },
        { type: "string", name: "description", label: "Step Description", ui: { component: "textarea" } }
      ]
    }
  ]
};
var featuresGridTemplate = {
  name: "features_grid",
  label: "Features Grid Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Feature Cards List",
      list: true,
      fields: [
        { type: "string", name: "title", label: "Card Title" },
        { type: "string", name: "description", label: "Card Description", ui: { component: "textarea" } },
        { type: "image", name: "image", label: "Card Image Source" },
        buttonSchema
      ]
    }
  ]
};
var featuresSectionTemplate = {
  name: "features_section",
  label: "Features List Details",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Feature Rows List",
      list: true,
      fields: [
        { type: "string", name: "title", label: "Row Title" },
        { type: "image", name: "image", label: "Row Image Source" },
        { type: "string", name: "description", label: "Row Description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "bulletpoints",
          label: "Bulletpoints List",
          list: true,
          fields: [
            { type: "string", name: "icon", label: "Icon Path (SVG)" },
            { type: "string", name: "title", label: "Bullet Title" },
            { type: "string", name: "description", label: "Bullet Description" }
          ]
        },
        buttonSchema
      ]
    }
  ]
};
var featuresExplanationTemplate = {
  name: "features_explanation",
  label: "Features Explanation Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image", name: "image", label: "Main Section Image" },
    {
      type: "object",
      name: "list",
      label: "Rows Comparison Layout List",
      list: true,
      fields: [
        {
          type: "object",
          name: "row",
          label: "Comparison Row List",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Comparison Item Title" },
            { type: "string", name: "description", label: "Comparison Item Description", ui: { component: "textarea" } }
          ]
        }
      ]
    }
  ]
};
var pricingTemplate = {
  name: "pricing",
  label: "Pricing Tiers Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "string", name: "plans_labels", label: "Plans Billing Labels", list: true },
    {
      type: "object",
      name: "plans",
      label: "Pricing Plans List",
      list: true,
      fields: [
        { type: "string", name: "title", label: "Plan Title" },
        { type: "string", name: "description", label: "Plan Description" },
        { type: "string", name: "price_prefix", label: "Price Prefix (e.g. $)" },
        { type: "string", name: "price_monthly", label: "Monthly Price" },
        { type: "string", name: "price_yearly", label: "Yearly Price" },
        { type: "string", name: "price_description_monthly", label: "Monthly Price Description" },
        { type: "string", name: "price_description_yearly", label: "Yearly Price Description" },
        { type: "string", name: "features", label: "Plan Features List", list: true },
        {
          type: "object",
          name: "badge",
          label: "Badge",
          fields: [
            { type: "boolean", name: "enable", label: "Enable" },
            { type: "string", name: "label", label: "Badge Label" }
          ]
        },
        buttonSchema
      ]
    }
  ]
};
var testimonialTemplate = {
  name: "testimonial",
  label: "Testimonials Section Placeholder",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" }
  ]
};
var faqTemplate = {
  name: "faq",
  label: "FAQ Accordion Section Placeholder",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" }
  ]
};
var pageCtaTemplate = {
  name: "page_cta",
  label: "Call To Action Banner Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image", name: "image", label: "CTA Background Image" },
    buttonSchema
  ]
};
var aboutBannerTemplate = {
  name: "about_banner",
  label: "About Page Banner",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "image", name: "left_image", label: "Left Image Path" },
    { type: "image", name: "right_image", label: "Right Image Path" },
    {
      type: "object",
      name: "quote",
      label: "Customer/Founder Quote",
      fields: [
        { type: "image", name: "avatar", label: "Avatar Image" },
        { type: "string", name: "name", label: "Person Name" },
        { type: "string", name: "designation", label: "Person Designation" },
        { type: "string", name: "content", label: "Quote Text", ui: { component: "textarea" } }
      ]
    }
  ]
};
var ourValuesTemplate = {
  name: "our_values",
  label: "Our Values Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Values List",
      list: true,
      fields: [
        { type: "image", name: "icon", label: "Icon SVG Path" },
        { type: "string", name: "title", label: "Value Title" },
        { type: "string", name: "description", label: "Value Description", ui: { component: "textarea" } }
      ]
    },
    {
      type: "object",
      name: "stats",
      label: "Company Statistics List",
      list: true,
      fields: [
        { type: "string", name: "label", label: "Stat Label" },
        { type: "string", name: "value", label: "Stat Value" }
      ]
    }
  ]
};
var ourTeamTemplate = {
  name: "our_team",
  label: "Meet The Team Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Team Members List",
      list: true,
      fields: [
        { type: "string", name: "name", label: "Name" },
        { type: "image", name: "image", label: "Member Photo" },
        { type: "string", name: "company", label: "Company/Affiliation" }
      ]
    }
  ]
};
var contactHeroTemplate = {
  name: "contact_hero",
  label: "Contact Support Hero Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    {
      type: "object",
      name: "list",
      label: "Contact Details List",
      list: true,
      fields: [
        { type: "string", name: "icon", label: "Icon Path (SVG)" },
        { type: "string", name: "title", label: "Detail Title" },
        { type: "string", name: "description", label: "Detail Description", ui: { component: "textarea" } }
      ]
    }
  ]
};
var blogSectionTemplate = {
  name: "blog_section",
  label: "Blog Roll Posts Section",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "number", name: "visible_posts", label: "Number of Visible Posts" },
    { type: "string", name: "card_layout", label: "Card Layout Style" },
    { type: "boolean", name: "large_heading", label: "Use Large Heading" }
  ]
};
var paginationTemplate = {
  name: "pagination",
  label: "Blog Pagination Controls",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" }
  ]
};
var blogSingleContentTemplate = {
  name: "blog_single_content",
  label: "Blog Body Content Block",
  fields: [
    { type: "boolean", name: "enable", label: "Enable" }
  ]
};
var sectionTemplatesList = [
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
  blogSingleContentTemplate
];
var commonFields = [
  { type: "string", name: "title", label: "Title", isTitle: true, required: true },
  { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } },
  { type: "string", name: "meta_title", label: "Meta Title Override" },
  { type: "datetime", name: "date", label: "Publish Date" },
  { type: "image", name: "image", label: "Featured Image" },
  { type: "boolean", name: "draft", label: "Draft Mode" },
  {
    type: "object",
    list: true,
    name: "sections",
    label: "Page Layout Sections",
    templates: sectionTemplatesList
  }
];
var menuItemFields = [
  { type: "string", name: "name", label: "Link Name" },
  { type: "string", name: "url", label: "Link URL" }
];
var localeMenuFields = (label) => [
  {
    type: "object",
    list: true,
    name: "main",
    label: `${label} Main Navigation`,
    fields: menuItemFields
  },
  {
    type: "object",
    list: true,
    name: "footer_menu",
    label: `${label} Footer Menu Links`,
    fields: menuItemFields
  },
  {
    type: "object",
    list: true,
    name: "footer_quick_links",
    label: `${label} Footer Quick Links`,
    fields: menuItemFields
  }
];
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
            delete: false
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
            return void 0;
          }
        },
        templates: [
          {
            name: "homepage",
            label: "Homepage",
            fields: [
              ...commonFields,
              { type: "string", name: "keywords", label: "Keywords Meta" }
            ]
          },
          {
            name: "about",
            label: "About Page",
            fields: commonFields
          },
          {
            name: "pricing",
            label: "Pricing Page",
            fields: commonFields
          },
          {
            name: "features",
            label: "Features Page",
            fields: commonFields
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: commonFields
          },
          {
            name: "blogPage",
            label: "Blog Listing Page",
            fields: commonFields
          },
          {
            name: "pages",
            label: "Dynamic Content Page",
            fields: commonFields
          }
        ]
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
            return void 0;
          }
        },
        fields: [
          ...commonFields,
          { type: "string", name: "author", label: "Author Name" },
          { type: "string", name: "categories", label: "Categories", list: true },
          { type: "string", name: "tags", label: "Tags", list: true }
        ]
      },
      {
        name: "siteConfig",
        label: "Site Settings",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "config"
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Info",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "base_url", label: "Base URL" },
              { type: "string", name: "base_path", label: "Base Path" },
              { type: "boolean", name: "trailing_slash", label: "Trailing Slash" },
              { type: "image", name: "favicon", label: "Favicon" },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "logo_width", label: "Logo Width" },
              { type: "string", name: "logo_height", label: "Logo Height" },
              { type: "string", name: "logo_text", label: "Logo Text" }
            ]
          },
          {
            type: "object",
            name: "settings",
            label: "Blog Settings",
            fields: [
              { type: "number", name: "pagination", label: "Pagination Limit" },
              { type: "number", name: "summary_length", label: "Summary Length" },
              { type: "string", name: "blog_folder", label: "Blog Folder" }
            ]
          },
          {
            type: "object",
            name: "params",
            label: "Params & Copyright",
            fields: [
              { type: "string", name: "contact_form_action", label: "Contact Form Action API" },
              { type: "string", name: "footer_description", label: "Footer Description", ui: { component: "textarea" } },
              { type: "string", name: "copyright", label: "Copyright text" }
            ]
          },
          {
            type: "object",
            name: "google_tag_manager",
            label: "Google Tag Manager",
            fields: [
              { type: "boolean", name: "enable", label: "Enable GTM" },
              { type: "string", name: "gtm_id", label: "GTM ID" }
            ]
          },
          {
            type: "object",
            name: "navigation_buttons",
            label: "Header Action Buttons",
            fields: [
              {
                type: "object",
                name: "dashboard",
                label: "Dashboard Button",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "link", label: "Link" }
                ]
              },
              {
                type: "object",
                name: "login",
                label: "Login Button",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "link", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "metadata",
            label: "Default Metadata",
            fields: [
              { type: "string", name: "meta_author", label: "Author" },
              { type: "image", name: "meta_image", label: "Featured/OG Image" },
              { type: "string", name: "meta_description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "deployConfig",
        label: "Deployment & Triggers",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "deploy"
        },
        fields: [
          {
            type: "object",
            name: "staging",
            label: "Staging Push Trigger",
            fields: [
              { type: "string", name: "trigger", label: "Trigger Counter" },
              { type: "string", name: "_note", label: "Instructional Note" }
            ]
          },
          {
            type: "object",
            name: "production",
            label: "Production Publish Trigger",
            fields: [
              { type: "string", name: "trigger", label: "Trigger Counter" },
              { type: "string", name: "_note", label: "Instructional Note" }
            ]
          },
          { type: "boolean", name: "draft", label: "Draft Site Mode" }
        ]
      },
      {
        name: "menuConfig",
        label: "Menu Configurations",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "menu"
        },
        fields: [
          {
            type: "object",
            name: "de",
            label: "German Locale (DE) Menu",
            fields: localeMenuFields("DE")
          },
          {
            type: "object",
            name: "en",
            label: "English Locale (EN) Menu",
            fields: localeMenuFields("EN")
          }
        ]
      },
      {
        name: "socialConfig",
        label: "Social Media Links",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "social"
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "main",
            label: "Main Social Platforms",
            fields: [
              { type: "string", name: "name", label: "Platform Name" },
              { type: "string", name: "icon", label: "Icon Class Name (e.g. FaFacebook)" },
              { type: "string", name: "link", label: "Profile Link URL" }
            ]
          }
        ]
      },
      {
        name: "themeConfig",
        label: "Theme & Design Styles",
        path: "src/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "theme"
        },
        fields: [
          {
            type: "object",
            name: "colors",
            label: "Site Colors",
            fields: [
              {
                type: "object",
                name: "default",
                label: "Default Colors Palette",
                fields: [
                  {
                    type: "object",
                    name: "theme_color",
                    label: "Theme Primary/Secondary/etc. Colors",
                    fields: [
                      { type: "string", name: "primary", label: "Primary (Gradient/Solid)" },
                      { type: "string", name: "secondary", label: "Secondary" },
                      { type: "string", name: "tertiary", label: "Tertiary" },
                      { type: "string", name: "body", label: "Body Background" },
                      { type: "string", name: "border", label: "Border Color" },
                      { type: "string", name: "light", label: "Light Component Background" }
                    ]
                  },
                  {
                    type: "object",
                    name: "text_color",
                    label: "Text Color Variants",
                    fields: [
                      { type: "string", name: "text", label: "Base Text Color" },
                      { type: "string", name: "text_dark", nameOverride: "text-dark", label: "Dark Text Color (text-dark)" },
                      { type: "string", name: "text_light", nameOverride: "text-light", label: "Light Text Color (text-light)" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "fonts",
            label: "Fonts & Typography",
            fields: [
              {
                type: "object",
                name: "font_family",
                label: "Font Families",
                fields: [
                  { type: "string", name: "primary", label: "Primary Font" },
                  { type: "string", name: "primary_type", label: "Primary Font Generic Type" },
                  { type: "string", name: "secondary", label: "Secondary Font" },
                  { type: "string", name: "secondary_type", label: "Secondary Font Generic Type" }
                ]
              },
              {
                type: "object",
                name: "font_size",
                label: "Font Sizes",
                fields: [
                  { type: "string", name: "base", label: "Base Size (px)" },
                  { type: "string", name: "scale", label: "Scale Factor" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "faq",
        label: "FAQs Content",
        path: "src/content/faq",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: ({ document }) => {
            const path = document._sys.relativePath;
            if (path.startsWith("en/")) {
              return "/en/pricing/";
            }
            return "/pricing/";
          }
        },
        match: {
          include: "**/-index"
        },
        fields: [
          { type: "boolean", name: "enable", label: "Enable FAQs Section" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "list",
            label: "FAQ Items List",
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New FAQ Item" };
              }
            },
            fields: [
              { type: "string", name: "title", label: "Question" },
              { type: "string", name: "description", label: "Answer Description", ui: { component: "textarea" } },
              { type: "boolean", name: "active", label: "Active/Expanded by Default" }
            ]
          }
        ]
      },
      {
        name: "testimonial",
        label: "Testimonials Content",
        path: "src/content/testimonial",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: ({ document }) => {
            const path = document._sys.relativePath;
            if (path.startsWith("en/")) {
              return "/en/pricing/";
            }
            return "/pricing/";
          }
        },
        match: {
          include: "**/-index"
        },
        fields: [
          { type: "boolean", name: "enable", label: "Enable Testimonials Section" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "list",
            label: "Reviews List",
            ui: {
              itemProps: (item) => {
                return { label: item?.name ? `${item.name} (${item.designation || ""})` : "New Review" };
              }
            },
            fields: [
              { type: "string", name: "name", label: "Author Name" },
              { type: "string", name: "designation", label: "Author Designation/Company" },
              { type: "image", name: "avatar", label: "Author Avatar Image" },
              { type: "string", name: "content", label: "Review Content", ui: { component: "textarea" } }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
