import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice';

const money = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="cart-page">
      <nav className="navbar">
        <button className="brand brand-button" onClick={() => onNavigate('home')}><span className="brand-mark">✳</span> paradise nursery</button>
        <div className="nav-links">
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('plants')}>Plants</button>
          <button className="cart-nav active" onClick={() => onNavigate('cart')}><ShoppingBag size={18} /> Cart <span className="cart-badge">{totalQuantity}</span></button>
        </div>
      </nav>
      <div className="cart-container">
        <button className="back-link" onClick={() => onNavigate('plants')}><ArrowLeft size={16} /> Continue shopping</button>
        <div className="cart-title-row"><div><div className="section-eyebrow">YOUR LITTLE GREEN CORNER</div><h1>Shopping cart</h1><p>{totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart</p></div><span className="cart-title-icon"><ShoppingBag size={28} /></span></div>
        {items.length === 0 ? (
          <div className="empty-cart"><div className="empty-icon"><ShoppingBag size={32} /></div><h2>Your cart is taking a little nap.</h2><p>Add a plant or two and let the green things begin.</p><button className="primary-button" onClick={() => onNavigate('plants')}>Explore plants</button></div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details"><div className="product-category">{item.category}</div><h3>{item.name}</h3><p>{money(item.price)} each</p>
                    <div className="quantity-control">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button>
                    </div>
                  </div>
                  <div className="cart-item-end"><strong>{money(item.price * item.quantity)}</strong><button className="remove-button" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={15} /> Remove</button></div>
                </article>
              ))}
            </section>
            <aside className="order-summary">
              <div className="section-eyebrow">A LITTLE SUMMARY</div><h2>Order summary</h2>
              <div className="summary-line"><span>Items ({totalQuantity})</span><span>{money(totalCost)}</span></div>
              <div className="summary-line"><span>Delivery</span><span className="free-label">Free</span></div>
              <div className="summary-total"><span>Total</span><strong>{money(totalCost)}</strong></div>
              <button className="primary-button checkout-button" onClick={() => window.alert('Checkout is coming soon. Thanks for growing with Paradise Nursery!')}>Checkout <span>→</span></button>
              <p className="secure-note">Checkout is a demo and does not process real payments.</p>
            </aside>
          </div>
        )}
      </div>
      <footer className="site-footer"><span className="brand-mark">✳</span> Paradise Nursery <span>Rooted in good living.</span></footer>
    </main>
  );
}
