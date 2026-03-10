import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RefreshCw, Award, ChevronLeft, ChevronRight, Zap, Globe, Phone, Mail, CheckCircle, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, BRANDS, FEATURED_PRODUCTS } from '../data';
import './Home.css';

const heroSlides = [
  {
    tag: '🇬🇧 UK Wholesale Distributor',
    title: 'Premium iPhone\nAccessories',
    sub: 'iPhone 17 Pro Max Cases, MagSafe & More',
    desc: 'Official wholesale partner for Apple, Samsung, Anker, Baseus & more. Serving UK retailers since 2019.',
    cta: 'Shop Mobile Covers',
    ctaPath: '/category/mobile-covers',
    bg: 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 50%, #0d2557 100%)',
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    badge: 'New: iPhone 17 Cases In Stock',
    accent: '#f5a623',
  },
  {
    tag: '⚡ Anker & Baseus Official',
    title: 'Fast Charging\nPower Solutions',
    sub: 'GaN Chargers, PowerBanks & USB-C Cables',
    desc: 'Wholesale pricing on Anker, Baseus, Mcdodo and Ugreen power accessories. Free UK delivery over £150.',
    cta: 'Shop Chargers & PowerBanks',
    ctaPath: '/category/powerbanks',
    bg: 'linear-gradient(135deg, #0a2010 0%, #1a5a2e 50%, #0d3a1a 100%)',
    img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
    badge: 'Up to 40% Wholesale Savings',
    accent: '#10b981',
  },
  {
    tag: '🎧 JBL & Xiaomi Audio',
    title: 'Wireless Audio\nAccessories',
    sub: 'Earbuds, Headphones & Portable Speakers',
    desc: 'Premium audio accessories from JBL, Xiaomi, Baseus and A4Tech at unbeatable wholesale prices.',
    cta: 'Shop Audio',
    ctaPath: '/category/earbuds',
    bg: 'linear-gradient(135deg, #1a0a28 0%, #3a1a6e 50%, #20074a 100%)',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    badge: 'JBL & Xiaomi Now In Stock',
    accent: '#a855f7',
  },
];

const testimonials = [
  { name: 'James Mitchell', role: 'Electronics Retailer, Manchester', rating: 5, text: 'JanbalWholesale has been our go-to supplier for 3 years. Genuine products, competitive prices, fast dispatch. Highly recommended.' },
  { name: 'Sarah Thompson', role: 'Online Store Owner, Birmingham', rating: 5, text: 'The quality of products is outstanding. Always original brands and the customer service team is incredibly helpful.' },
  { name: 'Ahmed Hassan', role: 'Tech Distributor, London', rating: 5, text: 'Best wholesale prices in the UK. iPhone cases and Anker products always in stock. A truly reliable partner.' },
  { name: 'Lisa Patel', role: 'Amazon Seller, Leeds', rating: 4, text: 'Fast delivery, well-packaged products. Ordering regularly and never had issues with product quality. Trusted.' },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [catRef, catInView] = useInView();
  const [prodRef, prodInView] = useInView();
  const [brandRef, brandInView] = useInView();
  const [testRef, testInView] = useInView();

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const s = heroSlides[slide];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{ background: s.bg }}>
        <div className="hero-bg-shapes">
          <div className="shape shape-1"/>
          <div className="shape shape-2"/>
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-tag">{s.tag}</div>
            <h1 className="hero-title">
              {s.title.split('\n').map((line, i) => (
                <span key={i}>{i === 0 ? line : <span style={{ color: s.accent }}>{line}</span>}{i === 0 && <br/>}</span>
              ))}
            </h1>
            <p className="hero-sub" style={{ color: s.accent }}>{s.sub}</p>
            <p className="hero-desc">{s.desc}</p>
            <div className="hero-actions">
              <Link to={s.ctaPath} className="btn-primary">{s.cta} <ArrowRight size={16}/></Link>
              <Link to="/contact" className="btn-secondary">Get Wholesale Pricing</Link>
            </div>
            <div className="hero-stats">
              {[['10,000+','Products'],['50+','Brands'],['2019','Est. UK'],['5★','Rated']].map(([n,l]) => (
                <div key={l} className="hero-stat">
                  <span className="hero-stat-num" style={{ color: s.accent }}>{n}</span>
                  <span className="hero-stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-wrap animate-float">
              <img src={s.img} alt="Featured Product" className="hero-product-img"
                onError={e => e.target.style.display='none'}/>
            </div>
            <div className="hero-badge" style={{ borderColor: s.accent, color: s.accent }}>{s.badge}</div>
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button key={i} className={`hero-dot ${i === slide ? 'active' : ''}`}
              onClick={() => setSlide(i)} style={{ '--acolor': heroSlides[i].accent }}/>
          ))}
        </div>
        <button className="hero-arrow hero-prev" onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}><ChevronLeft size={22}/></button>
        <button className="hero-arrow hero-next" onClick={() => setSlide(s => (s + 1) % heroSlides.length)}><ChevronRight size={22}/></button>
      </section>

      {/* BRAND TICKER */}
      <div className="brand-ticker">
        <div className="brand-ticker-label"><Zap size={14}/> Official Partners</div>
        <div className="ticker-track">
          <div className="ticker-inner">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <Link key={i} to={`/brand/${b.slug}`} className="ticker-item">
                <span className="ticker-logo">{b.logo}</span>
                <span className="ticker-name">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section" ref={catRef}>
        <div className="container">
          <div className={`section-header ${catInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="section-label"><Globe size={14}/> Browse by Category</div>
            <h2 className="section-title">Shop by <span>Category</span></h2>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`}
                className={`cat-card ${catInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="cat-img-wrap">
                  <img src={cat.img} alt={cat.label} className="cat-img" loading="lazy"
                    onError={e => e.target.style.display='none'}/>
                </div>
                <div className="cat-info">
                  <span className="cat-icon" style={{ color: cat.color }}>{cat.icon}</span>
                  <div className="cat-label">{cat.label}</div>
                  <div className="cat-count">{cat.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section section-alt" ref={prodRef}>
        <div className="container">
          <div className={`section-header ${prodInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="section-label"><TrendingUp size={14}/> Top Picks</div>
            <h2 className="section-title">Featured <span>Products</span></h2>
            <Link to="/products" className="section-link">View All <ArrowRight size={14}/></Link>
          </div>
          <div className="products-grid">
            {FEATURED_PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 0.08} animate={prodInView}/>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-content animate-fade-left">
              <div className="section-label"><Award size={14}/> Why Choose Us</div>
              <h2 className="section-title">The UK's Most <span>Trusted</span> Tech Wholesaler</h2>
              <p className="why-desc">JanbalWholesale LTD has been supplying UK retailers, Amazon sellers, and tech distributors with 100% genuine branded accessories since 2019. Based in Croydon, London.</p>
              <div className="why-list">
                {[
                  'Official distributor for 50+ international brands',
                  'Over 10,000 products in stock, ready to ship',
                  'Competitive wholesale pricing for all order sizes',
                  'Free UK delivery on orders over £150',
                  '30-day no-hassle returns & replacement policy',
                  'Dedicated account manager for wholesale clients',
                ].map((item, i) => (
                  <div key={i} className="why-item"><CheckCircle size={18} color="#10b981"/> <span>{item}</span></div>
                ))}
              </div>
              <div className="why-actions">
                <Link to="/about" className="btn-primary">Learn More <ArrowRight size={16}/></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </div>
            <div className="why-visual animate-fade-right">
              {[
                { icon: <Truck size={32}/>, title: 'Fast UK Dispatch', sub: 'Next-day delivery available', color: '#f5a623', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&q=70' },
                { icon: <ShieldCheck size={32}/>, title: '100% Genuine Products', sub: 'All products brand-verified', color: '#10b981', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&q=70' },
                { icon: <RefreshCw size={32}/>, title: 'Easy Returns', sub: '30-day return guarantee', color: '#3b82f6', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=70' },
                { icon: <Globe size={32}/>, title: 'UK Registered', sub: 'Incorporated 26 June 2019', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=70' },
              ].map((w, i) => (
                <div key={i} className="why-card" style={{ '--wc': w.color }}>
                  <div className="why-card-icon" style={{ color: w.color }}>{w.icon}</div>
                  <div>
                    <div className="why-card-title">{w.title}</div>
                    <div className="why-card-sub">{w.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section section-alt" ref={brandRef}>
        <div className="container">
          <div className={`section-header ${brandInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="section-label">Official Partners</div>
            <h2 className="section-title">Brands We <span>Carry</span></h2>
            <Link to="/brands" className="section-link">All Brands <ArrowRight size={14}/></Link>
          </div>
          <div className="brands-grid">
            {BRANDS.map((b, i) => (
              <Link key={b.name} to={`/brand/${b.slug}`}
                className={`brand-card ${brandInView ? 'animate-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="brand-emoji">{b.logo}</span>
                <span className="brand-name">{b.name}</span>
                <span className="brand-count">{b.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section" ref={testRef}>
        <div className="container">
          <div className={`section-header ${testInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="section-label"><Star size={14}/> Customer Reviews</div>
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial-card ${testInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="test-stars">{'★'.repeat(t.rating)}</div>
                <p className="test-text">"{t.text}"</p>
                <div className="test-author">
                  <div className="test-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Wholesale Ordering?</h2>
            <p className="cta-desc">Get access to exclusive wholesale pricing for UK retailers and distributors. Contact our dedicated trade team today.</p>
            <div className="cta-actions">
              <a href="tel:+447777664194" className="btn-primary"><Phone size={16}/> Call Us Now</a>
              <a href="mailto:info@janbalwholesale.co.uk" className="btn-secondary"><Mail size={16}/> Email Us</a>
            </div>
          </div>
          <div className="cta-contact-cards">
            <div className="cta-card"><Phone size={24} color="#f5a623"/>
              <div><div className="cta-card-label">Phone</div><div className="cta-card-val">+44 7777 664194</div></div>
            </div>
            <div className="cta-card"><Mail size={24} color="#f5a623"/>
              <div><div className="cta-card-label">Email</div><div className="cta-card-val">info@janbalwholesale.co.uk</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
