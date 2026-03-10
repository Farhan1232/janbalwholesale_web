import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRANDS } from '../data';
import './Brands.css';

export default function Brands() {
  return (
    <div className="brands-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Official Partners</div>
          <h1 className="page-hero-title">Our <span>Brands</span></h1>
          <p className="page-hero-desc">We are proud official UK wholesale distributors for 50+ of the world's most trusted tech brands. Click any brand to browse products.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="brands-full-grid">
            {BRANDS.map((b, i) => (
              <Link key={b.name} to={`/brand/${b.slug}`} className="brand-full-card animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="brand-full-logo">{b.logo}</div>
                <div className="brand-full-name">{b.name}</div>
                <div className="brand-full-desc">{b.tagline}</div>
                <div className="brand-full-count">{b.count} products</div>
                <div className="brand-full-link">Shop Products <ArrowRight size={14}/></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
