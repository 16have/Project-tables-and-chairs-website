/* ===========================
   TABLES AND CHAIRS  — FURNITURE WEBSITE
   app.js
=========================== */

// ===========================
// UNSPLASH CONFIG
// ===========================
const UNSPLASH_ACCESS_KEY = '6NbXyqj4f8wN_XstKCoVRVyFu0uxULQV4KbnqVqCbVg';
const UNSPLASH_BASE = 'https://api.unsplash.com';

// ===========================
// PRODUCT DATA
// ===========================
const categories = [
  { id: 'all',          label: 'All',           icon: 'fa-th',             query: 'modern living room furniture interior' },
  { id: 'sofas',        label: 'Sofas',         icon: 'fa-couch',          query: 'modern sofa living room' },
  { id: 'beds',         label: 'Beds',          icon: 'fa-bed',            query: 'bedroom furniture bed interior' },
  { id: 'chairs',       label: 'Chairs',        icon: 'fa-chair',          query: 'accent chair furniture interior' },
  { id: 'tables',       label: 'Tables',        icon: 'fa-table',          query: 'dining table furniture' },
  { id: 'office',       label: 'Office',        icon: 'fa-briefcase',      query: 'office chair desk workspace' },
  { id: 'wardrobes',    label: 'Wardrobes',     icon: 'fa-door-open',      query: 'wardrobe closet bedroom' },
  { id: 'shelves',      label: 'Shelves',       icon: 'fa-border-all',     query: 'bookshelf wooden furniture' },
];

const productsData = [
  { id: 1,  name: 'Nairobi Comfort Sofa',        cat: 'sofas',    price: 85000,  original: 110000, rating: 4.8, reviews: 124, badge: 'popular', query: 'modern gray sofa', desc: 'A deep-seated sofa with premium foam cushioning and hardwood frame. Perfect for Kenyan living rooms.', features: ['100% Genuine Leather', '3-Seater Design', '5-Year Warranty', 'Available in 4 Colors'] },
  { id: 2,  name: 'Velvet Lounge Sectional',     cat: 'sofas',    price: 145000, original: null,   rating: 4.9, reviews: 89,  badge: 'new',     query: 'velvet sectional sofa blue', desc: 'Luxurious velvet sectional sofa with chaise. Makes a statement in any contemporary home.', features: ['Velvet Upholstery', 'L-Shaped Design', 'Ottoman Included', 'Solid Wood Legs'] },
  { id: 3,  name: 'Safari Fabric Sofa Set',      cat: 'sofas',    price: 72000,  original: 95000,  rating: 4.5, reviews: 210, badge: 'sale',    query: 'fabric sofa set living room', desc: 'Complete 3-2-1 sofa set with African-inspired fabric pattern. Durable and elegant.', features: ['3-2-1 Full Set', 'African Print Fabric', 'Foam + Spring Cushions', 'Easy to Clean'] },
  { id: 4,  name: 'Minimalist 2-Seater Sofa',    cat: 'sofas',    price: 48000,  original: null,   rating: 4.6, reviews: 67,  badge: null,      query: 'minimalist white sofa', desc: 'Clean-lined 2-seater sofa with removable covers. Ideal for apartments and small spaces.', features: ['Removable Covers', 'Compact Design', 'Stain-Resistant', '2-Year Warranty'] },
  { id: 5,  name: 'Kisumu King Bed Frame',       cat: 'beds',     price: 65000,  original: 80000,  rating: 4.7, reviews: 156, badge: 'sale',    query: 'king bed wooden headboard bedroom', desc: 'Solid mahogany king bed frame with upholstered headboard. Fits standard King 6x6 mattress.', features: ['Solid Mahogany Wood', 'King 6×6 Size', 'Upholstered Headboard', 'Under-Bed Storage'] },
  { id: 6,  name: 'Platform Bed with Storage',   cat: 'beds',     price: 78000,  original: null,   rating: 4.8, reviews: 93,  badge: 'new',     query: 'platform bed with storage drawer modern', desc: 'Modern platform bed featuring 4 spacious drawers. Space-saving design for urban homes.', features: ['4 Storage Drawers', 'Platform Design', 'No Box Spring Needed', 'Dark Walnut Finish'] },
  { id: 7,  name: 'Mombasa Coastal Bed',         cat: 'beds',     price: 55000,  original: null,   rating: 4.6, reviews: 44,  badge: null,      query: 'white coastal bedroom furniture bed', desc: 'Light and airy coastal-inspired bed frame with rattan accents. Brings beach vibes home.', features: ['Rattan Accents', 'White Pine Frame', 'Queen & King Available', 'Eco-Friendly Materials'] },
  { id: 8,  name: 'Luxury Upholstered Bed',      cat: 'beds',     price: 110000, original: null,   rating: 5.0, reviews: 38,  badge: 'popular', query: 'luxury upholstered bed grey bedroom', desc: 'Hotel-quality upholstered bed in premium grey fabric with tufted headboard.', features: ['Fully Upholstered', 'Tufted Headboard', 'Premium Grey Fabric', '10-Year Warranty'] },
  { id: 9,  name: 'Kilimanjaro Accent Chair',    cat: 'chairs',   price: 28000,  original: 38000,  rating: 4.7, reviews: 88,  badge: 'sale',    query: 'modern accent armchair yellow', desc: 'Statement accent chair with brass legs and bold upholstery. A showstopper in any room.', features: ['Brass-Finished Legs', 'Bold Upholstery', 'Solid Wood Frame', 'Swivel Option Available'] },
  { id: 10, name: 'Wicker Rattan Reading Chair', cat: 'chairs',   price: 18500,  original: null,   rating: 4.5, reviews: 112, badge: null,      query: 'wicker rattan chair interior', desc: 'Hand-woven rattan chair with soft cushion. Perfect for reading nooks and sunrooms.', features: ['Hand-Woven Rattan', 'Removable Cushion', 'Weather-Resistant', 'Indoor/Outdoor Use'] },
  { id: 11, name: 'Velvet Wing Chair',            cat: 'chairs',   price: 32000,  original: null,   rating: 4.9, reviews: 55,  badge: 'new',     query: 'velvet wing chair living room', desc: 'Classic wing chair reinterpreted in rich emerald velvet. Timeless and bold.', features: ['Emerald Velvet', 'Classic Wing Design', 'Feather-Blend Cushions', 'Gold Leg Finish'] },
  { id: 12, name: 'Mid-Century Dining Chair',    cat: 'chairs',   price: 12500,  original: 16000,  rating: 4.4, reviews: 201, badge: 'sale',    query: 'mid century modern dining chair wood', desc: 'Set of 2 dining chairs in walnut finish. Pairs perfectly with any dining table.', features: ['Sold as Pair', 'Walnut Finish', 'Upholstered Seat', 'Easy Assembly'] },
  { id: 13, name: 'Nairobi Dining Table 6-Seat', cat: 'tables',   price: 58000,  original: 72000,  rating: 4.6, reviews: 134, badge: 'sale',    query: 'rectangular dining table wood modern', desc: '6-seater solid oak dining table. The centrepiece of every family dining room.', features: ['Solid Oak', '6-Seater', '180cm × 90cm', 'Easy Maintenance'] },
  { id: 14, name: 'Glass Coffee Table',          cat: 'tables',   price: 22000,  original: null,   rating: 4.5, reviews: 78,  badge: null,      query: 'glass coffee table living room', desc: 'Tempered glass top coffee table with chrome legs. Modern and sleek.', features: ['8mm Tempered Glass', 'Chrome Legs', 'Easy to Clean', 'Lower Shelf Included'] },
  { id: 15, name: 'Marble Top Console Table',    cat: 'tables',   price: 45000,  original: null,   rating: 4.8, reviews: 42,  badge: 'new',     query: 'marble console table modern', desc: 'Italian marble-top console table with black steel legs. For hallways and entryways.', features: ['Italian Marble', 'Black Steel Legs', 'Hallway Design', 'Easy Assembly'] },
  { id: 16, name: 'Extendable Dining Table',     cat: 'tables',   price: 68000,  original: 85000,  rating: 4.7, reviews: 95,  badge: 'popular', query: 'extendable dining table white wood', desc: 'Extends from 140cm to 200cm. Perfect for families who love hosting.', features: ['Extends 140–200cm', 'Beech Wood', 'Seats 4–8 Guests', '5-Year Warranty'] },
  { id: 17, name: 'Executive Leather Chair',     cat: 'office',   price: 35000,  original: 48000,  rating: 4.8, reviews: 189, badge: 'sale',    query: 'black leather executive office chair', desc: 'Full ergonomic support with genuine leather upholstery. For the serious professional.', features: ['Genuine Leather', 'Full Lumbar Support', 'Height Adjustable', '5-Caster Base'] },
  { id: 18, name: 'Ergonomic Mesh Chair',        cat: 'office',   price: 28000,  original: null,   rating: 4.9, reviews: 234, badge: 'popular', query: 'ergonomic mesh office chair', desc: 'Breathable mesh back with 10-point adjustability. Designed for long work sessions.', features: ['Breathable Mesh', '10 Adjustments', 'Headrest Included', '8-Hour Support'] },
  { id: 19, name: 'Standing Desk',               cat: 'office',   price: 55000,  original: null,   rating: 4.7, reviews: 67,  badge: 'new',     query: 'standing desk home office white', desc: 'Electric height-adjustable standing desk. Improves posture and productivity.', features: ['Electric Height Adjust', '140cm × 70cm Surface', 'Memory Presets', 'Cable Management'] },
  { id: 20, name: 'L-Shaped Office Desk',        cat: 'office',   price: 42000,  original: 55000,  rating: 4.5, reviews: 88,  badge: 'sale',    query: 'l shaped office desk dark wood', desc: 'Spacious L-shaped desk in dark walnut. Maximum workspace for maximum productivity.', features: ['L-Shaped Design', 'Dark Walnut', 'Monitor Shelf', 'Cable Holes Included'] },
  { id: 21, name: 'Sliding Door Wardrobe',       cat: 'wardrobes',price: 95000,  original: 120000, rating: 4.7, reviews: 72,  badge: 'sale',    query: 'sliding door wardrobe bedroom white', desc: '3-door sliding wardrobe with mirror panels. Maximum storage, minimal footprint.', features: ['Mirror Panels', '3 Sliding Doors', 'Interior Lighting', '240cm × 210cm'] },
  { id: 22, name: 'Rustic Wooden Wardrobe',      cat: 'wardrobes',price: 72000,  original: null,   rating: 4.6, reviews: 48,  badge: null,      query: 'rustic wooden wardrobe bedroom', desc: 'Solid pine 2-door wardrobe with rustic charm. Beautiful in farmhouse-style bedrooms.', features: ['Solid Pine', '2 Doors + Drawer', 'Rustic Finish', 'Easy Assembly'] },
  { id: 23, name: 'Floating Wall Shelves Set',   cat: 'shelves',  price: 8500,   original: 12000,  rating: 4.5, reviews: 320, badge: 'sale',    query: 'floating wall shelves wood interior', desc: 'Set of 3 floating shelves in natural oak. Easy to install and infinitely versatile.', features: ['Set of 3', 'Natural Oak', 'Easy Install', 'Holds up to 15kg Each'] },
  { id: 24, name: 'Industrial Bookshelf',        cat: 'shelves',  price: 28000,  original: null,   rating: 4.7, reviews: 91,  badge: 'new',     query: 'industrial bookshelf metal wood', desc: '5-tier industrial bookshelf with metal frame and wooden shelves. Bold and functional.', features: ['5 Tiers', 'Metal + Wood', 'Industrial Style', '180cm Height'] },
];

let cart = JSON.parse(localStorage.getItem('TABLES AND CHAIRS Cart') || '[]');
let currentSection = 'home';
let previousSection = 'home';
let activeCategory = 'all';
let activeCatalogFilter = 'all';
let displayedCount = 8;
let productImages = {};
let detailQty = 1;
let currentProduct = null;
let searchActive = false;

async function fetchUnsplashImage(query, count = 1) {
  try {
    const url = `${UNSPLASH_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Unsplash error');
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return data.results.map(r => ({ url: r.urls.regular, thumb: r.urls.thumb, small: r.urls.small, full: r.urls.full }));
    }
  } catch (e) {
    console.warn('Unsplash fetch failed:', e.message);
  }
  return Array(count).fill(null).map((_, i) => ({
    url: `https://picsum.photos/seed/${query.replace(/\s/g,'')}${i}/800/600`,
    thumb: `https://picsum.photos/seed/${query.replace(/\s/g,'')}${i}/200/150`,
    small: `https://picsum.photos/seed/${query.replace(/\s/g,'')}${i}/400/300`,
    full: `https://picsum.photos/seed/${query.replace(/\s/g,'')}${i}/1200/900`
  }));
}

function formatKSh(amount) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(`section-${sectionId}`).classList.add('active');
  currentSection = sectionId;
  window.scrollTo(0, 0);
  document.body.style.overflow = '';
  if (document.getElementById('mobileNav')) document.getElementById('mobileNav').classList.remove('open');
}

function goBack() {
  showSection(previousSection);
}

function buildCategoryStrip() {
  const container = document.getElementById('catStrip');
  const mainCats = categories.filter(c => c.id !== 'all');
  container.innerHTML = categories.map((cat, i) => `
    <div class="cat-chip ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}" onclick="setCatalogFilter('${cat.id}', this)">
      <i class="fas ${cat.icon}"></i> ${cat.label}
    </div>
  `).join('');
}

function buildFilterPills() {
  const container = document.getElementById('filterPills');
  container.innerHTML = categories.map(cat => `
    <button class="filter-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}" onclick="setCatalogFilter('${cat.id}', this)">
      ${cat.label}
    </button>
  `).join('');
}

function setCatalogFilter(catId, el) {
  previousSection = currentSection;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  activeCatalogFilter = catId;
  displayedCount = 8;
  renderCatalog();
}

async function loadHomeImages() {
  const heroImgs = await fetchUnsplashImage('modern luxury furniture living room', 1);
  if (heroImgs[0]) document.getElementById('heroImg').src = heroImgs[0].url;
  
  const bannerImgs = await fetchUnsplashImage('scandinavian interior design furniture', 1);
  if (bannerImgs[0]) document.getElementById('bannerImg').src = bannerImgs[0].url;
  
  const aboutImgs = await fetchUnsplashImage('premium furniture showroom', 1);
  if (aboutImgs[0]) document.getElementById('aboutImg').src = aboutImgs[0].url;
}

window.addEventListener('DOMContentLoaded', async () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);
  updateCartUI();
  buildCategoryStrip();
  buildFilterPills();
  await loadHomeImages();
  renderFeatured();
  renderNewArrivals();
  renderCatalog();
  renderCategoriesGrid();
  loadCategoryImages();
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

function showSection(name) {
  previousSection = currentSection;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(`section-${name}`).classList.add('active');
  currentSection = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === name));
  if (name === 'payment') renderCheckoutSummary();
}

function goBack() { showSection(previousSection || 'home'); }

async function loadHomeImages() {
  const [heroImgs, bannerImgs, aboutImgs] = await Promise.all([
    fetchUnsplashImage('luxury living room sofa interior design', 1),
    fetchUnsplashImage('modern bedroom furniture design', 1),
    fetchUnsplashImage('furniture workshop craftsmanship wood', 1),
  ]);
  if (heroImgs[0]) document.getElementById('heroImg').src = heroImgs[0].url;
  if (bannerImgs[0]) document.getElementById('bannerImg').src = bannerImgs[0].url;
  if (aboutImgs[0]) document.getElementById('aboutImg').src = aboutImgs[0].url;
}

function buildCategoryStrip() {
  const strip = document.getElementById('catStrip');
  strip.innerHTML = categories.map(c => `<div class="cat-chip ${c.id === 'all' ? 'active' : ''}" onclick="filterByCategory('${c.id}', this)"><i class="fas ${c.icon}"></i> ${c.label}</div>`).join('');
}

function filterByCategory(catId, el) {
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeCategory = catId;
  showSection('catalog');
  activeCatalogFilter = catId;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === catId));
  renderCatalog();
}

function buildFilterPills() {
  const pills = document.getElementById('filterPills');
  pills.innerHTML = categories.map(c => `<div class="filter-pill ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}" onclick="setCatalogFilter('${c.id}', this)">${c.label}</div>`).join('');
}

function setCatalogFilter(catId, el) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  activeCatalogFilter = catId;
  displayedCount = 8;
  renderCatalog();
}

function sortProducts() { renderCatalog(); }

function productCardHTML(product, imgObj, delay = 0) {
  const imgSrc = imgObj ? imgObj.small || imgObj.url : `https://picsum.photos/seed/prod${product.id}/400/300`;
  const badgeHTML = product.badge ? `<span class="card-badge badge-${product.badge}">${product.badge === 'new' ? 'New' : product.badge === 'sale' ? 'Sale' : 'Popular'}</span>` : '';
  const originalHTML = product.original ? `<span class="original">${formatKSh(product.original)}</span>` : '';
  return `
    <div class="product-card" style="animation-delay:${delay}ms" onclick="openProduct(${product.id})">
      <div class="card-img-wrap">
        <img src="${imgSrc}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fallback${product.id}/400/300'"/>
        ${badgeHTML}
        <div class="card-actions">
          <button class="card-action-btn" onclick="event.stopPropagation(); wishlistToggle(${product.id})"><i class="fas fa-heart"></i></button>
          <button class="card-action-btn" onclick="event.stopPropagation(); quickAdd(${product.id})"><i class="fas fa-shopping-bag"></i></button>
        </div>
      </div>
      <div class="card-body">
        <p class="card-cat">${product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-rating"><i class="fas fa-star"></i> ${product.rating} (${product.reviews} reviews)</p>
        <div class="card-footer">
          <div class="card-price">${originalHTML}${formatKSh(product.price)}</div>
          <button class="card-add" onclick="event.stopPropagation(); quickAdd(${product.id})"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  `;
}

async function getProductImage(product) {
  if (productImages[product.id]) return productImages[product.id];
  const imgs = await fetchUnsplashImage(product.query, 1);
  productImages[product.id] = imgs[0];
  return imgs[0];
}

async function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = productsData.filter(p => p.badge === 'popular' || p.badge === 'new').slice(0, 4);
  grid.innerHTML = featured.map(() => `<div class="skeleton skeleton-card"></div>`).join('');
  const imgs = await Promise.all(featured.map(p => getProductImage(p)));
  grid.innerHTML = featured.map((p, i) => productCardHTML(p, imgs[i], i * 80)).join('');
}

async function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  const arrivals = productsData.filter(p => p.badge === 'new').concat(productsData.filter(p => !p.badge).slice(0, 4)).slice(0, 4);
  grid.innerHTML = arrivals.map(() => `<div class="skeleton skeleton-card"></div>`).join('');
  const imgs = await Promise.all(arrivals.map(p => getProductImage(p)));
  grid.innerHTML = arrivals.map((p, i) => productCardHTML(p, imgs[i], i * 80)).join('');
}

async function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  let filtered = activeCatalogFilter === 'all' ? [...productsData] : productsData.filter(p => p.cat === activeCatalogFilter);
  const sortVal = document.getElementById('sortSelect').value;
  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortVal === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  const shown = filtered.slice(0, displayedCount);
  document.getElementById('loadMoreBtn').style.display = filtered.length > displayedCount ? 'inline-block' : 'none';
  grid.innerHTML = shown.map(() => `<div class="skeleton skeleton-card"></div>`).join('');
  const imgs = await Promise.all(shown.map(p => getProductImage(p)));
  grid.innerHTML = shown.map((p, i) => productCardHTML(p, imgs[i], i * 60)).join('');
}

function loadMore() { displayedCount += 8; renderCatalog(); }

function renderCategoriesGrid() {
  const grid = document.getElementById('categoriesGrid');
  const mainCats = categories.filter(c => c.id !== 'all');
  const counts = {};
  productsData.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  grid.innerHTML = mainCats.map(cat => `
    <div class="category-card" onclick="setCatalogFilter('${cat.id}', document.querySelector('[data-cat=\\'${cat.id}\\']')); showSection('catalog')">
      <img src="https://picsum.photos/seed/${cat.id}/600/400" alt="${cat.label}" loading="lazy"/>
      <div class="category-card-overlay"><h3>${cat.label}</h3><p>${counts[cat.id] || 0} items</p><span class="cat-browse">Shop Now <i class="fas fa-arrow-right"></i></span></div>
    </div>
  `).join('');
}

async function loadCategoryImages() {
  const cards = document.querySelectorAll('.category-card');
  const mainCats = categories.filter(c => c.id !== 'all');
  for (let i = 0; i < cards.length; i++) {
    const cat = mainCats[i];
    if (!cat) continue;
    const imgs = await fetchUnsplashImage(cat.query, 1);
    if (imgs[0]) { const img = cards[i].querySelector('img'); if (img) img.src = imgs[0].url; }
    await delay(200);
  }
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function openProduct(id) {
  currentProduct = productsData.find(p => p.id === id);
  if (!currentProduct) return;
  showSection('product');
  detailQty = 1;
  const container = document.getElementById('productDetail');
  container.innerHTML = `<div class="skeleton" style="height:520px;border-radius:12px"></div>`;
  const [mainImgs, img2, img3] = await Promise.all([
    fetchUnsplashImage(currentProduct.query, 3),
    fetchUnsplashImage(currentProduct.cat + ' furniture detail', 1),
    fetchUnsplashImage('furniture interior design room', 1),
  ]);
  const allImgs = [...mainImgs, ...img2, ...img3].slice(0, 4);
  container.innerHTML = `
    <div class="detail-gallery">
      <img class="detail-main-img" id="detailMain" src="${allImgs[0]?.url || ''}" alt="${currentProduct.name}"/>
      <div class="detail-thumbs">${allImgs.map((img, i) => `<img class="detail-thumb ${i === 0 ? 'active' : ''}" src="${img.small || img.url}" onclick="switchThumb(this, '${img.url}')" alt="View ${i+1}"/>`).join('')}</div>
    </div>
    <div class="detail-info">
      <p class="detail-cat">${currentProduct.cat.charAt(0).toUpperCase() + currentProduct.cat.slice(1)}</p>
      <h1 class="detail-name">${currentProduct.name}</h1>
      <div class="detail-rating"><i class="fas fa-star"></i><strong>${currentProduct.rating}</strong><span>(${currentProduct.reviews} reviews)</span></div>
      <div class="detail-price">${currentProduct.original ? `<span class="original-price">${formatKSh(currentProduct.original)}</span>` : ''}${formatKSh(currentProduct.price)}</div>
      <p class="detail-desc">${currentProduct.desc}</p>
      <div class="detail-features"><h4>Features</h4><ul class="feature-list">${currentProduct.features.map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('')}</ul></div>
      <div class="detail-actions">
        <div class="qty-control">
          <button onclick="changeDetailQty(-1)"><i class="fas fa-minus"></i></button>
          <span id="detailQtyNum">1</span>
          <button onclick="changeDetailQty(1)"><i class="fas fa-plus"></i></button>
        </div>
        <button class="detail-add-btn" onclick="addFromDetail()"><i class="fas fa-shopping-bag"></i> Add to Bag</button>
      </div>
    </div>
  `;
  renderRelated(currentProduct);
}

function switchThumb(el, fullUrl) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('detailMain').src = fullUrl;
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById('detailQtyNum').textContent = detailQty;
}

function addFromDetail() {
  if (!currentProduct) return;
  addToCart(currentProduct.id, detailQty);
}

async function renderRelated(product) {
  const grid = document.getElementById('relatedGrid');
  const related = productsData.filter(p => p.cat === product.cat && p.id !== product.id).slice(0, 4);
  grid.innerHTML = related.map(() => `<div class="skeleton skeleton-card"></div>`).join('');
  const imgs = await Promise.all(related.map(p => getProductImage(p)));
  grid.innerHTML = related.map((p, i) => productCardHTML(p, imgs[i], i * 80)).join('');
}

function addToCart(id, qty = 1) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    const imgObj = productImages[id];
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      cat: product.cat,
      qty,
      img: imgObj ? (imgObj.thumb || imgObj.small) : `https://picsum.photos/seed/prod${id}/200/150`
    });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to bag!`);
}

function quickAdd(id) { addToCart(id, 1); }

function wishlistToggle(id) { showToast('Added to wishlist ♡'); }

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  if (item.qty === 0) removeFromCart(id);
  saveCart();
  updateCartUI();
}

function saveCart() { localStorage.setItem('TABLES AND CHAIRS Cart', JSON.stringify(cart)); }

function cartTotal() { return cart.reduce((sum, i) => sum + i.price * i.qty, 0); }

function cartCount() { return cart.reduce((sum, i) => sum + i.qty, 0); }

function updateCartUI() {
  const count = cartCount();
  const countEl = document.getElementById('cart-count');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);
  document.getElementById('cart-item-count').textContent = `(${count})`;
  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>`;
    cartFooter.style.display = 'none';
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://picsum.photos/seed/cart${item.id}/160/160'"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatKSh(item.price)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
    </div>
  `).join('');
  document.getElementById('cartTotal').textContent = formatKSh(cartTotal());
  cartFooter.style.display = 'block';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.add('open');
  document.getElementById('searchInput').focus();
  searchActive = true;
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  searchActive = false;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearch();
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
  }
});

function filterProducts(query) {
  if (!query.trim() || query.length < 2) return;
  const q = query.toLowerCase();
  const results = productsData.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  if (results.length > 0) {
    closeSearch();
    activeCatalogFilter = 'all';
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    const allPill = document.querySelector('[data-cat="all"]');
    if (allPill) allPill.classList.add('active');
    showSection('catalog');
    renderSearchResults(results);
  }
}

async function renderSearchResults(results) {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = results.map(() => `<div class="skeleton skeleton-card"></div>`).join('');
  const imgs = await Promise.all(results.map(p => getProductImage(p)));
  grid.innerHTML = results.map((p, i) => productCardHTML(p, imgs[i], i * 60)).join('');
  document.getElementById('loadMoreBtn').style.display = 'none';
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutItems');
  const reviewContainer = document.getElementById('orderReviewItems');
  const sub = cartTotal();
  const total = sub + 500;
  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://picsum.photos/seed/chk${item.id}/120/120'"/>
      <div class="checkout-item-info">
        <p class="checkout-item-name">${item.name}</p>
        <p class="checkout-item-qty">Qty: ${item.qty}</p>
      </div>
      <span class="checkout-item-price">${formatKSh(item.price * item.qty)}</span>
    </div>
  `).join('');
  if (reviewContainer) {
    reviewContainer.innerHTML = cart.map(item => `
      <div class="order-review-item">
        <span>${item.name} × ${item.qty}</span>
        <span>${formatKSh(item.price * item.qty)}</span>
      </div>
    `).join('');
    document.getElementById('rev-subtotal').textContent = formatKSh(sub);
    document.getElementById('rev-total').textContent = formatKSh(total);
  }
  document.getElementById('checkout-sub').textContent = formatKSh(sub);
  document.getElementById('checkout-total').textContent = formatKSh(total);
}

function goToStep(num) {
  if (num === 2) {
    if (!document.getElementById('fname').value.trim() || !document.getElementById('email').value.trim() || !document.getElementById('phone').value.trim() || !document.getElementById('address').value.trim()) {
      showToast('Please fill in all delivery details.');
      return;
    }
  }
  [1, 2, 3].forEach(s => {
    document.getElementById(`step${s}`).style.display = 'none';
    const tab = document.getElementById(`step${s}-tab`);
    tab.classList.remove('active', 'done');
    if (s < num) tab.classList.add('done');
  });
  document.getElementById(`step${num}`).style.display = 'block';
  document.getElementById(`step${num}-tab`).classList.add('active');
  if (num === 3) renderCheckoutSummary();
}

function selectPayMethod(method) {
  ['mpesa', 'card', 'bank'].forEach(m => {
    document.getElementById(`${m}-fields`).style.display = m === method ? 'block' : 'none';
    document.getElementById(`${m}-opt`).classList.toggle('active-method', m === method);
  });
}

function placeOrder() {
  const orderNum = Math.floor(Math.random() * 900000 + 100000);
  document.getElementById('orderNum').textContent = orderNum;
  document.getElementById('modalOrderNum').textContent = orderNum;
  cart = [];
  saveCart();
  updateCartUI();
  document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('successModal').style.display = 'none';
  goToStep(1);
  showSection('home');
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('visible'), 2800);
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(`section-${sectionId}`).classList.add('active');
  currentSection = sectionId;
  window.scrollTo(0, 0);
  document.body.style.overflow = '';
  if (document.getElementById('mobileNav')) document.getElementById('mobileNav').classList.remove('open');
}

function goBack() {
  showSection(previousSection);
}

function buildCategoryStrip() {
  const container = document.getElementById('catStrip');
  container.innerHTML = categories.map((cat, i) => `
    <div class="cat-chip ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}" onclick="setCatalogFilter('${cat.id}', this)">
      <i class="fas ${cat.icon}"></i> ${cat.label}
    </div>
  `).join('');
}

function buildFilterPills() {
  const container = document.getElementById('filterPills');
  container.innerHTML = categories.map(cat => `
    <button class="filter-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}" onclick="setCatalogFilter('${cat.id}', this)">
      ${cat.label}
    </button>
  `).join('');
}

function setCatalogFilter(catId, el) {
  previousSection = currentSection;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  activeCatalogFilter = catId;
  displayedCount = 8;
  renderCatalog();
}

async function loadHomeImages() {
  const heroImgs = await fetchUnsplashImage('modern luxury furniture living room', 1);
  if (heroImgs[0]) document.getElementById('heroImg').src = heroImgs[0].url;
  
  const bannerImgs = await fetchUnsplashImage('scandinavian interior design furniture', 1);
  if (bannerImgs[0]) document.getElementById('bannerImg').src = bannerImgs[0].url;
  
  const aboutImgs = await fetchUnsplashImage('premium furniture showroom', 1);
  if (aboutImgs[0]) document.getElementById('aboutImg').src = aboutImgs[0].url;
}

window.addEventListener('DOMContentLoaded', async () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);
  updateCartUI();
  buildCategoryStrip();
  buildFilterPills();
  await loadHomeImages();
  renderFeatured();
  renderNewArrivals();
  renderCatalog();
  renderCategoriesGrid();
  loadCategoryImages();
});


