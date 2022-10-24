import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="d-flex m-2">
                    <div className="flex-fill position-relative">
                        <input type="text" className="rounded-pill border-1 w-100 ps-4 bg-white text-black"
                               placeholder="Search Tuiter"/>
                            <a href="explore-settings.html" className="text-black">
                                <i className="bi bi-search position-absolute
                       wd-nudge-up-2"></i>

                            </a>
                    </div>
                    <a href="explore-settings.html" className="ps-2">
                        <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                    </a>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="/" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt="A large photo of Spacex's starship prototype." src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;

