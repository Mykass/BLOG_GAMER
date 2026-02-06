import { initNavigation, loadInitialPosts } from "./navigation.js";
import { init as initPostPage } from "./post.js";

document.addEventListener("DOMContentLoaded", async () => {
  initNavigation();

  const page = document.body.dataset.page;

  // páginas que DEVEM carregar posts dinâmicos (listagens)
  const postPages = ["news", "tips", "consoles", "qa"];

  if (postPages.includes(page)) {
    await loadInitialPosts();
  }

  // página de post individual
  if (page === "post") {
    await initPostPage();
  }

  // Newsletter (mantido)
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input").value;
      alert(`Thanks for subscribing with ${email}! (Demo)`);
      newsletterForm.reset();
    });
  }
});
