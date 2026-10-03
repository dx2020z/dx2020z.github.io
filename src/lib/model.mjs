import { z } from 'zod';

const safeURL = z.url().refine(value => {
  const url = new URL(value);
  return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password;
}, '链接必须为不含账号密码的 HTTP(S) 地址');

export const workSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, '目录名只用小写字母、数字和连字符'),
  type: z.enum(['local', 'external']),
  kind: z.enum(['demo', 'tool', 'ebook', 'visual', 'interactive', 'course', 'analysis']),
  status: z.enum(['完成', '进行中', '实验性', '弃坑']),
  desc: z.string().min(1),
  tags: z.array(z.string()).default([]),
  year: z.number().int().min(2000).max(2100).optional(),
  url: safeURL.optional(),
  cover: z.string().regex(/^\/covers\/[a-z0-9-]+\.(?:webp|png|jpg|svg)$/).optional(),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative().default(999),
  availability: z.enum(['待核验', '已打开', '暂不可达', '需要环境']).default('待核验'),
  note: z.string().optional(),
  credit: z.string().default('AI 辅助创作'),
  preview: z.boolean().default(true),
}).superRefine((work, ctx) => {
  if (work.type === 'external' && !work.url) {
    ctx.addIssue({ code: 'custom', path: ['url'], message: '在线作品需要填写 url' });
  }
});

export const kindLabels = {
  visual: '视觉探索', interactive: '交互实验', tool: '实用工具',
  analysis: '知识整理', ebook: '文字创作', demo: '概念演示', course: '学习体验',
};
