/*Не получилось адекватно все настроить...доделаю, а вероятнее всего переделаю.
P.S. Вероятнее всего не до конца правильно понял задание, а времени оставалось мало,
так что если Вам покажется, что есть сходства с чьим-то кодом: старался сделать свое на основе чужого(доделаю/переделаю)*/


class View {
    static viewPosts(posts) {
        const containerEl = document.querySelector('.all-photos');
        posts.forEach((post) => {
            containerEl.prepend(View._buildPost(post));
        });
    }   
    
    static addPost(post) {
        document.querySelector('.all-photos').prepend(View._buildPost(post));
    }
    static removePost(id) {
        document.getElementById(id).remove();
    }

    static edit(id, post) {
        const photoPost = document.getElementById(id);
        if (post.photoLink) {
            photoPost.querySelector('img').setAttribute('src', `${post.photoLink}`);
        }
        if (post.hashTags) {
            const tags = photoPost.querySelector('.hashtags');
            tags.innerHTML = `${post.hashTags.map(tag => `<a href="#">${tag} </a>`).join('')}`;
        }
        if (post.description) {
            photoPost.querySelector('span').innerHTML = `${post.description}`;
        }
    }

    static _buildPost(post) {
        const postEl = document.createElement('article');
        postEl.setAttribute('id', post.id);
        postEl.classList.add('photo-post');
        postEl.innerHTML = ` <div class="row">
              <img src="${post.photoLink}">
              <div><button class="btn btn-primary" type="button"><img src="Images/like.png"></button> </div>
              <span class="Information"> ${post.description}</span>
              <div class="tour-row">
              </div>
              <div>
              <div class="tour-row"><p>${post.author}</p></div>
              <p class="tour-row">${post.createdAt}</p>
              </div>
              <div class="tour-row">
              </div>   
              <span class="tour-row" > <p>${post.hashTags.map(tag => `<a href="#">${tag} </a>`).join('')}<p>
              </span>
              </div>
              </nav>
              </div>`;
        return postEl;
    }
}
