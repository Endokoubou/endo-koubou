import Image from "next/image";
import styles from "./work_card.module.scss";

export type WorkCardProps = {
  title: string;
  programName: string;
  date: string;
  imagePath: string;
  imageWidth: string;
  imageHeight: string;
  alt: string;
};

export function WorkCard({ title, programName, date }: WorkCardProps) {
  return (
    <div className={styles.card}>
      <Image src="" width="100" height="100" alt="" />
      <h3>{title}</h3>
      <span>
        {programName} / {date}
      </span>
    </div>
  );
}
