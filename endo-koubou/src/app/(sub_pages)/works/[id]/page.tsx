import { getWorks } from "@/app/api/works";
import { getWorkDetail } from "@/app/api/works/[id]";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
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
      <Breadcrumb
        list={[{ label: "作品一覧", path: "/works" }, { label: detail.title }]}
      />
      <PageTitle title={detail.title} />
      <WorkDetailSection detail={detail} />
    </>
  );
}
