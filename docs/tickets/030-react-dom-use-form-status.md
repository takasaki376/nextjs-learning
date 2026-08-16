# TASK-030: useFormStatus

## 概要

TodoForm内のSubmitButtonを独立させ、親formの送信状態を子から取得して表示する。

## 学習目的

`useFormStatus`の購読範囲と、`useActionState`が返すpendingとの役割の違いを理解する。

## 前提

TASK-029完了。React 19系を前提とし、実装開始時にReact／React DOMの実バージョンを確認すること。

## 対象URL

`/hooks/use-form-status`

## 主な対象ファイル

- `src/app/hooks/use-form-status/page.tsx`
- `src/app/hooks/use-form-status/components/TodoForm.tsx`
- `src/app/hooks/use-form-status/components/SubmitButton.tsx`

## 実装内容

- [ ] Server Actionを使うTodoFormを用意する
- [ ] 送信ボタンへpendingをpropsで渡す比較版を作る
- [ ] SubmitButtonをformの子となるClient Componentへ分離する
- [ ] `react-dom`から`useFormStatus`をimportする
- [ ] pending中に「追加中...」と表示しdisabledにする
- [ ] `useActionState`のpendingと同じ操作で比較する

## 実装上のポイント

`useFormStatus`はReact本体ではなく`react-dom`のHookで、呼び出したコンポーネントを囲む最寄りの親formの送信状態を読む。formを定義するコンポーネント自身ではなく、その子から利用する。`useActionState`は特定Actionの結果stateとpendingを扱い、`useFormStatus`は親form submissionの状態・データ等へ局所的にアクセスする。

## 業務アプリでの利用例

- 申請・承認フォームの送信ボタン
- ファイル登録フォームの局所pending表示
- 複数formを持つ管理画面の個別送信状態

## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: useFormStatusはこのボタンを囲む最寄りのformの送信状態を購読する`
- [ ] Hookの提供元、利用可能な階層、`useActionState`との差を説明する

## 確認方法

- [ ] Actionを意図的に遅延し、表示・disabled・二重送信防止を確認する
- [ ] 複数formで別のformのpendingへ反応しないことを確認する
- [ ] React DevToolsでコンポーネント階層を確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 親form送信中だけSubmitButtonがpending表示になる
- [ ] `useActionState` pendingとの比較が記録されている

## 学習後に説明できること

- [ ] `useFormStatus`の提供元と購読範囲
- [ ] 2種類のpendingの意味と利用場所

## 使うべきではないケース

form外の一般通信状態、Action結果全体の管理、親formと無関係な操作状態には使わない。

