
import ScrollSlideAnimation from "@/components/common/animations/ScrollSlideAnimation/ScrollSlideAnimation"
import Chips from "@/components/common/ui/chip/Chips"

type CardInfo = {
    mainTitle: string;
    subTitle: string;
    description: string;
    keywords: string[];
    date: string;
}

interface CardsTimelineProps {
    cardsInfo: CardInfo[];
    className?: string;
}


const CardsTimeline: React.FC<CardsTimelineProps> = ({ cardsInfo, className}) => {
    return (
        <div className={className}>
            <ol className="inline-block border-l border-neutral-600">
                {cardsInfo.map((cardInfo) => {
                    return (
                        <li key={cardInfo.mainTitle}>
                            <div className="flex-start flex flex-row items-center">
                                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-600"></div>
                                <p className="ml-1 text-sm text-neutral-600 dark:text-neutral-300">
                                    {cardInfo.date}
                                </p>
                            </div>

                            <ScrollSlideAnimation reappear>
                                <div className="flex flex-wrap h-full rounded mb-6 ml-4 mt-2 bg-neutral-100 dark:bg-neutral-800">
                                    <div className="pl-1 pt-1">
                                        <p className="text-xl">{cardInfo.mainTitle}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{cardInfo.subTitle}</p>
                                    </div>

                                    <div className="w-full border-b-2 border-neutral-500 dark:border-neutral-400"/>

                                    <p className="pl-1 pb-1 mb-3 text-sm whitespace-pre-line">
                                        {cardInfo.description}
                                    </p>

                                    <div className="w-full border-b-2 border-neutral-500 dark:border-neutral-400"/>

                                    <Chips chipsText={cardInfo.keywords} className="bg-indigo-600 text-white"></Chips>
                                </div>
                            </ScrollSlideAnimation>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
  };

export default CardsTimeline;
