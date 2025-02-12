import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import SubHeader from "@/components/layout/SubHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon.co.jp: オンラインショッピング",
  description: "Amazon.co.jpクローンサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <SubHeader />
        {children}
      </body>
    </html>
  );
}
