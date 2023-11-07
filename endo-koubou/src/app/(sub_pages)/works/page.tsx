import { PageTitle, WorkCard } from "@/app/components/molecules";
import { WorksSection } from "@/app/components/organisms";
import styles from "./page.module.scss";

const exampleWorks = {
  works: [
    {
      title: "作品タイトル",
      programName: "Eプロジェクト",
      date: "2023年",
      imagePath: "/",
      imageWidth: "200px",
      imageHeight: "100px",
      alt: "alt",
    },
    {
      title: "作品タイトル2",
      programName: "Eプロジェクト",
      date: "2023年",
      imagePath: "/",
      imageWidth: "200px",
      imageHeight: "100px",
      alt: "alt",
    },
  ],
};

export default function Works() {
  return (
    <>
      <PageTitle title="作品一覧" subtitle="WORKS" />
      <WorksSection works={exampleWorks.works} />
    </>
  );
}
