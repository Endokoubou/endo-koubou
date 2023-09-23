import "../globals.css";
import Image from "next/image";
import styles from "./page.module.scss";
import { FadeIn, Typography } from "@/app/components/atoms";
import { TransButton, MvTitle, FlowItem } from "@/app/components/molecules";
import { ContactSection, Header, SnsButtons } from "@/app/components/organisms";

export default function Home() {
  return (
    <>
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
          <div>
            <FlowItem
              step="01"
              icon="mail"
              title="お問い合わせ"
              text="お問い合わせページまたは各種SNSからご連絡ください。"
            />
            <FlowItem
              step="02"
              icon="document"
              title="台本もしくは依頼書、公演の概要"
              text="ご要望に沿ったものをお作りするため台本等のお渡しをお願いしております。"
            />
            <FlowItem
              step="03"
              icon="chat"
              title="打ち合わせ（ヒヤリング）"
              text="お電話またはメールなどで打ち合わせし、依頼内容のすり合わせを行います。"
            />
            <FlowItem
              step="04"
              icon="edit"
              title="デザイン考案"
              text="ご依頼内容が定まり次第、デザインを作成いたします。"
            />
            <FlowItem
              step="05"
              icon="presen"
              title="台本もしくは依頼書、公演の概要"
              text="考案したデザインをお見せし、細部の最終調整を行います。"
            />
            <FlowItem
              step="06"
              icon="check"
              title="本決定"
              text="お客様の満足のいく形で最終調整が済んだ後、本格的に舞台美術の製作に取り掛かります。"
              isLast
            />
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.inner}>
            <div className={styles.sub_title}>
              <Typography variant="h2" vertical>
                お問い合わせ
                <br />
                <span>
                  <Typography variant="span">CONTACT</Typography>
                </span>
              </Typography>
            </div>
            <ContactSection className={styles.contents} />
          </div>
        </section>
        <section className={styles.sns}>
          <Typography variant="p">
            下記アイコンから各種SNSのプロフィールを開くことができます。
            <br />
            ダイレクトメッセージよりお問い合わせいただくことも可能です。
          </Typography>
          <div className={styles.icons}>
            <SnsButtons color="secondary" size="m" />
          </div>
        </section>
      </main>
    </>
  );
}
