import React from 'react';
import { FileText } from 'lucide-react';
import './PolicyPage.css';

export default function Terms() {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><FileText size={14}/> Legal</div>
          <h1 className="page-hero-title">Terms & <span>Conditions</span></h1>
          <p className="page-hero-desc">Last updated: January 2025 | JanbalWholesale LTD</p>
        </div>
      </div>
      <section className="section">
        <div className="container policy-container">
          <div className="policy-content">
            <h2>1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the JanbalWholesale LTD website and services. By accessing our website or placing an order, you agree to be bound by these terms. JanbalWholesale LTD is registered in England and Wales, incorporated 26 June 2019, with registered address at Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ.</p>

            <h2>2. Eligibility</h2>
            <p>Our wholesale services are intended for business customers (retailers, distributors, resellers). By placing an order, you confirm you are acting in a business capacity. We reserve the right to decline orders from non-trade customers.</p>

            <h2>3. Products & Pricing</h2>
            <p>All products listed are subject to availability. Prices are shown in British Pounds Sterling (GBP) and are exclusive of VAT unless stated otherwise. We reserve the right to change prices without notice. Images are for illustrative purposes and actual products may vary slightly.</p>

            <h2>4. Orders</h2>
            <p>An order constitutes an offer to purchase. We reserve the right to accept or decline any order. Order confirmation does not constitute acceptance. Acceptance occurs upon despatch of goods.</p>

            <h2>5. Payment</h2>
            <p>Payment is due at the time of order unless a credit account has been agreed in writing. We accept bank transfer, card payment, and other methods as specified at checkout. All payments are processed securely.</p>

            <h2>6. Delivery</h2>
            <p>We aim to despatch all UK orders within 1–3 business days. Delivery timescales are estimates only and not guaranteed. Free delivery is available on qualifying orders over £150 to UK mainland addresses. Risk passes to the buyer upon delivery.</p>

            <h2>7. Returns & Refunds</h2>
            <p>We offer a 30-day returns policy for items in original, unused condition with packaging intact. Please contact us before returning any goods. Refunds will be processed within 14 days of receiving returned items. Goods damaged in transit must be reported within 48 hours of receipt.</p>

            <h2>8. Warranty</h2>
            <p>All products are warranted to be free from defects in materials and workmanship. Warranty periods vary by brand and product. Warranty does not cover accidental damage, misuse, or normal wear and tear.</p>

            <h2>9. Intellectual Property</h2>
            <p>All content on this website, including brand names, logos, and product information, belongs to their respective owners. You may not reproduce or distribute our content without written permission.</p>

            <h2>10. Limitation of Liability</h2>
            <p>JanbalWholesale LTD's liability shall not exceed the value of goods purchased. We are not liable for indirect, consequential, or special losses. Nothing in these terms limits our liability for death or personal injury caused by negligence.</p>

            <h2>11. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>12. Contact</h2>
            <p>JanbalWholesale LTD, Flat 5, 13 Thornhill Road, Croydon, CR0 2XZ<br/>
            Email: <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a><br/>
            Phone: <a href="tel:+447777664194">+44 7777 664194</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
