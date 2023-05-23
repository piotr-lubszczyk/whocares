"use client";
import { useSearchParams } from "next/navigation";
import Counter from "../../components/counter";

export default function Count() {
  const params = useSearchParams();
  const subject = params.get("subject");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {subject ? <Counter subject={subject} /> : "No subject"}
    </main>
  );
}
