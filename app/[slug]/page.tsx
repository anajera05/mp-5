import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";

type Params = { slug: string }

export default async function RedirectPage(props: {
  params: Params
}) {
  const { slug } = props.params;

  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ short: slug });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
