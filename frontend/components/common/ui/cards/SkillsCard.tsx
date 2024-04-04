import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";
import Image from 'next/image'

import ScrollAnimation from "../../animations/ScrollAnimation/ScrollAnimation";

export type SkillType = {
  name: string;
  icon: string;
}

interface SkillsCardProps {
  className?: string;
  skills: SkillType[];
}

const SkillsCard: FunctionComponent<SkillsCardProps> = ({ className, skills }) => {
  return (
    <div className={twMerge("grid grid-cols-3 md:grid-cols-4 gap-7", className)}>
      {skills.map((skill) => {
        return (
          <ScrollAnimation key={skill.name} reappear animationOnVisible="animate-fade-in" animationOnInvisible="animate-fade-out">
            <div className={`flex flex-col items-center justify-center content-center h-full`}>
              <div className="flex rounded-full h-14 w-14 bg-white shadow shadow-zinc-600 justify-center items-center"> 
                  <Image src={skill.icon} alt={skill.name} quality={100} width="0" height="0" className="h-[90%] w-[90%] p-2 hover:scale-110"/>
              </div>

              <h1>{skill.name}</h1>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
};

export default SkillsCard;