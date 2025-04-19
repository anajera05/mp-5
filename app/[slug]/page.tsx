"use server";

import { redirect, notFound } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";

type Params = Promise<{ slug: string }>

export default async function RedirectPage(props: {
  params: Params
}) {
  const params = await props.params

  const collection = await getCollection(URL_COLLECTION);
  const result = await collection.findOne({ params });

  if (!result) {
    notFound();
  }

  redirect(result.original);
}
