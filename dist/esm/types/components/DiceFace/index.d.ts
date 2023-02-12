import { FC } from "react";
import { FACES, POSITIONS } from "../../types";
export interface Props {
    pointsCount: number;
    face: FACES;
    position?: POSITIONS;
}
declare const DiceFace: FC<Props>;
export default DiceFace;
