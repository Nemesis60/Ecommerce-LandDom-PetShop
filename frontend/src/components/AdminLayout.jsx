import { Outlet } from "react-router-dom"
import SideBar from '../components/SideBar';

function AdminLayout() {
    return (
        <div>
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout