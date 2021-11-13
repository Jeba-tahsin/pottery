import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthorization from "../Firebase/firebase.init";
import { AuthContext } from "../../../Context/AuthProvider";
import {useHistory, useLocation} from 'react-router';

initializeAuthorization();
const Login = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const [success, setSuccess] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loginUser, setLoginUser] = useContext(AuthContext);

    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    //console.log('jeba', users);
    const getInput = (e) => {
      const getValue = {...user};
      getValue[e.target.name] = e.target.value ;
      setUser(getValue);
    } 
    const handleLogin = (e) => {
      if(user.email !== '' && user.password !== ''){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const user = userCredential.user;
            setLoginUser(user);
            history.replace(from)
            setSuccess('Login success')
                setErrorMsg('');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
                setSuccess('');
          });
          
      }
      e.preventDefault();
    }
    return (
         <div>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <form onSubmit={handleLogin}>
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label" >
            Email address: 
          </label>
          <input
            onBlur={getInput}
            type="email"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder='your email'
            name='email'
          />
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <label for="exampleInputPassword1" class="form-label">
            Password:  
          </label>
          <input
            onBlur={getInput}
            type="password"
            class="form-control w-50 "
            id="exampleInputPassword1"
            placeholder='your password'
            name='password'
          />
        </div>
        <button type="submit" class="btn btn-primary mb-4">
          Login
        </button>
      </form>
      <div>
          <Link to='/register'>Register</Link>
      </div>
    </div>
    );
};

export default Login;