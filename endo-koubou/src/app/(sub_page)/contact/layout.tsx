import "@/app/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import styles from "./layout.module.scss";
import { Footer, Header } from "@/app/components/organisms";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENDO工房",
  description:
    "関西を中心に舞台美術の制作活動を行なっている、ENDO工房の公式Webサイトです。",
};

export default function SubPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} ${styles.layout}`}>
        <Header isFixed />
        <div className={styles.contents}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
