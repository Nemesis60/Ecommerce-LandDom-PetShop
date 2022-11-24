import './SideBar.css';
import { Link } from 'react-router-dom';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';


function sideBar() {

    // const [sendLogout,{
    //     isSuccess,
    //     isLoading,
    //     isError,
    //     error,
    // }] = useSendLogoutMutation()

    return (
        <section className='admin-container'>
            <nav className='admin-navigation'>
                <ul>
                    <li>
                        <Link to='adminboard'>
                            <span className='admin-navigation__icon'><i class="fa-solid fa-unlock"></i></span>
                            <span className='admin-navigation__title'>DashBoard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='users'>
                            <span className='admin-navigation__icon' ><i class="fa-solid fa-user"></i></span>
                            <span className='admin-navigation__title'>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='Messages'>
                            <span className='admin-navigation__icon'><i class="fa-sharp fa-solid fa-message"></i></span>
                            <span className='admin-navigation__title'>Messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <span className='admin-navigation__icon'><i class="fa-solid fa-house-user"></i></span>
                            <span className='admin-navigation__title'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span className='admin-navigation__icon'>
                                <i class="fa-solid fa-sun"></i>
                                <i class="fa-solid fa-moon"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span className='admin-navigation__icon'><i class="fa-solid fa-right-from-bracket"></i></span>
                            <span className='admin-navigation__title'>SignOut</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default sideBar