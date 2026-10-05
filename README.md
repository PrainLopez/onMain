# on_main

一个虚拟开发者技术沙龙的分享记录站点，基于 Astro 构建。

## 写一篇新分享

在 `src/content/session/` 下新建一个 `.md` 文件，frontmatter 格式如下：

```md
---
commit: 7
date: 2026-06-15
record: 7
branch: main
title: 分享标题
speaker: 演讲人
topics:
  - state
  - ssr
summary: 一句话摘要，显示在首页卡片上。
---

正文（Markdown）。
```

`commit` 是该分享在 branch 内的序号（从 0 开始）。卡片上展示的 7 位 hash 由 `branch + commit`
计算得出（`src/lib/session-hash.ts`）：前两位是 branch 前缀（`main` → `9E`，`conflict` → `FF`），
后五位是 commit 经线性同余映射后的十六进制尾码。

首页按 `date` 倒序自动列出所有分享，详情页路径为 `/session/<文件名>/`。

首页动效由 `src/scripts/home-animations.ts` 提供（基于 anime.js，仅首页加载），是渐进增强：无 JS / reduced-motion 时由纯 CSS 动效兜底。

站点动态背景由 `src/components/SlicedWaves.astro` 提供（React Bits SlicedWaves 的 WebGL2 移植，基于 ogl），挂在首页与详情页内容层下方，配色取全局 `--accent-green/amber/violet` 令牌；无 WebGL2 / reduced-motion 时自动降级为纯色底。

## 常用命令

```sh
pnpm install
pnpm run dev
pnpm run build
```

## 部署（Cloudflare）

站点是纯静态构建（`astro.config.mjs` 里 `output: 'static'`，产物为 `dist/`）。在 Cloudflare 上按静态站点配置即可：

- Build command: `pnpm run build`
- Build output directory: `dist`
- Deploy command: 留空。Cloudflare 自动检测会把 Astro 误判为 Worker 部署并填入 `wrangler deploy`，静态站点不需要它——构建完成后 `dist/` 会作为静态资产直接托管。
