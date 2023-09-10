import "./typography.module.scss";
import styles from "./typography.module.scss";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
  vertical?: boolean;
};

export function Typography({
  variant,
  children,
  vertical = false,
}: TypographyProps) {
  const classVertical = vertical ? "vertical" : "horizon";

  switch (variant) {
    case "h1":
      return (
        <h1 className={`${styles[classVertical]} ${styles.h1}`}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={`${styles[classVertical]} ${styles.h2}`}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={`${styles[classVertical]} ${styles.h3}`}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={`${styles[classVertical]} ${styles.h4}`}>{children}</h4>
      );
    case "p":
      return (
        <p className={`${styles[classVertical]} ${styles.p}`}>{children}</p>
      );
    case "span":
      return (
        <span className={`${styles[classVertical]} ${styles.span}`}>
          {children}
        </span>
      );
    default:
      return (
        <span className={`${styles[classVertical]} ${styles.span}`}>
          {children}
        </span>
      );
  }
}
