import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../CartContext';
import './ProductCard.css';

export default function ProductCard({ product, delay = 0, animate = true }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className={`pc-card ${animate ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Link to={`/product/${product.slug}`} className="pc-img-wrap">
        <img
          src={product.img}
          alt={product.name}
          className="pc-img"
          loading="lazy"
          onError={e => {
            e.target.src = 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80';
          }}
        />
        <span className="pc-tag">{product.tag}</span>
        <button
          className={`pc-wish ${wished ? 'wished' : ''}`}
          onClick={e => { e.preventDefault(); setWished(!wished); }}
          aria-label="Wishlist"
        >
          <Heart size={15} fill={wished ? '#ef4444' : 'none'} color={wished ? '#ef4444' : 'currentColor'}/>
        </button>
      </Link>
      <div className="pc-info">
        <Link to={`/brand/${product.brandSlug}`} className="pc-brand">{product.brand}</Link>
        <Link to={`/product/${product.slug}`} className="pc-name">{product.name}</Link>
        {product.colors && product.colors.length > 0 && (
          <div className="pc-colors">
            {product.colors.map((c, i) => (
              <span key={i} className="pc-color" style={{ background: c }} title={`Colour ${i+1}`}/>
            ))}
          </div>
        )}
        <button className={`pc-add ${added ? 'added' : ''}`} onClick={handleAdd}>
          {added ? <><Check size={14}/> Added!</> : <><ShoppingBag size={14}/> Add to Enquiry</>}
        </button>
      </div>
    </div>
  );
}
