import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function RedirectPage({ params }: { params: { location: string } }) {
  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ short: params.location });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
