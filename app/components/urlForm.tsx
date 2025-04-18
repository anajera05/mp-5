"use client"
import { useState } from "react"
import addNewUrl from "@/lib/addNewUrl";


export default function UrlForm({ onDataChange }: any) {
    const [url, setUrl] = useState("")
    const [customText, setCustomText] = useState("")

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            try {
                const newUrl = await addNewUrl(url, customText);
                onDataChange([newUrl.new, ""]);
            } catch (error) {
                const errorMessage = error.message || "Failed to shorten the URL";
                onDataChange(["", errorMessage]);
            }
        }}>
            <h3 className="mb-2 text-black">Enter any URL to create a shorter, shareable link</h3>
            <label htmlFor="url" className="block mb-1 font-semibold text-black">URL</label>
            <input type="url" id="url" value={url} required onChange={e => setUrl(e.target.value)} className="w-full border px-3 py-2 mb-4 rounded text-black" />
            <label htmlFor="customText" className="block mb-1 font-semibold text-black">Custom Link</label>
            <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600 ">https://mp-5.vercel.app/</p>
                <input type="text" id="customText" value={customText} required onChange={e => setCustomText(e.target.value)} className="flex-1 border px-3 py-2 rounded text-gray-600" />
            </div>
            <div className="flex justify-center mt-4">
                <button type="submit" className="text-2xl font-bold mb-2 text-black cursor-pointer text-center p-3"> Create Shortened Link! </button>
            </div>
        </form>
    );
}
