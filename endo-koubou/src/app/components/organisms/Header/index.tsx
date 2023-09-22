"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo, Typography } from "@/app/components/atoms";
import styles from "./header.module.scss";

export type HeaderProps = {
  isFixed?: boolean;
};

const menuMapping = [
  { label: "作品一覧", path: "/art-work" },
  { label: "会社概要 & スタッフ一覧", path: "/company" },
  { label: "お問い合わせ", path: "/contact" },
];

export function Header({ isFixed = false }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(false);
  const fixedClass = isFixed ? "fixed" : "animation";

  useEffect(() => {
    if (isFixed) {
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
  }, [isFixed]);

  return (
    <header
      className={`${styles.header} ${styles[fixedClass]} ${
        !isFixed && showHeader && styles.slideDown
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
