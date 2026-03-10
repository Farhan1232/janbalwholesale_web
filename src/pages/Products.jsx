import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS, CATEGORIES } from '../data';
import './Products.css';

export default function Products() {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = ALL_PRODUCTS.filter(p => {
    const matchCat = activeCat === 'All' || p.category === activeCat || p.categorySlug === activeCat;
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const cats = ['All', ...CATEGORIES.map(c => c.label)];

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Range</div>
          <h1 className="page-hero-title">All <span>Products</span></h1>
          <p className="page-hero-desc">Browse our complete wholesale catalogue of tech accessories from 50+ global brands. No prices shown — contact us for wholesale pricing.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-toolbar">
            <div className="prod-search">
              <Search size={16}/>
              <input type="text" placeholder="Search products or brands..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="prod-cats">
              {cats.slice(0, 9).map(c => (
                <button key={c} className={`cat-btn ${activeCat === c ? 'active' : ''}`} onClick={() => setActiveCat(c)}>{c}</button>
              ))}
            </div>
            <div className="prod-count"><SlidersHorizontal size={14}/> {filtered.length} products</div>
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.06}/>)}
            </div>
          ) : (
            <div className="no-results">
              <Search size={60} color="var(--border)"/>
              <h3>No products found</h3>
              <p>Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
