# TASK-020: useReducer

## 概要

一括操作モードの関連状態をActionとreducerによる明示的な状態遷移へ整理する。

## 学習目的

複数stateの整合性を純粋なreducerで管理し、`useState`との選択基準を理解する。

## 前提

TASK-019完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-reducer`

## 主な対象ファイル

- `src/app/hooks/use-reducer/page.tsx`
- `src/app/hooks/use-reducer/components/ReducerTodoDemo.tsx`
- `src/app/hooks/use-reducer/todo-selection-reducer.ts`

## 実装内容

- [ ] `selectedTodoIds`、`selectionMode`、`filter`、`sort`、`editingTodoId`を複数`useState`で実装する
- [ ] 不整合や更新箇所の分散をテストで確認する
- [ ] SELECT、UNSELECT、SELECT_ALL、CLEAR、START/END_EDIT、CHANGE_FILTER/SORT Actionを定義する
- [ ] 純粋なreducerと`dispatch`へ置き換える
- [ ] 不正なActionや削除済みIDを安全に扱う

## 実装上のポイント

reducerは同じstateとactionから同じ次stateを返し、副作用や元stateの破壊を行わない。UIイベントとstateはClient Componentで必要だが、一覧取得はServer Componentに残せる。サーバーデータ更新をreducerだけで完結させず、Action等の確定処理と分離する。

## 業務アプリでの利用例

- 複雑な検索条件と一括選択を持つデータグリッド
- 多段階ワークフロー、ウィザード
- 編集・保存・失敗状態を持つ業務フォーム

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: reducerを純粋関数にすると状態遷移を単体テストできる`
- [ ] 複数state版の問題、Actionの意図、不変更新の理由を説明する
- [ ] 自明な逐語コメントは避ける

## 確認方法

- [ ] reducerを状態遷移表と単体テストで確認する
- [ ] React DevToolsでdispatch前後のstateを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 指定Actionが一括操作を矛盾なく更新する
- [ ] 複数state版との比較が記録されている

## 学習後に説明できること

- [ ] state、action、reducer、dispatchの役割
- [ ] `useState`と`useReducer`の使い分け

## 使うべきではないケース

単純で独立した少数state、サーバー由来の確定データ、純粋な計算だけの処理を過度にreducer化しない。

