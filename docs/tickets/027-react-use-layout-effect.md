# TASK-027: useLayoutEffect

## 概要

TodoItemのDOMを計測して編集UIを配置し、`useEffect`と描画前の`useLayoutEffect`を比較する。

## 学習目的

commit、browser paint、同期DOM計測とパフォーマンスへの影響を理解する。

## 前提

TASK-026完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-layout-effect`

## 主な対象ファイル

- `src/app/hooks/use-layout-effect/page.tsx`
- `src/app/hooks/use-layout-effect/components/MeasuredTodoEditor.tsx`

## 実装内容

- [ ] `useEffect`で位置・幅を計測する初期版を作る
- [ ] CPU低速化等で編集UIの位置ずれを観察する
- [ ] 同じ計測を`useLayoutEffect`へ変更する
- [ ] resize時の再計測とcleanupを実装する
- [ ] 計測・state更新回数を記録する

## 実装上のポイント

`useLayoutEffect`はDOM反映後かつpaint前に同期実行され、paintをブロックする。DOM計測結果で同一paintのレイアウトを直す場合だけ使用し、それ以外の外部同期は`useEffect`を優先する。ブラウザDOMが必要なため対象だけClient Componentにする。

## 業務アプリでの利用例

- ツールチップやポップオーバーの位置決定
- データグリッドのインライン編集UI
- 可変サイズ要素のスクロール位置補正

## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: paint前に計測結果を反映し、誤った位置の一瞬の表示を防ぐ`
- [ ] `useEffect`では不十分な観測結果とpaintを止めるコストを説明する

## 確認方法

- [ ] Performance録画でEffect実行とpaintを比較する
- [ ] 低速環境で位置ずれの有無を動画または記録で比較する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 改善前のちらつきを再現し、改善後に解消する
- [ ] cleanupと再計測が正しく動く

## 学習後に説明できること

- [ ] `useEffect`と`useLayoutEffect`の実行タイミング
- [ ] paintブロックのコスト

## 使うべきではないケース

通信、ログ、タイマー、DOM計測を伴わない副作用など、paint前に同期実行する必要がない処理には使わない。

