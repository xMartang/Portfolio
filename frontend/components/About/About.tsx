"use client"

import { aboutInfo } from "@/config/AboutConfig";


const About = () => {
    return (
    <div className="flex grow flex-col justify-center">
        <div className="container mx-auto flex flex-row flex-wrap pl-[5%] pb-3 align-middle">
          <div className="my-auto flex w-full flex-col gap-3 lg:w-[60%]">
                <p className="text-4xl font-bold">{aboutInfo.title}</p>
                <p className="text-xl/8 font-light">
                {aboutInfo.description}
                </p>
            </div>
        </div>
    </div>
    );
}

export default About;