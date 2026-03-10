import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Users, Package, Globe, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><Globe size={14}/> About Us</div>
          <h1 className="page-hero-title">About <span>JanbalWholesale LTD</span></h1>
          <p className="page-hero-desc">UK's trusted wholesale distributor of premium mobile, tablet, and tech accessories since 2019.</p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-content animate-fade-left">
            <div className="section-label"><Award size={14}/> Our Story</div>
            <h2 className="section-title">Built on <span>Trust & Quality</span></h2>
            <p>JanbalWholesale LTD was incorporated on <strong>26 June 2019</strong>, with a clear mission: to be the most reliable and competitive wholesale distributor of premium tech accessories in the United Kingdom.</p>
            <p>Based in <strong>Croydon, London</strong>, we serve hundreds of UK retailers, Amazon sellers, and tech distributors with genuine, branded products sourced directly from the world's most trusted manufacturers.</p>
            <p>From iPhone cases and MagSafe accessories to Anker powerbanks and JBL speakers — we stock a comprehensive range of over <strong>10,000 products</strong> across <strong>50+ international brands</strong>.</p>
            <div className="about-checks">
              {['UK Registered & Incorporated Company', 'Official distributor for 50+ global brands', '100% authentic, brand-verified products', 'Serving UK retailers since 2019', 'Croydon, London HQ – nationwide delivery'].map(i => (
                <div key={i} className="about-check"><CheckCircle size={17} color="#10b981"/> {i}</div>
              ))}
            </div>
          </div>
          <div className="about-stats animate-fade-right">
            {[
              { icon: <Calendar size={32}/>, num: '2019', label: 'Established', color: '#f5a623' },
              { icon: <Package size={32}/>, num: '10,000+', label: 'Products', color: '#3b82f6' },
              { icon: <Award size={32}/>, num: '50+', label: 'Brands', color: '#10b981' },
              { icon: <Users size={32}/>, num: '500+', label: 'UK Clients', color: '#8b5cf6' },
            ].map((s, i) => (
              <div key={i} className="about-stat-card" style={{ '--accent-c': s.color }}>
                <div className="about-stat-icon" style={{ color: s.color, background: `${s.color}18` }}>{s.icon}</div>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address + Contact */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Find Us</div>
          <h2 className="section-title">Our <span>Location</span></h2>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="ci-icon"><MapPin size={28} color="#f5a623"/></div>
              <h4>Address</h4>
              <p>Flat 5, 13 Thornhill Road<br/>Croydon, CR0 2XZ<br/>United Kingdom</p>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon"><Phone size={28} color="#3b82f6"/></div>
              <h4>Phone</h4>
              <a href="tel:+447777664194">+44 7777 664194</a>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon"><Mail size={28} color="#10b981"/></div>
              <h4>Email</h4>
              <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:'16px'}}>Ready to Work <span>Together?</span></h2>
          <p style={{color:'var(--text-light)',marginBottom:'28px',fontSize:'16px'}}>Get wholesale pricing today — contact our trade team for a personalised quote.</p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={16}/></Link>
            <a href="tel:+447777664194" className="btn-outline">Call +44 7777 664194</a>
          </div>
        </div>
      </section>
    </div>
  );
}
