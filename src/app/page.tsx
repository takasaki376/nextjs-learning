import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* 学習メモ: 検証方法 - この見出しが / に表示されれば App Router が動作している */}
      <h1>Next.js 学習環境</h1>
      <p>App Router のトップページです。</p>
      <p>
        <Link href="/pages-example">Page Router の確認ページへ</Link>
      </p>
    </main>
  );
}
