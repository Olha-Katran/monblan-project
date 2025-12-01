fetch('./src/data/posts.json')
  .then(response => response.json())
  .then(postsData => {
    const postsList = document.getElementById("postsList");

    postsData.forEach(post => {
      const postItem = document.createElement("div");
      postItem.className = "post-item";

      postItem.innerHTML = `
        <div class="post-item__header">
          <img class="post-item__media" src="${post.media}" alt="Post Image">
          <div class="post-item__content">
            <h4 class="post-item__title">${post.title}</h4>
            <div class="post-item__stats">
              <p class="post-item__likes">
                <img src="./assets/img/heart-icon.svg" alt="likes" />
                ${post.likes}
              </p>
              <p class="post-item__comments">
                <img src="./assets/img/comment-icon.svg" alt="comments" />
                ${post.comments}
              </p>
            </div>
          </div>
        </div>

        <div class="post-item__meta">
          <h4 class="post-item__title">${post.metaDate}</h4>
          <div class="post-item__stats">
            <p class="post-item__likes">
              <img src="./assets/img/heart-icon.svg" alt="likes" />
              ${post.metaLikes}
            </p>
            <p class="post-item__comments">
              <img src="./assets/img/comment-icon.svg" alt="comments" />
              ${post.metaComments}
            </p>
          </div>
        </div>

        <div class="post-item__info">
          <h4 class="post-item__title">${post.infoTitle}</h4>
          <p class="post-item__info-date">${post.infoDate}</p>
        </div>
      `;

      postsList.appendChild(postItem);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));