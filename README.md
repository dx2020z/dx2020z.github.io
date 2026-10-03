# 段骁 · 个人作品网站

以“写 / 做 / 聚”为主线的个人介绍站：六个可单独分享的空间、独立项目案例、精选与完整作品库、两首诗的影像页面、打印友好的简历与四种联系入口。使用 Astro 静态生成，源码托管 GitHub，由 GitHub Actions 发布到 GitHub Pages。

## 看网站

目标网址：https://dx2020z.github.io/

本地开发需要 Node.js 24：

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:4321/ 。构建执行 `npm run build`，构建结果在 `dist/`。运行 `npm run preview` 可查看构建版本。

## 新增作品：放文件，填一张卡

1. 本地作品：把 HTML 和它依赖的图片、脚本等文件放入 `public/demos/英文短名/`，入口叫 `index.html`。在线作品无需放文件，只需准备完整链接。
2. 复制 `src/content/works/_template.md` 为新的 Markdown 文件，填写卡片。下划线模板不会显示到网站。

```yaml
---
title: "作品名称"
slug: "my-new-work"
type: "local"
kind: "tool"
status: "实验性"
featured: false
order: 999
desc: "一句话说明用途或值得体验的部分"
tags: ["AI", "工具"]
---

## 这件作品

说明用途、你的实际参与，以及 AI 的参与。

## 体验与边界

如实说明哪些功能可用、哪些需要额外环境。
```

- 本地作品：`type: local`；在线作品：`type: external`，并增加 `url: "https://..."`。
- `slug` 只用小写字母、数字和连字符，保持唯一，与本地目录名一致。
- `kind` 可选 `tool / visual / interactive / analysis / ebook / demo / course`。
- `status` 可选 `完成 / 进行中 / 实验性 / 弃坑`。
- `featured` 为布尔值，只有 `true` 的作品默认出现在 `/works/`；`order` 为数字，越小越靠前。访问 `/works/?all=1` 可直接看到全部作品和分类筛选。
- 可选：`year: 2026`，`cover: "/covers/my-new-work.webp"`。
- 首页展示独立的项目案例，项目内容在 `src/content/cases/` 中维护；作品数量从内容集合自动计算。
- `note` 为体验说明；`preview: false` 可关闭内嵌预览；`availability: "需要环境"` 用于依赖额外服务的本地原型。
- 未填写封面时自动使用文字封面，不冒充作品截图。

保存后，列表、分类、标签与详情页自动生成。推送到 main 后自动更新线上网站。普通读者只看到构建后的网页。

## 修改个人介绍与风格

- 六个空间的文案、顺序、链接：`src/data/spaces.ts`。每个空间由 `/spaces/英文短名/` 单独访问，首页会自动显示对应索引；空间页可以返回首页或走向相邻空间。
- 六个空间分别是档案、能力、作品、AI 协作、想法、生活；入口内容、各空间版式在 `src/components/SpacePage.astro`，顺序与简介在 `src/data/spaces.ts`。
- 案例内容在 `src/content/cases/*.md`，项目索引在 `/cases/`，详情模板在 `src/pages/cases/[slug].astro`。可将 `[待补：...]` 替换为有证据且适合公开的信息。
- 两首诗的正文与视频路径在 `src/data/poems.ts`，片段池在 `src/data/fragments.json`，视频与封面在 `public/videos/`；诗页为 `/poems/zichao/` 与 `/poems/rose/`。
- 简历在 `src/pages/resume.astro`，支持浏览器打印并另存 PDF；没有预生成的 PDF 文件。
- 首页文案与精选布局：`src/pages/index.astro`。
- 姓名、公开邮箱、微信、文章链接、图片路径与最近更新时间：`src/data/site.ts`。
- 颜色、字体与公共布局：`src/styles/global.css`。
- 首页、六入口索引、空间页、作品、案例与简历布局分别在 `home.css`、`chapter-index.css`、`spaces.css`、`works.css`、`cases.css`、`resume.css`。
- 组件在 `src/components/`；全站外壳在 `src/layouts/Layout.astro`。

未来新增文章、专题、诗歌或小游戏等内容可继续增加独立内容集合和页面，复用现有布局。当前没有后台、账号、数据库或自动收集访客信息的服务。

## GitHub Pages 发布

使用公开仓库 `dx2020z/dx2020z.github.io`。在仓库 Settings → Pages 中，将 Source 设为 GitHub Actions。

`.github/workflows/deploy.yml` 会在 main 分支更新时安装锁定依赖、运行测试和类型检查、构建并发布。采用官方 Pages Actions，不需要第三方托管或把令牌写入仓库。

工作流根据 Pages 配置读取站点 origin 和 base path，支持个人主页和仓库子路径。若以后更换仓库或域名，应重新检查 Pages 设置与最终网址。

源码公开时也会公开 `public/` 下的文件。不要放入私人资料、API 密钥、带密码的链接或不应公开的作品。只把用户明确指定公开的个人照片、书籍宣传图、诗作、邮箱、微信与简历信息放入网站；原始笔记、证书扫描件与旧姓名不进入本仓库。案例中的未确认内容保留为待补，不公开虚构数据。

## 验证

```sh
npm test
npm run check
npm run build
node scripts/verify-static.mjs
```

构建前会校验卡片格式、slug 唯一性、本地入口、封面和常见凭据格式。检测不能代替人工判断资料是否适合公开。

## 作品边界

- 本站 18 个 HTML 作品保持独立运行；电子书末尾的示例社交链接改成了本站关于页与用户授权的微信。
- AI 销售教练依赖本地模型、服务和可选 API。本站保留原型界面，明确标为实验性，不提供其后端能力。
- 多人聚会小游戏保持实验性，联机可用性需以原站实际状态为准。
- 外站以新标签页打开。网页可打开不等于全部功能或内容已核验。
- 部分旧作品以桌面体验为主；网站外壳的响应式和减少动态效果设置，不会自动改写原作品内部行为。
- 本地 iframe 使用 sandbox 隔离并按点击加载，某些存储、全屏或导出能力可能受限，可独立打开。

## 版本选择

原参考文档指定 Astro 5。实施时 npm audit 检出其未修复问题，因此使用 Astro 7.3.3；保留原方案的静态站、组件化和内容集合维护方式。依赖版本由 package-lock.json 锁定。
