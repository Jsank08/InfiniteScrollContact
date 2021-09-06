import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loggingOut } from "../Actions/actionCreator";

function Header(props) {
console.log("props from header",props)
    const stateData = useSelector(state => state);
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(loggingOut());
        props.props.history.push("./")
    }
    console.log("login state",stateData)
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid" style={{justifyContent:'space-between'}}>
                <a class="navbar-brand" href="#">Infinite Scrolling Contact List</a>
                <button className="btn btn-primary" onClick={() => logOutHandler()}>Log Out</button>
            </div>
        </nav>
    )
}

export default Header
