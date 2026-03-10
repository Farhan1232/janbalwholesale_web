import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, Mail } from 'lucide-react';
import { useCart } from '../CartContext';
import './CartSidebar.css';

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, clearCart, totalItems } = useCart();

  if (!cartOpen) return null;

  const handleEnquire = () => {
    const itemsList = cart.map(i => `- ${i.name} (Qty: ${i.qty})`).join('%0A');
    const subject = encodeURIComponent('Wholesale Enquiry – Product List');
    const body = encodeURIComponent(
      `Hello JanbalWholesale,\n\nI would like to enquire about the following products:\n\n${cart.map(i => `- ${i.name} (Qty: ${i.qty})`).join('\n')}\n\nPlease provide wholesale pricing and availability.\n\nThank you.`
    );
    window.location.href = `mailto:info@janbalwholesale.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setCartOpen(false)} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={20}/>
            <span>Your Enquiry List</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)}><X size={20}/></button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={60} color="var(--border)"/>
            <h3>Your list is empty</h3>
            <p>Add products to send an enquiry to our wholesale team.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img"
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=120&q=60'; }} />
                  <div className="cart-item-info">
                    <div className="cart-item-brand">{item.brand}</div>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}><Minus size={13}/></button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={13}/></button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={15}/>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-summary">
                <span>{totalItems} item{totalItems !== 1 ? 's' : ''} in enquiry</span>
                <button className="cart-clear" onClick={clearCart}>Clear all</button>
              </div>
              <button className="cart-enquire" onClick={handleEnquire}>
                <Mail size={18}/> Send Enquiry to Wholesale Team
              </button>
              <p className="cart-note">
                This will open your email to <strong>info@janbalwholesale.co.uk</strong> with your product list. Our team will reply with wholesale pricing within 24 hours.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
