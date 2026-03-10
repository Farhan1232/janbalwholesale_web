import React from 'react';
import { RefreshCw } from 'lucide-react';
import './PolicyPage.css';

export default function Warranty() {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label"><RefreshCw size={14}/> Policy</div>
          <h1 className="page-hero-title">Replacement & <span>Warranty</span></h1>
          <p className="page-hero-desc">JanbalWholesale LTD stands behind every product we sell.</p>
        </div>
      </div>
      <section className="section">
        <div className="container policy-container">
          <div className="policy-content">
            <h2>Warranty Coverage</h2>
            <p>All products sold by JanbalWholesale LTD are covered by the manufacturer's warranty. Warranty periods vary by brand and product type — typically ranging from 6 months to 2 years.</p>

            <h2>What Is Covered</h2>
            <ul>
              <li>Manufacturing defects in materials and workmanship</li>
              <li>Faulty components under normal use</li>
              <li>Products that fail to function as intended from new</li>
            </ul>

            <h2>What Is Not Covered</h2>
            <ul>
              <li>Accidental damage (drops, spills, impact)</li>
              <li>Normal wear and tear</li>
              <li>Damage caused by misuse or unauthorised modifications</li>
              <li>Cosmetic damage not affecting functionality</li>
            </ul>

            <h2>How to Claim</h2>
            <p>To make a warranty or replacement claim:</p>
            <ul>
              <li>Contact us within the warranty period at <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a> or call <a href="tel:+447777664194">+44 7777 664194</a></li>
              <li>Provide your order number and a description of the fault</li>
              <li>We may request photos or return of the faulty item</li>
              <li>Upon confirmation, we will send a replacement or issue a refund</li>
            </ul>

            <h2>30-Day Returns</h2>
            <p>We offer a 30-day returns policy for items in original, unused condition with packaging intact. Items must be returned in their original packaging. Return shipping costs may apply unless the item is faulty.</p>

            <h2>Contact</h2>
            <p>Email: <a href="mailto:info@janbalwholesale.co.uk">info@janbalwholesale.co.uk</a><br/>
            Phone: <a href="tel:+447777664194">+44 7777 664194</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
