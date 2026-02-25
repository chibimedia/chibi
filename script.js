/* ========== EDIT LINKS HERE ==========
Each entry must have a unique id (string), title, url, category, image path.
Image can be a local path like "assets/images/aaa.png" or a remote URL.
This package uses remote placeholder images by default to avoid 404s.
If image fails to load, a default placeholder is used automatically.
======================================= */

const LINKS = [
  { id: "m1", title: "Movie Link 1", url: "https://example.com/1", category: "movies", image: "https://picsum.photos/seed/m1/640/400" },
  { id: "m2", title: "Movie Link 2", url: "https://example.com/2", category: "movies", image: "https://picsum.photos/seed/m2/640/400" },
  { id: "m3", title: "Movie Link 3", url: "https://example.com/3", category: "movies", image: "https://picsum.photos/seed/m3/640/400" },

  { id: "a1", title: "Anime Link 1", url: "https://example.org/a1", category: "anime", image: "https://picsum.photos/seed/a1/640/400" },
  { id: "a2", title: "Anime Link 2", url: "https://example.org/a2", category: "anime", image: "https://picsum.photos/seed/a2/640/400" },

  { id: "l1", title: "Live TV 1", url: "https://livetv.example/1", category: "livetv", image: "https://picsum.photos/seed/l1/640/400" },

  { id: "g1", title: "Manga Link 1", url: "https://manga.example/1", category: "manga", image: "https://picsum.photos/seed/g1/640/400" },

  { id: "p1", title: "Paid App 1", url: "https://paid.example/1", category: "paidapps", image: "https://picsum.photos/seed/p1/640/400" }
];

/* Desired default category order and display labels */
const DEFAULT_CATEGORY_ORDER = [
  { key: "movies", label: "Movies / Shows" },
  { key: "anime", label: "Anime" },
  { key: "livetv", label: "Live TV" },
  { key: "manga", label: "Manga" },
  { key: "paidapps", label: "Paid Apps" }
];

/* localStorage keys */
const LS_HIDDEN = "chibi_hidden_links_v1";
const LS_CAT_ORDER = "chibi_cat_order_v1";

/* default fallback image (remote) — used if remote image fails */
const DEFAULT_IMAGE = "https://placekitten.com/640/400";

/* DOM */
const content = document.getElementById("content");
const searchEl = document.getElementById("search");
const manageBtn = document.getElementById("manageBtn");
const managePanel = document.getElementById("managePanel");
const closeManage = document.getElementById("closeManage");
const hiddenList = document.getElementById("hiddenList");
const categoryList = document.getElementById("categoryList");
const resetPrefs = document.getElementById("resetPrefs");

/* state from localStorage */
let hiddenLinks = JSON.parse(localStorage.getItem(LS_HIDDEN) || "[]");
let storedCatOrder = JSON.parse(localStorage.getItem(LS_CAT_ORDER) || "null");

/* compute category order (merge stored order with defaults and extras) */
function getCategoryOrder() {
  const allCats = Array.from(new Set(LINKS.map(l => l.category)));
  const defaultKeys = DEFAULT_CATEGORY_ORDER.map(d => d.key);
  let order = storedCatOrder && Array.isArray(storedCatOrder) ? storedCatOrder : defaultKeys.slice();

  allCats.forEach(c => {
    if (!order.includes(c)) order.push(c);
  });

  order = order.filter(c => allCats.includes(c));
  return order;
}

/* friendly label for a key */
function labelFor(key) {
  const match = DEFAULT_CATEGORY_ORDER.find(d => d.key === key);
  return match ? match.label : key.charAt(0).toUpperCase() + key.slice(1);
}

/* render everything (sections per category) */
function renderAll(query = "") {
  const q = query.trim().toLowerCase();
  content.innerHTML = "";

  const order = getCategoryOrder();

  if (order.length === 0) {
    content.innerHTML = `<p class="muted">No links configured. Edit script.js to add links.</p>`;
    return;
  }

  order.forEach(catKey => {
    const section = document.createElement("section");
    section.className = "section";

    const heading = document.createElement("h2");
    heading.textContent = labelFor(catKey);
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = LINKS
      .filter(l => l.category === catKey && !hiddenLinks.includes(l.id))
      .filter(l => {
        if (!q) return true;
        return l.title.toLowerCase().includes(q) || l.category.toLowerCase().includes(q);
      });

    if (items.length === 0) {
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = "No visible links in this category.";
      section.appendChild(p);
      content.appendChild(section);
      return;
    }

    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "card";

      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      const img = document.createElement("img");
      img.className = "thumb";
      img.alt = item.title;
      img.src = item.image || DEFAULT_IMAGE;
      img.onerror = function() { this.onerror = null; this.src = DEFAULT_IMAGE; };

      a.appendChild(img);

      const meta = document.createElement("div");
      meta.className = "meta";
      const t = document.createElement("div");
      t.className = "title";
      t.textContent = item.title;
      const c = document.createElement("div");
      c.className = "cat";
      c.textContent = labelFor(item.category);
      meta.appendChild(t);
      meta.appendChild(c);

      const actions = document.createElement("div");
      actions.className = "actions";
      const hideBtn = document.createElement("button");
      hideBtn.className = "btn";
      hideBtn.textContent = "Hide";
      hideBtn.title = "Hide this link (you can restore later)";
      hideBtn.onclick = (e) => {
        e.preventDefault();
        hideLink(item.id);
      };
      actions.appendChild(hideBtn);

      card.appendChild(a);
      card.appendChild(meta);
      card.appendChild(actions);

      grid.appendChild(card);
    });

    section.appendChild(grid);
    content.appendChild(section);
  });
}

/* hide link (persist) */
function hideLink(id) {
  if (!hiddenLinks.includes(id)) hiddenLinks.push(id);
  localStorage.setItem(LS_HIDDEN, JSON.stringify(hiddenLinks));
  renderAll(searchEl.value);
  renderHiddenList();
}

/* restore link */
function restoreLink(id) {
  hiddenLinks = hiddenLinks.filter(x => x !== id);
  localStorage.setItem(LS_HIDDEN, JSON.stringify(hiddenLinks));
  renderAll(searchEl.value);
  renderHiddenList();
}

/* render hidden list in manage panel */
function renderHiddenList(){
  hiddenList.innerHTML = "";
  if (hiddenLinks.length === 0) {
    hiddenList.innerHTML = `<div class="muted">No hidden links.</div>`;
    return;
  }
  hiddenLinks.forEach(id => {
    const item = LINKS.find(l => l.id === id);
    if (!item) return;
    const row = document.createElement("div");
    row.className = "cat-row";
    row.innerHTML = `<div style="flex:1">${item.title}<div class="muted" style="font-size:11px">${labelFor(item.category)}</div></div>`;
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Restore";
    btn.onclick = () => restoreLink(id);
    row.appendChild(btn);
    hiddenList.appendChild(row);
  });
}

/* render category reorder controls */
function renderCategoryList(){
  categoryList.innerHTML = "";
  const order = getCategoryOrder();
  order.forEach((key, idx) => {
    const row = document.createElement("div");
    row.className = "cat-row";
    const label = document.createElement("div");
    label.textContent = labelFor(key);
    row.appendChild(label);

    const controls = document.createElement("div");
    controls.style.display = "flex"; controls.style.gap = "6px";

    const up = document.createElement("button"); up.className = "btn"; up.textContent = "↑";
    up.disabled = idx === 0;
    up.onclick = () => { moveCategory(key, -1); };

    const down = document.createElement("button"); down.className = "btn"; down.textContent = "↓";
    down.disabled = idx === order.length - 1;
    down.onclick = () => { moveCategory(key, 1); };

    controls.appendChild(up); controls.appendChild(down);
    row.appendChild(controls);
    categoryList.appendChild(row);
  });
}

/* move category and persist */
function moveCategory(key, delta) {
  let order = getCategoryOrder();
  const idx = order.indexOf(key);
  if (idx === -1) return;
  const newIdx = idx + delta;
  if (newIdx < 0 || newIdx >= order.length) return;
  order.splice(idx, 1);
  order.splice(newIdx, 0, key);
  storedCatOrder = order;
  localStorage.setItem(LS_CAT_ORDER, JSON.stringify(storedCatOrder));
  renderCategoryList();
  renderAll(searchEl.value);
}

/* reset prefs (hidden + order) */
function resetPreferences(){
  if (!confirm("Reset your hidden links and category order? This only affects your browser.")) return;
  hiddenLinks = [];
  storedCatOrder = null;
  localStorage.removeItem(LS_HIDDEN);
  localStorage.removeItem(LS_CAT_ORDER);
  renderHiddenList();
  renderCategoryList();
  renderAll(searchEl.value);
}

/* Manage panel toggles */
manageBtn.addEventListener("click", () => {
  managePanel.classList.toggle("hidden");
  managePanel.setAttribute("aria-hidden", managePanel.classList.contains("hidden"));
  renderHiddenList();
  renderCategoryList();
});
closeManage.addEventListener("click", () => {
  managePanel.classList.add("hidden");
  managePanel.setAttribute("aria-hidden", "true");
});
resetPrefs.addEventListener("click", resetPreferences);

/* search */
searchEl.addEventListener("input", () => {
  renderAll(searchEl.value);
});

/* initial render */
renderHiddenList();
renderCategoryList();
renderAll("");
