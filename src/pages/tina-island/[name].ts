import { experimental_createIslandRoute } from '@tinacms/astro/experimental';
import { islands } from '../../lib/tina/islands';

export const prerender = import.meta.env.PROD;

export async function getStaticPaths() {
  return [];
}

export const ALL = experimental_createIslandRoute(islands);
