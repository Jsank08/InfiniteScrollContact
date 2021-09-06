import React, { useEffect, useState } from 'react';
import axios from "axios";
import { getNextPage } from "../Actions/actionCreator";
import { useSelector, useDispatch } from 'react-redux';
import Header from "./Header";

function InfiniteList(props) {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    const pageData = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getNextPage(page));
        pageData.nextData && setData([...data, ...pageData.nextData])
    }, [page, dispatch]);

    console.log("useSelector data", pageData);
    console.log("state data", data);

    function AddPageScroll() {
        setPage(prev => prev + 1);
    }

    window.onscroll = function () {
        // console.log("window.innerHeight", window.innerHeight);
        // console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);
        // console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight);
        if (window.innerHeight + document.documentElement.scrollTop + 17 > document.documentElement.offsetHeight) {
            AddPageScroll();
        }
    }

    return (
        <div>
            <Header props={props}/>
            <div className="row" style={{ padding: ' 20px 50px' }}>
                {data.length > 0 ? data.map((items, index) => {
                    return <div key={index} className="col col-lg-4 col-md-6 col-sm" style={{ padding: ' 20px 50px' }}>
                        <div class="card" >
                            <img src={items.thumbnailUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">{items.id}</p>
                                <p class="card-text">{items.title}</p>
                            </div>
                        </div>
                    </div>
                }) : pageData.nextData && pageData.nextData.map((items, index) => {
                    return <div key={index} className="col col-lg-4 col-md-6 col-sm" style={{ padding: ' 20px 50px' }}>
                        <div class="card" >
                            <img src={items.thumbnailUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">{items.id}..</p>
                                <p class="card-text">{items.title}</p>
                            </div>
                        </div>
                    </div>
                })
                }
                {
                    <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default InfiniteList
