"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo, Typography } from "@/app/components/atoms";
import styles from "./header.module.scss";

const menuMapping = [
  { label: "作品一覧", path: "/" },
  { label: "会社概要 & スタッフ一覧", path: "/" },
  { label: "お問い合わせ", path: "/" },
];

export function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <header
      className={`${styles.header} ${showHeader ? styles.slideDown : ""}`}
    >
      <div className={styles.inner}>
        <Link href="/">
          <Logo fill="secondary" />
        </Link>
        <menu>
          <ul className={styles.menu}>
            {menuMapping.map((page, index) => (
              <li key={index} className={styles.item}>
                <Link href={page.path}>
                  <Typography variant="span">{page.label}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      </div>
    </header>
  );
}
