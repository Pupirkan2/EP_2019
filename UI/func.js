(function() {

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
            hashTags: ['213','117'],
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

    function getPhotoPosts(skip, top, filterConfig) {
        if(!isInteger(skip) || !isInteger(top))
            return false;
        if(skip<0 || top <=0)
            return false;
        var arr = photoPosts.slice();
        var result = [];
        if(filterConfig != null){
            if('author' in filterConfig && (filterConfig.author instanceof String || typeof filterConfig.author === 'string')){ 
               for(var i = 0; i < arr.length; i++) { 
                 if (arr[i].author.includes(filterConfig.author)) { 
                    result.push(arr[i]); 
                } 
            }
                arr.splice(0,arr.length);
                for(var i = 0; i < result.length; i++) {
                    arr.push(result[i]);
                }
                result.splice(0, result.length);
            }
            if('hashTags' in filterConfig && Array.isArray(filterConfig.hashTags) && filterConfig.hashTags.length !== 0) {
                for(var i = 0; i < arr.length; i++) {
                    for(var j = 0; j < filterConfig.hashTags.length; j++){
                        if(arr[i].hashTags.indexOf(filterConfig.hashTags[j]) !== -1) {
                            if(j === filterConfig.hashTags.length - 1)
                                result.push(arr[i]);
                        }
                        else
                            break;

                    }
                }
                arr.splice(0, arr.length);
            }
            for(var k = 0; k < result.length; k++){
                arr.push(result[k]);
            }
        }
        result.splice(0, arr.length);
        arr.sort(compareDates);
        if(skip >= arr.length)
            return false;
        var max = arr.length;
        if(skip + top < arr.length)
            max = skip + top;
        for(var i = skip; i < max; i++){
            result.push(arr[i]);
        }
        return result;
    }

    function getPhotoPost(id) { 
        if (typeof (id) === "string") { 
            var num = parseInt(id); 
            if (num > 0 && num <= photoPosts.length) { 
                return photoPosts[num - 1]; 
            } 
            else { 
                return false; 
            } 
        } 
        else { 
            return false; 
        } 
    }
    function addPhotoPost(photoPost) {
        if(validatePhotoPost(photoPost)){
            photoPost.id = String(photoPosts.length + 1);
            photoPosts.push(photoPost);
            return true;
        }
        else
            return false;
    }

    function validatePhotoPost(photoPost) {
        if(!('author' in photoPost && 'photoLink' in photoPost && 'createdAt' in photoPost && 'id' in photoPost && 'description' in photoPost && 'hashTags' in photoPost))
            return false;
        if((photoPost.author instanceof String || typeof photoPost.author === 'string') && !isEmpty(photoPost.author)
            && (photoPost.photoLink instanceof String || typeof photoPost.photoLink === 'string') && !isEmpty(photoPost.photoLink)
            && photoPost.createdAt instanceof Date && photoPost.createdAt != null
            && (photoPost.description instanceof String || typeof photoPost.description === 'string') && photoPost.description.length < 200
            && (photoPost.id instanceof String || typeof photoPost.id === 'string') && !isEmpty(photoPost.id) && Array.isArray(photoPost.hashTags)){
            for(var i = 0; i < photoPost.hashTags.length; i++ ){
                if(!(photoPost.hashTags[i] instanceof String || typeof photoPost.hashTags[i] === 'string'))
                    return false;
            }
            return true;
        }
        else
            return false;

    }

    function editPhotoPost(id, photoPost){
        if(isInteger(id) && id > 0 && id <= photoPosts.length){
            var obj = photoPosts[id - 1];
            if('hashTags' in photoPost){
                obj.hashTags = photoPost.hashTags;
            }
            if('likes' in photoPost){   
                obj.likes = photoPost.likes;
            }
            if('photoLink' in photoPost){
                obj.photoLink = photoPost.photoLink;
            }
            if('description' in photoPost){
                obj.description = photoPost.description;
            }
            if(validatePhotoPost(obj)){
                photoPosts[id - 1] = obj;
                return true;
            }
            else
                return false;
        }
        else
            return false;
    }

    function removePhotoPost(id){
        if (typeof (id) === "string") { 
            var num = parseInt(id); 
            if (num > 0 && num <= photoPosts.length) { 
                return true; 
            } 
            else { 
                return false; 
            } 
        } 
        else { 
            return false; 
        } 
    }
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    function isInteger(num) {
        return (num ^ 0) === num;
    }

})();