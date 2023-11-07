import { Typography } from "@/app/components/atoms";
import { WorkCard } from "@/app/components/molecules";
import styles from "./works_section.module.scss";

export type WorksSectionProps = {
  works: any[];
  className?: string;
};

export function WorksSection({ works, className }: WorksSectionProps) {
  return (
    <div className={`${styles.contents} ${className}`}>
      {works.map((work, index) => (
        <WorkCard
          key={index}
          title={work.title}
          programName={work.programName}
          date={work.date}
          imagePath={work.imagePath}
          imageWidth={work.imageWidth}
          imageHeight={work.imageHeight}
          alt={work.alt}
        />
      ))}
    </div>
  );
}
