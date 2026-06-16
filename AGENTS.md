# 项目背景

- 这是一个 Astro 项目，基于官方 Blog starter kit 起步。
- 当前技术栈：Astro、MDX、RSS、Sitemap、Node 22.12+。
- 站点配置在 `astro.config.mjs`，全局常量在 `src/consts.ts`。

# 当前结构

- `src/pages/index.astro` 是当前首页主视觉，已被改造成偏实验性的定制版面，不要按默认博客首页理解。
- `src/data/sessions.ts` 存放博客数据源，为暂时的mock数据。
- `src/components/`、`src/layouts/`、`src/assets/` 是当前 UI 和资源的主要承载区。

# 需要注意

- `./pages/blog` 和 `./content` 目前仍是默认模板的占位内容，暂时不要基于它们推导产品方向或写太多背景。
- `README.md` 也还是 starter 文档，优先以实际代码为准。

# 工作原则

- 优先保持改动小而明确。
- 若要补充项目背景，优先写真实已存在的结构和约定，不要补想象中的功能。
