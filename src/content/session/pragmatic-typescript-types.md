---
hash: 71dc3e8
date: 2026-05-16
record: 5
branch: main
title: TypeScript 类型体操的实用主义
speaker: Mika Chen
topics:
  - typescript
  - types
  - dx
summary: 类型是为可维护性服务的，不是为了炫技。划一条"够用"的线，让类型系统帮你而不是拖累你。
bilibili: https://www.bilibili.com/video/BV1onmain0501
---

## 议题背景

类型体操能表达很强的约束，但读不懂的类型等于没有类型。这次分享讨论团队场景下的类型取舍。

## 要点

- 类型的受众是后来读代码的人，可读性优先于表达力。
- 泛型约束够用就好，过度精确的类型会让调用方付出更多成本。
- 公共 API 值得精雕细琢，内部实现不必强求类型完美。

## 结论

把复杂度封在库边界内部，对使用者暴露简单类型，是类型设计里最划算的投资。
