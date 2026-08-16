# Next.js Learning

App Router と Pages Router を同一プロジェクトで学ぶための環境です。`/` は App Router、`/pages-example` は Page Router が担当し、URLは競合しません。

## 環境

- パッケージマネージャー: Bun
- Next.js: 16.3.0
- React: 19.2.8
- React DOM: 19.2.8
- TypeScript 7.0.2（TypeScript 6互換APIをESLint用に併設）
- Tailwind CSS 4.3.3
- ESLint / `src/` ディレクトリを使用

React 19.2系には、後続チケットで扱う `useEffectEvent` が含まれます。
TypeScript 7はコンパイラーとして使用し、TypeScript APIを必要とするESLint向けには公式推奨のTypeScript 6互換パッケージを併設しています。

## コマンド

```bash
bun install
bun dev
bun run lint
bun run build
bun start
```

開発サーバーと本番サーバーは、既定では <http://localhost:3000> で確認できます。環境変数が必要になった場合は `.env.example` を基に `.env.local` を作成し、秘密情報をコミットしないでください。
