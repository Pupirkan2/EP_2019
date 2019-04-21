const photoPosts = [
    {
        id: '1',
        description: 'Geographical Position: The Republic of Belarus is situated in the eastern part of Europe. It covers 207 600 sq km and stretches for 650 km from east to west and for 560 km from north to south.',
        createdAt: new Date('2019-03-10T14:10:00'),
        author: 'Author1',
        photoLink: 'Images/zu.jpg',
        hashTags: ['213'],
        likes: []
    },
    {
        id: '2',
        description: 'he Republic of Belarus is situated in the ',
        createdAt: new Date('2019-03-10T14:10:01'),
        author: 'Author2',
        photoLink: 'Images/zasd.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '3',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:02'),
        author: 'Author3',
        photoLink: 'Images/involker.jpg',
        hashTags: ['213', '117       '],
        likes: []
    },
    {
        id: '4',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zu.jpg',
        hashTags: [],
        likes: []
    }
];

class PostCollection {

    _posts;
    _user;

    constructor(postsList, user) {
        this._posts = postsList.slice();
        this._user = user;
    }

    get(id) {
        if (typeof (id) === "string") {
            var num = parseInt(id);
            if (num > 0 && num <= photoPosts.length) {
                var post = photoPosts.find(function (element) {
                    return element.id === id;
                })
                if (!post) {
                    return false;
                }
                return found;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let foundPosts = this._posts.sort((post1, post2) => post1.creationDate - post2.creationDate);
        if (filterConfig) {
            if (Object.prototype.hasOwnProperty.call(filterConfig, 'author')) {
                foundPosts = foundPosts.filter(post => post.author === filterConfig.author);
            } else if (Object.prototype.hasOwnProperty.call(filterConfig, 'hashTags')) {
                if (filterConfig.hashTags.length !== 0) {
                    foundPosts = foundPosts.filter((post) => {
                        for (let i = 0; i < filterConfig.hashTags.length; i++) {
                            for (let j = 0; j < post.hashTags.length; j++) {
                                if (post.hashTags[j] === filterConfig.hashTags[i]) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    });
                }
            }
        }
        foundPosts = foundPosts.slice(skip, skip + top);
        if (PostCollection._checkObject(foundPosts) && foundPosts.length !== 0) {
            return foundPosts;
        }

        return null;
    }

    add(photoPost) {
        if (!PostCollection._validate(photoPost)) {
            return false;
        }
        this._posts.push(photoPost);
        return true;
    }


    addAll(posts) {
        const error = [];
        for (var i = 0; i < posts.length; i++) {
            if (!PostCollection._validate(posts[i]))
                error.push(posts[i]);
        }

        return error;
    }

    edit(id, photoPost) {
        if (!this.get(id)) {
            return false;
        }
        let obj = this.get(id);
        if ('hashTags' in photoPost) {
            if (PostCollection._checkString(photoPost.hashTags)) {
                let str = "";
                for (let i = 0; i < photoPost.hashTags.length; i++) {
                    str = str + photoPost.hashTags[i] + " ";
                }
                obj.hashTags = str;
            }
            else return false;
        }
        if ('photoLink' in photoPost) {
            if (!PostCollection.isEmpty(photoPost.photoLink))
                obj.photoLink = photoPost.photoLink;
            else
                return false;
        }
        if ('description' in photoPost) {
            obj.description = photoPost.description;
        }
        if (!PostCollection._validate(obj)) {
            return false;
        }
        this.get(id) === obj;
        return true;
    }

    static _validate(photoPost) {
        if (!photoPost) {
            return false;
        }
        if (!('likes' in photoPost && 'author' in photoPost && 'photoLink' in photoPost && 'createdAt' in photoPost && 'id' in photoPost && 'description' in photoPost && 'hashTags' in photoPost)) {
            return false;
        }
        if (photoPost.id === '' || typeof photoPost.id !== 'string') {
            return false;
        }
        if (photoPost.description === '' || typeof photoPost.description !== 'string' || photoPost.description.length > 200) {
            return false;
        }
        if (!(photoPost.createdAt instanceof Date) || photoPost.createdAt.toString() === "Invalid Date") {
            return false;
        }
        if (photoPost.author === '' || typeof photoPost.author !== 'string') {
            return false;
        }
        if (photoPost.photoLink === '' || typeof photoPost.photoLink !== 'string') {
            return false;
        }
        if (photoPost.likes === null) {
            return false;
        }
        return true;
    }

    get(id) {
        if (typeof id !== "string") {
            return undefined;
        }
        var found = this._posts.find(function (element) {
            return element.id === id;
        })
        if (!found) {
            return undefined;
        }
        return found;
    }

    remove(id) {
        if (typeof id !== "string") {
            return undefined;
        }
        if (!this.get(id)) {
            return false;
        }
        const remIndex = this._posts.indexOf(this.get(id));
        this._posts.splice(remIndex, 1);
        return true;
    }

    static isEmpty(someString) {
        return !someString.trim();
    }

    static _checkString(someString) {
        return typeof someString === 'string';
    }

    clear() {
        this._posts = [];
    }

    static _checkObject(post) {
        return !!post;
    }
}

let testCollection = new PostCollection(photoPosts, '');


