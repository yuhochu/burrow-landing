import React, {forwardRef, useEffect, useRef, useState} from "react";
import clsx from 'clsx';
import "./layoutContainer.css"

type Props = {
    children: string | React.ReactNode,
    className?: string,
}

const LayoutContainer = forwardRef(({children, className = ""}: Props, ref: any) => {
    return (
        <div className={clsx("layout-container", className)}>
            {children}
        </div>
    );
});

export default LayoutContainer;
