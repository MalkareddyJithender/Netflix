import '../css/BrowseHeader.css';
import React, { useState,useContext, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import logo from '../logo.svg'; 
import userContext from '../context/context';
import Fuse from 'fuse.js';
import { signOut } from '../actions/auth';
import axios from 'axios';

function BrowseHeader({ category,setCategory,setSlideRows,slideRows,slides }) {
    const [searchTerm,setSearchTerm] = useState('');
    const [searchActive,setSearchActive] = useState(false);
    const { user,dispatch } = useContext(userContext);
    const history = useHistory();
    

    useEffect(() =>
    {
       const fuse = new Fuse(slideRows,{keys:["data.title","data.description","data.genre"]});
       const results = fuse.search(searchTerm).map(({item}) => item);

       if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0)
       {
           setSlideRows(results);
       }
       else
       {
            setSlideRows(slides[category]);
       }
    },[searchTerm]);
    return (
        <div className="browseHeader">
            <div className="browseHeader__top">
                    <div className="browseHeader__topLeft">
                        <img src={logo} alt="netflix logo" />
                        <Link to="#" onClick={() =>
                        {
                            setCategory('series');
                        }}>
                            Series
                        </Link>
                        <Link to="#" onClick={() =>
                        {
                            setCategory('films');
                        }} >
                            Films
                        </Link>
                    </div>
                    <div className="browseHeader__topRight">
                        <div className="browseHeader__search">
                            <button>
                                <img 
                                className="browseHeader__searchIcon"
                                src="/images/icons/search.png"
                                onClick={() =>
                                {
                                    setSearchActive(!searchActive);
                                }} 
                                />
                            </button>
                             {searchActive &&                             
                             <input
                             className="browseHeader__searchInput"
                             type="text"
                             placeholder="Search films and series"
                             value={searchTerm}
                             onChange={(e) => setSearchTerm(e.target.value)}
                             />}
                        </div>
                        <div className="browseHeader__profile">
                            <img className="browseHeader__profilePic" src={`/images/users/${user.photoUrl}.png`} alt="user profile" />
                            <div className="browseHeader__dropdown">
                                <div className="browseHeader__dropdownitem1">
                                    <img className="browseHeader__profilePic" src={`/images/users/${user.photoUrl}.png`} alt="user profile" />
                                    <Link to="#">
                                        {user.firstName}
                                    </Link>
                                </div>
                                <div className="browseHeader__dropdownitem2">

                                    <Link to="#" onClick={() =>
                                    {
                                        //post method accepts url as 1st param,data obj as 2nd param and header obj as 3rd param..
                                        axios.post(`https://g2-netflix-2.herokuapp.com/users/signout`,
                                        {},
                                          {
                                              headers:{
                                                  'Authorization':`Bearer ${user.token}`
                                              }
                                          }
                                          ).then(() =>
                                          {
                                              dispatch(signOut());
                                              history.replace('/');
                                          })
                                          .catch((error) =>
                                          {
                                              console.log('error',error.message);
                                          })
                                    }}>
                                        Sign out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="browseHeader__text">
                <h2 className="browseHeader__title">Watch Aakaasam Nee Haddhu Ra Now</h2>
                <p className="browseHeader__subTitle">
                Maara, a young man from a remote village,
                dreams of launching his own airline service. 
                However, he must overcome several obstacles and
                 challenges in order to be successful in his quest.
                </p>
                <button className="browseHeader__playButton">Play</button>
            </div>
        </div>
    )
}

export default BrowseHeader;
