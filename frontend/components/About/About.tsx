"use client"

import { aboutInfo } from "@/config/AboutConfig";


const About = () => {
    return (
    <div className="flex grow flex-col justify-center items-center mt-4">
        <div className="container mx-auto flex flex-row flex-wrap pl-[5%] pb-3 align-middle">
          <div className="my-auto flex w-full flex-col gap-3 whitespace-pre-line">
                <p className="text-4xl font-semibold">{aboutInfo.title}</p>
                <p className="text-xl/8 font-light whitespace-pre-line ">
                {aboutInfo.description}
                </p>
            </div>
        </div>
    </div>
    );
}

export default About;