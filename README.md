# on_main

一个虚拟开发者技术沙龙的分享记录站点，基于 Astro 构建。

## 写一篇新分享

在 `src/content/session/` 下新建一个 `.md` 文件，frontmatter 格式如下：

```md
---
hash: c47d57a
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

首页按 `date` 倒序自动列出所有分享，详情页路径为 `/session/<文件名>/`。

首页动效由 `src/scripts/home-animations.ts` 提供（基于 anime.js，仅首页加载），是渐进增强：无 JS / reduced-motion 时由纯 CSS 动效兜底。

站点动态背景由 `src/components/SlicedWaves.astro` 提供（React Bits SlicedWaves 的 WebGL2 移植，基于 ogl），挂在首页与详情页内容层下方，配色取全局 `--accent-green/amber/violet` 令牌；无 WebGL2 / reduced-motion 时自动降级为纯色底。

## 常用命令

```sh
pnpm install
pnpm run dev
pnpm run build
```
