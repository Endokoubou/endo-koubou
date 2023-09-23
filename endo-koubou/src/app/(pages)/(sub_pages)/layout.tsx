import "@/app/globals.css";
import type { Metadata } from "next";
import { PageTitle } from "@/app/components/molecules";
import SubPageTemplate from "./template";
import styles from "./layout.module.scss";

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
    <>
      <SubPageTemplate>
        <PageTitle title={"aa"} />
      </SubPageTemplate>
      <div className={styles.contents}>{children}</div>
    </>
  );
}
