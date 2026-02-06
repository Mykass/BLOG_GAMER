const API_BASE_URL =
  "https://mykasgamesapi.mykael-lacerda.workers.dev/mykasgamesapi";

// Busca posts (com ou sem filtro)
export async function fetchPosts(filters = {}) {
  let url = `${API_BASE_URL}/posts`;

  if (filters.category) {
    url += `?category=eq.${filters.category}`;
  }

const res = await fetch(url);
if (!res.ok) {
  throw new Error(`API error: ${res.status}`);
}

return res.json();

}

// Busca post individual
export async function fetchPostById(id) {
  const res = await fetch(`${API_BASE_URL}/posts?id=eq.${id}&limit=1`);
  const data = await res.json();
  return data.length ? data[0] : null;
}
