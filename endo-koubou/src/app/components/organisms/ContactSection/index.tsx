import { Typography } from "@/app/components/atoms";
import { ReadMore, ContactButton } from "@/app/components/molecules";
import styles from "./contact_section.module.scss";

export function ContactSection() {
  return (
    <div className={styles.contents}>
      <Typography variant="p">
        ENDO工房へのご依頼は下のボタンよりメールを作成しお送りいただくか、
        または各種SNSのダイレクトメッセージからお願いいします。
      </Typography>
      <Typography variant="p">
        ご依頼前の相談のみも受け付けておりますので、お気軽にお問い合わせください。
      </Typography>
      <ReadMore>
        <>
          <Typography variant="p">
            お問い合わせ時に必要な情報についてはこちらをご確認ください。
            <br />
            こちらが不足しておりますとご返答できかねる場合がございますので、必ず記載していただくようお願いいたします。
          </Typography>
          <ul>
            <li>
              <Typography variant="p">・お名前</Typography>
            </li>
            <li>
              <Typography variant="p">
                ・ご依頼内容、またはご相談内容
              </Typography>
            </li>
          </ul>
          <Typography variant="p">
            以下のような情報も可能な限り添えていただけますと、より詳細なご提案やご回答が行えますので、よろしければ記入していただけますと幸いです。
          </Typography>
          <ul>
            <li>
              <Typography variant="p">・所属団体</Typography>
            </li>
            <li>
              <Typography variant="p">・依頼したい公演の情報</Typography>
            </li>
            <li>
              <Typography variant="p">
                ・スケジュールやご予算などご依頼に付随する情報
              </Typography>
            </li>
            <li>
              <Typography variant="p">・その他質問事項など</Typography>
            </li>
          </ul>
        </>
      </ReadMore>
      <div className={styles.button}>
        <ContactButton label="お問い合わせ" />
      </div>
    </div>
  );
}
