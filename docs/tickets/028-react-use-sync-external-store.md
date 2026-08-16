# TASK-028: useSyncExternalStore

## 概要

簡易TodoExternalStoreを作り、React外部の状態を`useSyncExternalStore`で安全に購読する。

## 学習目的

`subscribe`、`getSnapshot`、サーバーsnapshotとReact stateの違いを理解する。

## 前提

TASK-027完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-sync-external-store`

## 主な対象ファイル

- `src/app/hooks/use-sync-external-store/page.tsx`
- `src/app/hooks/use-sync-external-store/todo-external-store.ts`
- `src/app/hooks/use-sync-external-store/components/ExternalStoreDemo.tsx`

## 実装内容

- [ ] `getSnapshot`、`subscribe`、`setTodos`を持つStoreを作る
- [ ] 手動のEffect購読版でcleanupや不整合の問題を確認する
- [ ] `useSyncExternalStore`へ置き換える
- [ ] snapshotが未変更なら同一参照を返す
- [ ] `getServerSnapshot`を定義し、SSR／hydrationを確認する
- [ ] 複数コンポーネントから同じStoreを購読する

## 実装上のポイント

StoreはReact外に存在し、購読UIだけClient Componentとなる。`getSnapshot`が毎回新しいオブジェクトを返すと無限更新や不要描画の原因になる。初期サーバーsnapshotとクライアント初期値を一致させる。Redux／Zustandを導入する課題ではなく、ライブラリがReactと接続する原理を学ぶ。

## 業務アプリでの利用例

- ブラウザonline状態・メディアクエリの購読
- 既存JavaScript Storeや外部SDKとの連携
- 複数画面で共有するリアルタイム監視Store

## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: snapshot未変更時は同一参照を返し、不要な再レンダリングを防ぐ`
- [ ] 購読解除、snapshotの不変性、SSR初期値を説明する

## 確認方法

- [ ] 複数購読者が同時に更新されることを確認する
- [ ] mount/unmount時のsubscribe／unsubscribeをConsoleで確認する
- [ ] hydration warningとProfilerの描画回数を確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 外部Store更新が全購読者へ安全に反映される
- [ ] SSR snapshotとcleanupが実装されている

## 学習後に説明できること

- [ ] React stateとexternal storeの違い
- [ ] 状態管理ライブラリとの関係

## 使うべきではないケース

単一コンポーネント内のstate、Server Componentで取得できるデータ、購読機構を持たない単なる値には使わない。

