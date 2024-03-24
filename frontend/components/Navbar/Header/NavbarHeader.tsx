import Heading from '@/components/Common/Heading/Heading'
import Image from 'next/image'

import { navbarHeaderConfig } from "@/config/NavbarConfig"

const NavbarHeader = () => {
    return (
        <div className="flex flex-row items-center justify-normal mx-auto">
            <Image src={navbarHeaderConfig.photo} quality={100} width="0" height="0" sizes={navbarHeaderConfig.photoSize} className="h-[10%] w-[30%] rounded-full border border-black dark:border-white" alt='Me :)'/>

            <div className="flex flex-col items-center justify-center ml-4">
                <Heading class="text-3xl dark:text-white" level="h1" text={navbarHeaderConfig.mainTitle} bold={true}/>
                <Heading class="dark:text-white" level="h1" text={navbarHeaderConfig.subTitle} bold={false}/>
            </div>
        </div>
    );
}

export default NavbarHeader;