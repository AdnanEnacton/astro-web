  import type { IslandRegistry } from '@tinacms/astro/experimental';
import PageSections from '../../layouts/partials/PageSections.astro';
import { getSinglePage } from '../contentParser.astro';
import config from '../../config/config.json';

export const islands: IslandRegistry = {
  'page-layout': {
    component: PageSections,
    fetch: async (request, params) => {
      const payload = await request.json();
      
      const locale = params.get('locale') || 'en';
      const type = params.get('type') || 'pages';
      
      let posts: any[] = [];
      let totalPages = 0;
      
      const data = payload.data || payload;
      const hasBlogSection = data.sections && data.sections.some(
        (s: any) => s._template === "blog_section" || s._template === "pagination"
      );

      if (hasBlogSection) {
        posts = (await getSinglePage("blog")).filter((post) =>
          post.id.startsWith(locale + "/")
        );
        totalPages = Math.ceil(posts.length / config.settings.pagination);
      }

      return {
        data,
        posts,
        totalPages,
        type,
      };
    },
    propsFromData: (data: any) => {
      return data as Record<string, any>;
    },
    wrapper: {
      tag: 'main'
    }
  }
};
