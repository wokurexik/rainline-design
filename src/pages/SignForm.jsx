import { useState } from 'react'
import { SignUp} from "../utilities/utils"
import { BackButton } from '../components/BackButton'
import { Link } from 'react-router-dom'
import userData from '../data/user_data.json'


function SignForm() {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState('')

    const disableButton = !email || password.length < 6 || loading
    
    const handleSignUp = async () => {
        setError(null)
        setLoading(true)
        try {
            await SignUp({email, password, user})
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
            <h2>Sign Up</h2>
            <form className='login-form' action="">
                <input placeholder='name' onChange={(e) => setUser(e.target.value)} type="user" id="user" value={user}/>
                <input placeholder='e-mail' onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email}/>            
                <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password}/>
                <button  disabled={disableButton} onClick={handleSignUp}>Sign</button>
                <p><Link to={"/login"}>Login in</Link></p>
            </form>
            <div className="errorMessage">{error}</div>
            </div>
        </div>
  )
}


export default SignForm