import { Button, Typography } from "@/app/components/atoms";
import { FaArrowUp } from "react-icons/fa6";
import styles from "./scroll_button.module.scss";

export function ScrollButton() {
  return (
    <Button>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <FaArrowUp />
        </div>
        <Typography variant="span">ページトップ</Typography>
      </div>
    </Button>
  );
}
