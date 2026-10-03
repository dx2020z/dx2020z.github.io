---
title: 内容工厂
slug: project-03
eyebrow: PROJECT 03 / A THOUGHT INTO A WORKFLOW
summary: 把一个想法拆成选题、调研、素材和草稿的组件化流水线
oneLine: 把一个想法拆成选题、调研、素材和草稿的组件化流水线
type: project
scale: 灵感 → 选题 → 调研 → 素材 → 草稿
status: 自用 · 流程已跑通
next: /cases/project-01/
nextTitle: 机器人产业链事实库
featured: true
order: 3
origin: 我希望写作过程“更加的可追溯可复盘一些”：灵感可能只是一个标题或一个观点，材料要先判断是否适合，不同账号还有各自的写作规则。
usage: 自用。从一个想法出发，组织选题、调研、素材和草稿。
judgment: 我不想让 AI 替我写文章，更想让它帮我找灵感、找材料，写作仍然是我自己的思考过程。我也明确了一点：“我不是只讲 AI，AI 只是一个形式载体。”
decisions:
  - label: 我提出
    text: 先服务个人使用，不做登录、团队和权限。
  - label: 我提出
    text: 选择具体账号后，由账号自己的写作规则主导，通用的风格、语气选项直接隐藏。
  - label: 共同
    text: 一篇内容对应一个持续保存的档案，串起关键词、调研、素材和草稿版本。
  - label: 共同
    text: 搜索结果由我挑选，系统负责整理和导入；优先保证国内网络环境，不接付费搜索接口。“优先保证中国大陆网络环境稳定，不考虑付费的 api。”约束由我提出，方案共同确定。
result: 灵感转选题、调研任务、网页导入与原文快照、多账号写作规则、草稿自动保存与版本记录，全流程各环节均已实现。
transfer: 这套组件化拆解方式，同样适用于企业的批量内容生产和 GEO 素材准备。如果你有这类需求，欢迎聊聊。
technology: Next.js + Prisma + 本地 SQLite。
implementation: 代码由 AI 实现。
techStack: [Next.js, Prisma, SQLite]
tests: 96
showcase: 脱敏截图，用一个虚构选题演示从灵感到草稿的流程。
capabilities: [拆解内容生产流程, 设计持续保存的内容档案, 让账号规则驱动流程]
learning: 一篇文章可以拆成一个个组件，每个组件接上提前设定好的模板和提示词，就能各自自动运转。我输入一个想法，流程会按我的规则一步步往下走。
---
