"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type LearningShellProps = {
  children: ReactNode;
};

const navigationItems = [
  { href: "/", label: "共通 ToDo UI", description: "App Router" },
  { href: "/pages-example", label: "確認ページ", description: "Pages Router" },
] as const;

// 学習メモ: 採用理由 - 両Routerの外側で同じシェルを使い、学習ページが増えても移動方法と現在地表示を共通化する。
export function LearningShell({ children }: LearningShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="border-b border-slate-200 bg-slate-950 text-white lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0">
        <div className="px-4 py-4 sm:px-6 lg:px-5 lg:py-7">
          <div className="flex items-center justify-between gap-4 lg:block">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-blue-300">NEXT.JS LEARNING</p>
              <p className="mt-1 text-lg font-bold">学習ページ</p>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 lg:mt-3 lg:inline-block">
              2 pages
            </span>
          </div>

          <nav className="mt-4 lg:mt-8" aria-label="学習ページの切り替え">
            <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {navigationItems.map((item) => {
                const isCurrent = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block rounded-xl px-3 py-2.5 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-400 lg:px-4 lg:py-3 ${
                        isCurrent
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span className="block truncate text-sm font-semibold">{item.label}</span>
                      <span className={`mt-0.5 block text-xs ${isCurrent ? "text-blue-100" : "text-slate-500"}`}>
                        {item.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="min-w-0">{children}</div>
    </div>
  );
}
