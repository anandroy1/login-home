import React from "react";
import BlogsCard from "./BlogsCard";

const BlogsComponent = ({ blogsInfo }) => {

    console.log("blogsInfo", blogsInfo);

    return (
        <div className="wrapper">
            <div className="container">
            <h2 className="header">Welcome to my Blogs!</h2>
                <div className="grid grid-three-column">
                    {blogsInfo.map((curVal, id) => {
                        return <BlogsCard key={id} myData={curVal} />;
                    })}
                </div>
            </div>
        </div>
    )
}
export default BlogsComponent;