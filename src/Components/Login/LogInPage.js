import React, { useEffect, useState } from 'react';
import '../InfiniteList.css';
import { loggingIn, loggingOut } from "../../Actions/actionCreator";
import { useSelector, useDispatch } from 'react-redux';

function LogInPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logedin, setLogedin] = useState();

    const dispatch = useDispatch();

    useEffect (() => {

    },[email,password])

    const onChangeHandler = (e) => {

        if(e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const onLogin = () => {

        if(email == 'root' && password == 'password'){

            dispatch(loggingIn());
            setLogedin(true);
            props.history.push('./contactlist')
        } else(
            setLogedin(false)
            
        )
    }
    return (
        <div className="login-form">
            <div class="col-md-6 loginCard">
                    <h3>Login Form </h3>
                    <form>
                        <div class="logInput">
                            <input type="text" onChange={(e) => {onChangeHandler(e)}} name ='email' class="form-control" placeholder="Enter root as email" />
                        </div>
                        <div class="logInput">
                            <input type="password" onChange={(e) => {onChangeHandler(e)}} name='password' class="form-control" placeholder="Enter password as Password" />
                        </div>
                        <div class="logInput">
                           <button type="button" class="btn btn-primary" onClick={onLogin}>Log In</button>
                        </div>
                    </form>
                    {logedin == false && <div>Please Enter correct password and email</div>}
                </div>
        </div>
    )
}

export default LogInPage
