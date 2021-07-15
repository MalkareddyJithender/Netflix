import '../css/Profile.css';
import React from 'react';
import logo from '../logo.svg';

function Profile({ user,setProfile}) {
    return (
        <div className="profile">
            <div className="profile__header">
                <img src={logo} alt="netflix logo" />
            </div>
            <div className="profile__profiles">
                <h1> Who's watching? </h1>
                <ul>
                    <li 
                    className="profile__profile"
                    onClick={() =>
                    {
                        if(user)
                        {
                        setProfile({
                            firstName:user.firstName,
                            photoUrl:user.photoUrl
                        });
                        }
                    }}
                    >
                        <img className="profile__profilePic" src={user ? `/images/users/${user.photoUrl}.png` : '/images/misc/loading.gif'} alt="user Profile" />
                        { user && <p className="profile__profileName" >{ user.firstName }</p> } 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
