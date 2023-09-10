import styles from "./button.module.scss";

export type ButtonProps = {
  color?: "base" | "primary";
  children?: React.ReactNode;
};

export function Button({ color, children }: ButtonProps) {
  const colorClass = `color_${color}`;

  return (
    <button className={`${styles.button} ${styles[colorClass]}`}>
      {children}
    </button>
  );
}
