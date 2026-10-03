import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { workSchema } from './lib/model.mjs';
import { z } from 'zod';

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
  schema: workSchema,
});
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(), slug: z.string(), eyebrow: z.string(), summary: z.string(),
    type: z.enum(['book', 'project', 'work']), scale: z.string(), status: z.string(),
    cover: z.string().optional(), next: z.string(), nextTitle: z.string(),
    featured: z.boolean().default(false), order: z.number().int().nonnegative().default(999),
    oneLine: z.string().optional(), origin: z.string().optional(), usage: z.string().optional(),
    decisions: z.array(z.object({ label: z.enum(['我提出', 'AI 实现', '共同']), text: z.string() })).default([]),
    iterations: z.array(z.object({ stage: z.string(), text: z.string() })).default([]),
    result: z.string().optional(), techStack: z.array(z.string()).default([]),
    showcase: z.string().optional(), capabilities: z.array(z.string()).default([]),
    homeMetrics: z.array(z.object({ value: z.string(), label: z.string() })).max(2).default([]),
    judgment: z.string().optional(), limits: z.string().optional(), limitsTitle: z.string().default('目前的不足'),
    technology: z.string().optional(), implementation: z.string().optional(),
    tests: z.number().int().positive().optional(), testLabel: z.string().default('项自动化测试通过'),
    learning: z.string().optional(), transfer: z.string().optional(), disclaimer: z.string().optional(),
  }),
});
export const collections = { works, cases };
