# TASK-031: Custom Hooks

## 概要

これまでの状態ロジックから再利用価値のある処理をCustom Hookへ抽出し、`useDebugValue`で観測する。

## 学習目的

状態ロジックの再利用、Rules of Hooks、UIとの責務分離、通常関数との使い分けを理解する。

## 前提

TASK-018〜030完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/custom-hooks`

## 主な対象ファイル

- `src/app/hooks/custom-hooks/page.tsx`
- `src/app/hooks/custom-hooks/hooks/useTodoFilter.ts`
- `src/app/hooks/custom-hooks/hooks/useTodoSelection.ts`
- `src/app/hooks/custom-hooks/hooks/useTodoPreferences.ts`
- `src/app/hooks/custom-hooks/hooks/useTodoRealtimeConnection.ts`

## 実装内容

- [ ] 複数コンポーネントに重複する状態ロジックを特定する
- [ ] 抽出前の依存、入力、戻り値、副作用を記録する
- [ ] 適切な候補を`use`で始まるCustom Hookへ抽出する
- [ ] Hookを条件分岐・ループ内で呼ばずRules of Hooksを守る
- [ ] 複数Hookを組み合わせ、UIコンポーネントを簡潔にする
- [ ] `useDebugValue`で選択数、フィルター、接続状態等を表示する
- [ ] 同じロジックを使う2コンポーネント以上で再利用する

## 実装上のポイント

Custom Hookはコードを短くする機能ではなく、state・Effect・購読を含む振る舞いの単位を再利用する。Hookを呼ぶ各コンポーネントは通常、独立したstateを持つ。純粋計算だけなら通常関数、サーバーデータ取得だけならServer Componentやサーバー関数を優先する。Hook利用コンポーネントだけをClient Componentにし、`'use client'`境界を広げない。

`useDebugValue`はDevTools表示が診断に有用なCustom Hookへ限定し、表示値の作成が重い場合はformat関数を検討する。

## 業務アプリでの利用例

- 権限付きフィルター・ページング状態の再利用
- オンライン状態やリアルタイム接続ライフサイクル
- フォームautosave・離脱警告
- データグリッドの選択ロジック

## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: UIではなく選択状態の遷移を再利用するためCustom Hookへ抽出する`
- [ ] 抽出理由、公開API、副作用、Server/Client境界を説明する
- [ ] 単に「共通化するため」とだけ書かず、利用者と責務を具体化する

## 確認方法

- [ ] React DevToolsでCustom Hook名と`useDebugValue`を確認する
- [ ] 2つの利用元で状態が独立しているか、共有設計なら意図通り共有されるか確認する
- [ ] lintでRules of Hooks違反がないことを確認する
- [ ] 抽出前後の重複、テスト容易性、境界を比較する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 再利用価値のある状態ロジックがCustom Hook化されている
- [ ] 通常関数で十分な処理はHook化されていない
- [ ] `useDebugValue`がDevToolsで確認できる
- [ ] Server Componentを不必要にClient Component化していない

## 学習後に説明できること

- [ ] Custom Hookが共有するものと共有しないもの
- [ ] Rules of Hooksと`use`命名の意味
- [ ] Custom Hook、通常関数、Server Componentの使い分け

## 使うべきではないケース

一度しか使わない短い処理、純粋計算、UIマークアップだけの共通化、サーバーだけで完結する処理を形式的にHook化しない。

## 補足

`useDebugValue`は単独課題にせず、Custom Hookの診断情報として扱う。一般利用者向け機能ではなく開発時の観測支援である。

