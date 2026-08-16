# TASK-023: useDeferredValue

## 概要

大量ToDoのリアルタイム検索で、入力値と重い結果表示に使う値の更新時期を分離する。

## 学習目的

`useDeferredValue`による遅延可能な再レンダリングと、debounce・Transitionとの差を理解する。

## 前提

TASK-022完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-deferred-value`

## 主な対象ファイル

- `src/app/hooks/use-deferred-value/page.tsx`
- `src/app/hooks/use-deferred-value/components/DeferredSearchDemo.tsx`

## 実装内容

- [ ] `query`で直接大量一覧を検索する通常版を作る
- [ ] 入力遅延をProfilerで確認する
- [ ] `deferredQuery`を作り、結果計算へ使用する
- [ ] `query !== deferredQuery`の間は結果が古いことを視覚化する
- [ ] debounce、`useTransition`、`useDeferredValue`を同条件で比較する

## 実装上のポイント

入力stateは即時更新し、重い子ツリーだけが遅延値を使う。固定ミリ秒を指定するdebounceではなく、Reactが他の更新を優先できる仕組みである。ネットワーク要求回数の抑制が目的ならdebounce等を別に検討する。検索をサーバーへ移す、URLにqueryを保持する選択肢も評価する。

## 業務アプリでの利用例

- 顧客・商品マスターのインクリメンタル検索
- 大規模表のクライアント絞り込み
- Markdownや帳票の重いライブプレビュー

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: 入力値は即時更新し、重い一覧だけdeferredQueryを使う`
- [ ] 即時値と遅延値、debounceとの差を説明する
- [ ] 自明な逐語コメントは避ける

## 確認方法

- [ ] ProfilerとPerformanceで4方式を比較する
- [ ] 高速入力時も入力欄が追従し、結果が後から一致することを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 即時入力と遅延結果を観測できる
- [ ] 4方式の目的と違いを説明できる

## 学習後に説明できること

- [ ] 遅延値が固定時間遅延ではない理由
- [ ] `useTransition`との制御主体の違い

## 使うべきではないケース

軽い表示、入力値自体を遅らせる用途、API呼び出し回数を一定時間で抑えるだけの用途には使わない。

