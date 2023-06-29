"use strict";

const Renderer = function() {
    const addRenderedComment = function(divCommentsContainer, comment, postId) {
        divCommentsContainer.append(`<div class="comment-text" 
                data-id="${comment.id}">
                <button class="delete-comment">X</button>
                ${comment.text}
                </div>`)
    }

    const addRenderedCommentInput = function(divCommentsContainer) {
        divCommentsContainer.append(`<div class="comment-text-input"> 
                <input type="text" placeholder="Feel free to comment" class="input-comment">
                <div class="post-comment">Comment</div>
                </div>`)
    }

    const addRenderedPost = function(divPostsContainer, post) {
        let divPostTextContainer = $(`<div class="post-text" 
                data-id="${post.id}">
                <button class="delete">X</button>
                ${post.text}</div>`); 
        divPostsContainer.append(divPostTextContainer)
        const divCommentsContainer = $(`<div class="comments"></div>`);
        divPostTextContainer.append(divCommentsContainer);
        if (post.comments.length > 0) {
            for (let comment of post.comments) {
                addRenderedComment(divCommentsContainer, comment, post.id);
            }
        }
        addRenderedCommentInput(divCommentsContainer);
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