import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (x) => {
    const post = x.post
    const dispatch = useDispatch();
    console.log("item", x)
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="float-end rounded-circle wd-full-width" alt={""} width="72px" height="72px" src={`/images/${post.image}`}></img>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <span> <strong>{post.username} </strong> <i className="bi bi-check-circle"></i> </span>
                    <span className="text-muted">{post.handle} · {post.time}</span>
                    <br/>
                    {post.tuit}

                    <br/>

                </div>
            </div>
            <TuitStats key={post._id}
                        post={post}
            />
        </div>
    );
};
export default TuitItem;