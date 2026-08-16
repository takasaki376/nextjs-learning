"use client";

import { useMemo, useState } from "react";

import { TodoView } from "./TodoView";
import type { Todo, TodoFilter } from "./types";

type TodoDemoProps = {
  currentDate: string;
  initialTodos: Todo[];
};

// 学習メモ: 不採用条件 - このローカル状態は動作確認専用。後続ページでは各レンダリング方式の取得・更新処理へ置き換える。
export function TodoDemo({ currentDate, initialTodos }: TodoDemoProps) {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [filter, todos]);

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoView
      todos={visibleTodos}
      totalCount={todos.length}
      activeCount={activeCount}
      currentDate={currentDate}
      filter={filter}
      renderingLabel="Client Demo"
      onAdd={(title) =>
        setTodos((current) => [
          ...current,
          { id: crypto.randomUUID(), title, completed: false, createdAt: new Date().toISOString() },
        ])
      }
      onToggle={(id) =>
        setTodos((current) =>
          current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        )
      }
      onEdit={(id, title) =>
        setTodos((current) => current.map((todo) => (todo.id === id ? { ...todo, title } : todo)))
      }
      onDelete={(id) => setTodos((current) => current.filter((todo) => todo.id !== id))}
      onFilterChange={setFilter}
    />
  );
}
