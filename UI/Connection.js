const testPage = (function () {
    return {
      addPost(post) {
        if (testCollection.add(post)) {
          View.addPost(post);
        }
      },
      removePost(id) {
        if (testCollection.remove(id)) {
          View.removePost(id);
        }
      },
      edit(id, newPost) {
        if (testCollection.edit(id, newPost)) {
          View.edit(id, newPost);
        }
      },
      addAll(posts) {
        const invalidPosts = testCollection.addAll(posts);
        View.viewPosts(testCollection.getPage(0, 20));
      },
    };
  }());

  const testPost = {
    id: '12',
    description: 'test',
    creationDate: '2019-03-06T14:10:25',
    author: 'newAuthor',
    photoLink: 'Images/nik.jpg',
    hashTags: ['#hashtag'],
    likes: [],
  };
  
  testPage.addAll(photoPosts);
  testPage.addPost(testPost);
  testPage.removePost(10);
  testPage.edit(1, { description: 'Darova', photoLink: 'Images/nik.jpg', hashTags: ['#yaya'] });