const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="../tuit.html">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item text-decoration-non" href="../home.html">
       <i class="fa-solid fa-house"></i> <span class="d-none d-xl-inline-block">Home</span></a>
     <a class="list-group-item text-decoration-non active" href="/">
       <i class="fa-solid fa-hashtag"></i> <span class="d-none d-xl-inline-block">Explore</span></a>
     <a class="list-group-item text-decoration-non" href="../notification.html">
       <i class="fa-solid fa-bell"></i> <span class="d-none d-xl-inline-block">Notifications</span></a>
     <a class="list-group-item text-decoration-non" href="../messages.html">
       <i class="fa-solid fa-envelope"></i> <span class="d-none d-xl-inline-block">Messages</span></a>
     <a class="list-group-item text-decoration-non" href="../bookmarks/index.html">
       <i class="fa-solid fa-bookmark"></i> <span class="d-none d-xl-inline-block">Bookmarks</span></a>
     <a class="list-group-item text-decoration-non" href="../lists.html">
       <i class="fa-solid fa-list"></i> <span class="d-none d-xl-inline-block">Lists</span></a>
     <a class="list-group-item text-decoration-non" href="../profile.html">
       <i class="fa-solid fa-user"></i> <span class="d-none d-xl-inline-block">Profile</span></a>
     <a class="list-group-item text-decoration-non" href="https://en.wikipedia.org/wiki/Dune_(novel)">
       <i class="fa-solid fa-circle"></i> <span class="d-none d-xl-inline-block">More</span></a>
       
     
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;