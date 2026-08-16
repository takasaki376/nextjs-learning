"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";

import type { Todo, TodoFilter } from "./types";

export type TodoViewProps = {
  readonly todos: readonly Todo[];
  totalCount: number;
  activeCount: number;
  currentDate: string;
  filter: TodoFilter;
  renderingLabel: string;
  loading?: boolean;
  error?: string | null;
  onAdd: (title: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onFilterChange: (filter: TodoFilter) => void;
};

const filters: Array<{ value: TodoFilter; label: string }> = [
  { value: "all", label: "すべて" },
  { value: "active", label: "未完了" },
  { value: "completed", label: "完了" },
];

// 学習メモ: 採用理由 - データ取得・保存を持たず、表示状態とイベントをpropsで受けることでCSRやSSRなどから同じUIを再利用できる。
export function TodoView({
  todos,
  totalCount,
  activeCount,
  currentDate,
  filter,
  renderingLabel,
  loading = false,
  error = null,
  onAdd,
  onToggle,
  onEdit,
  onDelete,
  onFilterChange,
}: TodoViewProps) {
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  function submitNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTitle.trim();

    if (!title) return;

    onAdd(title);
    setNewTitle("");
  }

  function startEditing(todo: Todo) {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
  }

  function finishEditing(id: string) {
    const title = editingTitle.trim();

    if (title) onEdit(id, title);

    setEditingId(null);
    setEditingTitle("");
  }

  function handleEditKeyDown(event: KeyboardEvent<HTMLInputElement>, id: string) {
    if (event.key === "Enter") {
      event.preventDefault();
      finishEditing(id);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setEditingId(null);
      setEditingTitle("");
    }
  }

  return (
    <section
      aria-busy={loading}
      className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 sm:min-h-0"
    >
      <header className="bg-gradient-to-br from-blue-700 to-blue-500 px-5 py-7 text-white sm:px-8 sm:py-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue-100">{currentDate}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">My Tasks</h1>
          </div>
          <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            Rendering: {renderingLabel}
          </span>
        </div>

        <form className="mt-7" onSubmit={submitNewTodo}>
          <label className="sr-only" htmlFor="new-todo">
            新しいタスク
          </label>
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-1 text-slate-900 shadow-lg shadow-blue-950/15 focus-within:ring-2 focus-within:ring-white">
            <span aria-hidden="true" className="text-2xl font-light text-blue-600">
              ＋
            </span>
            <input
              id="new-todo"
              className="min-w-0 flex-1 bg-transparent py-3 text-base outline-none placeholder:text-slate-400"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              placeholder="タスクを追加して Enter"
              autoComplete="off"
              disabled={loading}
            />
          </div>
        </form>
      </header>

      <div className="flex flex-1 flex-col px-4 py-5 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex rounded-lg bg-slate-100 p-1" role="group" aria-label="タスクの絞り込み">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                aria-pressed={filter === item.value}
                onClick={() => onFilterChange(item.value)}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition sm:flex-none ${
                  filter === item.value
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            登録 <strong className="text-slate-800">{totalCount}</strong>件
            <span aria-hidden="true" className="mx-2 text-slate-300">/</span>
            未完了 <strong className="text-blue-700">{activeCount}</strong>件
          </p>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {loading && (
            <div className="my-4 flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
              <span className="size-4 animate-spin rounded-full border-2 border-blue-200 border-t-blue-700" aria-hidden="true" />
              タスクを読み込んでいます…
            </div>
          )}
          {error && (
            <div role="alert" className="my-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}
        </div>

        {!loading && !error && (
          <ul className="divide-y divide-slate-100" aria-label="タスク一覧">
            {todos.map((todo) => (
              <li key={todo.id} className="group flex min-w-0 items-center gap-3 py-3 sm:gap-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  aria-label={`${todo.title}を${todo.completed ? "未完了" : "完了"}にする`}
                  className="size-5 shrink-0 cursor-pointer accent-blue-600"
                />

                <div className="min-w-0 flex-1">
                  {editingId === todo.id ? (
                    <label className="block">
                      <span className="sr-only">タスク名を編集</span>
                      <input
                        autoFocus
                        value={editingTitle}
                        onChange={(event) => setEditingTitle(event.target.value)}
                        onBlur={() => finishEditing(todo.id)}
                        onKeyDown={(event) => handleEditKeyDown(event, todo.id)}
                        className="w-full rounded-md border border-blue-300 px-2 py-1 text-slate-900 outline-none ring-blue-100 focus:ring-4"
                      />
                    </label>
                  ) : (
                    <button
                      type="button"
                      onClick={() => startEditing(todo)}
                      className={`w-full truncate rounded-sm text-left text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        todo.completed ? "text-slate-400 line-through" : "text-slate-800"
                      }`}
                    >
                      {todo.title}
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => startEditing(todo)}
                  className="shrink-0 rounded-lg px-2 py-2 text-sm font-semibold text-slate-400 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`${todo.title}を編集`}
                >
                  編集
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(todo.id)}
                  className="shrink-0 rounded-lg px-2 py-2 text-xl leading-none text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-label={`${todo.title}を削除`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {!loading && !error && todos.length === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
            <div className="grid size-14 place-items-center rounded-full bg-blue-50 text-2xl text-blue-600" aria-hidden="true">
              ✓
            </div>
            <p className="mt-4 font-semibold text-slate-700">表示するタスクはありません</p>
            <p className="mt-1 text-sm text-slate-500">新しいタスクを追加するか、フィルターを変更してください。</p>
          </div>
        )}
      </div>
    </section>
  );
}
