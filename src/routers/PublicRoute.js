import React,{ useContext } from 'react';
import userContext from '../context/context';
import {Route,Redirect} from 'react-router-dom';

function PublicRoute({exact,path,children}) {
    const {user} = useContext(userContext);

    return (
        <Route
         exact={exact}
         path={path}
         component={(props) =>(
             !!user ?
             (<Redirect to="/browse"/>)
             :
             (children)
         )}
        />
    )
}

export default PublicRoute;
