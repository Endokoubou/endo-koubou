import { getWorks } from "@/app/api/works";
import { getWorkDetail } from "@/app/api/works/[id]";
import { PageTitle } from "@/app/components/molecules";
import { WorkDetailSection } from "@/app/components/organisms";

export async function generateStaticParams() {
  const works = await getWorks();
  const detailPaths = works.map((work) => work.id);
  return detailPaths;
}

async function getDetail(id: string) {
  const res = await getWorkDetail(id);
  return res;
}

export default async function WorkDetail(props: {
  params: { id: string };
  searchParams: {};
}) {
  const detail = await getDetail(props.params.id);

  return (
    <>
      <PageTitle title={detail.title} />
      <WorkDetailSection detail={detail} />
    </>
  );
}
