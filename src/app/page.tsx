"use client";
import { useState } from "react";
import CreateLink from "../components/create-link";

export default function Home() {
  const [url, setUrl] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyUrl = async () => {
    if (url)
      try {
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">Lets see</h1>
      <h2>How many people care about</h2>
      {url ? (
        <div className="flex flex-col gap-2">
          <a href={url}>{url}</a>
          {isCopied ? (
            <button onClick={() => setUrl(null)}>Create another</button>
          ) : (
            <button onClick={() => copyUrl()}>Copy link</button>
          )}
        </div>
      ) : (
        <CreateLink setUrl={setUrl} />
      )}
    </main>
  );
}
