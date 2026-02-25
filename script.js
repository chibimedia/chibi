/* === EDIT LINKS HERE === */
const LINKS = [
  { title: "Example A", url: "https://example.com", category: "movies", image: "assets/images/sample1.png" },
  { title: "Example B", url: "https://example.org", category: "movies", image: "assets/images/sample2.png" },
  { title: "Example C", url: "https://example.net", category: "anime",  image: "assets/images/sample3.png" }
];

/* Optional: Control category order manually */
const CATEGORY_ORDER = ["movies","anime","tv","apps","tools","other"];

const grid = document.getElementById('grid');
const searchEl = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');

/* Sort alphabetically */
LINKS.sort((a,b) => a.title.localeCompare(b.title));

function buildCategories(){
  let cats = Array.from(new Set(LINKS.map(l => l.category)));

  cats.sort((a,b) => {
    const ai = CATEGORY_ORDER.indexOf(a);
    const bi = CATEGORY_ORDER.indexOf(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  cats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });
}

function renderList({q = '', category = 'all'} = {}){
  const ql = q.trim().toLowerCase();
  grid.innerHTML = '';

  const filtered = LINKS.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    if (ql && !(item.title.toLowerCase().includes(ql) || item.category.toLowerCase().includes(ql))) return false;
    return true;
  });

  if (!filtered.length){
    grid.innerHTML = '<p style="color:#9aa4b2; grid-column:1/-1; text-align:center; padding:20px;">No results.</p>';
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">
        <img class="thumb" src="${item.image}" alt="${item.title}">
        <div class="meta">
          <div class="title">${item.title}</div>
          <div class="cat">${item.category}</div>
        </div>
      </a>
    `;

    grid.appendChild(card);
  });
}

searchEl.addEventListener('input', () => {
  renderList({ q: searchEl.value, category: categoryFilter.value });
});

categoryFilter.addEventListener('change', () => {
  renderList({ q: searchEl.value, category: categoryFilter.value });
});

buildCategories();
renderList({ q:'', category:'all' });
