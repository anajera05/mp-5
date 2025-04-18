"use server";
import getCollection, { URL_COLLECTION } from "@/db";
import { NewURL } from "@/types";

export default async function addNewUrl(
    url: string,
    customText: string,
): Promise<NewURL> {
    const u = {
            original: url,
            short: customText,
            new: `${process.env.BASE_URL}/${customText}`
    };

    const postsCollection = await getCollection(URL_COLLECTION);
    const res = await postsCollection.insertOne({ ...u });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...u, id: res.insertedId.toHexString() };
}