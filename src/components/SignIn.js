import '../css/SignIn.css';
import React,{ useState,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import userContext from '../context/context';
import { signIn } from '../actions/auth';

function SignIn() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const {user,dispatch} = useContext(userContext);
    const history = useHistory();
    const isInvalid = emailAddress === '' || password === '';


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.post(`https://g2-netflix-2.herokuapp.com/users/signin`,{
            email:emailAddress,
            password:password
        })
        .then((response) =>
        {
            localStorage.setItem('token',response.data.token);
            //dispatching action
            dispatch(signIn(response.data));
            history.push('/browse');
        })
        .catch((error) =>
        {
            setEmailAddress("");
            setPassword("");
            setError('Unable to login!')
        })
    }

    return (
        <div className="signIn">
            <form onSubmit={handleSubmit} >
                <h1 className="signIn__title"> Sign In </h1>
                {error && <p className="signIn__error">{error}</p>}
                <input 
                 type="email"
                 placeholder="Email Address"
                 value={emailAddress}
                 onChange={(event) =>
                    {
                    setEmailAddress(event.target.value);
                    }}
                />
                <input
                 autoComplete="off"
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange ={(event) =>
                    {
                    setPassword(event.target.value);
                    }}
                />
                <button 
                type="submit"
                disabled={isInvalid}
                >
                    Sign In
                </button>
            </form>
            <div className="signIn__text">
                <p className="signIn__textOne">
                    <span>New to Netflix?</span>&nbsp;
                    <Link className="signIn__Link" to="/signup">
                        <span>Sign up now</span>
                    </Link>
                </p>
                <p className="signIn__textTwo">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                 <a className="signIn__a"href="#">Learn more.</a>
                </p>
            </div>

        </div>
    )
}

export default SignIn;
