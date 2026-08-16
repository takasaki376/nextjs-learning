# TASK-009: Server Component / Client Component分割

## 概要

`/app-server-client`をServer Component中心にし、操作が必要な箇所だけClient Componentへ分割する。

## 学習目的

`'use client'`境界、props制約、Server/Client Componentの責務分担を理解する。

## 前提

TASK-008が完了していること。

## 対象URL

`/app-server-client`

## 主な対象ファイル

- `src/app/app-server-client/page.tsx`
- `src/app/app-server-client/components/TodoInput.tsx`
- `src/app/app-server-client/components/TodoItemActions.tsx`
- 表示用Server Component群

## 実装内容

- [ ] `page.tsx`、`TodoHeader`、`TodoSummary`、`TodoList`をServer Componentにする
- [ ] `TodoInput`と`TodoItemActions`だけをClient Componentにする
- [ ] Client Componentへシリアライズ可能なpropsを渡す
- [ ] 全CRUD操作を復元する
- [ ] `Rendering: App Router / Server + Client Components`を表示する

## 実装上のポイント

`'use client'`を書いたファイルから下流のimportがクライアントバンドル境界へ入る。関数などの非シリアライズ値を通常のpropsとしてServer Componentから渡せない点を確認する。データ取得と静的表示はサーバー、入力状態とイベント処理はブラウザが担当する。

TASK-008から操作部分だけを追加し、画面全体をClient Componentへ戻さない。Client Componentへ渡るデータ量とJavaScript範囲を確認する。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: 操作が必要なこの部分だけをClient Componentとして分離する`）
- [ ] Server/Client境界、propsのシリアライズ制約、分割理由を各境界付近のコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、コンポーネント境界へコメントが付いていることを確認する

## 確認方法

- [ ] ファイルごとの`'use client'`有無と依存方向を図にする
- [ ] Networkとサーバーログで取得・更新処理の場所を確認する
- [ ] View Sourceで初期一覧を確認する
- [ ] TASK-007とビルド出力またはブラウザの転送量を比較する
- [ ] 非シリアライズ可能なpropsの制約を確認し、正しい設計へ戻す

## 完了条件

- [ ] 全基本操作が動作する
- [ ] Client Componentが入力・操作部分に限定されている
- [ ] 境界を越えるpropsがシリアライズ可能である

## 学習後に説明できること

- [ ] Server/Client Componentそれぞれの責務
- [ ] Client境界がブラウザ用JavaScriptへ与える影響
- [ ] インタラクションを必要最小限に分離する理由
