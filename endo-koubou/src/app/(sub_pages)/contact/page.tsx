import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { ContactSection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb list={[{ label: "お問い合わせ" }]} />
        <PageTitle title="お問い合わせ" subtitle="CONTACT" />
      </div>
      <ContactSection className={styles.contents} />
    </>
  );
}
