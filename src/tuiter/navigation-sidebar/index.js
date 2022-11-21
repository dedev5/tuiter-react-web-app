import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = () => {
    const active = useSelector(
        (state) => state.active);
    return (
        <div className="list-group">
            <Link to="/" className="list-group-item">Tuiter</Link>
            <Link to="/tuiter" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/explore" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </Link>
            <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </Link>
            <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </Link>
            <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </Link>
            <Link to="/" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;

