import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import AnimationDirectionsClassNames, {AnimationDirection} from "./SlideAnimationDirection";


type ScrollSlideAnimationProps = {
  children: React.ReactNode;
  direction?: AnimationDirection;
  reappear?: boolean;
  threshold?: number;
};

const ScrollSlideAnimation = ({ children, reappear, direction="right", threshold = 0.5 }: ScrollSlideAnimationProps) => {
  let animationDirection = AnimationDirectionsClassNames.get(direction);

  if(animationDirection == undefined) {
    animationDirection = {visible: "", invisible: ""}
  }

  return (
    <ScrollAnimation reappear={reappear} threshold={threshold} animationOnVisible={animationDirection.visible} animationOnInvisible={animationDirection.invisible}>
      {children}
    </ScrollAnimation>
  );
}

export default ScrollSlideAnimation;