import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Check, ArrowLeft, ShieldCheck, Truck, RefreshCw, Mail, Phone } from 'lucide-react';
import { useCart } from '../CartContext';
import { ALL_PRODUCTS, getProductsByCategory } from '../data';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = ALL_PRODUCTS.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  if (!product) return (
    <div className="page-hero"><div className="container">
      <h1 className="page-hero-title">Product Not Found</h1>
      <Link to="/products" className="btn-primary" style={{marginTop:16}}>Browse All Products</Link>
    </div></div>
  );

  const related = getProductsByCategory(product.categorySlug)
    .filter(p => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="product-detail-page">
      <div className="pd-breadcrumb container">
        <Link to="/">Home</Link> /
        <Link to={`/category/${product.categorySlug}`}>{product.category}</Link> /
        <span>{product.name}</span>
      </div>

      <div className="container pd-main">
        {/* Image */}
        <div className="pd-img-col">
          <div className="pd-img-wrap">
            <img src={product.img} alt={product.name}
              onError={e => e.target.src='https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=700&q=80'}/>
            <span className="pd-tag">{product.tag}</span>
          </div>
        </div>

        {/* Info */}
        <div className="pd-info-col">
          <Link to={`/brand/${product.brandSlug}`} className="pd-brand">{product.brand}</Link>
          <h1 className="pd-name">{product.name}</h1>
          <div className="pd-category">
            <Link to={`/category/${product.categorySlug}`}>{product.category}</Link>
          </div>

          {product.description && <p className="pd-desc">{product.description}</p>}

          {product.colors && product.colors.length > 0 && (
            <div className="pd-colors-section">
              <div className="pd-colors-label">Available Colours</div>
              <div className="pd-colors">
                {product.colors.map((c, i) => (
                  <button key={i} className={`pd-color ${activeColor === i ? 'active' : ''}`}
                    style={{ background: c }}
                    onClick={() => setActiveColor(i)}
                    title={`Colour option ${i+1}`}/>
                ))}
              </div>
            </div>
          )}

          <div className="pd-enquiry-note">
            <Mail size={16} color="#f5a623"/>
            <span>This is a wholesale product. <strong>Contact us for pricing</strong> — we offer competitive bulk rates for UK retailers.</span>
          </div>

          <div className="pd-actions">
            <button className={`pd-add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
              {added ? <><Check size={18}/> Added to Enquiry!</> : <><ShoppingBag size={18}/> Add to Enquiry List</>}
            </button>
            <a href="mailto:info@janbalwholesale.co.uk?subject=Wholesale Enquiry" className="pd-enquire-btn">
              <Mail size={18}/> Email for Price
            </a>
          </div>

          <a href="tel:+447777664194" className="pd-call-btn">
            <Phone size={16}/> Or call +44 7777 664194 for immediate assistance
          </a>

          <div className="pd-trust">
            <div className="pd-trust-item"><Truck size={16} color="#10b981"/> Free UK delivery over £150</div>
            <div className="pd-trust-item"><ShieldCheck size={16} color="#3b82f6"/> 100% genuine products</div>
            <div className="pd-trust-item"><RefreshCw size={16} color="#f59e0b"/> 30-day returns</div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title" style={{marginBottom:32}}>More in <span>{product.category}</span></h2>
            <div className="products-grid">
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.07}/>)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
