import styles from "./button.module.scss";

export type ButtonProps = {
  color?: "base" | "primary";
  bgColor?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  rounded?: boolean;
  isDisable?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export function Button({
  color,
  bgColor,
  size,
  rounded,
  isDisable,
  children,
  onClick,
  className,
}: ButtonProps) {
  const colorClass = `color_${color}`;
  const bgClass = bgColor ? `bg_${bgColor}` : "";
  const sizeClass = size ? `size_${size}` : "";
  const roundedClass = rounded ? "rounded" : "";
  const isDisableClass = isDisable ? "disable" : "";

  return (
    <button
      className={`${styles.button} ${styles[colorClass]} ${styles[bgClass]} ${styles[sizeClass]} ${styles[roundedClass]} ${styles[isDisableClass]} ${className}`}
      disabled={isDisable}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
