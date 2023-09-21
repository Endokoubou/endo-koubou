import { Button } from "@/app/components/atoms";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export type SnsButtonProps = {
  sns: "x" | "instagram";
  className?: string;
};

export function SnsButton({ sns, className }: SnsButtonProps) {
  return (
    <Button className={className}>
      {sns === "x" ? (
        <a href="/" target="blank">
          <FaXTwitter />
        </a>
      ) : (
        sns == "instagram" && (
          <a href="/" target="blank">
            <FaInstagram />
          </a>
        )
      )}
    </Button>
  );
}
