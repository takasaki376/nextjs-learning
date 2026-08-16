# TASK-010: App Router / Route Handler

## 概要

`/app-route-handler`からApp RouterのRoute Handlerを利用し、HTTP APIとしてToDo CRUDを実装する。

## 学習目的

Web標準の`Request`/`Response`、HTTPメソッド、ステータスコードを使うAPI境界を理解する。

## 前提

TASK-009が完了していること。

## 対象URL

`/app-route-handler`

## 主な対象ファイル

- `src/app/app-route-handler/page.tsx`
- `src/app/api/todos/route.ts`
- `src/app/api/todos/[id]/route.ts`

## 実装内容

- [ ] `GET /api/todos`と`POST /api/todos`を実装する
- [ ] `PATCH /api/todos/[id]`と`DELETE /api/todos/[id]`を実装する
- [ ] JSONの入出力と適切なHTTPステータスコードを定義する
- [ ] ブラウザの`fetch`から全CRUDを呼び出す
- [ ] 404、400、500相当を区別してUIへ反映する
- [ ] `Rendering: App Router / Route Handler`を表示する

## 実装上のポイント

Route Handlerはサーバーで動くHTTP境界であり、ブラウザ、別アプリ、外部クライアントから同じAPIを利用できる。画面のイベントと`fetch`はブラウザ、保存処理はサーバーで実行される。GETのキャッシュ方針は明示し、更新直後の取得結果と整合させる。

TASK-009のコンポーネント境界に加え、更新処理をHTTP APIとして明文化する。Page Router API Routesとのファイル規約、引数、Web API利用の差を比較する。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: Route Handlerはブラウザや外部クライアントから利用できるHTTP境界である`）
- [ ] HTTPメソッド、ステータスコード、サーバー処理、API Routesとの差分をコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、Route Handler固有の処理へコメントが付いていることを確認する

## 確認方法

- [ ] Networkタブでmethod、URL、payload、status、responseを確認する
- [ ] 存在しないID、不正JSON、空タイトルを送り応答を確認する
- [ ] Consoleとサーバーログを見比べる
- [ ] Page Router API Routes版との実装差を記録する
- [ ] 更新後のGETが古いキャッシュを返さないことを確認する

## 完了条件

- [ ] 4 HTTPメソッドで全CRUDが動作する
- [ ] 成功と主要エラーに適切なステータスが返る
- [ ] DevToolsからリクエストとレスポンスを説明できる

## 学習後に説明できること

- [ ] Route Handlerを使う理由と実行場所
- [ ] HTTP APIを公開する設計の利点
- [ ] Page Router API Routesとの違い
