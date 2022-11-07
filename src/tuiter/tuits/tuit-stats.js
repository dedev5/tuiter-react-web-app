import React from "react";

const TuitStats = (x) => {
    const post = x.post
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col">
                <i className="bi bi-chat"></i> {post.replies}
            </div>
            <div className="col">
                <i className="fa fa-solid fa-repeat"></i> {post.retuits}
            </div>
            <div className=" col">
                <i className={`fa ${post.liked === true?'text-danger':''} fa-heart 
                    `}></i> {post.likes}
            </div>
            <div className="col">
                <i className="fa fa-regular fa-share"></i>
            </div>
            <div className="col-2"></div>
        </div>

    );
};
export default TuitStats;