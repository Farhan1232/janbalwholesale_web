import React from 'react';
import { Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { DEAL_PRODUCTS } from '../data';
import './Deals.css';

export default function Deals() {
  return (
    <div className="deals-page">
      <div className="page-hero page-hero-deals">
        <div className="container">
          <div className="section-label"><Zap size={14}/> Limited Time</div>
          <h1 className="page-hero-title">🔥 Hot <span>Deals</span></h1>
          <p className="page-hero-desc">Massive savings on premium tech accessories. Contact us for wholesale pricing on these featured lines!</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {DEAL_PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 0.07}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
