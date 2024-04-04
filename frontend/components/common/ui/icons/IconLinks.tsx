"use client"

import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@material-tailwind/react"

export type iconLink = {
  name: string;
  svgPath: string;
  extraClassName: string;
  link: string;
}

interface IconLinksProps {
  className?: string;
  iconLinks: iconLink[];
}

const IconLinks: FunctionComponent<IconLinksProps> = ({ className, iconLinks }) => {
  return (
    <div className={twMerge("flex flex-row gap-4", className)}>
      {iconLinks.map((icon) => {
        return (
          <a key={icon.name} className={twMerge("flex justify-center content-center rounded-full h-11 w-11 border-2 border-black dark:border-white", icon.extraClassName)} href={icon.link}>
            <Button size="sm" className="h-full w-full rounded-full" placeholder={icon.name}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.svgPath}/>
                </svg>
            </Button>
          </a>
        );
      })}
    </div>
  );
};

export default IconLinks;