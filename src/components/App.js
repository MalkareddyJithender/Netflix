import React,{ useReducer,useEffect } from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import Header from './Header';
import Footer from './Footer';
import SignUp from './SignUp';
import Browse from './Browse';
import userContext from '../context/context';
import useContent from '../hooks/use-content';
import authReducer from '../reducers/auth';
import selectionFilter from '../utils/selection-filter';
import { signIn } from '../actions/auth';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import axios from 'axios';

// if(process.env.URL === undefined || process.env.NODE_ENV === 'test')
// {
//   process.env.URL = 'http://localhost:3001';
// }



//App component

 function App() {
   const [user,dispatch] = useReducer(authReducer,null);
   const { series } = useContent('series');
   const { films } = useContent('films');
   const slides = selectionFilter({series,films});
  
   
    useEffect(() =>
   {
      const userToken = localStorage.getItem('token');
      axios
       .get(`https://g2-netflix-2.herokuapp.com/users/me`,
       {
         headers:{
           'Authorization':`Bearer ${userToken}`
         }
       })
       .then((response) =>
       {
        const userData = response.data;
        dispatch(signIn(userData));
       })
       .catch((error) =>
       {
          console.log('please authenticatee!');
       })

   },[]);
  return (
    <userContext.Provider value={ {user,dispatch} } >
      <BrowserRouter>
      <div className="app">
        <PublicRoute exact={true} path="/" >
          <Home />
        </PublicRoute>
        <PublicRoute exact={true} path="/signin" >
          <Header button={false} >
            <SignIn />
          </Header>
          <Footer />
        </PublicRoute>
        <PublicRoute exact={true} path="/signup" >
          <Header button={true} >
            <SignUp />
          </Header>
          <Footer />
        </PublicRoute>
        <PrivateRoute exact={true} path="/browse">
          <Browse slides={slides} />
        </PrivateRoute>

      </div>
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;