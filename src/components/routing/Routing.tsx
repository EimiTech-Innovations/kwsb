
import { Route, Routes } from "react-router"
import MainLayout from "../../pages/Layout"
import Home from "../../pages/Home"


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Routing