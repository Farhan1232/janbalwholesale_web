import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../data';
import '../pages/Products.css';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = q ? searchProducts(q) : [];

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><Search size={14}/> Search</div>
          <h1 className="page-hero-title">Results for "<span>{q}</span>"</h1>
          <p className="page-hero-desc">{results.length} product{results.length !== 1 ? 's' : ''} found</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          {results.length > 0 ? (
            <div className="products-grid">
              {results.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.06}/>)}
            </div>
          ) : (
            <div className="no-results">
              <Search size={60} color="var(--border)"/>
              <h3>No results for "{q}"</h3>
              <p>Try searching for a brand name, category, or product type.</p>
              <Link to="/products" className="btn-primary" style={{marginTop:16}}>Browse All Products</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
