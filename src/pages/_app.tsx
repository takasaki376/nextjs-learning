import type { AppProps } from "next/app";

import "@/app/globals.css";
import { LearningShell } from "@/components/layout/LearningShell";

// 学習メモ: 採用理由 - Pages RouterでもApp Routerと同じTailwind基盤を読み込み、共通UIの見た目を揃える。
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LearningShell>
      <Component {...pageProps} />
    </LearningShell>
  );
}
