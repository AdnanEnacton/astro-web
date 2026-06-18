export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  ... on PagesHomepage {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesHomepageSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesHomepageSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesHomepageSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesHomepageSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesHomepageSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesHomepageSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesHomepageSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesHomepageSectionsTestimonial {
        enable
      }
      ... on PagesHomepageSectionsFaq {
        enable
      }
      ... on PagesHomepageSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesHomepageSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesHomepageSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesHomepageSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesHomepageSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesHomepageSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesHomepageSectionsPagination {
        enable
      }
      ... on PagesHomepageSectionsBlog_single_content {
        enable
      }
    }
    keywords
  }
  ... on PagesAbout {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesAboutSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesAboutSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesAboutSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesAboutSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesAboutSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesAboutSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesAboutSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesAboutSectionsTestimonial {
        enable
      }
      ... on PagesAboutSectionsFaq {
        enable
      }
      ... on PagesAboutSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesAboutSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesAboutSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesAboutSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesAboutSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesAboutSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesAboutSectionsPagination {
        enable
      }
      ... on PagesAboutSectionsBlog_single_content {
        enable
      }
    }
  }
  ... on PagesPricing {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesPricingSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesPricingSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesPricingSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesPricingSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPricingSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPricingSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesPricingSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPricingSectionsTestimonial {
        enable
      }
      ... on PagesPricingSectionsFaq {
        enable
      }
      ... on PagesPricingSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesPricingSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesPricingSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesPricingSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesPricingSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesPricingSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesPricingSectionsPagination {
        enable
      }
      ... on PagesPricingSectionsBlog_single_content {
        enable
      }
    }
  }
  ... on PagesFeatures {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesFeaturesSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesFeaturesSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesFeaturesSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesFeaturesSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesFeaturesSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesFeaturesSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesFeaturesSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesFeaturesSectionsTestimonial {
        enable
      }
      ... on PagesFeaturesSectionsFaq {
        enable
      }
      ... on PagesFeaturesSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesFeaturesSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesFeaturesSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesFeaturesSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesFeaturesSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesFeaturesSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesFeaturesSectionsPagination {
        enable
      }
      ... on PagesFeaturesSectionsBlog_single_content {
        enable
      }
    }
  }
  ... on PagesContact {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesContactSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesContactSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesContactSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesContactSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesContactSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesContactSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesContactSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesContactSectionsTestimonial {
        enable
      }
      ... on PagesContactSectionsFaq {
        enable
      }
      ... on PagesContactSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesContactSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesContactSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesContactSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesContactSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesContactSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesContactSectionsPagination {
        enable
      }
      ... on PagesContactSectionsBlog_single_content {
        enable
      }
    }
  }
  ... on PagesBlogPage {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesBlogPageSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesBlogPageSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesBlogPageSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesBlogPageSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesBlogPageSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesBlogPageSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesBlogPageSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesBlogPageSectionsTestimonial {
        enable
      }
      ... on PagesBlogPageSectionsFaq {
        enable
      }
      ... on PagesBlogPageSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesBlogPageSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesBlogPageSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesBlogPageSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesBlogPageSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesBlogPageSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesBlogPageSectionsPagination {
        enable
      }
      ... on PagesBlogPageSectionsBlog_single_content {
        enable
      }
    }
  }
  ... on PagesPages {
    title
    description
    meta_title
    date
    image
    draft
    sections {
      __typename
      ... on PagesPagesSectionsBanner {
        enable
        title
        content
        button_primary {
          __typename
          enable
          label
          link
        }
        button_secondary {
          __typename
          enable
          label
          link
        }
        show_video
        images {
          __typename
          src
          alt
        }
      }
      ... on PagesPagesSectionsClients {
        enable
        paragraph
        logos {
          __typename
          image
        }
      }
      ... on PagesPagesSectionsHow_it_works {
        enable
        subtitle
        title
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesPagesSectionsFeatures_grid {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          description
          image
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPagesSectionsFeatures_section {
        enable
        subtitle
        title
        description
        list {
          __typename
          title
          image
          description
          bulletpoints {
            __typename
            icon
            title
            description
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPagesSectionsFeatures_explanation {
        enable
        subtitle
        title
        description
        image
        list {
          __typename
          row {
            __typename
            title
            description
          }
        }
      }
      ... on PagesPagesSectionsPricing {
        enable
        subtitle
        title
        description
        plans_labels
        plans {
          __typename
          title
          description
          price_prefix
          price_monthly
          price_yearly
          price_description_monthly
          price_description_yearly
          features
          badge {
            __typename
            enable
            label
          }
          button {
            __typename
            enable
            label
            link
          }
        }
      }
      ... on PagesPagesSectionsTestimonial {
        enable
      }
      ... on PagesPagesSectionsFaq {
        enable
      }
      ... on PagesPagesSectionsPage_cta {
        enable
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
      ... on PagesPagesSectionsAbout_banner {
        enable
        title
        subtitle
        description
        left_image
        right_image
        quote {
          __typename
          avatar
          name
          designation
          content
        }
      }
      ... on PagesPagesSectionsOur_values {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
        stats {
          __typename
          label
          value
        }
      }
      ... on PagesPagesSectionsOur_team {
        enable
        title
        subtitle
        description
        list {
          __typename
          name
          image
          company
        }
      }
      ... on PagesPagesSectionsContact_hero {
        enable
        title
        subtitle
        description
        list {
          __typename
          icon
          title
          description
        }
      }
      ... on PagesPagesSectionsBlog_section {
        enable
        title
        subtitle
        description
        visible_posts
        card_layout
        large_heading
      }
      ... on PagesPagesSectionsPagination {
        enable
      }
      ... on PagesPagesSectionsBlog_single_content {
        enable
      }
    }
  }
}
    `;
export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  __typename
  title
  description
  meta_title
  date
  image
  draft
  sections {
    __typename
    ... on BlogSectionsBanner {
      enable
      title
      content
      button_primary {
        __typename
        enable
        label
        link
      }
      button_secondary {
        __typename
        enable
        label
        link
      }
      show_video
      images {
        __typename
        src
        alt
      }
    }
    ... on BlogSectionsClients {
      enable
      paragraph
      logos {
        __typename
        image
      }
    }
    ... on BlogSectionsHow_it_works {
      enable
      subtitle
      title
      description
      list {
        __typename
        icon
        title
        description
      }
    }
    ... on BlogSectionsFeatures_grid {
      enable
      subtitle
      title
      description
      list {
        __typename
        title
        description
        image
        button {
          __typename
          enable
          label
          link
        }
      }
    }
    ... on BlogSectionsFeatures_section {
      enable
      subtitle
      title
      description
      list {
        __typename
        title
        image
        description
        bulletpoints {
          __typename
          icon
          title
          description
        }
        button {
          __typename
          enable
          label
          link
        }
      }
    }
    ... on BlogSectionsFeatures_explanation {
      enable
      subtitle
      title
      description
      image
      list {
        __typename
        row {
          __typename
          title
          description
        }
      }
    }
    ... on BlogSectionsPricing {
      enable
      subtitle
      title
      description
      plans_labels
      plans {
        __typename
        title
        description
        price_prefix
        price_monthly
        price_yearly
        price_description_monthly
        price_description_yearly
        features
        badge {
          __typename
          enable
          label
        }
        button {
          __typename
          enable
          label
          link
        }
      }
    }
    ... on BlogSectionsTestimonial {
      enable
    }
    ... on BlogSectionsFaq {
      enable
    }
    ... on BlogSectionsPage_cta {
      enable
      title
      description
      image
      button {
        __typename
        enable
        label
        link
      }
    }
    ... on BlogSectionsAbout_banner {
      enable
      title
      subtitle
      description
      left_image
      right_image
      quote {
        __typename
        avatar
        name
        designation
        content
      }
    }
    ... on BlogSectionsOur_values {
      enable
      title
      subtitle
      description
      list {
        __typename
        icon
        title
        description
      }
      stats {
        __typename
        label
        value
      }
    }
    ... on BlogSectionsOur_team {
      enable
      title
      subtitle
      description
      list {
        __typename
        name
        image
        company
      }
    }
    ... on BlogSectionsContact_hero {
      enable
      title
      subtitle
      description
      list {
        __typename
        icon
        title
        description
      }
    }
    ... on BlogSectionsBlog_section {
      enable
      title
      subtitle
      description
      visible_posts
      card_layout
      large_heading
    }
    ... on BlogSectionsPagination {
      enable
    }
    ... on BlogSectionsBlog_single_content {
      enable
    }
  }
  author
  categories
  tags
}
    `;
export const SiteConfigPartsFragmentDoc = gql`
    fragment SiteConfigParts on SiteConfig {
  __typename
  site {
    __typename
    title
    base_url
    base_path
    trailing_slash
    favicon
    logo
    logo_width
    logo_height
    logo_text
  }
  settings {
    __typename
    pagination
    summary_length
    blog_folder
  }
  params {
    __typename
    contact_form_action
    footer_description
    copyright
  }
  google_tag_manager {
    __typename
    enable
    gtm_id
  }
  navigation_buttons {
    __typename
    dashboard {
      __typename
      label
      link
    }
    login {
      __typename
      label
      link
    }
  }
  metadata {
    __typename
    meta_author
    meta_image
    meta_description
  }
}
    `;
export const DeployConfigPartsFragmentDoc = gql`
    fragment DeployConfigParts on DeployConfig {
  __typename
  staging {
    __typename
    trigger
    _note
  }
  production {
    __typename
    trigger
    _note
  }
  draft
}
    `;
export const MenuConfigPartsFragmentDoc = gql`
    fragment MenuConfigParts on MenuConfig {
  __typename
  de {
    __typename
    main {
      __typename
      name
      url
    }
    footer_menu {
      __typename
      name
      url
    }
    footer_quick_links {
      __typename
      name
      url
    }
  }
  en {
    __typename
    main {
      __typename
      name
      url
    }
    footer_menu {
      __typename
      name
      url
    }
    footer_quick_links {
      __typename
      name
      url
    }
  }
}
    `;
export const SocialConfigPartsFragmentDoc = gql`
    fragment SocialConfigParts on SocialConfig {
  __typename
  main {
    __typename
    name
    icon
    link
  }
}
    `;
export const ThemeConfigPartsFragmentDoc = gql`
    fragment ThemeConfigParts on ThemeConfig {
  __typename
  colors {
    __typename
    default {
      __typename
      theme_color {
        __typename
        primary
        secondary
        tertiary
        body
        border
        light
      }
      text_color {
        __typename
        text
        text_dark
        text_light
      }
    }
  }
  fonts {
    __typename
    font_family {
      __typename
      primary
      primary_type
      secondary
      secondary_type
    }
    font_size {
      __typename
      base
      scale
    }
  }
}
    `;
export const FaqPartsFragmentDoc = gql`
    fragment FaqParts on Faq {
  __typename
  enable
  subtitle
  title
  description
  list {
    __typename
    title
    description
    active
  }
}
    `;
export const TestimonialPartsFragmentDoc = gql`
    fragment TestimonialParts on Testimonial {
  __typename
  enable
  subtitle
  title
  description
  list {
    __typename
    name
    designation
    avatar
    content
  }
}
    `;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const BlogDocument = gql`
    query blog($relativePath: String!) {
  blog(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogParts
  }
}
    ${BlogPartsFragmentDoc}`;
export const BlogConnectionDocument = gql`
    query blogConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogFilter) {
  blogConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogParts
      }
    }
  }
}
    ${BlogPartsFragmentDoc}`;
export const SiteConfigDocument = gql`
    query siteConfig($relativePath: String!) {
  siteConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteConfigParts
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export const SiteConfigConnectionDocument = gql`
    query siteConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteConfigFilter) {
  siteConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteConfigParts
      }
    }
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export const DeployConfigDocument = gql`
    query deployConfig($relativePath: String!) {
  deployConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DeployConfigParts
  }
}
    ${DeployConfigPartsFragmentDoc}`;
export const DeployConfigConnectionDocument = gql`
    query deployConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DeployConfigFilter) {
  deployConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DeployConfigParts
      }
    }
  }
}
    ${DeployConfigPartsFragmentDoc}`;
export const MenuConfigDocument = gql`
    query menuConfig($relativePath: String!) {
  menuConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MenuConfigParts
  }
}
    ${MenuConfigPartsFragmentDoc}`;
export const MenuConfigConnectionDocument = gql`
    query menuConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MenuConfigFilter) {
  menuConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MenuConfigParts
      }
    }
  }
}
    ${MenuConfigPartsFragmentDoc}`;
export const SocialConfigDocument = gql`
    query socialConfig($relativePath: String!) {
  socialConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SocialConfigParts
  }
}
    ${SocialConfigPartsFragmentDoc}`;
export const SocialConfigConnectionDocument = gql`
    query socialConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SocialConfigFilter) {
  socialConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SocialConfigParts
      }
    }
  }
}
    ${SocialConfigPartsFragmentDoc}`;
export const ThemeConfigDocument = gql`
    query themeConfig($relativePath: String!) {
  themeConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ThemeConfigParts
  }
}
    ${ThemeConfigPartsFragmentDoc}`;
export const ThemeConfigConnectionDocument = gql`
    query themeConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ThemeConfigFilter) {
  themeConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ThemeConfigParts
      }
    }
  }
}
    ${ThemeConfigPartsFragmentDoc}`;
export const FaqDocument = gql`
    query faq($relativePath: String!) {
  faq(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FaqParts
  }
}
    ${FaqPartsFragmentDoc}`;
export const FaqConnectionDocument = gql`
    query faqConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FaqFilter) {
  faqConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FaqParts
      }
    }
  }
}
    ${FaqPartsFragmentDoc}`;
export const TestimonialDocument = gql`
    query testimonial($relativePath: String!) {
  testimonial(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TestimonialParts
  }
}
    ${TestimonialPartsFragmentDoc}`;
export const TestimonialConnectionDocument = gql`
    query testimonialConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TestimonialFilter) {
  testimonialConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TestimonialParts
      }
    }
  }
}
    ${TestimonialPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    blog(variables, options) {
      return requester(BlogDocument, variables, options);
    },
    blogConnection(variables, options) {
      return requester(BlogConnectionDocument, variables, options);
    },
    siteConfig(variables, options) {
      return requester(SiteConfigDocument, variables, options);
    },
    siteConfigConnection(variables, options) {
      return requester(SiteConfigConnectionDocument, variables, options);
    },
    deployConfig(variables, options) {
      return requester(DeployConfigDocument, variables, options);
    },
    deployConfigConnection(variables, options) {
      return requester(DeployConfigConnectionDocument, variables, options);
    },
    menuConfig(variables, options) {
      return requester(MenuConfigDocument, variables, options);
    },
    menuConfigConnection(variables, options) {
      return requester(MenuConfigConnectionDocument, variables, options);
    },
    socialConfig(variables, options) {
      return requester(SocialConfigDocument, variables, options);
    },
    socialConfigConnection(variables, options) {
      return requester(SocialConfigConnectionDocument, variables, options);
    },
    themeConfig(variables, options) {
      return requester(ThemeConfigDocument, variables, options);
    },
    themeConfigConnection(variables, options) {
      return requester(ThemeConfigConnectionDocument, variables, options);
    },
    faq(variables, options) {
      return requester(FaqDocument, variables, options);
    },
    faqConnection(variables, options) {
      return requester(FaqConnectionDocument, variables, options);
    },
    testimonial(variables, options) {
      return requester(TestimonialDocument, variables, options);
    },
    testimonialConnection(variables, options) {
      return requester(TestimonialConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
