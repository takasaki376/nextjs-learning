import type { Metadata } from "next";
import { LearningShell } from "@/components/layout/LearningShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tasks | Next.js Learning",
  description: "レンダリング方式を比較するための共通ToDo UI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <LearningShell>{children}</LearningShell>
      </body>
    </html>
  );
}
