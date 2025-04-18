import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";
import { NewURL } from "@/types";

export default async function handleRedirect(short: string): Promise<NewURL | null> {
  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ short });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
