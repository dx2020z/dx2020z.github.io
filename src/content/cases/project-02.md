---
title: 多 AI 项目档案
slug: project-02
eyebrow: PROJECT 02 / FIND THE WORK AGAIN
summary: 我用 8 个 AI 工具做过的项目都在这里：在哪、谁做的、还在不在推进
oneLine: 我用 8 个 AI 工具做过的项目都在这里：在哪、谁做的、还在不在推进
type: project
scale: 12 个项目档案
status: 自用 · 已可分享
next: /cases/project-03/
nextTitle: 内容工厂
featured: true
order: 2
homeMetrics:
  - value: "8"
    label: 个 AI 平台自动识别
  - value: "12"
    label: 个项目档案收录
origin: 我在 8 个 AI 平台上做项目，时间一长就会忘记：东西在哪个文件夹、是哪个平台做的、哪个还在推进。一个项目常常由一个 AI 起头、另一个 AI 接着做，事后完全想不起接力过程。我给它起的名字叫“AI 作品寻回册”。
usage: 自用。找项目、接着做搁置的项目；让 AI 开工前先读索引，看有没有可以复用的东西。
decisions:
  - label: 我提出
    text: 信息分三层：事实由 AI 写，我的备注和讲述只有我能写，AI 碰不到。这条原则由我提出，AI 用互不相交的代码路径落实。
  - label: 我提出
    text: 第一版做重了，“现状”字段改为可选。“有些会写做到什么程度，有些不会去写，所以我觉得你生成那个东西其实有点太重了。”
  - label: 共同
    text: 路径只认完全相同，相似时新建档案并提示。AI 在实现中发现，自动合并会让信息悄悄丢失；我选择了更保守的方案。
  - label: 我提出
    text: 给 AI 的说明，从“不写不算错”改成“能核实就写”。第一次真实投递时，AI 只交了三个必填字段，而开始时间明明写在目录名里：防编造过了头，变成了“少写最安全”。
iterations:
  - stage: 09-30 至 10-03
    text: 共 11 轮，大部分由我的使用反馈触发，例如“我打开之后其实还是有点会不知道怎么用”“只检测到 Claude Code 和 Codex”。
result: 收录 12 个项目档案，覆盖 5 个平台，其中 3 个项目有跨平台接力记录；自动识别本机 8 个 AI 平台，7 个可一键启动；真实 AI 投递 3 次；可打包成 40MB 的分享包，解压即用。
limitsTitle: 明确不做
limits: 进度、任务、截止日期（这不是项目管理工具）；手机和云端访问（工具没有认证，开放网络等于暴露档案）。
technology: Node + Express 后端，只监听本机；Vue 3 + Vite 前端；每条档案一个 JSON 文件，不用数据库，因为我要能直接看到、备份和手改自己的数据。
implementation: 代码由 AI 实现。
techStack: [Node.js, Express, Vue 3, Vite, JSON]
tests: 752
testLabel: 项自动化检查通过
showcase: 录屏 + 截图，使用编造的示例项目数据，不出现真实项目名和路径。
capabilities: [定义信息写入边界, 设计跨平台接力记录, 根据使用反馈精简流程]
learning: 项目一多，就不能再靠自己的记性。现在我只要说一声“记一下”，AI 就会按规矩登记；我打开一张总览，就能看清每个项目在哪、做到哪、由哪个 AI 接手过。
---
