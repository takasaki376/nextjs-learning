import { TodoDemo, type Todo } from "@/components/todo";

const initialTodos: Todo[] = [
  { id: "sample-1", title: "共通UIの操作を確認する", completed: false, createdAt: "2026-08-16T00:00:00.000Z" },
  { id: "sample-2", title: "完了済みの表示を確認する", completed: true, createdAt: "2026-08-15T00:00:00.000Z" },
  { id: "sample-3", title: "スマートフォン表示を確認する", completed: false, createdAt: "2026-08-14T00:00:00.000Z" },
];

export default function Home() {
  // 学習メモ: 採用理由 - 日付文字列をServer Componentで確定して渡し、ブラウザとの時刻差によるhydration不一致を避ける。
  const currentDate = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeZone: "Asia/Tokyo",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-slate-50 p-2 sm:p-6 lg:p-10">
      <TodoDemo currentDate={currentDate} initialTodos={initialTodos} />
    </main>
  );
}
