import React, { useState, useEffect } from "react";
import UserService from './Services';
import "./InfiniteList.css";
import Header from "./Header";

export default function InfiniteScrollNoLibrary(props) {

    const [userList, setUserList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (!noData) {
                loadUserList(page);
            }
        }
    }

    useEffect(() => {
        loadUserList(page);
    }, []);

    const loadUserList = (page) => {
        setLoading(true);
        setTimeout(() => {
            UserService.getList(page)
                .then((res) => {
                    const newPage = page + 1;
                    console.log("res", res.results)
                    //   const newList = userList.concat(res.data);
                    setUserList([...userList, ...res.results]);
                    setPage(newPage);
                    if (res.data.length === 0)
                        setNoData(true);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
            , 1500);
    }
    console.log("userList", userList)

    return (
        <div>
            <Header props={props}/>
            <div className="section">

                {userList && userList.length > 0 && userList.map((user, i) =>
                (
                    <div className="" key={i}>
                        <div className="box m-3">
                            <img src={user.picture.medium} alt={user.name.first} />
                            <div className="user-details">
                                <strong>Email</strong>: {user.email}<br />
                                <strong>First Name</strong>: {user.name.first}<br />
                                <strong>Last Name</strong>: {user.name.last}<br />
                                <strong>Contact Number</strong>: {user.phone}<br />
                            </div>
                        </div>
                    </div>
                )
                )}
                {loading ?   <>
                    <div className="skeleton m-3">
                            <img src="" alt=""/>
                            <div className="user-details">
                                <strong></strong><br />
                                <strong></strong><br />
                                <strong></strong><br />
                                <strong></strong><br />
                            </div>
                        </div>
                        <div className="skeleton m-3">
                            <img src="" alt=""/>
                            <div className="user-details">
                                <strong></strong><br />
                                <strong></strong><br />
                                <strong></strong><br />
                                <strong></strong><br />
                            </div>
                        </div>
                </>: ""}
                {noData ? <div className="text-center">no data anymore ...</div> : ""}
            </div>
        </div>
    );
}