export function renderPosts(posts) {
  const container = document.querySelector(".posts-grid");
  if (!container) return;

  container.innerHTML = "";

  if (!posts.length) {
    container.innerHTML = "<p>No posts found.</p>";
    return;
  }

  posts.forEach(post => {
    const article = document.createElement("article");
    article.className = "post-card";

    const imageHtml = post.image
      ? `<img src="${post.image}" alt="${post.title}" loading="lazy" />`
      : "";

    article.innerHTML = `
      <a href="/post.html?id=${encodeURIComponent(post.id)}" class="post-link">
        ${imageHtml}
        <div class="post-content">
          <time datetime="${post.date}">${post.date}</time>
          <h4>${post.title}</h4>
          <p>${post.excerpt}</p>
        </div>
      </a>
    `;

    container.appendChild(article);
  });
}
