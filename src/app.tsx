import './app.css'
import './styles/global.css'
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/layout";

function App() {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}

export default App
