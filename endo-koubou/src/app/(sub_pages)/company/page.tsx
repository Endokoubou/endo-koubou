import { getCompany } from "@/app/api/company";
import { getStaffs } from "@/app/api/staffs";
import { PageTitle } from "@/app/components/molecules";
import { CompanySection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export default async function Company() {
  const companyData = await getCompany();
  const staffsData = await getStaffs();

  return (
    <>
      <PageTitle title="会社概要&スタッフ一覧" subtitle="COMPANY" />
      <CompanySection
        company={companyData}
        staffs={staffsData}
        className={styles.contents}
      />
    </>
  );
}
