
import { Route, Routes } from "react-router"
import MainLayout from "../../pages/Layout"
import Home from "../../pages/Home"
import MemberShip from "../../pages/MemberShip"
import About from "../aboutUs/About"
import PageNotFound from "../../pages/PageNotFound"


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/members" element={<MemberShip />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default Routing