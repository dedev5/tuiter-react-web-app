import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="d-flex m-2">
                <div class="flex-fill position-relative">
                    <input type="text" class="rounded-pill border-1 w-100 ps-4 bg-white text-black" placeholder="Search Tuiter">
                    <a href="/" class="text-black">
                        <i class="position-absolute fa-solid fa-magnifying-glass top-0 start-0 p-2"></i>
                    </a>
                </div>

                    <i class="fa-solid fa-gear fa-2x"></i>

            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-sm-none d-md-flex" href="entertainment.html" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <div class="position-relative">
                <image class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"></image>
                <span class="position-absolute bottom-0 start-0 text-white h3 ps-2">SpaceX's Starship</span>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
