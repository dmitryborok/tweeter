"use strict";

const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function() {
    let inputText = $("#input").val();
    if (inputText.trim() != "") {
        tweeter.addPost(inputText);
    }
    renderer.renderPosts(tweeter.getPosts());
    $("#input").val("");
}

$("#posts").on("click", ".post-comment", function() {
    let inputControl = $(this).closest(".comment-text-input").find("input"); 
    let inputText = inputControl.val();
    if (inputText.trim() != "") {
        let postID = inputControl.closest(".post-text").data("id");
        tweeter.addComment(postID, inputText);
    }
    renderer.renderPosts(tweeter.getPosts());
})

$("#posts").on("click", ".delete", function() {
    let postID = $(this).closest(".post-text").data("id");
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function() {
    let postID = $(this).closest(".post-text").data("id");
    let commentID = $(this).closest(".comment-text").data("id");
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
});