var modul = (function () {

    function addAll(posts) {
       
        const error = testCollection.addAll(posts);
        View.showPosts(testCollection.getPage(0, 10 - error.length));
        View.addAuthors(posts);
        View.addHashTags(posts);
    }

    function setUser(name) {
        testCollection._user = name;
        View.setUser(testCollection._user);
    }

    function removePost(id) {
        if (testCollection.remove(id)) {
            View.removePost(id);
            View.addAuthors(posts);
            View.addHashTags(testCollection._posts);
        }
    }

    function editPost(id, post) {
        if (testCollection.edit(id, post)) {
            View.editPost(id, post);
            View.addHashTags(testCollection._posts);
        }
    }

    function addPost(post) {
        if (testCollection.add(post)){
            View.addPost(post);
            View.addHashTags(testCollection._posts);
        }
    }

    return {
        setUser: setUser,
        addAll: addAll,
        removePost: removePost,
        editPost: editPost,
        addPost: addPost
    }
}());


modul.setUser("Guest");
modul.addAll(posts);