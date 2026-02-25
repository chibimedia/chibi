:root{
  --bg:#08080b;
  --muted:#9aa4b2;
  --accent:#00d1a1;
  --card:#0f1720;
  --gap:10px;
  --max-w:1100px;
  --thumb-h:96px; /* denser */
  --radius:8px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  background:var(--bg);
  color:#e6eef6;
  -webkit-font-smoothing:antialiased;
  padding:12px;
}
.wrap{max-width:var(--max-w);margin:0 auto}
.header-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.brand{display:flex;gap:12px;align-items:center}
.logo{width:44px;height:44px;display:flex;align-items:center;justify-content:center}
.title-block h1{margin:0;font-size:1.1rem}
.subtitle{margin:0;color:var(--muted);font-size:0.85rem}
.top-controls{display:flex;flex-direction:column;gap:8px;align-items:flex-end}

/* top tip */
.tip{display:flex;gap:8px;align-items:center;color:var(--muted);font-size:0.9rem}
.tip-link{display:flex;align-items:center;gap:6px;text-decoration:none;color:inherit}
.tip-icon{width:18px;height:18px;display:inline-block;object-fit:contain}

/* controls */
.controls{display:flex;gap:8px;align-items:center}
.controls input[type="search"]{
  padding:8px 10px;border-radius:8px;border:1px solid #121418;background:#071017;color:inherit;min-width:180px;
}
.small{padding:8px 10px;border-radius:8px;border:1px solid #17202a;background:#0b0b0d;color:inherit;cursor:pointer}
.small.danger{border-color:#4b1a1a}

/* manage panel */
.manage-panel{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:10px;padding:12px;margin:12px 0;box-shadow:0 6px 20px rgba(0,0,0,0.5);
}
.manage-inner{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start}
.manage-col{flex:1;min-width:220px}
#categoryList, #hiddenList{margin-top:8px;display:flex;flex-direction:column;gap:8px}
.cat-row{display:flex;align-items:center;gap:8px;justify-content:space-between;padding:8px;background:#0b0d10;border-radius:8px}
.muted{color:var(--muted);font-size:0.85rem}

/* category section */
.section{margin:18px 0}
.section h2{margin:0 0 10px;font-size:1rem}

/* grid for cards inside each section */
.grid{
  display:grid;
  gap:10px;
  grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
}

/* card */
.card{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:var(--radius); overflow:hidden; transition:transform .12s ease, box-shadow .12s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.45);
  font-size:13px;
}
.card a{ color:inherit; text-decoration:none; display:block; }
.thumb{width:100%;height:var(--thumb-h);object-fit:cover;display:block;background:#0a0a0a}
.meta{padding:8px;text-align:left}
.title{font-weight:600;margin:0 0 6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cat{font-size:11px;color:var(--muted)}
.card .actions{display:flex;gap:6px;align-items:center;justify-content:flex-end;padding:6px 8px 10px}

/* action buttons */
.btn{background:#071017;border:1px solid #121418;padding:6px 8px;border-radius:6px;color:var(--muted);cursor:pointer;font-size:12px}
.btn:hover{color:#fff}
.card:hover{transform:translateY(-6px);box-shadow:0 10px 30px rgba(0,0,0,0.6)}

/* footer */
.site-footer{color:var(--muted);font-size:0.85rem;text-align:center;margin-top:8px;padding-bottom:20px}

/* utility */
.hidden{display:none}

/* responsive adjustments */
@media (max-width:720px){
  .header-row{flex-direction:column;align-items:stretch}
  .top-controls{align-items:stretch}
  .controls{justify-content:space-between}
  .grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
  :root{--thumb-h:88px}
}
