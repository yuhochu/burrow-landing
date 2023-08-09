import React from "react"
import LayoutContainer from '../layout/layoutContainer/layoutContainer';

type Props = {
    children?: string | React.ReactNode,
    className?: string,
}

const NotFoundPage =(props: Props,)=>{
    return (
      <LayoutContainer>
          <div className={"pt-48 pb-96 text-3xl flex justify-center"}>404 Page Not Found</div>
      </LayoutContainer>
    )
}

export default NotFoundPage