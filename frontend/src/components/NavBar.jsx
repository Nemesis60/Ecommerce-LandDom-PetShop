import Logo from '../Images/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import Loading from './Loading';

function NavBar() {
    const { isManager, isAdmin, status, email, username } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    let stateButton = null;
    if (status) { 
        stateButton = (
            <Link className='nav-link' to='signup'>Sign Up</Link>
        )

    } 

    console.log(status)
    console.log(username)

    let managerButton = null;
    if (isManager) {
        managerButton = (
            <Link className='dashboardLink' to='managerboard'>Manager DashBoard</Link>
        )
    }
    let adminButton = null;
    if (isAdmin) {
        adminButton = (
            <Link className='dashboardLink' to='adminboard'>Admin DashBoard</Link>
        )
    }
    if (isLoading) return <Loading />

    return (
        <div className='navBar-container'>
            <section className='navBar width'>
                    <div className='navBar__img-container'>
                        <Link to='/'><img src={Logo} alt="" /></Link>
                        {managerButton}
                        {adminButton}
                    </div>
                    <main className='navBar__nav-container'>
                        <input className='navBar__search' type="search" placeholder={email} />
                        <nav className='navBar__nav'>
                            <li><Link>Hygiene</Link></li>
                            <li><Link>Food</Link></li>
                            <li><Link>Toys</Link></li>
                            <li><Link>Accessories</Link></li>
                        </nav>
                    </main>
                    <div className='navBar__actions'>
                        <stateButton />
                        <p>{status}</p>
                        <Link className='nav-link' to='login'>Login</Link>
                        <button className='nav-link' onClick={sendLogout} >LogOut</button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
            </section>
        </div>
        
    )
}

export default NavBar