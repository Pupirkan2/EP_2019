var photoPosts = [
        {
            id: '1',
            description: 'Из всех диких зверей, которых мне доводилось видеть и наблюдать, самые диковинные и умные звери, несомненно, бобры. ',
            createdAt: new Date('2019-03-10T14:10:00'),
            author: 'Author1',
            photoLink: 'http://I_mage.by/photos/1',
            hashTags: ['213'],
            likes: []
        },
        {
            id: '2',
            description: 'Уже много лет назад побывал я в Лапландском заповеднике — на далеком севере нашей страны.',
            createdAt: new Date('2019-03-10T14:10:01'),
            author: 'Author2',
            photoLink: 'http://I_mage.by/photos/2',
            hashTags: [],
            likes: []
        },
        {
            id: '3',
            description: 'Я увидел лесной нетронутый край непуганых птиц, непуганого зверя.',
            createdAt: new Date('2019-03-10T14:10:02'),
            author: 'Author3',
            photoLink: 'http://I_mage.by/photos/3',
            hashTags: ['213','117       '],
            likes: []
        },
        {
            id: '4',
            description: 'По заповеднику запросто бродили медведи, паслись стада диких оленей.',
            createdAt: new Date('2019-03-10T14:10:03'),
            author: 'Author4',
            photoLink: 'http://I_mage.by/photos/4',
            hashTags: [],
            likes: []
        },
        {
            id: '5',
            description: 'По озеру плавали дикие лебеди, по лесным трущобам свистели и перепархивали рябчики.',
            createdAt: new Date('2019-03-10T14:10:04'),
            author: 'Author5',
            photoLink: 'http://I_mage.by/photos/5',
            hashTags: [],
            likes: []
        },
        {
            id: '6',
            description: 'Я поселился в маленьком домике, возле которого впадала в озеро река Верхняя Чуна.',
            createdAt: new Date('2019-03-10T14:10:05'),
            author: 'Author6',
            photoLink: 'http://I_mage.by/photos/6',
            hashTags: [],
            likes: []
        },
        {
            id: '7',
            description: 'В эту реку сотрудники заповедника недавно выпустили бобров, привезенных в клетках из воронежского бобрового заповедника. ',
            createdAt: new Date('2019-03-10T14:10:06'),
            author: 'Author7',
            photoLink: 'http://I_mage.by/photos/7',
            hashTags: [],
            likes: []
        },
        {
            id: '8',
            description: 'Бобры быстро освоились и со свойственным им трудолюбием начали устраивать на берегах реки свои жилища.',
            createdAt: new Date('2019-03-10T14:10:07'),
            author: 'Author8',
            photoLink: 'http://I_mage.by/photos/8',
            hashTags: [],
            likes: []
        },
        {
            id: '9',
            description: 'Бродя по берегам реки Верхняя Чуна, мы находили много свежих бобровых погрызов, поваленные деревья, которые бобры у самого корня подгрызали своими острыми, крепкими зубами.',
            createdAt: new Date('2019-03-10T14:10:08'),
            author: 'Author9',
            photoLink: 'http://I_mage.by/photos/9',
            hashTags: [],
            likes: []
        },
        {
            id: '10',
            description: 'Из обглоданных огрызков молодых деревьев бобры строили у воды свои высокие, скрепленные илом хатки с подземным выходом в проточную воду. ',
            createdAt: new Date('2019-03-10T14:10:09'),
            author: 'Author10',
            photoLink: 'http://I_mage.by/photos/10',
            hashTags: [],
            likes: []
        },
        {
            id: '11',
            description: 'На реке Верхней Чуне мне не удалось увидеть живых бобров.',
            createdAt: new Date('2019-03-10T14:10:10'),
            author: 'Author11',
            photoLink: 'http://I_mage.by/photos/11',
            hashTags: [],
            likes: []
        },
        {
            id: '12',
            description: 'Я видел лишь их следы, новые хатки и поваленные ими деревья.',
            createdAt: new Date('2019-03-10T14:10:11'),
            author: 'Author12',
            photoLink: 'http://I_mage.by/photos/12',
            hashTags: [],
            likes: []
        },
        {
            id: '13',
            description: 'Уже много позднее побывал я в воронежском бобровом заповеднике. ',
            createdAt: new Date('2019-03-10T14:10:12'),
            author: 'Author13',
            photoLink: 'http://I_mage.by/photos/13',
            hashTags: [],
            likes: []
        },
        {
            id: '14',
            description: 'Бобры жили там на воле, в лесной реке и на ее притоках.',
            createdAt: new Date('2019-03-10T14:10:13'),
            author: 'Author14',
            photoLink: 'http://I_mage.by/photos/14',
            hashTags: [],
            likes: []
        },
        {
            id: '15',
            description: 'Отловленных бобров сотрудники заповедника держали в просторных проволочных вольерах.',
            createdAt: new Date('2019-03-10T14:10:14'),
            author: 'Author15',
            photoLink: 'http://I_mage.by/photos/15',
            hashTags: [],
            likes: []
        },
        {
            id: '16',
            description: 'Привыкнув к ухаживавшим за ними людям, бобры не страшились выходить днем из построенных для них деревянных хаток.',
            createdAt: new Date('2019-03-10T14:10:15'),
            author: 'Author16',
            photoLink: 'http://I_mage.by/photos/16',
            hashTags: [],
            likes: []
        },
        {
            id: '17',
            description: 'Усевшись на задние лапы, держа в передних обрубки ивовых ветвей и стволов, они на наших глазах быстро, как на токарном станке, сгрызали с них зеленоватую кору.',
            createdAt: new Date('2019-03-10T14:10:16'),
            author: 'Author17',
            photoLink: 'http://I_mage.by/photos/17',
            hashTags: [],
            likes: []
        },
        {
            id: '18',
            description: 'В отдельном помещении, с устроенными у стен клетушками-загонами, жили ручные бобры. ',
            createdAt: new Date('2019-03-10T14:10:17'),
            author: 'Author18',
            photoLink: 'http://I_mage.by/photos/18',
            hashTags: [],
            likes: []
        },
        {
            id: '19',
            description: 'За ними ухаживали женщины, кормили их и поили.',
            createdAt: new Date('2019-03-10T14:10:18'),
            author: 'Author19',
            photoLink: 'http://I_mage.by/photos/19',
            hashTags: [],
            likes: []
        },
        {
            id: '20',
            description: ' Некоторых бобров, отличавшихся кротким нравом, можно было брать в руки. ',
            createdAt: new Date('2019-03-10T14:10:19'),
            author: 'Author20',
            photoLink: 'http://I_mage.by/photos/20',
            hashTags: [],
            likes: []
        }
    ];

class PostCollection {

    _posts;

    constructor(postsList = []) { 
        this._posts = PostCollection.slice(); 
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
        photoPosts.sort(PostCollection.compareDates); 
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
        if(PostCollection.validatePhotoPost(photoPost)){
            photoPost.id = "" + (photoPosts.length + 1);
            photoPosts.push(photoPost);
            return true;
        }
        else
            return false;
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
}


const testPost = {
  id: '1',
  description: 'la-la-la',
  creationDate: new Date(),
  author: 'Nikita',
  photoLink: 'http://I_mage.by/photos/1',
  likes: [],
  hashTags: [],
};


const test = new PostCollection(photoPosts);
if (!test.get(404)) console.log('Post not found...');
else {
  console.log('Post: ');
  console.log(test.get(404));
}
if (test.add(testPost)) {
  console.log('Post added');
} else {
  console.log('Post invalid');
}
if (PostCollection._validate(
  {
    id: 30, author: 'Author30', photoLink: 'http://I_mage.by/photos/30', description: '30texT', creationDate: new Date(),
  },
)) {
  console.log('Post valid');
} else {
  console.log('Post invalid');
}
if (test.removePhotoPost(3)) {
  console.log('Post deleted');
} else {
  console.log('Post not found...');
}
if (!test.getPage(0, 20, { hashTags: ['#ASD'] })) {
  console.log('Posts not found...');
}
console.log('All posts: ');
console.log(test.getPage(0, 20));
test.clear();
console.log(test.getPage(0, 20));
console.log(test.addAll(photoPosts));



