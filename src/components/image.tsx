import React from "react";

type Props = {
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    style?: object,
    className?: string,
}

const Image = (props: Props) => {
    const {src, alt = "burrow", width, height, className, style} = props || {}
    return (
        <img src={src} alt={alt} width={width} height={height} className={className} style={style}/>
    );
};

export default Image;
