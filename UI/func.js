const photoPosts = [
    {
        id: '1',
        description: 'Geographical Position: The Republic of Belarus is situated in the eastern part of Europe. It covers 207 600 sq km and stretches for 650 km from east to west and for 560 km from north to south.',
        createdAt: new Date('2019-03-10T14:10:00'),
        author: 'Author1',
        photoLink: 'Images/zasd.jpg',
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
        hashTags: ['213', '117 '],
        likes: []
    },
    {
        id: '4',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/EtoYa.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '5',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zasd.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '6',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zu.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '6',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/EtoYa.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '7',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zasd.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '8',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/EtoYa.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '9',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zasd.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '10',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/zu.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '11',
        description: '207 600 sq km and',
        createdAt: new Date('2019-03-10T14:10:03'),
        author: 'Author4',
        photoLink: 'Images/EtoYa.jpg',
        hashTags: [],
        likes: []
    },
    {
        id: '12',
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

    clear() {
        this._posts = [];
        this._user = "";
    }


    save() {
        localStorage.setItem('posts', JSON.stringify(this._posts));
    }

    restore() {
        if (!localStorage.getItem('posts')) {
            localStorage.clear();
            localStorage.setItem('posts', JSON.stringify(this._posts));
        }
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

    getPage(skip, top, filterConfig) {
        var toShow = this._posts.filter(function (x) { return x.state !== 'deleted'; });

        skip = skip || 0;
        top = top || 10;

        if (!filterConfig) {
            toShow.sort(PostCollection.compareTo);
            return toShow.slice(skip, skip + top);
        }

        if (filterConfig) {
            if (filterConfig.author) {
                toShow = toShow.filter(function (x) { return x.author === filterConfig.author; });
            }
            if (filterConfig.createdAt) {
                toShow = toShow.filter(function (x) { return (x.createdAt === filterConfig.createdAt); });
            }
            if (filterConfig.hashTags) {
                toShow = toShow.filter(function (x) {
                    return x.hashTags.indexOf(filterConfig.hashTags) !== -1;
                });
            }
            toShow.sort(PostCollection.compareTo);
            return toShow.slice(skip, skip + top);
        }
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

    edit(postID, editPost) {
        var post = this.get(postID);
        if (post != null && post.state === 'active') {
            if (editPost.description) {
                post.description = editPost.description;
            }
            if (editPost.photoLink) {
                post.photoLink = editPost.photoLink;
            }
            if (editPost.hashTags) {
                post.hashTags.splice(0, post.hashTags.length);
                for (var i = 0; i < editPost.hashTags.length; i++) {
                    post.hashTags[i] = editPost.hashTags[i];
                }
            }
            this.save();
            return true;
        }
        return false;
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

    static _checkObject(post) {
        return !!post;
    }
}

let testCollection = new PostCollection(photoPosts, '');
