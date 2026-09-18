import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { workSchema } from './lib/model.mjs';

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
  schema: workSchema,
});
export const collections = { works };
