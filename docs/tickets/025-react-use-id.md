# TASK-025: useId

## 概要

Todo編集フォームのlabel、input、エラーを、SSR／hydrationに安全なIDで関連付ける。

## 学習目的

`useId`によるアクセシブルな関連付けと、データIDとの用途の違いを理解する。

## 前提

TASK-024完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-id`

## 主な対象ファイル

- `src/app/hooks/use-id/page.tsx`
- `src/app/hooks/use-id/components/TodoEditForm.tsx`

## 実装内容

- [ ] 複数編集フォームで固定IDを使い、衝突を確認する
- [ ] `useId`でinput IDとエラーIDを生成する
- [ ] `htmlFor`、`id`、`aria-describedby`を関連付ける
- [ ] エラーがない場合のARIA属性を適切に扱う
- [ ] SSR後のhydration warningがないことを確認する

## 実装上のポイント

`useId`はレンダー順序とReactツリーに基づくUI関連付け用IDであり、Todoの主キー、list key、永続IDには使わない。フォーム操作と検証表示がある部分だけClient Componentにし、可能な表示はServer Componentへ残す。

## 業務アプリでの利用例

- 動的に繰り返す申請フォーム
- 管理画面の入力ヘルプとエラー関連付け
- ダイアログ見出しと説明文のARIA関連付け

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`で始まる日本語コメントをAIに付けさせる
- [ ] 例: `// 学習メモ: useIdはUI要素の関連付け用であり、Todoの永続IDには使用しない`
- [ ] IDの用途とSSR安全性を説明し、自明な逐語コメントは避ける

## 確認方法

- [ ] Accessibilityツリーでlabelと説明の関連を確認する
- [ ] 複数フォームでID重複がないことをElementsで確認する
- [ ] Consoleでhydration warningがないことを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] label、input、エラーが一意なIDで関連付く
- [ ] SSR／hydrationで不整合がない

## 学習後に説明できること

- [ ] `useId`とランダムID、DB ID、list keyの違い
- [ ] アクセシブルなフォーム関連付け

## 使うべきではないケース

データベース主キー、Reactのlist key、認証トークン、外部システムへ保存する識別子には使わない。

