# TASK-015: Suspense / Loading UI

## 概要

`/app-suspense`でRoute単位とコンポーネント単位のLoading UIを実装し、段階的にレスポンスを表示する。

## 学習目的

サーバーデータ取得、Suspense境界、ストリーミングの関係と、CSRのloading stateとの差を理解する。

## 前提

TASK-014が完了していること。

## 対象URL

`/app-suspense`

## 主な対象ファイル

- `src/app/app-suspense/page.tsx`
- `src/app/app-suspense/loading.tsx`
- `src/app/app-suspense/components/TodoSummary.tsx`
- `src/app/app-suspense/components/TodoList.tsx`

## 実装内容

- [ ] `loading.tsx`にRoute単位のスケルトンを作る
- [ ] `TodoSummary`と`TodoList`を独立したServer Componentにする
- [ ] 一覧取得に学習用の遅延を入れる
- [ ] `Suspense`で一覧だけに専用fallbackを表示する
- [ ] ページ見出しなど取得不要部分を先に表示する
- [ ] `Rendering: App Router / Suspense`を表示する

## 実装上のポイント

データ取得はサーバーで進み、準備できた境界から応答をストリーミングできる。`loading.tsx`はルートセグメントの自動境界、明示的`Suspense`はページ内の待機範囲を制御する。fallbackは実コンテンツに近い寸法にし、レイアウトシフトを抑える。

TASK-014の更新時UXとは別に、初期・遷移時の読み込みUXを扱う。CSRの`useEffect`では空のクライアント画面から取得するが、ここではサーバー取得とHTMLストリームを段階表示する。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: このSuspense境界により、一覧を待たずにページの他部分を先に表示できる`）
- [ ] Route単位とコンポーネント単位の待機、サーバー取得、ストリーミングをコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、Suspense境界とloading UIへコメントが付いていることを確認する

## 確認方法

- [ ] `bun dev`と本番モードの双方で直接アクセスとクライアント遷移を確認する
- [ ] Networkを低速化し、見出しと一覧fallbackの表示順を観察する
- [ ] 一覧だけ待機し、ページ全体がブロックされないことを確認する
- [ ] CSR版のloading表示、Network、View Sourceと比較する

## 完了条件

- [ ] Route単位の`loading.tsx`が機能する
- [ ] コンポーネント単位のfallbackが機能する
- [ ] 取得不要部分が一覧より先に利用可能になる

## 学習後に説明できること

- [ ] `loading.tsx`と明示的`Suspense`の違い
- [ ] ストリーミングが待ち時間の見え方を変える仕組み
- [ ] CSR loading stateとの違い
