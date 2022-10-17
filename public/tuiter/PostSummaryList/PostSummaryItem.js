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

const WhoToFollowListItem = (post) => {

    return (`
<div class="list-group-item">
    <div class="d-flex flex-row justify-content-between">
        <div class="">

            ${fill_if_exists(post.topic,
            `<span class="text-muted">${post.topic}</span><br/>`)}
            ${fill_if_exists(post.userName,
            `<strong>${post.userName} </strong>`)}
            ${fill_if_exists(post.time,
            `
                <i class="fa-solid fa-circle-check"></i> <span class="text-muted"> - ${post.time}</span>
                    `)}
            ${fill_if_exists(post.title,
            `<br/><strong>${post.title}</strong>`)}
            ${fill_if_exists(post.tweets,
        `<br/><span class="text-muted">
                        ${post.tweets}
                   </span>`)}
        </div>
        <div class="">
            <image class="rounded-3" width="96px" src="${post.image}"></image>
        </div>
    </div>
</div>

`); };

export default WhoToFollowListItem