import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNewUserMutation } from '../features/usersApiSlice.js';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';

function SignUp() {
    useTitle('Register')

    const [newUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useNewUserMutation();

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setEmail('')
            setPassword('')
            navigate('/')
        }
    }, [isSuccess, navigate])

    const canSave = [ email, username, password] && !isLoading

    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await newUser({ username, password, email })
        }
    }

    const handleUsernameInput = (e) => setUsername(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    return (
        <section className="login-container width">
            

            <header>
                <h1>Register</h1>
            </header>
            <main className="login">
                <form className="form" onSubmit={onSaveUserClicked}>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="username"

                        value={username}
                        onChange={handleUsernameInput}
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form__input"
                        type="email"
                        id="email"

                        value={email}
                        onChange={handleEmailInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePasswordInput}
                        value={password}
                        required
                    />
                    <button className="form__submit-button">Sign Up</button>
                    <p>have Account?  <Link to='login' style={{ color: 'blue' }}>Login</Link></p>
                </form>
            </main>
            <footer className='form__footer'>
                <Link className='form__back-btn' to="/">Back to Home</Link>
            </footer>
        </section>
    )
}

export default SignUp