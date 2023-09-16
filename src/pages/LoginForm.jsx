import { useState } from 'react'
import {login} from "../utilities/utils"
import { BackButton } from '../components/BackButton'
import { Link } from 'react-router-dom'
import userData from '../data/user_data.json'
import Footer from '../components/Footer'

function LoginForm() {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const disableButton = !email || password.length < 6 || loading
    
    const handleLogin = async () => {
        setError(null)
        setLoading(true)
        try {
            await login({email, password})
            setLoading(false)
            window.location.href = '/dashboard';
        } catch(error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        }
    }
    
    return (
        <div className="App">
            <BackButton/>
            <div className="container">
            <h2>Login</h2>
            <form className='login-form' action="">
                <input placeholder='e-mail' onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email}/>            
                <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password}/>
                <button  disabled={disableButton} onClick={handleLogin}>Login</button>
                <p>You dont have an account? <Link to={"/sign-up"}>Sign Up</Link></p>
            <div className="hint">
                <h3>A little hint</h3>
                <li>e-mail: <span> example@gmail.com</span></li>
                <li>password:<span> heslo123</span> </li>
            </div>
            </form>
            <div className="errorMessage">{error}</div>
            </div>

            <Footer/>
        </div>
  )
}


export default LoginForm