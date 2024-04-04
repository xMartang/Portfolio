
import CardsTimeline from "@/components/common/ui/cards/CardsTimeline";
import ScrollSlideAnimation from "@/components/common/animations/ScrollSlideAnimation/ScrollSlideAnimation";

import { EducationTimelineConfig, ExperienceTimelineConfig } from "@/config/CareerConfig";

interface CareerProps {
  hrefId: string;
}

const TimelineConfigs = [EducationTimelineConfig, ExperienceTimelineConfig];

const Career: React.FC<CareerProps> = (props) => {
  return (
      <section id={props.hrefId} className="flex flex-col justify-center items-center pt-24 pb-24">
        <p className="text-7xl font-light mb-[2rem] mt-[2rem] ml-[2rem] text-center">Career</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-evenly pl-4 pr-4 lg:max-w-[1024px]">
          {TimelineConfigs.map((timelineConfig => {
            return (
              <ScrollSlideAnimation key={timelineConfig.title} threshold={0.3} direction="up">
              <div className="flex flex-col items-center justify-center p-2 rounded shadow-2xl shadow-zinc-300 dark:shadow-zinc-900 bg-neutral-300 dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-400">
                <h1 className="text-4xl">{timelineConfig.title}</h1>
                <CardsTimeline cardsInfo={timelineConfig.cardsInfo} className="p-2 grow"/>
              </div>
            </ScrollSlideAnimation>

            );
          }))}
        </div>
      </section>
  );
}

export default Career;