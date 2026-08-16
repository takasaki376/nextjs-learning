# TASK-008: App Router / Server Component

## 概要

`/app-server-component`をServer Componentとして実装し、サーバーで取得したToDo一覧を読み取り専用表示する。

## 学習目的

App Routerの既定であるServer Componentの実行場所、能力、制約を理解する。

## 前提

TASK-007が完了していること。

## 対象URL

`/app-server-component`

## 主な対象ファイル

- `src/app/app-server-component/page.tsx`

## 実装内容

- [ ] `page.tsx`に`'use client'`を書かない
- [ ] Server Component内でToDoを取得する
- [ ] 一覧、件数、`Rendering: App Router / Server Component`を表示する
- [ ] 操作機能は非表示または無効とし、読み取りに学習範囲を絞る
- [ ] キャッシュ方針を明示し、観測可能にする

## 実装上のポイント

取得コードはサーバーで実行され、初期応答に一覧が含まれる。ブラウザから初期一覧APIを呼ぶ必要はない。Server Component自体のコードはブラウザ用JavaScriptへ含まれないため、サーバー専用のデータアクセスを置ける。一方、`useState`、`useEffect`やイベントハンドラーは直接利用できない。

TASK-007から初期取得と一覧生成がブラウザからサーバーへ移り、操作性はいったん外す。`fetch`利用時はNext.jsのバージョンに応じたキャッシュ指定を明示し、暗黙の挙動に依存しない。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: この取得処理はServer Component内で実行され、ブラウザ用JavaScriptには含まれない`）
- [ ] サーバーでの取得、初期HTML、hooksを使えない理由、Client Component版との差分をコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、Server Component固有の処理へコメントが付いていることを確認する

## 確認方法

- [ ] Networkタブで初期一覧APIがないことを確認する
- [ ] View SourceとJavaScript無効時に一覧が読めることを確認する
- [ ] サーバーログで取得処理を確認する
- [ ] Client Component版とブラウザへ送るJavaScriptの範囲を比較する
- [ ] イベントハンドラーやhookを一時的に記述した際のエラーを確認し、元に戻す

## 完了条件

- [ ] Server Componentで一覧と件数を表示できる
- [ ] 初期取得がブラウザで行われていない
- [ ] キャッシュ方針がコードと説明で明確である

## 学習後に説明できること

- [ ] Server Componentの実行場所と送信物
- [ ] hooksやイベントを直接使えない理由
- [ ] サーバー取得がセキュリティとJavaScript量にもたらす利点
