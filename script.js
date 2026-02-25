/* ==============================================
   CHIBI — script.js
   Link data + UI logic (no popup injections)
============================================== */

const CATEGORIES = [
  {
    "id": "movies",
    "name": "Movies & Shows",
    "sites": [
      {"name":"1Shows","url":"https://www.1shows.nl/","logo":"./logo/movies_shows/1shows.png","enabled":true},
      {"name":"1Flex","url":"https://www.1flex.nl/","logo":"./logo/movies_shows/1flex.png","enabled":true},
      {"name":"RgShows","url":"https://www.rgshows.ru/","logo":"./logo/movies_shows/rgshows.png","enabled":true},
      {"name":"AlienFlix","url":"https://alienflix.net/","logo":"./logo/movies_shows/alienflix.png","enabled":true},
      {"name":"FlickyStream","url":"https://flickystream.ru/","logo":"./logo/movies_shows/flickystream.png","enabled":true},
      {"name":"RiveStream","url":"https://rivestream.org/","logo":"./logo/movies_shows/rivestream.png","enabled":true},
      {"name":"CinemaBZ","url":"https://cinema.bz/","logo":"./logo/movies_shows/cinemabz.png","enabled":true},
      {"name":"Spenflix","url":"https://watch.spencerdevs.xyz/","logo":"./logo/movies_shows/spenflix.png","enabled":true},
      {"name":"FilmCave","url":"https://filmcave.ru/","logo":"./logo/movies_shows/filmcave.png","enabled":true},
      {"name":"Corsflix","url":"https://watch.corsflix.net/","logo":"./logo/movies_shows/corsflix.png","enabled":true},
      {"name":"StreamX","url":"https://streamex.net/","logo":"./logo/movies_shows/streamx.png","enabled":true},
      {"name":"Filmex","url":"https://filmex.to/","logo":"./logo/movies_shows/filmex.png","enabled":true},
      {"name":"Cinezo","url":"https://www.cinezo.net/","logo":"./logo/movies_shows/cinezo.png","enabled":true},
      {"name":"Cineby","url":"https://www.cineby.gd/","logo":"./logo/movies_shows/cineby.png","enabled":true},
      {"name":"MyFlixerz","url":"https://myflixerz.to/","logo":"./logo/movies_shows/myflixerz.png","enabled":true},
      {"name":"SFlix","url":"https://sflix.fi/","logo":"./logo/movies_shows/sflix.png","enabled":true},
      {"name":"Hdtodayz","url":"https://hdtodayz.to/","logo":"./logo/movies_shows/hdtodayz.png","enabled":true},
      {"name":"Nepu","url":"https://nepu.to/","logo":"./logo/movies_shows/nepu.png","enabled":true},
      {"name":"FMovies","url":"https://fmovies-hd.to/home/","logo":"./logo/movies_shows/fmovies.png","enabled":true},
      {"name":"Wooflix","url":"https://nunflix.li/","logo":"./logo/movies_shows/wooflix.png","enabled":true},
      {"name":"Xprime","url":"https://xprime.stream/","logo":"./logo/movies_shows/xprime.png","enabled":true},
      {"name":"Hexa","url":"https://hexa.su/","logo":"./logo/movies_shows/hexa.png","enabled":true},
      {"name":"SmashyStream","url":"https://smashystream.xyz/","logo":"./logo/movies_shows/smashystream.png","enabled":true},
      {"name":"Flixway","url":"https://flixway.pro/","logo":"./logo/movies_shows/flixway.png","enabled":true}
    ]
  },
  {
    "id": "anime",
    "name": "Anime",
    "sites": [
      {"name":"Miruro","url":"https://www.miruro.to","logo":"./logo/anime/miruro.png","enabled":true},
      {"name":"HiAnime","url":"https://hianime.to/home","logo":"./logo/anime/hianime.png","enabled":true},
      {"name":"Enma","url":"https://www.enma.lol","logo":"./logo/anime/enma.png","enabled":true},
      {"name":"animepahe","url":"https://animepahe.si/","logo":"./logo/anime/animepahe.png","enabled":true},
      {"name":"Animetsu","url":"https://animetsu.bz","logo":"./logo/anime/animetsu.png","enabled":true},
      {"name":"Aniwatch","url":"https://aniwatchtv.to/home","logo":"./logo/anime/aniwatch.png","enabled":true},
      {"name":"Kaido","url":"https://kaido.to/home","logo":"./logo/anime/kaido.png","enabled":true},
      {"name":"Anicrush","url":"https://anicrush.to/home","logo":"./logo/anime/anicrush.png","enabled":true},
      {"name":"KickAssAnime","url":"https://kaa.to/","logo":"./logo/anime/kickassanime.png","enabled":true},
      {"name":"AnimeKai","url":"https://animekai.to/home","logo":"./logo/anime/animekai.png","enabled":true},
      {"name":"FAnime","url":"https://fanime.tv/","logo":"./logo/anime/fanime.png","enabled":true}
    ]
  },
  {
    "id": "manga",
    "name": "Manga",
    "sites": [
      {"name":"MangaBall","url":"https://mangaball.net/","logo":"./logo/manga/mangaball.png","enabled":true},
      {"name":"Atsu","url":"https://atsu.moe/","logo":"./logo/manga/atsumaru.png","enabled":true},
      {"name":"Kagane","url":"https://kagane.org/","logo":"./logo/manga/kagane.png","enabled":true},
      {"name":"Comick","url":"https://comick.dev/","logo":"./logo/manga/comick.png","enabled":true},
      {"name":"MangaDex","url":"https://mangadex.org/","logo":"./logo/manga/mangadex.png","enabled":true},
      {"name":"Mangago","url":"https://mangago.me/","logo":"./logo/manga/mangago.png","enabled":true},
      {"name":"MangaFire","url":"https://mangafire.to/home","logo":"./logo/manga/mangafire.png","enabled":true},
      {"name":"AllManga","url":"https://allmanga.to/manga?cty=ALL","logo":"./logo/manga/allmanga.png","enabled":true},
      {"name":"MangaKakalot","url":"https://www.mangakakalot.gg/","logo":"./logo/manga/mangakakalot.png","enabled":true},
      {"name":"AsuraComic","url":"https://asuracomic.net/","logo":"./logo/manga/asuracomic.png","enabled":true},
      {"name":"ReadComicOnline","url":"https://readcomiconline.li/","logo":"./logo/manga/readcomiconline.png","enabled":true},
      {"name":"MangaHub","url":"https://mangahub.io/","logo":"./logo/manga/mangahub.png","enabled":true},
      {"name":"MangaPark","url":"https://mangapark.io/","logo":"./logo/manga/mangapark.png","enabled":true},
      {"name":"WeebCentral","url":"https://weebcentral.com/","logo":"./logo/manga/weebcentral.png","enabled":true},
      {"name":"MangaKatana","url":"https://mangakatana.com/","logo":"./logo/manga/mangakatana.png","enabled":true},
      {"name":"AnimeZ","url":"https://likemanga.ink/","logo":"./logo/anime/animez.png","enabled":true}
    ]
  },
  {
    "id": "livetv",
    "name": "Live TV & Sports",
    "sites": [
      {"name":"TheTvApp","url":"https://thetvapp.to","logo":"./logo/livetv/tvappto.png","enabled":true},
      {"name":"TV247","url":"https://tv247.us/all-channels/","logo":"./logo/livetv/tv247.png","enabled":true},
      {"name":"TheDaddy","url":"https://dlhd.dad/","logo":"./logo/livetv/thedaddy.png","enabled":true},
      {"name":"DaddyHD","url":"https://daddyhd.nl/","logo":"./logo/livetv/daddyhd.png","enabled":true},
      {"name":"NTVStream","url":"https://ntvstream.cx/","logo":"./logo/livetv/ntvstream.png","enabled":true},
      {"name":"PublicIPTV","url":"https://publiciptv.com/","logo":"./logo/livetv/publiciptv.png","enabled":true},
      {"name":"Sport+","url":"https://en12.sportplus.live/","logo":"https://cdn.apigodata.com/sp-imgs/logo.svg","enabled":true},
      {"name":"StreamEast","url":"https://xstreameast.com/","logo":"./logo/livetv/streameast.png","enabled":true},
      {"name":"iStreamEast","url":"https://istreameast.app/","logo":"./logo/livetv/istreameast.png","enabled":true},
      {"name":"SportSurge","url":"https://v2.sportsurge.net/","logo":"./logo/livetv/streamsurge.png","enabled":true},
      {"name":"TV Garden","url":"https://tv.garden/","logo":"./logo/livetv/tvgarden.png","enabled":true},
      {"name":"TOTV","url":"http://totv.org/tv/usa/","logo":"./logo/livetv/totv.png","enabled":true},
      {"name":"RiveStream Sports","url":"https://rivestream.org/livesports/","logo":"./logo/movies_shows/rivestream.png","enabled":true},
      {"name":"1Flex Live","url":"https://www.1flex.ru/live-tv","logo":"./logo/movies_shows/1flex.png","enabled":true},
      {"name":"GlobeTV","url":"https://globetv.app/","logo":"./logo/livetv/globetv.png","enabled":true}
    ]
  },
  {
    "id": "paid",
    "name": "Paid Services",
    "sites": [
      {"name":"Disney+","url":"https://www.disneyplus.com/identity/login/","logo":"./logo/paid_apps/disney+.png","enabled":true},
      {"name":"Shudder","url":"https://www.shudder.com/","logo":"./logo/paid_apps/shudder.png","enabled":true},
      {"name":"Hulu","url":"https://auth.hulu.com/web/login/","logo":"./logo/paid_apps/hulu.png","enabled":true},
      {"name":"Netflix","url":"https://www.netflix.com/","logo":"./logo/paid_apps/netflix.png","enabled":true},
      {"name":"Viki","url":"https://www.viki.com/","logo":"./logo/paid_apps/viki.png","enabled":true},
      {"name":"MAX","url":"https://www.max.com/","logo":"https://www.hbomax.com/img/hbomax/logo_nav_bar.png","enabled":true},
      {"name":"Apple TV+","url":"https://tv.apple.com/","logo":"./logo/paid_apps/appletv.png","enabled":true},
      {"name":"Amazon Prime","url":"https://www.amazon.com/gp/video/collection/IncludedwithPrime","logo":"https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg","enabled":true},
      {"name":"Paramount+","url":"https://www.paramountplus.com/account/signin/","logo":"https://wwwimage-us.pplusstatic.com/base/files/cbs_page_attribute/pplus_logo_white.svg?v=1.0","enabled":true},
      {"name":"Crunchyroll","url":"https://sso-v2.crunchyroll.com/login","logo":"./logo/paid_apps/cruncyroll.png","enabled":true},
      {"name":"MGM+","url":"https://www.mgmplus.com/","logo":"./logo/paid_apps/mgm+.png","enabled":true},
      {"name":"Peacock","url":"https://www.peacocktv.com/start","logo":"./logo/paid_apps/Peacock.png","enabled":true},
      {"name":"AMC+","url":"https://www.amcplus.com/login","logo":"./logo/paid_apps/amc+.png","enabled":true}
    ]
  },
  {
    "id": "apps",
    "name": "Apps",
    "sites": [
      {"name":"Playtorrio","url":"https://playtorrio.pages.dev/","logo":"./logo/apps/playtorrio.png","enabled":true},
      {"name":"OnStream APKs","url":"https://onstreamapks.app/","logo":"./logo/apps/onstream.png","enabled":true},
      {"name":"HDO Box","url":"https://hdobox.net/","logo":"./logo/apps/hdobox.png","enabled":true},
      {"name":"BeeTV","url":"https://beetv.download/","logo":"./logo/apps/beetv.png","enabled":true},
      {"name":"MovieBox","url":"https://themoviebox.org/download-app","logo":"./logo/apps/moviebox.png","enabled":true},
      {"name":"NetMirror","url":"https://netmirror.gg/2/en","logo":"./logo/apps/netmirror.png","enabled":true},
      {"name":"PikaShow","url":"https://pikashowtv.in/","logo":"./logo/apps/pikashow.png","enabled":true}
    ]
  }
];

/* ── Build flat LINKS array, resolving local logo paths to TBCPL raw URLs ── */
const TBCPL_RAW = 'https://raw.githubusercontent.com/N3rdmade/TBCPL/main/logo/';
const LINKS = [];

CATEGORIES.forEach(cat => {
  cat.sites.forEach(s => {
    if (!s.enabled) return;
    const logo = s.logo
      ? s.logo.replace(/^\.\/logo\//, TBCPL_RAW)
      : '';
    LINKS.push({
      id: cat.id + '_' + (s.name || '').replace(/\s+/g, '_').toLowerCase(),
      title: s.name,
      url: s.url,
      category: cat.id,
      image: logo
    });
  });
});

/* ── Constants ── */
const DEFAULT_CATEGORY_ORDER = CATEGORIES.map(c => c.id);
const LS_HIDDEN    = 'chibi_hidden_v4';
const LS_CAT_ORDER = 'chibi_cat_order_v4';
const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="130" height="80"%3E%3Crect width="130" height="80" fill="%23040f1a"/%3E%3Ctext x="65" y="45" text-anchor="middle" font-family="monospace" font-size="11" fill="%233a6b80"%3E[no image]%3C/text%3E%3C/svg%3E';

/* ── DOM refs ── */
const $  = id => document.getElementById(id);
const content      = $('content');
const searchEl     = $('search');
const manageBtn    = $('manageBtn');
const managePanel  = $('managePanel');
const closeManageBtn = $('closeManage');
const hiddenListEl = $('hiddenList');
const categoryListEl = $('categoryList');
const resetPrefsBtn  = $('resetPrefs');
const qrModal      = $('qrModal');
const qrImage      = $('qrImage');
const btcAddr      = $('btcAddr');

/* ── State ── */
let hiddenLinks  = JSON.parse(localStorage.getItem(LS_HIDDEN)    || '[]');
let storedOrder  = JSON.parse(localStorage.getItem(LS_CAT_ORDER) || 'null');

/* ── Helpers ── */
function esc(s) {
  return String(s||'').replace(/[&<>"']/g, m =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])
  );
}

function getCatOrder() {
  let order = (storedOrder && Array.isArray(storedOrder))
    ? storedOrder.slice()
    : DEFAULT_CATEGORY_ORDER.slice();
  const all = [...new Set(LINKS.map(l => l.category))];
  all.forEach(c => { if (!order.includes(c)) order.push(c); });
  return order.filter(c => all.includes(c));
}

function labelFor(key) {
  const cat = CATEGORIES.find(c => c.id === key);
  return cat ? cat.name : key.charAt(0).toUpperCase() + key.slice(1);
}

/* ── Render ── */
function renderAll(query = '') {
  const q = query.trim().toLowerCase();
  content.innerHTML = '';

  getCatOrder().forEach(catKey => {
    const items = LINKS
      .filter(l => l.category === catKey && !hiddenLinks.includes(l.id))
      .filter(l => !q ||
        l.title.toLowerCase().includes(q) ||
        labelFor(l.category).toLowerCase().includes(q)
      );

    if (items.length === 0) return; // hide empty categories during search

    const section = document.createElement('section');
    section.className = 'section';

    // Section header with line + count
    const header = document.createElement('div');
    header.className = 'section-header';
    const h2 = document.createElement('h2');
    h2.textContent = labelFor(catKey);
    const line = document.createElement('div');
    line.className = 'section-line';
    const count = document.createElement('span');
    count.className = 'section-count';
    count.textContent = items.length + ' LINKS';
    header.appendChild(h2);
    header.appendChild(line);
    header.appendChild(count);
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'grid';

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';

      // Link wrapping thumbnail
      const a = document.createElement('a');
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', item.title);

      const img = document.createElement('img');
      img.className = 'thumb';
      img.alt = item.title;
      img.src = item.image || FALLBACK_IMG;
      img.loading = 'lazy';
      img.onerror = function () { this.onerror = null; this.src = FALLBACK_IMG; };

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.innerHTML = '<div class="label">' + esc(item.title) + '</div>';

      a.appendChild(img);
      a.appendChild(overlay);
      card.appendChild(a);

      // Hide button
      const actions = document.createElement('div');
      actions.className = 'actions';
      const hideBtn = document.createElement('button');
      hideBtn.className = 'hide-btn';
      hideBtn.textContent = '— hide';
      hideBtn.title = 'Hide this link (restore anytime in Manage)';
      hideBtn.addEventListener('click', e => { e.preventDefault(); hideLink(item.id); });
      actions.appendChild(hideBtn);
      card.appendChild(actions);

      grid.appendChild(card);
    });

    section.appendChild(grid);
    content.appendChild(section);
  });

  if (content.innerHTML === '') {
    content.innerHTML = '<p class="muted" style="text-align:center;margin-top:40px">No links match that search.</p>';
  }
}

/* ── Hide / Restore ── */
function hideLink(id) {
  if (!hiddenLinks.includes(id)) hiddenLinks.push(id);
  localStorage.setItem(LS_HIDDEN, JSON.stringify(hiddenLinks));
  renderAll(searchEl.value);
  renderHiddenList();
}

function restoreLink(id) {
  hiddenLinks = hiddenLinks.filter(x => x !== id);
  localStorage.setItem(LS_HIDDEN, JSON.stringify(hiddenLinks));
  renderAll(searchEl.value);
  renderHiddenList();
}

/* ── Manage panel renderers ── */
function renderHiddenList() {
  hiddenListEl.innerHTML = '';
  if (hiddenLinks.length === 0) {
    hiddenListEl.innerHTML = '<div class="muted">No hidden links.</div>';
    return;
  }
  hiddenLinks.forEach(id => {
    const item = LINKS.find(l => l.id === id);
    if (!item) return;
    const row = document.createElement('div');
    row.className = 'cat-row';
    row.innerHTML = `<div style="flex:1">${esc(item.title)}<div class="muted">${esc(labelFor(item.category))}</div></div>`;
    const btn = document.createElement('button');
    btn.className = 'ctrl-btn';
    btn.textContent = 'Restore';
    btn.addEventListener('click', () => restoreLink(id));
    row.appendChild(btn);
    hiddenListEl.appendChild(row);
  });
}

function renderCategoryList() {
  categoryListEl.innerHTML = '';
  const order = getCatOrder();
  order.forEach((key, idx) => {
    const row = document.createElement('div');
    row.className = 'cat-row';
    const label = document.createElement('div');
    label.textContent = labelFor(key);
    row.appendChild(label);

    const ctrl = document.createElement('div');
    ctrl.style.cssText = 'display:flex;gap:5px';

    const up = document.createElement('button');
    up.className = 'ctrl-btn';
    up.textContent = '↑';
    up.disabled = idx === 0;
    up.addEventListener('click', () => moveCategory(key, -1));

    const dn = document.createElement('button');
    dn.className = 'ctrl-btn';
    dn.textContent = '↓';
    dn.disabled = idx === order.length - 1;
    dn.addEventListener('click', () => moveCategory(key, 1));

    ctrl.appendChild(up);
    ctrl.appendChild(dn);
    row.appendChild(ctrl);
    categoryListEl.appendChild(row);
  });
}

function moveCategory(key, delta) {
  let order = getCatOrder();
  const idx = order.indexOf(key);
  if (idx < 0) return;
  const ni = idx + delta;
  if (ni < 0 || ni >= order.length) return;
  order.splice(idx, 1);
  order.splice(ni, 0, key);
  storedOrder = order;
  localStorage.setItem(LS_CAT_ORDER, JSON.stringify(storedOrder));
  renderCategoryList();
  renderAll(searchEl.value);
}

/* ── Manage panel open/close ── */
function openManage() {
  renderHiddenList();
  renderCategoryList();
  managePanel.classList.add('open');
  managePanel.setAttribute('aria-hidden', 'false');
  manageBtn.textContent = '⚙ CLOSE';
}
function closeManage() {
  managePanel.classList.remove('open');
  managePanel.setAttribute('aria-hidden', 'true');
  manageBtn.textContent = '⚙ MANAGE';
}

manageBtn.addEventListener('click', () => {
  managePanel.classList.contains('open') ? closeManage() : openManage();
});
closeManageBtn.addEventListener('click', closeManage);

resetPrefsBtn.addEventListener('click', () => {
  if (!confirm('Reset hidden links and category order? This only affects your browser.')) return;
  hiddenLinks = [];
  storedOrder = null;
  localStorage.removeItem(LS_HIDDEN);
  localStorage.removeItem(LS_CAT_ORDER);
  renderHiddenList();
  renderCategoryList();
  renderAll(searchEl.value);
});

/* ── Search ── */
searchEl.addEventListener('input', () => renderAll(searchEl.value));

/* ── BTC QR Modal ── */
const BTC_ADDRESS = 'YOUR_BITCOIN_ADDRESS'; // ← replace with your actual BTC address

$('btcBtn').addEventListener('click', () => {
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' +
    encodeURIComponent('bitcoin:' + BTC_ADDRESS);
  qrImage.innerHTML = '<img src="' + qrUrl + '" alt="BTC QR" style="border-radius:4px">';
  btcAddr.textContent = BTC_ADDRESS;
  qrModal.classList.add('open');
  qrModal.setAttribute('aria-hidden', 'false');
});

$('closeQr').addEventListener('click', () => {
  qrModal.classList.remove('open');
  qrModal.setAttribute('aria-hidden', 'true');
  qrImage.innerHTML = '';
});

// Close modal on backdrop click
qrModal.addEventListener('click', e => {
  if (e.target === qrModal) {
    qrModal.classList.remove('open');
    qrModal.setAttribute('aria-hidden', 'true');
    qrImage.innerHTML = '';
  }
});

/* ── Initial render ── */
renderAll('');
