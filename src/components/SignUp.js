import React,{ useState,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { signUp } from '../actions/auth';
import axios from 'axios';
import userContext from '../context/context';

function SignUp() {
    const [firstName,setFirstName] = useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    const history = useHistory();
    const { dispatch } = useContext(userContext)
    const isInvalid = firstName === '' || emailAddress === '' || password === '';

    console.log('process.env.NODE_ENV',process.env.NODE_ENV);
    console.log('process.env.URL',process.env.URL);

    const handleSignUp = (event) =>
    {
        event.preventDefault();
        axios.post(`https://g2-netflix-2.herokuapp.com/users`,{
            firstName:firstName,
            email:emailAddress,
            password:password,
            photoUrl:Math.floor(Math.random() * 5) + 1
        })
        .then((response) =>
        {
            localStorage.setItem('token',`${response.data.token}`);
            //dispatching action
            dispatch(signUp(response.data));
            history.push('/browse');
        })
        .catch((error) =>
        {
            const errorMessage = error.response?.data?.error;
            setFirstName("");
            setEmailAddress("");
            setPassword("");
            if(errorMessage === 'email address already exists')
            {
                return setError(errorMessage);
            }
            setError('Email is invalid!');
            
        });
    }
    return (
        <div className="signUp">
            <form onSubmit={handleSignUp} >
                <h1 className="signUp__title"> Sign Up </h1>
                {error && <p className="signUp__error">{error}</p>}
                <input 
                 type="text"
                 placeholder="First Name"
                 value={firstName}
                 onChange={(event) =>
                    {
                    setFirstName(event.target.value);
                    }}
                />
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
                    Sign Up
                </button>
            </form>
            <div className="signUp__text">
                <p className="signUp__textOne">
                    <span>Already a user?</span>&nbsp;
                    <Link className="signUp__Link" to="/signin">
                        <span>Sign in now.</span>
                    </Link>
                </p>
                <p className="signUp__textTwo">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                 <a className="signUp__a"href="#">Learn more.</a>
                </p>
            </div>
        </div>
    )
}

export default SignUp;
