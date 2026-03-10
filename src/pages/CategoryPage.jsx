import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, getProductsByCategory } from '../data';
import './Products.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find(c => c.slug === slug);
  const products = getProductsByCategory(slug);

  if (!category) return (
    <div className="page-hero"><div className="container">
      <h1 className="page-hero-title">Category Not Found</h1>
      <Link to="/products" className="btn-primary" style={{marginTop:16}}>Browse All Products</Link>
    </div></div>
  );

  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,58,110,0.88) 100%), url(${category.img})`, backgroundSize:'cover', backgroundPosition:'center' }}>
        <div className="container">
          <div className="section-label" style={{color:'var(--accent)',background:'rgba(245,166,35,0.18)'}}>
            {category.icon} Category
          </div>
          <h1 className="page-hero-title">{category.label} <span>({category.count})</span></h1>
          <p className="page-hero-desc">Wholesale {category.label.toLowerCase()} from Apple, Samsung, Anker, Baseus and more. UK delivery.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Other category links */}
          <div className="cat-quick-links">
            {['Mobile Covers','PowerBanks','Chargers','Earbuds','Headphones','SmartWatches','Speakers','Tablets'].filter(l => l !== category.label).slice(0,6).map(l => {
              const c = CATEGORIES.find(c => c.label === l);
              return c ? <Link key={c.slug} to={`/category/${c.slug}`} className="cat-quick-btn">{c.icon} {c.label}</Link> : null;
            })}
          </div>

          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.07}/>)}
            </div>
          ) : (
            <div className="no-results">
              <div style={{fontSize:60}}>{category.icon}</div>
              <h3>More {category.label} coming soon!</h3>
              <p>Contact us for a full wholesale catalogue including all available {category.label.toLowerCase()}.</p>
              <Link to="/contact" className="btn-primary" style={{marginTop:16}}>Contact Our Trade Team</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
