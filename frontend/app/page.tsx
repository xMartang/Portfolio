import Navbar from "@/components/Navbar/Navbar"
import About from "@/components/About/About"
import Skills from "@/components/Skills/Skills"

import { navbarItemsConfig } from "@/config/NavbarConfig";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen text-black dark:text-white">
        <div className="z-50">
          <Navbar/>
        </div>
            
        <div className="flex flex-col justify-between bg-zinc-200 dark:bg-zinc-950 gap-3 overflow-y-auto z-0">
            <About hrefId={navbarItemsConfig.about.id}/>
            <Skills hrefId={navbarItemsConfig.skills.id}/>
        </div>
    </main>
  );
}
