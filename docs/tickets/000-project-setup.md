# TASK-000: Next.js学習環境の構築

## 概要

TASK-001以降の学習を開始できるよう、Bunを使用してNext.js、React、TypeScript、App Router／Page Router共存の基礎環境を構築する。既存の`docs/`は保持する。

## 学習目的

なし。後続チケットを実装・確認できる開発環境の準備を目的とする。

## 前提

- Bunがインストールされ、`bun --version`を実行できること
- 作業前に既存ファイルを確認し、`docs/tickets/`を削除・上書きしないこと

## 対象URL

`/`（起動確認用）

## 主な対象ファイル

- `package.json`
- `bun.lock`
- `tsconfig.json`
- `next.config.*`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/pages/`（Page Router用）

## 実装内容

- [ ] `bun --version`でBunを確認する
- [ ] 現在のディレクトリと既存ファイルを確認する
- [ ] Bunを使ってNext.jsプロジェクトを初期化する
- [ ] TypeScript、ESLint、`src/`、App Routerを有効にする
- [ ] `package.json`のNext.js、React、React DOMのバージョンを記録する
- [ ] `src/app/`と`src/pages/`を同一プロジェクトで利用できる構成にする
- [ ] App RouterとPage Routerで同じURLを定義しないことを確認する
- [ ] `bun install`、`bun dev`、`bun run build`、`bun start`が利用できることを確認する
- [ ] `.gitignore`へ生成物や環境変数ファイルの除外設定を用意する
- [ ] 秘密情報を含めない`.env.example`を必要に応じて用意する
- [ ] 既存の`docs/tickets/`が保持されていることを確認する

## 実装上のポイント

初期化コマンドのオプションは実行時のcreate-next-appで確認し、既存ファイルを上書きしない方法を選ぶ。現在のディレクトリへ直接初期化できない場合は、一時ディレクトリで雛形を生成し、差分とコピー対象を確認してから必要ファイルだけを配置する。生成時点の最新バージョンを無条件に採用せず、TASK-018〜031で必要なHook、特に`useEffectEvent`を利用できるReactバージョンか確認する。

パッケージ管理とスクリプト実行はBunへ統一する。Next.jsのビルドはBun自身のbundlerではなく、`package.json`のNext.js用スクリプトを呼ぶ`bun run build`を使用する。

## AIコーディング時のコメントルール

- [ ] AIにソースコードを生成させる場合、環境確認に必要な箇所だけ日本語の解説コメントを付けるよう指示する
- [ ] 解説コメントの先頭に検索用定型文字`学習メモ:`を付ける（例: `// 学習メモ: App Routerの動作確認用ページ`）
- [ ] JSONなどコメントを記述できない形式へ無理にコメントを追加しない
- [ ] 自明な設定や生成された雛形へ過剰なコメントを追加しない

## 確認方法

- [ ] `bun dev`で開発サーバーを起動し、`/`が表示される
- [ ] `bun run build`が成功する
- [ ] `bun start`で本番ビルドを起動できる
- [ ] TypeScriptとESLintのエラーがない
- [ ] Next.js、React、React DOMの実際のバージョンを確認できる
- [ ] `docs/tickets/`の既存ファイルが失われていない

## 完了条件

- [ ] Bunだけでインストール、開発、ビルド、本番起動ができる
- [ ] App RouterとPage Routerを追加できるディレクトリ構成になっている
- [ ] TASK-001以降の実装を開始できる
- [ ] 既存ドキュメントと秘密情報が安全に扱われている

## 学習後に説明できること

なし。

## 使うべきではないケース

なし。

## 補足

環境構築時に検出したNext.js／Reactのバージョンを、このチケットまたはREADMEへ記録する。Hookの利用条件を満たさない場合は、実装前にバージョン更新の影響を別途確認する。

