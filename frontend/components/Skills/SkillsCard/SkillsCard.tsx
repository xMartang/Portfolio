import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";
import Image from 'next/image'

import { SkillType } from "@/config/SkillsConfig"

interface SkillsCardProps {
  className?: string;
  skills?: SkillType[];
}

const SkillsCard: FunctionComponent<SkillsCardProps> = ({ className, skills=[] }) => {
  return (
    <div className={twMerge("grid grid-cols-3 md:grid-cols-4 gap-7", className)}>
      {skills.map((skill) => {
        return (
          <div key={skill.name} className={`flex flex-col items-center justify-center content-center`}>
            <div className="flex rounded-full h-14 w-14 bg-white shadow shadow-zinc-600 justify-center items-center"> 
                <Image src={skill.icon} alt={skill.name} quality={100} width="0" height="0" sizes="10vm" className="h-[90%] w-[90%] p-2 hover:scale-110"/>
            </div>

            <h1>{skill.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsCard;