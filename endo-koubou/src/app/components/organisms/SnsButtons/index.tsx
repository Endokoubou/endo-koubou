import { SnsButton } from "@/app/components/molecules";
import styles from "./sns_buttons.module.scss";

export type SnsButtonProps = {
  color?: "base" | "primary" | "secondary";
  size?: "s" | "m";
  className?: string;
};

export function SnsButtons({
  color = "secondary",
  size = "s",
  className,
}: SnsButtonProps) {
  const colorClass = `color_${color}`;
  const sizeClass = `size_${size}`;

  return (
    <div
      className={`${styles.wrapper} ${styles[colorClass]} ${styles[sizeClass]} ${className}}`}
    >
      <SnsButton sns="x" />
      <SnsButton sns="instagram" />
    </div>
  );
}
