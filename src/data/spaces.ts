export type Space = {
  slug: string;
  number: string;
  title: string;
  english: string;
  door: string;
  lead: string;
  sideNote: string;
  sections: { heading: string; body: string }[];
};

// Public summaries only. The private flomo export and its attachments are not site content.
export const spaces: Space[] = [
  {
    slug: 'about', number: '01', title: '认识我', english: 'A PERSON, NOT A LABEL',
    door: '先认识那个总在追问的人。',
    lead: '我是段骁，现在在深圳，来自湖南。比起用一个身份把自己讲完，我更愿意给你看：我会被什么问题吸引，又把哪些想法做成了东西。',
    sideNote: '提问、写字、做小版本。这三件事常常交织在一起。',
    sections: [
      { heading: '我从问题进入', body: '读到一个说法，我会想它从哪里来；遇到一个需求，我会先问它到底要解决什么。问题可以先留下来，慢慢变成笔记，也可以催我打开电脑，做一个能试的页面。' },
      { heading: '把“知道”逼近“做到”', body: '我越来越警惕把收藏和理解混在一起。对我来说，一个想法只有经过拆解、试做和反馈，才算真正走出了脑内。' },
    ],
  },
  {
    slug: 'life', number: '02', title: '生活里的我', english: 'BETWEEN THE PAGES',
    door: '读书、写诗，也收藏日常里的问题。',
    lead: '屏幕合上之后，我仍然会记东西。一本书里没说透的部分、一句话引出的联想，有时比现成的答案更让我停留。',
    sideNote: '并不是每个想法都需要做成工具；有些适合留在文字里。',
    sections: [
      { heading: '读书时，我更想追问作者', body: '我会想：作者写下这句话之前，曾经怎样观察、怎样选择？把一套结论记住不难，重新发现问题的来处更有意思。' },
      { heading: '诗为另一种表达留位置', body: '我写诗，也写短短的片段。它们记录语言怎样靠近一个感受或画面，而不急着给出结论。之后我会把合适的诗慢慢整理到这里。' },
    ],
  },
  {
    slug: 'ai', number: '03', title: '我和 AI', english: 'THE WORKING RELATIONSHIP',
    door: '让机器拓宽可能，让人保留判断。',
    lead: 'AI 能很快给我许多答案。对我更有用的，是借它看见别的问法、检验自己的盲区，再把结果放回具体场景里试。',
    sideNote: '速度会带来更多产物，但判断仍要回到问题和现实。',
    sections: [
      { heading: '对话不是终点', body: '我常让 AI 拆解一段想法、提出不同解释，也会追问它凭什么这样判断。一个看起来漂亮的回答，只有放进具体任务里，才能知道哪里真正有用。' },
      { heading: '把对话变成可打开的东西', body: '我会用 AI 协助整理资料、推演结构、生成初版，再把结果放回真实场景检验。网站里的工具、概念空间和小游戏，是这些对话留下的可见版本。' },
    ],
  },
  {
    slug: 'can-do', number: '04', title: '我能做的事', english: 'FROM IDEA TO FIRST VERSION',
    door: '一起把模糊想法做成可讨论的初版。',
    lead: '如果你现在只有一句“我想做个东西”，我们可以先把使用场景、资料和目标拆开，再做一个能打开、能指出问题的版本。',
    sideNote: '我希望遇到愿意带着真实场景交流、愿意给具体反馈的人。',
    sections: [
      { heading: '把散乱的东西理出结构', body: '我可以从 AI 应用、知识库、提示词和内容结构入手，也可以把资料做成检索入口，把一串想法整理成需求与实现方式的对照。' },
      { heading: '先做一个小而真的版本', body: '一个页面、一个工具、一个交互演示，都可以成为讨论的起点。先看它解决了什么，再决定要不要继续深入，而不是先把完整蓝图想完。' },
    ],
  },
  {
    slug: 'works', number: '05', title: '我做过的东西', english: 'THE WORK INDEX',
    door: '工具、视觉、文字，直接打开看。',
    lead: '作品比标签更具体。这里既有为解决一个问题而做的工具，也有为探索一种表达而做的视觉、文字和小游戏实验。',
    sideNote: '挑一件你愿意点开的；那会是认识我的另一条捷径。',
    sections: [
      { heading: '不同问题，不同形状', body: '一张可检索的阅读地图、一册蓝色的生成图谱、一本虚构随笔、一片可航行的概念空间，还有把规则做成游戏的尝试。它们不属于同一种类别，却都从具体的问题长出来。' },
      { heading: '作品还会继续变', body: '我会留下初版，也会继续试新的呈现方式。你可以从完整作品库里按兴趣选择，不需要按时间顺序认识我；最近新增的小游戏也会在这里慢慢展开。' },
    ],
  },
  {
    slug: 'notes', number: '06', title: '我的想法', english: 'QUESTIONS IN THE MARGIN',
    door: '读过的、想过的，尚未结束的问题。',
    lead: '笔记不是结论陈列柜。它更像一条条线头：关于阅读、AI、写作，以及“我为什么会这样想”的追问。',
    sideNote: '这里先放下几条愿意分享的文字。诗会在整理后加入。',
    sections: [
      { heading: '阅读，不只为了记住', body: '我想从一本书里看到作者怎样抵达那个结论，也想知道自己是否还能从别的角度发问。知道、理解、运用和做到，是四件不同的事。' },
      { heading: '写作，不只为了产出', body: 'AI 可以帮我整理语言，但写下一个观点时，我仍想亲自经历思考的过程。否则很容易只得到一句流畅的话。' },
    ],
  },
];

export const spacePath = (slug: string) => `/spaces/${slug}/`;
