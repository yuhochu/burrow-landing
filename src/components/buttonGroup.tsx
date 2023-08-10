import React from "react"

type Props = {
    children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const ButtonGroup = ({children}: Props) => {
    return (
        <div className="-m2 [&>button]:m-2 ">
            {children}
        </div>
    )
}

export default ButtonGroup