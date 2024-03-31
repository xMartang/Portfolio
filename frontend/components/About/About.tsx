"use client"

import { Button } from "@material-tailwind/react"
import { GrDocumentUser } from "react-icons/gr";

import { aboutInfo, aboutLinks } from "@/config/AboutConfig";
import SocialLinks from "./SocialLinks/SocialLinks";

interface AboutProps {
    hrefId?: string
}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div id={props.hrefId} className="flex grow flex-col min-h-screen justify-center pt-24">
            <div className="container mx-auto flex flex-row flex-wrap pl-[5%] pb-3 align-middle">
                <div className="my-auto flex w-full flex-col gap-3 whitespace-pre-line">
                    <h1 className="text-7xl font-light">{aboutInfo.title}</h1>
                    <p className="text-xl/8 font-light whitespace-pre-line ">{aboutInfo.description}</p>

                    <SocialLinks />

                    <div className="flex w-max mt-3 justify-center items-center">
                        <a href={aboutLinks.resume} download> {/* ToDo: Fix safari/phone doesn't download, but refers to the link instead */}
                            <Button size="sm" className="flex items-center text-sm font-light p-3 border-zinc-600 border-2 rounded-full bg-gradient-to-b from-zinc-500 via-zinc-200 to-zinc-400 dark:from-zinc-700 dark:via-zinc-900 dark:to-zinc-800" placeholder="Resume">
                                <GrDocumentUser className="ml-2 mr-2"/>
                                My Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;