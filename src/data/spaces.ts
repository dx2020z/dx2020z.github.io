export type Space = {
  slug: string;
  number: string;
  level: string;
  title: string;
  english: string;
  door: string;
  lead: string;
};

// Public-facing entry labels. Long-form content lives in SpacePage layouts.
export const spaces: Space[] = [
  { slug: 'about', number: '01', level: 'L1 · 档案层', title: '认识我', english: 'A PERSON, NOT A LABEL', door: '档案、状态与一句话定位。', lead: '我是段骁，在深圳。我用 AI 写、做、聚：把想法做成作品，把知识写成书，也把人聚在一起读书。' },
  { slug: 'can-do', number: '02', level: 'L2 · 能力层', title: '我能做的事', english: 'WRITE / MAKE / GATHER', door: '写、做、聚，每项能力都连接证据。', lead: '能力需要作品与经历来说明。你可以从写作、作品制作和读书社群三条线索，直接查看我做过什么。' },
  { slug: 'works', number: '03', level: 'L3 · 作品层', title: '我做过的东西', english: 'THE WORK INDEX', door: '代表作、完整作品与实验室。', lead: '把作品分成代表作、完整作品和实验室，方便你按投入程度与完成状态浏览。' },
  { slug: 'ai', number: '04', level: 'L4 · 方法层', title: '我和 AI', english: 'THE WORKING RELATIONSHIP', door: '五条原则，来自真实系统的取舍与运行。', lead: 'AI 帮我找灵感、做执行；判断和写作，留给我自己。' },
  { slug: 'notes', number: '05', level: 'L5 · 思想层', title: '我的想法', english: 'QUESTIONS IN THE MARGIN', door: '一篇长文，和那些仍在生长的问题。', lead: '我把阅读、观察和实践中的问题写下来。文字不是结论的装饰，而是继续思考的方式。' },
  { slug: 'life', number: '06', level: 'L6 · 生活层', title: '生活里的我', english: 'BETWEEN THE PAGES', door: '诗、书，以及日常里留下的片刻。', lead: '离开屏幕之后，我读书、写诗，也留意那些不急着变成答案的片刻。' },
];

export const spacePath = (slug: string) => '/spaces/' + slug + '/';
