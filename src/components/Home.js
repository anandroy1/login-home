import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext"
import BlogsComponent from "./BlogsComponent";
import "./Home.css"

function Home() {

    const { username } = useContext(LoginContext);
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);

    const getCardData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );
        const data = await res.json();
        console.log(data);
        setCard((prev) => [...prev, ...data]);
    }

    const handelInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCardData();
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll)
        return () => window.removeEventListener("scroll", handelInfiniteScroll)
    }, [])

    return (
        <>
            <BlogsComponent blogsInfo={card} />
        </>
    );
}

export default Home;