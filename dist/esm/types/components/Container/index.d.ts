import React, { FC } from "react";
export interface Props {
    size?: number;
    isAnimation?: boolean;
    animationEndHandler?: () => void;
    children: React.ReactNode;
}
declare const Container: FC<Props>;
export default Container;
