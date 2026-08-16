# TASK-011: App Router / Server Action

## 概要

`/app-server-action`でCRUDをServer Actionへ移し、フォームからサーバー処理を直接起動する。

## 学習目的

Server Actionの宣言、呼び出し、再検証と、Route Handlerを使う設計との差を理解する。

## 前提

TASK-010が完了していること。

## 対象URL

`/app-server-action`

## 主な対象ファイル

- `src/app/app-server-action/page.tsx`
- `src/app/app-server-action/actions.ts`
- `src/app/app-server-action/components/`配下

## 実装内容

- [ ] `'use server'`を持つ`createTodo`、`toggleTodo`、`updateTodo`、`deleteTodo`を実装する
- [ ] `<form action={...}>`または必要なClient ComponentからActionを呼ぶ
- [ ] CRUD用Route Handlerをこのページの処理では使用しない
- [ ] 更新後に`revalidatePath`等で表示を再検証する
- [ ] `Rendering: App Router / Server Action`を表示する

## 実装上のポイント

Action本体とデータ保存はサーバーで実行される。フォーム操作や必要なpending UIはブラウザ側だが、クライアントにCRUDエンドポイントを手書きする必要はない。Actionへ渡す値は外部入力として扱い、認可・検証の境界であることを忘れない（詳細なZod検証は次タスク）。

TASK-010から、明示的なHTTP API呼び出しをフレームワーク統合されたサーバー関数呼び出しへ変える。外部クライアントにも公開するAPIならRoute Handlerが適する。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: この関数はServer Actionとしてサーバー上でのみ実行される`）
- [ ] `'use server'`、フォームからの呼び出し、再検証、Route Handler版との差分をコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、Server Action固有の処理へコメントが付いていることを確認する

## 確認方法

- [ ] Networkタブで従来のCRUD API URLを直接呼んでいないことを確認する
- [ ] サーバーログで各Actionの実行を確認する
- [ ] 更新後にServer Componentの一覧が最新になることを確認する
- [ ] JavaScript有効時の操作とフォームの基本挙動を確認する
- [ ] Route Handler版との呼び出し方・再表示・公開性を比較する

## 完了条件

- [ ] 4 Actionで全CRUDが動く
- [ ] 更新後の一覧が再検証される
- [ ] このページがCRUD用Route Handlerに依存しない

## 学習後に説明できること

- [ ] Server Actionがどこで実行されるか
- [ ] `revalidatePath`が必要な理由
- [ ] Route HandlerとServer Actionの使い分け
