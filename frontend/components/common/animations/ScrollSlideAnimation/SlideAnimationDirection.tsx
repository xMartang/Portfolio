
export type AnimationDirection = "right" | "left" | "up" | "down";

type AnimationStatus = {
  visible: string;
  invisible: string;
}

const rightAnimationStatus: AnimationStatus = {visible: "animate-ease-in", invisible: "-translate-x-20"};
const leftAnimationStatus: AnimationStatus = {visible: "translate-x-0", invisible: "translate-x-20"};
const upAnimationStatus: AnimationStatus = {visible: "translate-y-0", invisible: "translate-y-20"};
const downAnimationStatus: AnimationStatus = {visible: "translate-y-0", invisible: "-translate-y-20"};

const AnimationDirectionsClassNames = new Map<AnimationDirection, AnimationStatus>([
    ["right" , rightAnimationStatus],
    ["left", leftAnimationStatus],
    ["up", upAnimationStatus],
    ["down", downAnimationStatus],
]);

export default AnimationDirectionsClassNames;