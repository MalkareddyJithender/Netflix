import React,{useContext} from 'react';
import userContext from '../context/context';
import {Route,Redirect} from 'react-router-dom';

function PrivateRoute({exact,path,children}) {
        const {user:user} = useContext(userContext);
return (
    <Route 
     path={path}
     exact={exact}
     component={(props) =>(
         !!user ?
         children
         :
         (<Redirect to="/" />)
     )}
    />
);
};

export default PrivateRoute;
