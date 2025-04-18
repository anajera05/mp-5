"use client"
import { useState } from "react"
import addNewUrl from "@/lib/addNewUrl";


export default function Home() {
  const [url, setUrl] = useState("")
  const [customText, setCustomText] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")

  return (
      <div className="flex items-center justify-center h-screen bg-green">
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2 text-black">URL Shortener Application</h1>
          <h2 className="text-lg mb-4  text-gray-600">Reduce and customize any link!</h2>
          <div className="w-full">
            <form onSubmit={async (event) => {
              event.preventDefault();
              try {
                const newUrl = await addNewUrl(url, customText);
                setShortUrl(newUrl.new);
                setError("");
              } catch (error: any) {
                console.error(error);
                setError(error.message || "Failed to shorten the URL");
                setShortUrl("");
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
            {error && (
                <div className="mt-4 text-red-600 text-center font-semibold">
                  {error}
                </div>
            )}

            {shortUrl && (
                <div className="mt-4 p-4 bg-gray-100 rounded text-center">
                  <p className="text-black font-semibold mb-1">Your shortened URL:</p>
                  <a href={shortUrl} target="_blank" className="text-blue-600 underline">
                    {shortUrl}
                  </a>
                </div>
            )}

          </div>
        </div>
      </div>
  );
}
