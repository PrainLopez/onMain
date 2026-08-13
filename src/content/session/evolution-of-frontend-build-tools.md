---
hash: 9e034fa
date: 2026-06-19
record: 0
branch: main
title: 前端构建工具的演化与边界
speaker: Ada Qiao
topics:
  - bundler
  - tooling
  - edge
summary: 从打包到分发：构建工具承担的职责正在向运行时分流。我们重新审视 bundler 的边界，以及它在 edge / SSR 场景下的真实成本。
bilibili: https://www.bilibili.com/video/BV1onmain0702
---

## 议题背景

构建工具曾经包揽一切：编译、打包、压缩、分发。如今这些职责正在向运行时分流。

## 要点

- ESM 普及让 dev 阶段可以跳过打包，bundler 的核心价值退回到生产优化。
- Edge / SSR 场景下，构建产物的运行环境不再单一，目标平台成为一等配置。
- 运行时按需编译（如 islands、server components）把一部分"构建时"挪到了"请求时"。

## 结论

评价构建工具不再只看打包速度，还要看它对多目标运行时和增量分发的支持边界。
