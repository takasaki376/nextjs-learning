# TASK-019: useContext

## 概要

表示設定を深いClient Component階層で共有し、props drillingとContextを比較する。

## 学習目的

Provider、`useContext`、更新時の購読コンポーネント再レンダリングとServer Component境界を理解する。

## 前提

TASK-018完了。実装開始時にReactバージョンを確認すること。

## 対象URL

`/hooks/use-context`

## 主な対象ファイル

- `src/app/hooks/use-context/page.tsx`
- `src/app/hooks/use-context/components/TodoPreferencesProvider.tsx`
- 同ルートのTodoLayout、TodoToolbar、TodoList、TodoItem

## 実装内容

- [ ] `compactMode`、`showCompleted`、`dateFormat`をpropsで全階層へ渡す版を作る
- [ ] props drillingの変更範囲を記録する
- [ ] `TodoPreferencesContext`とProviderへ置き換える
- [ ] Context値を更新し、購読箇所の再レンダリングを計測する
- [ ] Providerを必要な部分だけに配置する

## 実装上のポイント

Context利用部分はClient Componentになるが、ページ全体をクライアント化しない。サーバーで決められる初期設定はServer ComponentからProviderへシリアライズ可能なpropsとして渡せる。URL共有すべきフィルターはSearch Paramsを優先する。頻繁に変わる巨大なContextは広範な再レンダリングを招くため、責務別分割やpropsを検討する。

## 業務アプリでの利用例

- 管理画面の密度・テーマ・表示形式
- 認証済み利用者の表示用情報
- 多階層フォームの編集モード

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: Providerをこの範囲に限定し、無関係なClient Componentの再レンダリングを避ける`
- [ ] props drillingから変わった点、Provider境界、再レンダリング範囲を説明する
- [ ] 自明な逐語コメントは避ける

## 確認方法

- [ ] React DevTools Profilerで設定変更時の描画範囲を比較する
- [ ] Provider外からContextを使う場合の安全なエラー処理を確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 3設定が複数階層で共有・更新できる
- [ ] props版とContext版の利点・欠点を記録している

## 学習後に説明できること

- [ ] Contextが解決する問題とグローバルStoreとの違い
- [ ] Server/Client境界と更新時再レンダリング

## 使うべきではないケース

1〜2階層のprops、単一箇所のstate、URLへ置くべき状態、更新頻度が高く購読範囲の広い値へ無条件に使わない。

