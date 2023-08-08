import Header from "./header";
import Routers from "../routers/routers";

type Props = {
    className?: string,
}
const Layout = (props: Props) => {
    return (
        <div className={"layout"}>
            <Header/>
            <Routers {...props}/>
            {/*<Footer onRerenderLayout={handleRerenderLayout}/>*/}
        </div>
    )
}

export default Layout
