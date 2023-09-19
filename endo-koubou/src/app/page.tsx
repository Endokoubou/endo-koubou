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
          <MvTitle />
        </div>
      </section>

      <section className={styles.works}>
        <div className={styles.relative_box}>
          <div className={styles.sub_title}>
            <Typography variant="h2" vertical>
              作品紹介
              <br />
              <span>
                <Typography variant="span">WORKS</Typography>
              </span>
            </Typography>
          </div>
          <div className={styles.read}>
            <Typography variant="p">
              ENDO工房では様々な舞台美術を
              <br />
              手がけております。写真はその一部です。
            </Typography>
          </div>
          <div className={styles.bg} />
        </div>
        <div
          style={{
            width: "100%",
            height: "650px",
            background: "#5e5e5e",
          }}
        />
        <div className={styles.button}>
          <TransButton label="もっとみる" direction="next" path="/" />
        </div>
      </section>

      <section className={styles.company}>
        <div className={styles.relative_box}>
          <div className={styles.sub_title}>
            <Typography variant="h2" vertical>
              会社概要
              <br />
              スタッフ一覧
              <br />
              <span>
                <Typography variant="span">COMPANY</Typography>
              </span>
            </Typography>
          </div>
          <div className={styles.wrapper}>
            <Image
              src="/images/company.jpg"
              width="794"
              height="359"
              alt="工房内の風景写真"
              className={styles.image}
            />
            <div className={styles.relative_box}>
              <div className={styles.right_contents}>
                <div className={styles.read}>
                  <Typography variant="p">
                    軽い会社説明。〜〜年に設立して低コストながらもクオリティが高い作品が売りです等のテキストが入ります
                  </Typography>
                </div>
                <div className={styles.button}>
                  <TransButton label="もっとみる" direction="next" path="/" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bg} />
        </div>
      </section>

      <section className={styles.flow}>
        <div className={styles.sub_title}>
          <Typography variant="h2" vertical>
            制作依頼のフロー
            <br />
            <span>
              <Typography variant="span">FLOW</Typography>
            </span>
          </Typography>
        </div>

        <div>huro- zu</div>
      </section>

      <section className={styles.contact}>
        <div className={styles.sub_title}>
          <Typography variant="h2" vertical>
            お問い合わせ
            <br />
            <span>
              <Typography variant="span">CONTACT</Typography>
            </span>
          </Typography>
        </div>
        <div className={styles.flex_column}>
          <Typography variant="p">
            ENDO工房へのご依頼は下のボタンよりメールを作成しお送りいただくか、
            <br />
            または各種SNSのダイレクトメッセージからお願いいします。
          </Typography>
          <Typography variant="p">
            ご依頼前の相談のみも受け付けておりますので、お気軽にお問い合わせください。
          </Typography>
          <div>setumei</div>
        </div>
      </section>
    </main>
  );
}
