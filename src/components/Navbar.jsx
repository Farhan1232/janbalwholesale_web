import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';
import { CATEGORIES, BRANDS, searchProducts } from '../data';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [catOpen, setCatOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCatOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, [location]);

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      setSearchResults(searchProducts(searchQuery).slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const h = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchResults([]);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+447777664194"><Phone size={13}/> +44 7777 664194</a>
            <a href="mailto:info@janbalwholesale.co.uk"><Mail size={13}/> info@janbalwholesale.co.uk</a>
            <span className="hide-mobile"><MapPin size={13}/> Croydon, London, UK</span>
          </div>
          <div className="topbar-right">
            <span className="hide-mobile">Free UK Delivery Over £150</span>
            <span className="topbar-badge">🇬🇧 UK Based</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/src/images/logo.png" alt="JanbalWholesale" className="logo-img"
              onError={e => e.target.style.display='none'} />
            <div className="logo-text">
              <span className="logo-main">Janbal</span>
              <span className="logo-sub">Wholesale LTD</span>
            </div>
          </Link>

          <div className={`search-bar ${searchOpen ? 'open' : ''}`} ref={searchRef}>
            <form onSubmit={handleSearchSubmit} style={{ display:'flex', alignItems:'center', gap:10, flex:1 }}>
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus={searchOpen}
              />
            </form>
            <button className="search-close" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}><X size={16}/></button>
            {searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map(r => (
                  <Link key={r.id} to={`/product/${r.slug}`} className="search-result-item">
                    <img src={r.img} alt="" onError={e => e.target.style.display='none'} />
                    <div>
                      <div className="sr-brand">{r.brand} · {r.category}</div>
                      <div className="sr-name">{r.name}</div>
                    </div>
                  </Link>
                ))}
                <Link to={`/search?q=${encodeURIComponent(searchQuery)}`} className="search-view-all">
                  View all results for "{searchQuery}" →
                </Link>
              </div>
            )}
          </div>

          <div className="navbar-actions">
            <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)}><Search size={20}/></button>
            <a href="tel:+447777664194" className="icon-btn hide-mobile"><Phone size={20}/></a>
            <button className="icon-btn cart-btn" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={20}/>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
            <button className="icon-btn menu-toggle hide-desktop" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>

        <div className="nav-links hide-mobile">
          <div className="container nav-links-inner">
            <div className="nav-dropdown" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
              <button className="nav-link nav-link-cats">
                <Menu size={16}/> All Categories <ChevronDown size={14}/>
              </button>
              {catOpen && (
                <div className="dropdown-menu">
                  {CATEGORIES.map(c => (
                    <Link key={c.slug} to={`/category/${c.slug}`} className="dropdown-item">
                      <span>{c.icon}</span> {c.label} <span className="drop-count">{c.count}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">All Products</Link>
            <Link to="/brands" className="nav-link">Brands</Link>
            <Link to="/deals" className="nav-link nav-link-hot">🔥 Hot Deals</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mob-link">🏠 Home</Link>
            <Link to="/products" className="mob-link">📦 All Products</Link>
            <Link to="/brands" className="mob-link">🏷 Brands</Link>
            <Link to="/deals" className="mob-link">🔥 Hot Deals</Link>
            <div className="mob-section-label">Categories</div>
            {CATEGORIES.map(c => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="mob-link mob-link-cat">{c.icon} {c.label}</Link>
            ))}
            <div className="mob-section-label">Top Brands</div>
            {BRANDS.slice(0, 6).map(b => (
              <Link key={b.slug} to={`/brand/${b.slug}`} className="mob-link mob-link-cat">{b.logo} {b.name}</Link>
            ))}
            <Link to="/about" className="mob-link">ℹ️ About Us</Link>
            <Link to="/contact" className="mob-link">📬 Contact</Link>
            <div className="mob-contact">
              <a href="tel:+447777664194"><Phone size={16}/> +44 7777 664194</a>
              <a href="mailto:info@janbalwholesale.co.uk"><Mail size={16}/> info@janbalwholesale.co.uk</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
