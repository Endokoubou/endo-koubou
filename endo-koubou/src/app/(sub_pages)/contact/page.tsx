import { PageTitle } from "@/app/components/molecules";
import { ContactSection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export default function Contact() {
  return (
    <>
      <PageTitle title="お問い合わせ" subtitle="CONTACT" />
      <ContactSection className={styles.contents} />
    </>
  );
}
