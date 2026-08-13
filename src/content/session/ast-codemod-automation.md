---
hash: 2f8b1c9
date: 2026-07-03
record: 8
branch: main
title: 从 AST 到 Codemod：自动化重构实践
speaker: 林澈
topics:
  - ast
  - codemod
  - refactor
summary: 大规模重构不该靠手改。用 AST 描述代码结构，用 codemod 把重复修改变成一次可 Review 的脚本。
bilibili: https://www.bilibili.com/video/BV1onmain0801
---

## 议题背景

仓库规模上来之后，API 迁移、目录调整这类重构靠手工修改既慢又容易漏。这次分享介绍如何用 codemod 把这类工作自动化。

## 要点

- AST 是代码的结构化视图，操作 AST 比正则替换可靠得多。
- jscodeshift / ts-morph 适合不同粒度的改造：前者轻量，后者类型感知更强。
- 好的 codemod 是幂等的，并且自带测试夹具，跑一次和跑十次结果一致。

## 结论

把重构写成脚本，Review 的是规则而不是几百个文件的 diff，迁移质量会稳定得多。
