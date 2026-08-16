import type { NextPage } from "next";
const PagesExample: NextPage = () => (
  <main className="p-4 sm:p-8 lg:p-10">
    {/* 学習メモ: 採用理由 - / と競合しないURLで Page Router の共存を確認できる */}
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">
      <p className="text-sm font-bold text-blue-700">Pages Router</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Page Router 確認ページ</h1>
      <p className="mt-4 text-slate-600">このページは src/pages から配信されています。</p>
    </section>
  </main>
);

export default PagesExample;
