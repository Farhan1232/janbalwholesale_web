import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.subject || 'Wholesale Enquiry'} – ${form.name}`);
    const body = encodeURIComponent(
      `Hello JanbalWholesale Team,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nCompany: ${form.company || 'Not provided'}\nSubject: ${form.subject}\n\nMessage:\n${form.message}\n\nThank you.`
    );
    window.location.href = `mailto:info@janbalwholesale.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><MessageCircle size={14}/> Get In Touch</div>
          <h1 className="page-hero-title">Contact <span>Us</span></h1>
          <p className="page-hero-desc">Speak with our wholesale trade team. We're here to help with orders, enquiries, and pricing.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-left animate-fade-left">
            <h3>Get in Touch</h3>
            <p className="contact-info-text">Our dedicated trade team is available Monday to Friday, 9am–6pm GMT. For urgent enquiries, please call or WhatsApp us directly.</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="cd-icon"><Phone size={20} color="#f5a623"/></div>
                <div>
                  <div className="cd-label">Phone / WhatsApp</div>
                  <a href="tel:+447777664194" className="cd-value">+44 7777 664194</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="cd-icon"><Mail size={20} color="#3b82f6"/></div>
                <div>
                  <div className="cd-label">Email</div>
                  <a href="mailto:info@janbalwholesale.co.uk" className="cd-value">info@janbalwholesale.co.uk</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="cd-icon"><MapPin size={20} color="#10b981"/></div>
                <div>
                  <div className="cd-label">Address</div>
                  <div className="cd-value">Flat 5, 13 Thornhill Road<br/>Croydon, CR0 2XZ, UK</div>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="cd-icon"><Clock size={20} color="#8b5cf6"/></div>
                <div>
                  <div className="cd-label">Business Hours</div>
                  <div className="cd-value">Mon–Fri: 9:00 AM – 6:00 PM<br/>Saturday: 10:00 AM – 4:00 PM</div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/447777664194"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <span style={{fontSize:'22px'}}>💬</span> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="contact-right animate-fade-right">
            {sent ? (
              <div className="contact-success">
                <CheckCircle size={60} color="#10b981"/>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting JanbalWholesale LTD. Our trade team will respond within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <h3>Send Us a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handle} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+44 ..." value={form.phone} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input name="company" type="text" placeholder="Your company" value={form.company} onChange={handle} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={form.subject} onChange={handle} required>
                    <option value="">Select a subject</option>
                    <option>Wholesale Pricing Enquiry</option>
                    <option>Product Availability</option>
                    <option>Order Status</option>
                    <option>Returns & Warranty</option>
                    <option>Partnership Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Tell us what you need..." value={form.message} onChange={handle} />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  <Send size={16}/> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
