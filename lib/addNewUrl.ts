"use server";
import getCollection, { URL_COLLECTION } from "@/db";
import { NewURL } from "@/types";

export default async function addNewUrl(
    url: string,
    customText: string,
    domain: string
): Promise<NewURL> {

    const u = {
            original: url,
            short: customText,
            new: `${domain}/${customText}`
    };

    const postsCollection = await getCollection(URL_COLLECTION);
    const existing = await postsCollection.findOne({ short: customText });
    if (existing) {
        throw new Error("That custom short link already exists. Try another one.");
    }

    const res = await postsCollection.insertOne({ ...u });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...u, id: res.insertedId.toHexString() };
}