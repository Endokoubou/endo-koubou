import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Button, Typography } from "@/app/components/atoms";
import styles from "./trans_button.module.scss";

export type TransButtonProps = {
  label: string;
  direction: "back" | "next";
  path: string;
};

export function TransButton({ label, direction, path }: TransButtonProps) {
  const classDirection = direction;
  return (
    <Link href={path}>
      <Button color="primary">
        <span className={`${styles.contents} ${styles[classDirection]}`}>
          <Typography variant="p">{label}</Typography>
          <span className={styles.icon}>
            {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />}
          </span>
        </span>
      </Button>
    </Link>
  );
}
