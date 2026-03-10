import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { BRANDS, getProductsByBrand } from '../data';
import './Products.css';

export default function BrandPage() {
  const { slug } = useParams();
  const brand = BRANDS.find(b => b.slug === slug);
  const products = getProductsByBrand(slug);

  if (!brand) return (
    <div className="page-hero"><div className="container">
      <h1 className="page-hero-title">Brand Not Found</h1>
      <Link to="/brands" className="btn-primary" style={{marginTop:16}}>All Brands</Link>
    </div></div>
  );

  return (
    <div>
      <div className="page-hero">
        <div className="container brand-hero-inner">
          <div className="brand-hero-logo">{brand.logo}</div>
          <div>
            <div className="section-label">Official Wholesale Distributor</div>
            <h1 className="page-hero-title">{brand.name} <span>Products</span></h1>
            <p className="page-hero-desc">{brand.tagline} · {brand.count} products available</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Other brands quick links */}
          <div className="cat-quick-links" style={{marginBottom:32}}>
            {BRANDS.filter(b => b.slug !== slug).slice(0,7).map(b => (
              <Link key={b.slug} to={`/brand/${b.slug}`} className="cat-quick-btn">{b.logo} {b.name}</Link>
            ))}
          </div>

          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.07}/>)}
            </div>
          ) : (
            <div className="no-results">
              <div style={{fontSize:60}}>{brand.logo}</div>
              <h3>{brand.name} catalogue available on request</h3>
              <p>Contact our wholesale team for full {brand.name} pricing and availability.</p>
              <Link to="/contact" className="btn-primary" style={{marginTop:16}}>Request Full Catalogue</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
