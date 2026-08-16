# TASK-013: useActionState

## 概要

`/app-action-state`で`useActionState`を使い、Server Actionの結果、エラー、pendingをフォームUIへ結び付ける。

## 学習目的

Actionの戻り値をフォーム状態として管理する方法と、通常の`useState`との役割の違いを理解する。

## 前提

TASK-012が完了していること。

## 対象URL

`/app-action-state`

## 主な対象ファイル

- `src/app/app-action-state/page.tsx`
- `src/app/app-action-state/actions.ts`
- `src/app/app-action-state/components/TodoForm.tsx`

## 実装内容

- [ ] Actionを`previousState`と`FormData`を受け取る形にする
- [ ] `useActionState`で結果とActionを接続する
- [ ] フィールドエラーと成功メッセージを表示する
- [ ] pending中は送信ボタンを無効化して二重登録を防ぐ
- [ ] 登録成功後だけ入力欄をクリアする
- [ ] `Rendering: App Router / useActionState`を表示する

## 実装上のポイント

Actionとデータ更新はサーバーで実行される。`useActionState`を使うフォーム部分はClient Componentとなり、そのコードはブラウザへ送られる。状態の型を成功・検証失敗・業務失敗で判別できる形にし、古い成功メッセージやエラーが次の送信へ残らないよう遷移を設計する。

TASK-012のAction戻り値を、手作業の複数`useState`ではなくAction実行サイクルへ結び付ける。

## AIコーディング時のコメントルール

- [ ] AIにコード生成・修正を依頼する際は、学習上重要なソースコードへ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭には検索用の定型文字 `学習メモ:` を必ず記載する（例: `// 学習メモ: useActionStateはServer Actionの戻り値とフォームUIの状態を結び付ける`）
- [ ] Action結果、pending、通常の`useState`との役割の違いをコメントで説明する
- [ ] コードを逐語的に言い換えるだけのコメントや、すべての行への過剰なコメントは避ける
- [ ] 実装完了後に `学習メモ:` を検索し、`useActionState`固有の処理へコメントが付いていることを確認する

## 確認方法

- [ ] 正常、空文字、101文字を順に送り状態遷移を確認する
- [ ] 通信を低速化し、pending中の表示と二重送信防止を確認する
- [ ] 成功時だけ入力欄がクリアされ、失敗時は入力を修正できることを確認する
- [ ] React DevTools等で通常の入力stateとAction結果stateの役割を整理する

## 完了条件

- [ ] Action結果に応じた成功・エラー表示が正しい
- [ ] pending中の二重登録が防止される
- [ ] 成功後の入力クリアが動作する

## 学習後に説明できること

- [ ] `useActionState`が解決する状態管理
- [ ] 通常の`useState`との役割の違い
- [ ] Actionの戻り値を判別可能な型にする利点
