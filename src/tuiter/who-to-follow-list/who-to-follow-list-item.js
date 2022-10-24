import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.svg' }
    }
) => {
    return(
        <div className="list-group-item">
            <div className="row align-items-center justify-content-between overflow-visible">
                <div className="d-flex col-10">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                    <div className="flex-column ps-2">
                        <div className="wd-thick">{who.userName} <i className="fa-solid fa-circle-check"></i></div>
                        <div className="">@{who.handle}</div>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-m btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </div>
    );
};
export default WhoToFollowListItem;