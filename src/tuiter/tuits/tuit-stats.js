import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (x) => {
    const post = x.post
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2   "></div>
            <div className="col">
                <i className="bi bi-chat"></i> {post.replies}
            </div>
            <div className="col">
                <i className="fa fa-solid fa-repeat"></i> {post.retuits}
            </div>
            <div className=" col">
                {/*<i className={`fa ${post.liked === true?'text-danger':''} fa-heart */}
                {/*    `}></i>*/}

                <div>
                    Likes: {post.likes}
                    <i onClick= {
                        () => dispatch(updateTuitThunk(
                            {
                                ...post,
                                likes: post.likes + 1
                            }
                        ))
                    } className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
            </div>

            <div className="col">
                {/*<i className={`fa ${post.liked === true?'text-danger':''} fa-heart */}
                {/*    `}></i>*/}

                <div>
                    Dislikes: {post.dislikes}
                    <i onClick= {
                        () => dispatch(updateTuitThunk(
                            {
                                ...post,
                                dislikes: post.dislikes + 1
                            }
                        ))
                    } className="bi bi-hand-thumbs-down me-2"></i>
                </div>
            </div>
            <div className="col">
                <i className="fa fa-regular fa-share"></i>
            </div>

        </div>

    );
};
export default TuitStats;