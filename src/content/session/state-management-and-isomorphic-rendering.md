---
hash: c47d57a
date: 2026-06-15
record: 7
branch: main
title: 状态管理与同构渲染的取舍
speaker: 周临
topics:
  - state
  - ssr
  - islands
summary: 这一版把 CLI 颜色转成包装材质和印刷分区。信息不再是终端输出，而是外盒上的规格说明、条码和贴纸。
bilibili: https://www.bilibili.com/video/BV1onmain0701
---

## 议题背景

同构渲染把首屏交给服务端，交互交给客户端，状态管理则横跨两端。这次分享讨论在这条边界上如何取舍。

## 要点

- 服务端状态只负责首屏快照，避免把可交互状态提前物化。
- Islands 架构下，状态按岛屿拆分，而不是全局单 Store。
- 序列化成本是被低估的部分：hydration 数据体积直接影响 TTI。

## 结论

先按路由和岛屿划分状态归属，再决定是否需要全局状态库；多数页面其实不需要。
