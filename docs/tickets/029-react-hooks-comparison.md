# TASK-029: React Hooks総合比較

## 概要

TASK-018〜028と既存タスクで扱ったHooks／関連APIを実測結果とともに分類・比較する。

## 学習目的

API名から選ぶのではなく、解決したい問題と実行環境からHookが必要か判断できるようにする。

## 前提

TASK-018〜028完了。実装開始時にReactバージョンを確認すること。

## 対象URL

なし。

## 主な対象ファイル

- `docs/react-hooks-comparison.md`または既存README

## 実装内容

- [ ] `useState`、`useEffect`、`useRef`、`useContext`、`useReducer`を比較する
- [ ] `useMemo`、`useCallback`、`useTransition`、`useDeferredValue`を比較する
- [ ] `useActionState`、`useOptimistic`、`useEffectEvent`、`useId`を比較する
- [ ] `useImperativeHandle`、`useLayoutEffect`、`useSyncExternalStore`、`useFormStatus`を比較する
- [ ] Hookではない`memo`と`Suspense`も関連APIとして比較し、Hookではないと明記する
- [ ] 状態管理／副作用・外部システム／参照／パフォーマンス／Server Action・フォーム／アクセシビリティで分類する
- [ ] 各学習ページのProfiler、Network、Console等の実測を参照する

## 実装上のポイント

比較表には「Hook / API」「主目的」「代表的な用途」「業務アプリでの例」「再レンダリングとの関係」「Server Componentで使用可能か」「Client Componentが必要か」「使用頻度」「注意点」「今回の学習ページ」を最低限含める。

各候補について、Client Componentが本当に必要か、Server Component、URL Search Params、通常関数で解決できないかを先に判定する。Effectは外部システムとの同期がないなら不要な可能性がある。パフォーマンス最適化は推測でなく測定後に行う。

## 業務アプリでの利用例

- CRMのフォーム・検索・権限表示
- データグリッドの選択・絞り込み・大量描画
- チャットや監視画面の外部接続
- ワークフローとServer Actionフォーム

## AIコーディング時のコメントルール

- [ ] 比較のため追加するコードへ`学習メモ:`で始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: この状態は共有可能なURL状態ではなく、画面内だけの一時選択なのでuseReducerで管理する`
- [ ] Hook採用理由だけでなく、不採用にした代替案と判断根拠も説明する
- [ ] 自明な逐語コメントやHook名だけを説明するコメントは避ける

## 確認方法

- [ ] 比較表の全列・全APIが埋まっていることを確認する
- [ ] 各結論に学習ページでの観測結果を1件以上関連付ける
- [ ] `学習メモ:`を横断検索し、採用判断をレビューする

## 完了条件

- [ ] 指定された17 Hooksと2関連APIを比較できている
- [ ] Hookを使わない選択、Server Component、URL、通常変数、ref、state、Effect不要、最適化時期を説明できる
- [ ] `memo`と`Suspense`がHookではないと明記されている

## 学習後に説明できること

- [ ] 問題別のHook選択と、Hookを使わない判断
- [ ] Client Component化のコストとServer Componentとの境界
- [ ] correctnessと計測を先にし、最適化を後にする理由

## 使うべきではないケース

「Reactらしく見せる」ためだけのHook、通常の変数・関数・props・URL・サーバー処理で十分な状態へHookを追加しない。

## 補足

`useInsertionEffect`は主にCSS-in-JS等のライブラリ作者向けで、一般業務アプリから直接使う頻度が極めて低いため独立対象外とする。`useDebugValue`はCustom Hookと組み合わせて理解する方が適切なためTASK-031で扱う。

React 19系で`useActionState`、`useOptimistic`、`useFormStatus`を、React 19.2以上で`useEffectEvent`を確認する。作成時は`package.json`が存在しなかったため、実装時に実バージョンと公式APIを再確認する。

