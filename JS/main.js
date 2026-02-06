import { initNavigation, loadInitialPosts } from "./navigation.js";

document.addEventListener("DOMContentLoaded", async () => {
initNavigation();

const page = document.body.dataset.page;

// páginas que DEVEM carregar posts dinâmicos
const postPages = ["news", "tips", "consoles", "qa"];

if (postPages.includes(page)) {
  loadInitialPosts();
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
