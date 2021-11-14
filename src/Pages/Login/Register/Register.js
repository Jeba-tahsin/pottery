import React, { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthorization from "../Firebase/firebase.init";
import {useHistory, useLocation} from 'react-router';
import { AuthContext } from "../../../Context/AuthProvider";

initializeAuthorization();

const Register = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
    });
  

    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const [success, setSuccess] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loginUser, setLoginUser] = useContext(AuthContext);

    const getInput = (e) => {
      const getValue = {...user};
      getValue[e.target.name] = e.target.value ;
      setUser(getValue);
    } 

    const handleSignUp = (e) => {
        if(user.email !== '' && user.password !== '' && user.name !== ''){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
              .then((userCredential) => {
                const user = userCredential.user;
                setLoginUser(user);
                setSuccess('Register success');
                history.replace(from);
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
        <div style={{minHeight: "50vh", backgroundColor: "rgb(253, 246, 236)"}}>
          <h2 className='text-center text-warning pt-5'>Register</h2>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <form onSubmit={handleSignUp}>
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Name :
          </label>
          <input
            onBlur={getInput}
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="your name"
            name="name"
          />
        </div>
        
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Email :
          </label>
          <input
            onBlur={getInput}
            type="email"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="your email"
            name="email"
          />
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <label for="exampleInputPassword1" class="form-label">
            Password :
          </label>
          <input
            onBlur={getInput}
            type="password"
            class="form-control w-50 "
            id="exampleInputPassword1"
            placeholder="your password"
            name="password"
          />
        </div>
       <div className='d-flex justify-content-center'>
       <button type="submit" class="btn btn-primary mb-4">
          Register
        </button>
       </div>
      </form>
      <div className='text-center fw-bold pb-4'>
      <Link to='/login'>Login</Link>
      </div>
    </div>
    );
};

export default Register;