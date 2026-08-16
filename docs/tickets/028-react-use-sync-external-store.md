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

## AIへ実装を依頼する学習方針

このタスクでは、AIにコードを書かせることだけでなく、人が業務上の利用シーンと技術選定の意図を整理し、AIが実装へ反映しやすい指示として伝える練習も行う。AIへ依頼する前に、少なくとも「誰が・どの場面で使うか」「現在何に困っているか」「期待する操作と結果」「技術上・業務上の制約」「今回の対象外」「どの観測結果で完了とするか」を具体化する。

- [ ] AIへの依頼文に、利用者、利用シーン、解決したい問題を記載する
- [ ] 期待する入力、操作、出力、失敗時の挙動を記載する
- [ ] Server／Client Componentの境界、URL状態、通常関数など、比較すべき代替案を記載する
- [ ] パフォーマンス、アクセシビリティ、セキュリティ等、このタスクで守る制約を記載する
- [ ] 実装しない範囲と、過度な共通化・最適化を避ける条件を記載する
- [ ] DevTools、Profiler、ログ、テスト等による確認方法を依頼時点で記載する
- [ ] 情報が不足する場合、AIに重要な前提を明示または確認させ、暗黙の仮定で実装範囲を広げさせない
- [ ] AIが生成したコードについて、依頼内容のどの指示がどの実装判断へ反映されたかレビューする

ソースコードの学習メモは、APIの構文説明ではなく「利用シーンから実装判断へ至る過程」を後から追跡できる内容にする。該当する要所では、次の定型表現を使用する。

```text
学習メモ: 利用シーン - 誰がどの状況でこの処理を必要とするか
学習メモ: 指示の要点 - AIへ渡した要件・制約のうち実装へ影響した内容
学習メモ: 採用理由 - 代替案と比較して、この実装を選んだ理由
学習メモ: 不採用条件 - この方法を使うべきでない条件
学習メモ: 検証方法 - 意図どおり反映されたと判断する観測方法
```

すべての分類を全箇所へ機械的に記載する必要はない。設計境界、状態管理、データ取得、副作用、最適化、エラー処理など、判断理由がコードだけでは分かりにくい箇所へ必要な分類を選んで記載する。
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

