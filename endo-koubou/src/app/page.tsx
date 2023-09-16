import "./globals.css";
import Image from "next/image";
import styles from "./page.module.scss";
import { FadeIn, Typography } from "@/app/components/atoms";
import { TransButton, MvTitle } from "@/app/components/molecules";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mv}>
        <div className={styles.title}>
          <FadeIn fadeType="in">
            <Image
              src="/images/logo_endo-koubou.png"
              width={75}
              height={68}
              alt="ENDO工房のロゴ画像"
              className={styles.logo}
            />
          </FadeIn>
          {/* <Typography variant="h1">
            舞台美術を
            <br />
            もっと身近に
          </Typography> */}
          <MvTitle />
        </div>
      </section>

      <section className={styles.works}>
        <Typography variant="h2" vertical>
          作品紹介
          <br />
          <span className={styles.sub_title}>
            <Typography variant="span">WORKS</Typography>
          </span>
        </Typography>
        <p>
          ENDO工房では様々な舞台美術を 手がけております。写真はその一部です。
        </p>
        <TransButton label="もっとみる" direction="next" path="/" />
      </section>

      <section className={styles.company}>
        <Typography variant="h2" vertical>
          会社概要
          <br />
          スタッフ一覧
          <br />
          <span className={styles.sub_title}>
            <Typography variant="span">COMPANY</Typography>
          </span>
        </Typography>
        <p>
          軽い会社説明。〜〜年に設立して低コストながらもクオリティが高い作品が売りです等のテキストが入ります
        </p>
        <TransButton label="もっとみる" direction="next" path="/" />
      </section>

      <section className={styles.flow}>
        <Typography variant="h2" vertical>
          制作依頼のフロー
          <br />
          <span className={styles.sub_title}>
            <Typography variant="span">FLOW</Typography>
          </span>
        </Typography>
        <div>huro- zu</div>
      </section>

      <section className={styles.contact}>
        <Typography variant="h2" vertical>
          お問い合わせ
          <br />
          <span className={styles.sub_title}>
            <Typography variant="span">CONTACT</Typography>
          </span>
        </Typography>
        <p>
          ENDO工房へのご依頼は下のボタンよりメールを作成しお送りいただくか、
          <br />
          または各種SNSのダイレクトメッセージからお願いいします。
        </p>
        <p>
          ご依頼前の相談のみも受け付けておりますので、お気軽にお問い合わせください。
        </p>
      </section>
    </main>
  );
}
