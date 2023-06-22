"use strict";

// An array of posts - this should be private. Use the dummy data below to get started
// A variable postIdCounter to count the number of total posts
// A variable commentIdCounter to count the number of total comments
// A getPosts function that returns the posts array
// An addPost function that receives some text and adds a post object to posts
// Each object should have three properties: id, text, and comments
// You should generate the next id correctly for each post: "p4", "p5", …
// The comments array should be empty initially
// A removePost function that receives a postID and removes the relevant post from posts

// An addComment function that receives a postID and text. It should push an object
//  to the relevant post’s comments array
// The object should have two properties: text and id - this is the comment’s ID
// You should generate the next id correctly for each comment:"c7", "c8", …
// A removeComment function that receives a postID and a commentID - you understand what it should do



const Tweeter = function() {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    let _postIdCounter = 2;
    let _commentIdCounter = 6;

    const _getPosts = function() {
        return _posts;
    }

    const _addPost = function(postText) {
        _postIdCounter++;
        _posts.push({id: "p"+_postIdCounter, text: postText, comments: []})
    }

    const _removePost = function(postID) {
        let index = _posts.findIndex((item, i, arr) => item.id === postID);
        if (index != -1) {
            _posts.splice(index, 1);
        } else {
            console.log(`Post ID ${postID} not found`)
        } 
    }

    const _addComment = function(postID, commentText) {
        let index = _posts.findIndex((item, i, arr) => item.id === postID);
        if (index != -1) {
            _commentIdCounter++;
            _posts[index].comments.push({id: "c"+_commentIdCounter, text: commentText})
        } else {
            console.log(`Post ID ${postID} not found`)
        } 
    }

    const _removeComment = function(postID, commentID) {
        let indexPost = _posts.findIndex((item, i, arr) => item.id === postID);
        if (indexPost != -1) {
            let indexComment = _posts[indexPost].comments.findIndex((item, i, arr) => item.id === commentID);
            if (indexComment != -1) {
                _posts[indexPost].comments.splice(indexComment, 1);
            }  else {
                console.log(`Comment ID ${commentID} in Post ${postID} not found`)
            }
        } else {
            console.log(`Post ID ${postID} not found`)
        } 
    }

    return {getPosts: _getPosts, addPost: _addPost, removePost: _removePost, addComment: _addComment, removeComment: _removeComment};
}


const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("p3", "Damn straight it is!")
tweeter.addComment("p2", "Second the best!")
console.log(tweeter.getPosts())
//This should be added to the third post's comments asrray:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
