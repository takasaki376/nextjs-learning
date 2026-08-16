# TASK-022: useTransition

## 概要

大量ToDoのフィルター更新をTransition化し、入力への即時応答と重い再描画の優先度を分ける。

## 学習目的

urgent／non-urgent更新、`startTransition`、`isPending`を理解する。

## 前提

TASK-021完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-transition`

## 主な対象ファイル

- `src/app/hooks/use-transition/page.tsx`
- `src/app/hooks/use-transition/components/TransitionTodoDemo.tsx`

## 実装内容

- [ ] 通常のstate更新で大量一覧のフィルター切替を実装する
- [ ] UIの応答低下をProfilerで確認する
- [ ] 選択表示などurgent更新と一覧計算を分離する
- [ ] 一覧更新を`startTransition`で囲む
- [ ] `isPending`で古い一覧が表示中であることを示す
- [ ] useOptimisticとServer Action pendingとの違いを記録する

## 実装上のポイント

Transitionは処理そのものを速くしたり固定時間遅延させたりしない。割り込み可能な低優先度レンダーとして扱い、入力欄を制御するstate自体はTransitionにしない。フィルターを共有・復元する要件ならURL Search Params、巨大データならサーバー検索も比較する。

## 業務アプリでの利用例

- データグリッドの重いタブ・フィルター切替
- ダッシュボードの複数グラフ更新
- 複雑なプレビュー表示

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: ボタン反応はurgent、一覧再計算は中断可能なTransitionとして扱う`
- [ ] 優先度を分ける理由と`isPending`が示す状態を説明する
- [ ] 自明な逐語コメントは避ける

## 確認方法

- [ ] Performance/Profilerで通常版とTransition版の入力応答を比較する
- [ ] pending中も他操作が応答することを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 重い更新がTransition化され、pending UIが動作する
- [ ] Optimistic Update・Action pendingとの差を説明できる

## 学習後に説明できること

- [ ] urgent／non-urgent更新と割り込み可能レンダー
- [ ] Transitionが速度向上APIではない理由

## 使うべきではないケース

制御入力の値、即時確定が必要な操作、軽い更新、データ取得設計自体が原因の遅さを隠す用途には使わない。

