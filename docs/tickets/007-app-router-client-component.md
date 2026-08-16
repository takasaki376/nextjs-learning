# TASK-007: App Router / Client Component

## 概要

`/app-client-component`のページ全体をClient Componentとして実装し、Route Handler経由でCRUDを行う。

## 学習目的

App Routerにおける`'use client'`の意味と、Page RouterのCSRとの共通点・相違点を理解する。

## 前提

TASK-006が完了していること。

## 対象URL

`/app-client-component`

## 主な対象ファイル

- `src/app/app-client-component/page.tsx`
- 利用する`src/app/api/todos/`配下のRoute Handler

## 実装内容

- [ ] `page.tsx`先頭に`'use client'`を書く
- [ ] `useState`、`useEffect`で一覧、loading、errorを管理する
- [ ] Route Handlerから初期一覧を取得する
- [ ] Client Componentから全CRUDを実行する
- [ ] `Rendering: App Router / Client Component`を表示する

## 実装上のポイント

`'use client'`はファイルをクライアント境界の入口にし、hooksやイベントハンドラーを利用可能にする。初期取得はhydration後にブラウザで始まり、初期HTMLには取得済み一覧を期待しない。Route Handlerと保存処理はサーバーで動く。ページとimportされたクライアント側依存はブラウザ用JavaScriptへ含まれる。

TASK-002とデータフローは似るが、ルーティング規約とClient/Server Component境界がApp Router固有である。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: use clientはこのファイルをClient Component境界の入口にする`）
- [ ] `'use client'`の意味、ブラウザで動くhooks、Route Handlerとの境界をコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、Client Component固有の処理へコメントが付いていることを確認する

## 確認方法

- [ ] Networkタブで初回GETとCRUDを確認する
- [ ] View SourceとJavaScript無効化で初期一覧の有無を確認する
- [ ] `'use client'`を外した際にhooksが使えないことをエラー内容から確認し、元に戻す
- [ ] Page Router CSRと送信JavaScript、取得時刻、loadingを比較する

## 完了条件

- [ ] Client Component上で全基本機能が動く
- [ ] loading/errorがブラウザ側で管理される
- [ ] CSR版との比較結果が記録されている

## 学習後に説明できること

- [ ] `'use client'`が示す境界
- [ ] Client Componentでもサーバー機能をAPI経由で呼ぶ理由
- [ ] Page Router CSRとの共通点と相違点
