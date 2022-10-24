import React from "react";
const fill_if_exists = (item, result) => {
    if (item === '') {
        console.log(item + " Was missing")
        return ''

    }
    else {
        console.log("Yep")
        console.log(result)
        return result;

    }
};

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "relativity.png"
        }

    }
) => {
    return (
    <div className="list-group-item">
        <div className="d-flex flex-row justify-content-between">
            <div className="">
                {fill_if_exists(post.topic,[<span className="text-muted">{post.topic}</span>,<br/>])}

                {fill_if_exists(post.userName,
                <strong>{post.userName} </strong>)}
                {fill_if_exists(post.time,
                    [<i className="fa-solid fa-circle-check"></i>,<span className="text-muted"> - {post.time}</span>]
                    )}
                {fill_if_exists(post.title,
                [<br/>,<strong>{post.title}</strong>])}
                {fill_if_exists(post.tweets,
                [<br/>,<span className="text-muted">
                        {post.tweets}
                   </span>])}
            </div>
            <div className="">
                <img className="rounded-3" alt={""} width="96px" src={`/images/${post.image}`}></img>
            </div>
        </div>
    </div>
        );
};
export default PostSummaryItem;