import React, {FC} from 'react';
import {Parallax} from "react-parallax";
import './style.scss'

interface BlurProps {
    min: number;
    max: number;
}

interface IParallaxProps {
    alt: string;
    url: string;
    blur: BlurProps,
    strength: number;
}

const ParallaxSection:FC<IParallaxProps> = ({children, ...props}) => {
    return (
        <Parallax blur={props.blur}
                         bgImage={props.url}
                         bgImageAlt={props.alt}
                         strength={props.strength}>
            <section className={"section"}>
                {children}
            </section>
        </Parallax>
    );
};

export default ParallaxSection;