# TASK-017: App Router最終版

## 概要

`/app-final`に、これまで学習した技術を責務に応じて統合した最終版ToDoアプリを実装する。

## 学習目的

機能を詰め込むのではなく、実行場所、UX、検証、公開境界を根拠にApp Routerの構成を選べるようにする。

## 前提

TASK-007〜016が完了していること。

## 対象URL

`/app-final`

## 主な対象ファイル

- `src/app/app-final/page.tsx`
- `src/app/app-final/actions.ts`
- `src/app/app-final/loading.tsx`
- `src/app/app-final/error.tsx`
- `src/app/app-final/components/TodoHeader.tsx`
- `src/app/app-final/components/TodoForm.tsx`
- `src/app/app-final/components/TodoList.tsx`
- `src/app/app-final/components/TodoItem.tsx`
- `src/app/app-final/components/TodoItemActions.tsx`
- `src/app/app-final/components/TodoFilter.tsx`
- `src/app/app-final/components/TodoSummary.tsx`

## 実装内容

- [ ] `page.tsx`でURL Search Paramsを読み、Server Componentで一覧を取得する
- [ ] 一覧と静的表示をServer Componentにする
- [ ] 入力・編集・切替・削除だけをClient Componentにする
- [ ] CRUDをServer Actionで実装し、更新後に再検証する
- [ ] Zodで全入力とIDをサーバー検証する
- [ ] `useActionState`でフォーム結果とpendingを表示する
- [ ] `useOptimistic`で適切な操作を即時反映する
- [ ] `Suspense`、`loading.tsx`、スケルトンを実装する
- [ ] `error.tsx`と操作内エラー表示を役割分担する
- [ ] 「すべて」「未完了」「完了」をURL Search Paramsで表現する
- [ ] `Rendering: App Router / Final`を表示する

## 実装上のポイント

初期取得・HTML生成・検証・保存はサーバーで行い、入力状態とイベント、楽観表示だけをブラウザへ送る。Server ComponentからClient Componentへ渡すpropsを最小かつシリアライズ可能にする。検索条件をURLに置くことで、再読み込み、共有、戻る/進む、サーバー取得条件を一貫させる。

CRUDがこのNext.js UI専用ならServer Actionを選び、外部クライアントへ安定したHTTP APIを提供する要件があればRoute Handlerを選ぶ。データ取得と更新後再検証のキャッシュ方針を明示する。楽観更新は失敗時に正式データへ戻り、バリデーション・業務エラーは局所表示、想定外例外は`error.tsx`へ送る。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: 初期一覧はServer Componentで取得し、操作部分だけをClient Componentへ分離する`）
- [ ] 各技術をその場所で採用した理由、実行環境、キャッシュ、前タスクからの統合判断をコメントで説明する
- [ ] Server/Client境界、Action、Validation、状態管理、Suspense、Error Boundaryの要所へコメントを付ける
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、最終構成の主要な設計判断へコメントが付いていることを確認する

## 確認方法

- [ ] `bun dev`で全CRUD、編集、フィルター、件数を確認する
- [ ] `bun run build`後に`bun start`で本番挙動を確認する
- [ ] Network、View Source、JavaScript無効化、サーバーログで実行場所を確認する
- [ ] 低速通信でpending、楽観表示、Suspenseを確認する
- [ ] 不正入力、業務エラー、取得失敗、想定外例外を個別に確認する
- [ ] フィルターURLを再読み込み・共有し、同じ表示になることを確認する
- [ ] Client Component境界と採用理由を構成図にして説明する

## 完了条件

- [ ] 共通仕様の全機能が一画面で動作する
- [ ] Server/Client Componentの責務がコードから判別できる
- [ ] 更新、検証、pending、楽観表示、loading、errorが競合せず動作する
- [ ] URL Search Paramsがフィルターの唯一の共有可能な状態になっている
- [ ] 各技術の採用理由をREADME等に記録している

## 学習後に説明できること

- [ ] `page.tsx`をServer Componentにする理由
- [ ] Client Componentを限定する理由
- [ ] CRUDにServer Actionを使う理由とRoute Handlerとの違い
- [ ] サーバーValidation、`useActionState`、`useOptimistic`の役割
- [ ] Suspenseと`error.tsx`が解決する問題
- [ ] URL Search Paramsを状態として使う理由

## 補足

最終版でも、学習対象のデータ取得・更新処理を過度に共通化しない。過去ページは比較用として残し、同じUIの内部処理がどう変化したか追跡できる状態を維持する。
