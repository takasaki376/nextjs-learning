# TASK-021: useMemo / useCallback / memo

## 概要

100・1,000・10,000件のToDoで検索、絞り込み、ソート、集計を行い、計測後にメモ化する。

## 学習目的

再計算と再レンダリングの違い、手動メモ化のコスト、最適化を根拠付きで導入する手順を理解する。

## 前提

TASK-020完了。実装開始時にReactバージョンとReact Compilerの有効性を確認すること。

## 対象URL

`/hooks/memoization`

## 主な対象ファイル

- `src/app/hooks/memoization/page.tsx`
- `src/app/hooks/memoization/components/MemoizationDemo.tsx`
- `src/app/hooks/memoization/components/TodoItem.tsx`

## 実装内容

- [ ] 件数別の学習データ生成機能を作る
- [ ] 最適化せずfilter→search→sort→集計を実行する
- [ ] Profilerでcommit時間、計算回数、TodoItem描画回数を記録する
- [ ] `useMemo`で重い派生計算をメモ化する
- [ ] `useCallback`でTodoItemへ渡すhandler参照を安定させる
- [ ] TodoItemを`memo`化し、前後を再計測する

## 実装上のポイント

`useMemo`は計算結果、`useCallback`は関数参照を保持し、`memo`はpropsが同等ならコンポーネント再レンダリングを省略する。依存配列を正確にする。サーバーで検索・ページングできるなら巨大配列をブラウザへ送らない設計も比較する。React Compiler環境では自動最適化により手動メモ化の必要性が変わり得る。

## 業務アプリでの利用例

- 大規模データグリッドの派生表示
- ダッシュボード集計とチャート変換
- 複雑な権限・表示条件の計算

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: Profilerで再計算コストを確認できたため、この派生配列だけをメモ化する`
- [ ] 各メモ化の対象、依存、計測根拠を説明する
- [ ] 「高速化のため」だけの曖昧なコメントは避ける

## 確認方法

- [ ] React DevTools Profilerで最適化前後を同一操作で比較する
- [ ] Consoleで計算・TodoItem描画回数を確認する
- [ ] `bun run build`後の本番モードでも測定する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 最適化前後の測定値が記録されている
- [ ] 3 APIそれぞれの効果を独立して説明できる

## 学習後に説明できること

- [ ] メモ化が常に高速化にならない理由
- [ ] 再計算とコンポーネント再レンダリングの違い

## 使うべきではないケース

測定して問題がない軽い計算、常に変わる依存、可読性コストが効果を上回る箇所へ機械的に付けない。

## 補足

`memo`はHookではない。React Compilerの設定と公式推奨を実装時のバージョンで再確認する。

