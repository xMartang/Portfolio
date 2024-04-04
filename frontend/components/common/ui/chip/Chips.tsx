
import {twMerge} from "tailwind-merge"

interface ChipProps {
  className?: string;
  chipsText: string[];
}

const Chips: React.FC<ChipProps> = ({ className, chipsText }) => {
  
  return (
    <div className="flex flex-wrap gap-1 p-2">
      {chipsText.map((text) => {
          return (
            <div className={twMerge("text-center whitespace-nowrap rounded-lg text-xs font-semibold p-1", className)}>
                <span>{text}</span>
            </div>
          );
      })}
    </div>
  );
};

export default Chips;