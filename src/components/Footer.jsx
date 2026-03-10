import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight, Shield, Truck, RefreshCw, Award } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Trust strip */}
      <div className="footer-trust">
        <div className="container trust-grid">
          {[
            { icon: <Truck size={28}/>, label: 'Free UK Delivery', sub: 'On orders over £150' },
            { icon: <Shield size={28}/>, label: 'Secure Payments', sub: 'SSL encrypted checkout' },
            { icon: <RefreshCw size={28}/>, label: '30-Day Returns', sub: 'Hassle-free policy' },
            { icon: <Award size={28}/>, label: 'Official Distributor', sub: 'UK Registered Company' },
          ].map((t, i) => (
            <div key={i} className="trust-item">
              <div className="trust-icon">{t.icon}</div>
              <div>
                <div className="trust-label">{t.label}</div>
                <div className="trust-sub">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Company */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <img src="/src/images/logo.png" alt="JanbalWholesale" onError={(e)=>{e.target.style.display='none'}} />
              <div>
                <span className="footer-logo-main">Janbal</span>
                <span className="footer-logo-sub">Wholesale LTD</span>
              </div>
            </div>
            <p className="footer-desc">
              UK's trusted wholesale distributor of premium mobile, tablet, and tech accessories.
              Official partner of leading international brands since 2019.
            </p>
            <div className="footer-contact-list">
              <a href="tel:+447777664194"><Phone size={15}/> +44 7777 664194</a>
              <a href="mailto:info@janbalwholesale.co.uk"><Mail size={15}/> info@janbalwholesale.co.uk</a>
              <span><MapPin size={15}/> Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ</span>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
              <a href="#" aria-label="Twitter"><Twitter size={18}/></a>
              <a href="#" aria-label="YouTube"><Youtube size={18}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
            </div>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4>Products</h4>
            {['Mobile Covers', 'Smartphones', 'Tablets', 'Smartwatches', 'Earbuds & Headphones', 'Powerbanks', 'MagSafe Accessories', 'Data Cables', 'Chargers', 'Car Accessories', 'Speakers'].map(l => (
              <Link key={l} to="/products" className="footer-link"><ArrowRight size={12}/>{l}</Link>
            ))}
          </div>

          {/* Brands */}
          <div className="footer-col">
            <h4>Top Brands</h4>
            {['Apple', 'Samsung', 'Anker', 'Baseus', 'Ugreen', 'JBL', 'Xiaomi', 'Pitaka', 'Mcdodo', 'Boya', 'A4Tech', 'JisuLife'].map(b => (
              <Link key={b} to="/brands" className="footer-link"><ArrowRight size={12}/>{b}</Link>
            ))}
          </div>

          {/* Info & Policy */}
          <div className="footer-col">
            <h4>Information</h4>
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Blog', path: '/blog' },
              { label: 'Reviews', path: '/reviews' },
              { label: 'FAQs', path: '/faq' },
              { label: 'Contact Us', path: '/contact' },
            ].map(l => (
              <Link key={l.label} to={l.path} className="footer-link"><ArrowRight size={12}/>{l.label}</Link>
            ))}
            <h4 style={{marginTop: '24px'}}>Policy</h4>
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms & Conditions', path: '/terms' },
              { label: 'Replacement & Warranty', path: '/warranty' },
              { label: 'Shipping Policy', path: '/shipping' },
              { label: 'Returns Policy', path: '/returns' },
            ].map(l => (
              <Link key={l.label} to={l.path} className="footer-link"><ArrowRight size={12}/>{l.label}</Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer-col footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest deals, new arrivals, and exclusive wholesale offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="company-reg">
              <Shield size={14}/>
              <div>
                <div className="reg-label">UK Registered Company</div>
                <div className="reg-detail">Incorporated: 26 June 2019</div>
                <div className="reg-detail">Reg. No: JanbalWholesale LTD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 JanbalWholesale LTD. All Rights Reserved. | Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookie-policy">Cookies</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
