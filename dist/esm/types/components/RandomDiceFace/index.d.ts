import { FC } from "react";
import "../Dice/style.scss";
export interface Props {
    randomNumber: number;
    size?: number;
}
declare const RandomDiceFace: FC<Props>;
export default RandomDiceFace;
