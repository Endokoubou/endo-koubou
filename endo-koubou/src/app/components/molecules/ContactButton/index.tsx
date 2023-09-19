import Link from "next/link";
import { Button, Typography } from "@/app/components/atoms";
import styles from "./contact_button.module.scss";

export type ContactButtonProps = {
  label: string;
};

export function ContactButton({ label }: ContactButtonProps) {
  return (
    <Button color="base" bgColor="secondary" rounded size="m">
      <Typography variant="p">{label}</Typography>
    </Button>
  );
}
