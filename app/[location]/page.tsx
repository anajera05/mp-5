import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";
import { NewURL } from "@/types";

type PageProps = {
  params: {
    location: string;
  };
};

export default async function RedirectPage({ params }: PageProps) {
  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ short: params.location });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
