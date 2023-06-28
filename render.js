"use strict";

const Renderer = function() {
    const addRenderedComment = function(divCommentsContainer, comment, postId) {
        divCommentsContainer.append(`<div class="comment-text" 
                data-id="${comment.id}"
                data-id="${postId}">
                <button class="delete-comment">X</button>
                ${comment.text}
                </div>`)
    }

    const addRenderedPost = function(divPostsContainer, post) {
        let divPostTextContainer = $(`<div class="post-text" 
                data-id="${post.id}">
                <button class="delete">X</button>
                ${post.text}</div>`); 
        divPostsContainer.append(divPostTextContainer)
        if (post.comments.length > 0) {
            const divCommentsContainer = $(`<div class="comments"></div>`);
            divPostTextContainer.append(divCommentsContainer);
            for (let comment of post.comments) {
                addRenderedComment(divCommentsContainer, comment, post.id);
            }
        }
    }

    const renderPosts = function(posts) {
        const divPostsContainer = $("#posts");
        divPostsContainer.empty(); 
        for (let post of posts) {
            addRenderedPost(divPostsContainer, post);
        }
    }

    return {renderPosts};
}