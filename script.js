/* === EDIT LINKS HERE ===
   Each entry: { title, url, category, image }
   Put image files in assets/images/ and reference them like: "assets/images/name.png"
*/
const LINKS = [
  { title: "Example — Movies", url: "https://example.com", category: "movies", image: "assets/images/sample1.png" },
  { title: "Example — Anime",  url: "https://example.org", category: "anime",  image: "assets/images/sample2.png" },
  { title: "Example — Tools",  url: "https://example.net", category: "tools",  image: "assets/images/sample3.png" }
];

// ----- page elements
const grid = document.getElementById('grid');
const searchEl = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');

// build category list (unique)
function buildCategories(){
  const cats = Array.from(new Set(LINKS.map(l => l.category))).sort();
  cats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat[0].toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });
}

// render cards
function renderList({q = '', category = 'all'} = {}){
  const ql = q.trim().toLowerCase();
  grid.innerHTML = '';
  const filtered = LINKS.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    if (ql && !(item.title.toLowerCase().includes(ql) || item.category.toLowerCase().includes(ql))) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:#9aa4b2; grid-column:1/-1; text-align:center; padding:18px;">No links found.</p>';
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    const anchor = document.createElement('a');
    anchor.href = item.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = item.title;
    img.src = item.image;
    // graceful fallback if image fails to load
    img.onerror = function(){
      this.onerror = null;
      const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='#0a0a0d'/><text x='50%' y='50%' fill='#9aa4b2' font-family='Arial' font-size='24' dominant-baseline='middle' text-anchor='middle'>${item.title}</text></svg>`);
      this.src = 'data:image/svg+xml;utf8,' + svg;
    };

    anchor.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'meta';
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = item.title;
    const cat = document.createElement('div');
    cat.className = 'cat';
    cat.textContent = item.category;
    meta.appendChild(title);
    meta.appendChild(cat);

    card.appendChild(anchor);
    card.appendChild(meta);
    grid.appendChild(card);
  });
}

// events
searchEl.addEventListener('input', () => {
  renderList({ q: searchEl.value, category: categoryFilter.value });
});
categoryFilter.addEventListener('change', () => {
  renderList({ q: searchEl.value, category: categoryFilter.value });
});

// init
buildCategories();
renderList({ q: '', category: 'all' });
