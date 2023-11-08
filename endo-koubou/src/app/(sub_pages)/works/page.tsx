import { getWorks } from "@/app/api/works";
import { PageTitle } from "@/app/components/molecules";
import { WorksSection } from "@/app/components/organisms";

export default async function Works() {
  const data = await getWorks();

  return (
    <>
      <PageTitle title="作品一覧" subtitle="WORKS" />
      <WorksSection works={data} />
    </>
  );
}
