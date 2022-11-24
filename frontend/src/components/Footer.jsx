import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Footer() {
    const { username, email } = useAuth()

    return (
        <section className="footer-container">
            <main className="footer width">
                <p>{email}</p>
                <p>hola {username}</p>
                <div className="footer__content-container">
                    <img src={Logo} alt="" />
                    <div className='footer__medias'>
                        <h3>Visit Our Social Medias</h3>
                        <ul className='footer__medias-list'>
                            <li>
                                <Link><i class="fa-brands fa-facebook"></i></Link>
                            </li>
                            <li>
                                <Link><i class="fa-brands fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link><i class="fa-brands fa-github"></i></Link>
                            </li>
                            <li>
                                <Link><i class="fa-brands fa-linkedin"></i></Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='footer-terms'>
                            <ul>
                                <li><Link>Terms and Conditions</Link></li>
                                <li><Link>Privacy</Link></li>
                                <li><Link>accessibility</Link></li>
                            </ul>
                        </div>
                </div>
                <div className='footer__copyright'>
                    <p>--- Copyright @2022 - LandDom Team ---</p>
                </div>
            </main>
        </section>
    )
}

export default Footer