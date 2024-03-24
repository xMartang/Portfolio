import React from "react";

import Navbar from "@/components/Navbar/Navbar"
import About from "@/components/About/About"

export default function Home() {
  return (
    <main className="flex flex-col h-screen text-black dark:text-white">
        <Navbar/>

        <div className="flex flex-col bg-zinc-200 dark:bg-zinc-950 min-h-screen gap-3 overflow-y-auto">
            <About/>
        </div>
    </main>
  );
}
