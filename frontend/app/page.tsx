import Navbar from "@/components/PortfolioSections/Navbar/Navbar"
import About from "@/components/PortfolioSections/About/About"
import Skills from "@/components/PortfolioSections/Skills/Skills"

import { navbarItemsConfig } from "@/config/NavbarConfig";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen text-black dark:text-white">
        <div className="z-50">
          <Navbar/>
        </div>
            
        <div className="flex flex-col justify-between bg-zinc-200 dark:bg-zinc-950 gap-3 overflow-y-auto z-0 scroll-smooth">
            <About hrefId={navbarItemsConfig.about.id}/>
            <Skills hrefId={navbarItemsConfig.skills.id}/>
        </div>
    </main>
  );
}
