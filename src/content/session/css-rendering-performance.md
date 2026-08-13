---
hash: b6e0a42
date: 2026-05-30
record: 6
branch: main
title: CSS 渲染性能：从合成层说起
speaker: 赵拾
topics:
  - css
  - rendering
  - performance
summary: 卡顿不一定来自 JS。从渲染管线的角度理解重排、重绘与合成，才能定位真正昂贵的样式。
bilibili: https://www.bilibili.com/video/BV1onmain0601
---

## 议题背景

页面掉帧时大家习惯性怀疑 JS，但很多性能问题其实埋在样式里。这次分享从浏览器渲染管线讲起。

## 要点

- Layout → Paint → Composite 三段管线，每段的触发条件不同，成本也不同。
- transform 和 opacity 可以走合成层，绕开 Layout 和 Paint，是动画的首选。
- content-visibility、contain 等现代 CSS 属性可以直接告诉浏览器跳过离屏工作。

## 结论

先学会看 Performance 面板的渲染分层，再决定优化哪里；多数"JS 性能问题"最后改的是 CSS。
