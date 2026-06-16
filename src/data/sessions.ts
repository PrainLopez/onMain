export type Session = {
  hash: string;
  date: string;
  record: number;
  branch: string;
  title: string;
  speaker: string;
  topics: string[];
  summary: string;
};

export const sessions: Session[] = [
  {
    hash: "c47d57a",
    date: "2026-06-15",
    record: 7,
    branch: "main",
    title: "状态管理与同构渲染的取舍",
    speaker: "speaker tbd",
    topics: ["state", "ssr", "islands"],
    summary:
      "这一版把 CLI 颜色转成包装材质和印刷分区。信息不再是终端输出，而是外盒上的规格说明、条码和贴纸。"
  }
];
