const modul = (function () {
    return {
        addAll(posts) {
            const error = testCollection.addAll(photoPosts);
            View.showPosts(testCollection.getPage(0, 10 - error.length));
            View.addAuthors(posts);
        },
        removePost(id) {
            if (testCollection.remove(id)) {
                View.removePost(id);
            }
        },
        editPost(id, post) {
            if (testCollection.edit(id, post)) {
                View.editPost(id, post);
            }
        },
        addPost(post) {
            if (testCollection.add(post))
                View.addPost(post);
        }
    }
})();


modul.addAll(photoPosts);
modul.removePost("3");
modul.editPost("4", { description: "Changed", photoLink: "Images/involker.jpg" });
modul.addPost({
    id: '5',
    description: 'mmmmmmmAAAAAA',
    createdAt: new Date('2018-04-27T11:43:43'),
    author: 'PRivet',
    photoLink: 'Images/like.png',
    hashTags: ['#raz', '#dva'],
    likes: ["2"]
});