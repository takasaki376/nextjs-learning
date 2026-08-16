# TASK-026: useImperativeHandle

## 概要

再利用可能なTodo入力へ`focus`、`clear`、`focusAndClear`だけを命令的APIとして公開する。

## 学習目的

refを介した最小API、カプセル化、宣言的UIを優先すべき理由を理解する。

## 前提

TASK-025完了。Reactバージョンに応じたref受け渡し構文を公式仕様で確認すること。

## 対象URL

`/hooks/use-imperative-handle`

## 主な対象ファイル

- `src/app/hooks/use-imperative-handle/page.tsx`
- `src/app/hooks/use-imperative-handle/components/TodoInput.tsx`

## 実装内容

- [ ] input DOM全体を親へ公開する版を作る
- [ ] 親が不要なDOM操作まで行える問題を確認する
- [ ] `TodoInputHandle`型に3メソッドだけを定義する
- [ ] `useImperativeHandle`でAPIを公開する
- [ ] 親から登録成功時とショートカット時に呼び出す

## 実装上のポイント

命令的操作が必要な親子だけClient Componentにする。DOM構造を隠し、利用者が依存できる操作を型で限定する。通常はpropsとstateによる宣言的制御を優先し、フォーカス、スクロール、選択等の命令的操作に限定する。

## 業務アプリでの利用例

- 共通検索欄のfocus／clear API
- リッチエディタの選択・保存API
- データグリッドのスクロール・編集開始API

## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: DOM全体ではなく、親が必要とする3操作だけを公開する`
- [ ] 命令的APIが必要な理由と公開範囲を説明する

## 確認方法

- [ ] TypeScriptで公開外のDOM操作を呼べないことを確認する
- [ ] 3メソッドと再マウント後のrefを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 3操作だけが型安全に利用できる
- [ ] DOM直接公開版との差を説明できる

## 学習後に説明できること

- [ ] imperative APIとencapsulation
- [ ] 宣言的UIを基本とする理由

## 使うべきではないケース

props/stateで表現できる値変更、子の内部DOMへ広く依存するAPI、Server Componentだけで完結する処理には使わない。

