import React from "react";

const PostSummaryItem = (x) => {
    const post = x.post
    return (
        <div className="list-group-item">
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <span className="text-muted">{post.topic} . {post.time}</span>
                    <br/>
                    <span> <strong>{post.userName} </strong> </span>
                    <br/>
                    {post.title}
                </div>
                <img className="rounded-3 wd-full-width" alt={""} width="96px" height="96px" src={`/images/${post.image}`}></img>


            </div>
        </div>
    );
};
export default PostSummaryItem;