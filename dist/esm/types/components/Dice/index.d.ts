import { FC } from "react";
import { FACES } from "../../types";
import "./style.scss";
export interface Props {
    randomNumber: number;
    isAnimation: boolean;
    animationEndHandler: () => void;
    size?: number;
    faces?: [FACES, FACES, FACES, FACES, FACES, FACES];
}
declare const Dice: FC<Props>;
export default Dice;
