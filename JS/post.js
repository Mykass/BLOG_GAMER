import { fetchPostById } from "./api.js";

export async function init() {
  const container = document.getElementById("post-container");

  if (!container) {
    console.error("Container #post-container não encontrado.");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");

  if (!idParam) {
    container.innerHTML = "<p>Post não encontrado.</p>";
    return;
  }

  const id = Number(idParam);

  if (Number.isNaN(id)) {
    container.innerHTML = "<p>Post inválido.</p>";
    return;
  }

  try {
    const post = await fetchPostById(id);

    if (!post) {
      container.innerHTML = "<p>Post não encontrado.</p>";
      return;
    }

    container.innerHTML = `
      <article class="post">
        <time datetime="${post.date}">${post.date}</time>
        <h1>${post.title}</h1>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" />` : ""}
        <p>${post.content}</p>
      </article>
    `;
  } catch (error) {
    console.error("Erro ao carregar post:", error);
    container.innerHTML = "<p>Erro ao carregar o post.</p>";
  }
}
