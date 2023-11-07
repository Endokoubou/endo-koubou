"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography } from "../../atoms";
import styles from "./breadcrumb.module.scss"; // CSSモジュールを使う場合

type SiteMap = { label: string; path: string }[];

const siteMap: SiteMap = [
  { label: "作品一覧", path: "/works" },
  { label: "作品詳細", path: "/works/{id}" },
  { label: "会社概要 & スタッフ一覧", path: "/company" },
  { label: "お問い合わせ", path: "/contact" },
];

const generateBreadCrumbs = (path: string) => {
  const breadcrumbs = [{ label: "TOP", path: "/" }];
  const currentItem = siteMap.find((item) => item.path === path);
  if (currentItem) {
    breadcrumbs.push(currentItem);
  }
  if (breadcrumbs.length > 1) {
    breadcrumbs[breadcrumbs.length - 1].path = "";
  }
  return breadcrumbs;
};

export function Breadcrumb() {
  const path = usePathname();
  const breadcrumbs = generateBreadCrumbs(path);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumb} aria-label="breadcrumb">
        <ol>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              {breadcrumb.path ? (
                <Link href={breadcrumb.path}>{breadcrumb.label}</Link>
              ) : (
                <Typography variant="span">{breadcrumb.label}</Typography>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
