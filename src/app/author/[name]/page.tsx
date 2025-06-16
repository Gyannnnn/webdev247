import { AuthorProfile } from "@/components/AuthorProfile";
import { getAuthor } from "@/lib/author";
import { notFound } from "next/navigation";

type Params = Promise<{ name: string }>;
export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const name = params.name;
  const decodedName = decodeURIComponent(name);

  const data = await getAuthor(decodedName);
  if (!data) {
    notFound()
    
  }

  return <AuthorProfile author={data} />;
}
