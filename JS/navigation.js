import { fetchPosts } from "./api.js";
import { renderPosts } from "./renderPosts.js";

// Carrega posts conforme a página atual
export async function loadInitialPosts() {
  const page = document.body.dataset.page;

  const posts = page
    ? await fetchPosts({ category: page })
    : await fetchPosts();

  renderPosts(posts);
}

// Filtros da sidebar
export function initSidebarFilters() {
  // Seleciona elementos que declaram `data-category` dentro de .topics
  const buttons = document.querySelectorAll('.topics [data-category]');

  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const category = btn.dataset.category;
      const posts = await fetchPosts({ category });
      renderPosts(posts);
    });
  });
}

// Inicialização geral
export function initNavigation() {
  initSidebarFilters();
}
