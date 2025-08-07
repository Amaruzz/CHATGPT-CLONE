"use client";

import dynamic from "next/dynamic";

const Assistant = dynamic(() => import("./assistant").then(mod => ({ default: mod.Assistant })), {
  ssr: false,
  loading: () => <div className="flex h-screen items-center justify-center">Loading...</div>
});

export default function Home() {
  return <Assistant />;
}
