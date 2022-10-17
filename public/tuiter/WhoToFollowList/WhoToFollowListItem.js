const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
            <div class="row align-items-center justify-content-between overflow-visible">
                <div class="d-flex col-10">
                    <image width="48px" height="48px" class="rounded-circle wd-crop-img-top"
                           src="../../images/${who.avatarIcon}"></image>
                    <div class="flex-column ps-2">
                        <div class="wd-thick">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
                        <div class="">@${who.handle}</div>
                    </div>
                </div>
                <div class="col-2">
                    <button class="btn btn-m btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </div>
`); }

export default WhoToFollowListItem