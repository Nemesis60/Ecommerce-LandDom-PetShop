import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

function Layout() {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet /> 
            </div>
            <Footer />
        </div>
    )
}

export default Layout