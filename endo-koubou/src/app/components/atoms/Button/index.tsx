import styles from "./button.module.scss";

export type ButtonProps = {
  color?: "base" | "primary";
  bgColor?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  rounded?: boolean;
  children?: React.ReactNode;
};

export function Button({
  color,
  bgColor,
  size,
  rounded,
  children,
}: ButtonProps) {
  const colorClass = `color_${color}`;
  const bgClass = bgColor ? `bg_${bgColor}` : "";
  const sizeClass = size ? `size_${size}` : "";
  const roundedClass = rounded ? "rounded" : "";

  return (
    <button
      className={`${styles.button} ${styles[colorClass]} ${styles[bgClass]} ${styles[sizeClass]} ${styles[roundedClass]}`}
    >
      {children}
    </button>
  );
}
