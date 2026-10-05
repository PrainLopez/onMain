// session hash = 两位 branch 前缀 + 五位十六进制尾码。
// 尾码是 commit（branch 内序号）经线性同余映射的结果，与 atMainHex.js 一致：
// tail = (commit * A) mod P + Tau，转十六进制大写后补齐 5 位。
const P = 992549n;
const A = 749471n;
const TAU = 13562n;

export const BRANCH_PREFIX: Record<string, string> = {
  main: "9E",
  conflict: "FF"
};

export function sessionHash(branch: string, commit: number): string {
  const prefix = BRANCH_PREFIX[branch] ?? "00";
  const tail = ((BigInt(commit) * A) % P + TAU)
    .toString(16)
    .toUpperCase()
    .padStart(5, "0");
  return `${prefix}${tail}`;
}
