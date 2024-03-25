"use client"

import { Button } from "@material-tailwind/react"
import { DocumentIcon } from "@heroicons/react/24/solid";

import { aboutInfo, aboutLinks } from "@/config/AboutConfig";

interface AboutProps {
    hrefId?: string
}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div id={props.hrefId} className="flex grow flex-col mt-4">
            <div className="container mx-auto flex flex-row flex-wrap pl-[5%] pb-3 align-middle">
                <div className="my-auto flex w-full flex-col gap-3 whitespace-pre-line">
                    <p className="text-4xl font-semibold">{aboutInfo.title}</p>
                    <p className="text-xl/8 font-light whitespace-pre-line ">{aboutInfo.description}</p>

                    <div className="flex w-max ">
                        <a href={aboutLinks.resumeLink} download> 
                            <Button className="flex items-center p-2 border-zinc-600 border-2 rounded-full bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-400 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800" placeholder="Resume">
                                <DocumentIcon className="mr-3 h-[17px]" />
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