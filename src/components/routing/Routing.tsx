
import { Route, Routes } from "react-router"
import MainLayout from "../../pages/Layout"
import Home from "../../pages/Home"
import MemberShip from "../../pages/MemberShip"


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/members" element={<MemberShip />} />
            </Route>
        </Routes>
    )
}

export default Routing