# 项目背景

- 这是一个 Astro 项目（on_main，虚拟开发者技术沙龙的分享记录站点），从官方 Blog starter kit 起步，模板遗留内容已清理完毕。
- 当前技术栈：Astro、MDX、RSS、Sitemap、Node 22.12+。
- 站点配置在 `astro.config.mjs`，全局常量在 `src/consts.ts`。
- 包管理使用 **pnpm**（仓库里有 `pnpm-lock.yaml`），不要混用 `npm` 或 `yarn`；安装/运行/发版统一用 `pnpm install` / `pnpm run ...`。

# 当前结构

- `src/pages/index.astro` 是首页，按日期倒序（新的在前）列出所有分享卡片，不要按默认博客首页理解。
- `src/pages/session/[...slug].astro` 是分享详情页，渲染对应 MD 正文。
- `src/pages/rss.xml.js` 基于 session 集合输出 RSS。
- `src/content/session/` 是内容源：每篇分享一个 `.md` 文件，frontmatter 存元数据（`hash/date/record/branch/title/speaker/topics/summary`），正文是分享内容。schema 定义在 `src/content.config.ts`。
- `src/components/SessionPanel.astro` 是首页卡片组件，整卡可点击跳转详情页，用 `content-visibility: auto` 做离屏懒渲染。
- `src/components/BaseHead.astro` 负责全局 `<head>`（含字体加载），`src/styles/global.css` 只保留 CSS reset、accent 令牌和 label 工具类。

# 约定

- 新增分享 = 在 `src/content/session/` 加一个 md 文件，无需改动任何代码；字段格式见 `README.md`。
- 卡片与详情页的暗色视觉（`#050a0d` 底 + accent 标签色）是站点的正式风格，改动样式时保持克制。

# 工作原则

- 优先保持改动小而明确。
- 若要补充项目背景，优先写真实已存在的结构和约定，不要补想象中的功能。
- 改动完成后用 `pnpm run build` 作为冒烟测试，确认构建通过再收尾。
- 涉及结构、约定或工作流变化时，同步更新 `AGENTS.md` 和 `README.md`。
