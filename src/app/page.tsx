import RecordingView from "@/components/RecordingView";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-400">
      <RecordingView />
    </main>
  );
}
