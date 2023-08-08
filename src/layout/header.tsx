import assets from "../components/assets";
import {Link} from "react-router-dom";
import Button from "../components/button";

const Header = () => {
    return (
        <div className={"header mt-5 mb-5 flex px-5 justify-between"}>
            <Link title={"burrow-cash"} to={"/"}>
                <div className={"logo"}>
                    {assets.svg.logo}
                </div>
            </Link>
            <div className={"flex gap-5"}>
                <Navs/>
                <Button>Enter App</Button>
            </div>
        </div>
    )
}

const NAVIGATIONS = [
    {
        title: "Markets",
        to: {
            pathname: "/markets"
        },
    },
    {
        title: "Roadmap",
        to: {
            pathname: "/roadmap"
        },
    }
]
const Navs = () => {
    return (
        <div className="flex justify-center items-center gap-5">
            {
                NAVIGATIONS.map(d => {
                    return (
                        <Link title={d.title}
                              to={d.to}>
                            {d.title}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Header
