import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function RedirectPage({ params }: PageProps): Promise<void> {
  const short = params.id;
  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ short: short });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
