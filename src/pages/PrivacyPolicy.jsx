import React from 'react';
import { Shield } from 'lucide-react';
import './PolicyPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><Shield size={14}/> Legal</div>
          <h1 className="page-hero-title">Privacy <span>Policy</span></h1>
          <p className="page-hero-desc">Last updated: January 2025 | JanbalWholesale LTD</p>
        </div>
      </div>
      <section className="section">
        <div className="container policy-container">
          <div className="policy-content">
            <h2>1. Introduction</h2>
            <p>JanbalWholesale LTD ("we", "us", "our"), registered in England and Wales, incorporated on 26 June 2019, with its registered office at Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ, is committed to protecting your personal information and your right to privacy.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you contact us or place orders. This includes:</p>
            <ul>
              <li>Name and contact details (email, phone number, postal address)</li>
              <li>Business information (company name, VAT number)</li>
              <li>Order history and transaction details</li>
              <li>Communications sent to or from us</li>
              <li>Website usage data (via cookies and analytics)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use personal data to:</p>
            <ul>
              <li>Process and fulfil your orders</li>
              <li>Communicate with you about products, orders, and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your data on the following legal bases under UK GDPR: performance of a contract, legitimate interests, legal obligation, and consent where applicable.</p>

            <h2>5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share it with trusted third parties such as delivery partners, payment processors, and IT service providers strictly as required to deliver our services.</p>

            <h2>6. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes it was collected, typically no longer than 7 years for business records as required by UK law.</p>

            <h2>7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, delete, restrict, or port your personal data, and to object to processing. To exercise these rights, contact us at <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a>.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses cookies to improve your experience. You can control cookies through your browser settings. For more information, see our Cookie Policy.</p>

            <h2>9. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.</p>

            <h2>10. Contact</h2>
            <p>For any privacy concerns, contact us at:<br/>
            JanbalWholesale LTD<br/>
            Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ<br/>
            Email: <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a><br/>
            Phone: <a href="tel:+447777664194">+44 7777 664194</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
