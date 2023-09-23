"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo, Typography } from "@/app/components/atoms";
import styles from "./header.module.scss";

const menuMapping = [
  { label: "作品一覧", path: "/art-work" },
  { label: "会社概要 & スタッフ一覧", path: "/company" },
  { label: "お問い合わせ", path: "/contact" },
];

export function Header() {
  const path = usePathname();
  const isTop = path === "/";
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (!isTop) {
      return;
    } else {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 455) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isTop]);

  return (
    <header
      className={`${styles.header} ${isTop && styles.animation} ${
        isTop && showHeader && styles.slideDown
      }`}
    >
      <div className={styles.inner}>
        <Link href="/">
          <Logo fill="secondary" />
        </Link>
        <nav>
          <ul className={styles.menu}>
            {menuMapping.map((page, index) => (
              <li key={index} className={styles.item}>
                <Link href={page.path}>
                  <Typography variant="span">{page.label}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
