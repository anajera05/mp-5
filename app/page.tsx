"use client"
import { useState } from "react"
import UrlForm from "@/app/components/urlForm";


export default function Home() {
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")

  const getShortened = (data :[string, string]) => {
    setShortUrl(data[0]);
    setError(data[1]);
  };

  return (
      <div className="flex items-center justify-center h-screen bg-green">
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2 text-black">URL Shortener Application</h1>
          <h2 className="text-lg mb-4  text-gray-600">Reduce and customize any link!</h2>
          <div className="w-full">
           <UrlForm onDataChange={getShortened}/>
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
