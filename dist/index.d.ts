import { FC } from 'react';

declare enum FACES {
    FIRST = "first",
    SECOND = "second",
    THIRD = "third",
    FOURTH = "fourth",
    FIFTH = "fifth",
    SIXTH = "sixth"
}

interface Props$1 {
    randomNumber: number;
    isAnimation: boolean;
    animationEndHandler: () => void;
    size?: number;
    faces?: [FACES, FACES, FACES, FACES, FACES, FACES];
}
declare const Dice: FC<Props$1>;

interface Props {
    randomNumber: number;
    size?: number;
}
declare const RandomDiceFace: FC<Props>;

declare const ALL_FACES: FACES[];

export { ALL_FACES, RandomDiceFace as Dice, Dice as DiceWithAnimation };
