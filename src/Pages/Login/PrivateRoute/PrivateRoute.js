import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../../Context/AuthProvider';


const PrivateRoute = ({children, ...rest}) => {
    const [loginUser, setLoginUser] = useContext(AuthContext);
    return (
        <div>
             <Route 
            {...rest} 
            render={({location}) => loginUser?.email? children : 
                    <Redirect
                    to={{pathname:'/login',
                    state: {from: location}}}>
                    </Redirect>}>
            </Route>
        </div>
    );
};

export default PrivateRoute;