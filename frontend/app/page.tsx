import React from "react";

import Navbar from "@/components/Navbar/Navbar"
import About from "@/components/About/About"

export default function Home() {
  return (
    <main className="flex flex-col w-screen justify-between text-black dark:text-white">
        <Navbar/>

        <div className="bg-white dark:bg-black angled-bottom flex min-h-screen flex-col gap-3">
          <About/>
      </div>
    </main>
  );
}
