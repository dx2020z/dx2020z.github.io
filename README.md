# 段骁 · 个人作品网站

个人介绍、精选作品、完整作品库与微信联系。使用 Astro 静态生成，源码托管 GitHub，由 GitHub Actions 发布到 GitHub Pages。

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
- 可选：`year: 2026`，`cover: "/covers/my-new-work.webp"`，`featured: 1`。
- 精选按 featured 正整数从小到大排序，首页取前四件；其余作品仍在完整作品库中。
- `note` 为体验说明；`preview: false` 可关闭内嵌预览；`availability: "需要环境"` 用于依赖额外服务的本地原型。
- 未填写封面时自动使用文字封面，不冒充作品截图。

保存后，列表、分类、标签与详情页自动生成。推送到 main 后自动更新线上网站。普通读者只看到构建后的网页。

## 修改个人介绍与风格

- 个人介绍：`src/content/about.md`。
- 首页文案与精选布局：`src/pages/index.astro`。
- 姓名与微信：`src/data/site.ts`；修改微信时同步关于页中的公开联系方式。
- 颜色、字体与公共布局：`src/styles/global.css`。
- 首页与作品布局分别在 `home.css`、`works.css`。
- 组件在 `src/components/`；全站外壳在 `src/layouts/Layout.astro`。

未来新增文章、专题等内容可增加独立内容集合和页面，复用现有布局。当前没有后台、账号、数据库或自动收集访客信息的服务。

## GitHub Pages 发布

使用公开仓库 `dx2020z/dx2020z.github.io`。在仓库 Settings → Pages 中，将 Source 设为 GitHub Actions。

`.github/workflows/deploy.yml` 会在 main 分支更新时安装锁定依赖、运行测试和类型检查、构建并发布。采用官方 Pages Actions，不需要第三方托管或把令牌写入仓库。

工作流根据 Pages 配置读取站点 origin 和 base path，支持个人主页和仓库子路径。若以后更换仓库或域名，应重新检查 Pages 设置与最终网址。

源码公开时也会公开 `public/` 下的文件。不要放入私人资料、API 密钥、带密码的链接或不应公开的作品。原始输入材料和本机路径清单不进入本仓库。

## 验证

```sh
npm test
npm run check
npm run build
node scripts/verify-static.mjs
```

构建前会校验卡片格式、slug 唯一性、本地入口、封面和常见凭据格式。检测不能代替人工判断资料是否适合公开。

## 作品边界

- 本站 10 个 HTML 作品保持独立运行；电子书末尾的示例社交链接改成了本站关于页与用户授权的微信。
- AI 销售教练依赖本地模型、服务和可选 API。本站保留原型界面，明确标为实验性，不提供其后端能力。
- 多人聚会小游戏保持实验性，联机可用性需以原站实际状态为准。
- 外站以新标签页打开。网页可打开不等于全部功能或内容已核验。
- 部分旧作品以桌面体验为主；网站外壳的响应式和减少动态效果设置，不会自动改写原作品内部行为。
- 本地 iframe 使用 sandbox 隔离并按点击加载，某些存储、全屏或导出能力可能受限，可独立打开。

## 版本选择

原参考文档指定 Astro 5。实施时 npm audit 检出其未修复问题，因此使用 Astro 7.3.3；保留原方案的静态站、组件化和内容集合维护方式。依赖版本由 package-lock.json 锁定。
