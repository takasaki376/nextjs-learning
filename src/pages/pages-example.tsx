import type { NextPage } from "next";
import Link from "next/link";

const PagesExample: NextPage = () => (
  <main>
    {/* 学習メモ: 採用理由 - / と競合しないURLで Page Router の共存を確認できる */}
    <h1>Page Router 確認ページ</h1>
    <p>このページは src/pages から配信されています。</p>
    <Link href="/">App Router のトップページへ</Link>
  </main>
);

export default PagesExample;
