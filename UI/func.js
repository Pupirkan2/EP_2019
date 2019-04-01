var photoPosts = [
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
            description: '',
            createdAt: new Date('2019-03-10T14:10:01'),
            author: 'Author2',
            photoLink: 'Images/zasd.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '3',
            description: '',
            createdAt: new Date('2019-03-10T14:10:02'),
            author: 'Author3',
            photoLink: 'Images/involker.jpg',
            hashTags: ['213','117       '],
            likes: []
        },
        {
            id: '4',
            description: '',
            createdAt: new Date('2019-03-10T14:10:03'),
            author: 'Author4',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '5',
            description: '',
            createdAt: new Date('2019-03-10T14:10:04'),
            author: 'Author5',
            photoLink: 'Images/involker.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '6',
            description: '',
            createdAt: new Date('2019-03-10T14:10:05'),
            author: 'Author6',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '7',
            description: '',
            createdAt: new Date('2019-03-10T14:10:06'),
            author: 'Author7',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '8',
            description: '',
            createdAt: new Date('2019-03-10T14:10:07'),
            author: 'Author8',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '9',
            description: '',
            createdAt: new Date('2019-03-10T14:10:08'),
            author: 'Author9',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '10',
            description: 'lalalal ',
            createdAt: new Date('2019-03-10T14:10:09'),
            author: 'Author10',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '11',
            description: '',
            createdAt: new Date('2019-03-10T14:10:10'),
            author: 'Author11',
            photoLink: 'Images/zu.jpg',
            hashTags: [],
            likes: []
        }
    ];

class PostCollection {


    constructor(posts, user) {
        this._photoPosts = [];
        this._user = user;
        posts.forEach(post => this.addPhotoPost(post));
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

    getPage(skip = 0, top = 10, filterConfig) {
        const array = []; 
        photoPosts.sort(PostCollection._compareDates); 
        if (!filterConfig) { 
            for (let i = skip; i < top + skip; i++) 
                array.push(photoPosts[i]); 
            return array; 
        } 
        else { 
            for (let i = 0; i < photoPosts.length; i++) { 
                if (((filterConfig.author && photoPosts[i].author.includes(filterConfig.author)) || !filterConfig.author) && 
                    ((filterConfig.fromDate && filterConfig.toDate && PostCollection.datesEqual(photoPosts[i], filterConfig)) || !filterConfig.fromDate || !filterConfig.toDate) && 
                    ((filterConfig.hashTags && PostCollection.isContainHashTag(photoPosts[i], filterConfig)) || !filterConfig.hashTags)) 
                    array.push(photoPosts[i]); 
            } 
            return array.slice(skip, skip + top); 
        } 
    } 

    add(photoPost) {
        if(PostCollection._validate(photoPost)){
            photoPost.id = "" + (photoPosts.length + 1);
            photoPosts.push(photoPost);
            return true;
        }
        else
            return false;
    }
    
    addAll(posts){
        if(posts){
            const self = this;
            const failedValidation = [];
            posts.forEach(function(item){
                if(!self.add(item)){
                    failedValidation.push(item);
                }
            });
            return failedValidation;
        }
        return posts;
    }

    static _validate(photoPost) { 
        if (!photoPost){ 
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
        if (!(photoPost.createdAt instanceof Date) || photoPost.createdAt.toString() === "Invalid Date"){ 
            return false; 
        } 
        if (photoPost.author === '' || typeof photoPost.author !== 'string'){ 
            return false; 
        } 
        if (photoPost.photoLink === '' || typeof photoPost.photoLink !== 'string'){ 
            return false; 
        } 
        if (photoPost.likes === null){ 
            return false; 
        } 
        return true; 
    }

    edit(id, photoPost) { 
        if (!this.get(id)) { 
            return false; 
        } 
        let obj=this.get(id); 
        if ('hashTags' in photoPost) { 
            obj.hashTags = photoPost.hashTags; 
        } 
        if ('photoLink' in photoPost) { 
            obj.photoLink = photoPost.photoLink; 
        } 
        if ('description' in photoPost) { 
            obj.description = photoPost.description; 
        } 
        if (!PostList.validate(obj)) 
            return false; 
        this.get(id)=== obj; 
        return true; 
    }

    remove(id) { 
        if (typeof id !== "string") { 
            return undefined; 
        } 
        var num = parseInt(id); 
        if (!(num > 0 && num <= photoPosts.length)) { 
            return false; 
        } 
        const remIndex = photoPosts.indexOf(this.get(id)); 
        photoPosts.splice(remIndex, 1); 
        return true; 
    } 

    static getAuthors() {
        let array = [];
        for (let i = 0; i < photoPosts.length; i++)
                array.push(photoPosts[i].author);
        return Array.from(new Set(array));
    }
    
    clear() { 
        this._posts = []; 
    } 

    static _compareDates(a, b) {
        return b.createdAt.getTime() - a.createdAt.getTime();
    }

    static _datesEqual(obj1, obj2) { 
        if (((obj1.createdAt.getTime() - obj2.fromDate.getTime()) >= 0) && 
            ((obj2.toDate.getTime() - obj1.createdAt.getTime()) >= 0)) 
            return true; 
        return false; 
    } 

    static _isContainHashTag(obj1, obj2) { 
        let count = 0; 
        for (let i = 0; i < obj1.hashtags.length; i++) { 
            for (let j = 0; j < obj2.hashtags.length; j++) { 
                if (obj1.hashtags[i] === obj2.hashtags[j]) 
                    count++; 
            } 
        } 
        if (count === obj2.hashtags.length) 
            return true; 
        return false; 
    } 

    static _checkObject(post) {
        return !!post;
    }
}

const testCollection = new PostCollection([],'Nikita');



