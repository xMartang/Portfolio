"use client"

import { twMerge } from "tailwind-merge";

import useElementOnScreen from "./useElementOnScreen";

type ScrollSlideAnimationProps = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
  animationOnVisible: string;
  animationOnInvisible: string;
};

const ScrollAnimation = ({ children, reappear, threshold = 0.5, animationOnVisible, animationOnInvisible }: ScrollSlideAnimationProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div ref={containerRef} className={`transition-all duration-1000 ${isVisible ? twMerge("opacity-100", animationOnVisible) : twMerge("opacity-0", animationOnInvisible)} motion-reduce:transition-none motion-reduce:hover:transform-none`}>
        {children}
      </div>
    </>
  );
}

export default ScrollAnimation;