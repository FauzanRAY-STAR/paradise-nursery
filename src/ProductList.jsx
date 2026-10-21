import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Check } from 'lucide-react';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Statement Plants', price: 24, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85', description: 'Iconic split leaves that bring a tropical feel.' },
  { id: 2, name: 'Rubber Plant', category: 'Statement Plants', price: 28, image: 'https://images.unsplash.com/photo-1597055181300-a8b3be4f5f3b?auto=format&fit=crop&w=800&q=85', description: 'Glossy, deep-green leaves with a bold silhouette.' },
  { id: 3, name: 'Bird of Paradise', category: 'Statement Plants', price: 42, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85', description: 'A sculptural plant for bright, open corners.' },
  { id: 4, name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 38, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85', description: 'Large violin-shaped leaves make a natural focal point.' },
  { id: 5, name: 'Kentia Palm', category: 'Statement Plants', price: 36, image: 'https://images.unsplash.com/photo-1597055181449-7e6f6b2d0f8b?auto=format&fit=crop&w=800&q=85', description: 'Soft arching fronds for an airy, relaxed look.' },
  { id: 6, name: 'Dragon Tree', category: 'Statement Plants', price: 26, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85', description: 'Upright, easygoing greenery with elegant narrow leaves.' },

  { id: 7, name: 'Golden Pothos', category: 'Easy-Care Favorites', price: 14, image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=800&q=85', description: 'A trailing favorite with marbled green and gold leaves.' },
  { id: 8, name: 'Snake Plant', category: 'Easy-Care Favorites', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=800&q=85', description: 'Architectural leaves and a forgiving care routine.' },
  { id: 9, name: 'ZZ Plant', category: 'Easy-Care Favorites', price: 20, image: 'https://images.unsplash.com/photo-1632207691143-643e2f3f6c2b?auto=format&fit=crop&w=800&q=85', description: 'Shiny leaves that look lovely with minimal fuss.' },
  { id: 10, name: 'Peace Lily', category: 'Easy-Care Favorites', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85', description: 'Graceful green foliage and elegant white blooms.' },
  { id: 11, name: 'Chinese Evergreen', category: 'Easy-Care Favorites', price: 19, image: 'https://images.unsplash.com/photo-1597055181300-a8b3be4f5f3b?auto=format&fit=crop&w=800&q=85', description: 'Colorful foliage that brightens shelves and desks.' },
  { id: 12, name: 'Cast Iron Plant', category: 'Easy-Care Favorites', price: 23, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85', description: 'A sturdy leafy companion for less sunny spots.' },

  { id: 13, name: 'Calathea Orbifolia', category: 'Pattern & Color', price: 27, image: 'https://images.unsplash.com/photo-1600411832986-5a447c9e3c9a?auto=format&fit=crop&w=800&q=85', description: 'Rounded leaves with delicate silver-green stripes.' },
  { id: 14, name: 'Pink Aglaonema', category: 'Pattern & Color', price: 25, image: 'https://images.unsplash.com/photo-1597055181449-7e6f6b2d0f8b?auto=format&fit=crop&w=800&q=85', description: 'A splash of rosy color among lush foliage.' },
  { id: 15, name: 'Prayer Plant', category: 'Pattern & Color', price: 21, image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=800&q=85', description: 'Decorative leaves with striking feather-like markings.' },
  { id: 16, name: 'Polka Dot Plant', category: 'Pattern & Color', price: 12, image: 'https://images.unsplash.com/photo-1600411832986-5a447c9e3c9a?auto=format&fit=crop&w=800&q=85', description: 'Playful speckled leaves for a colorful plant shelf.' },
  { id: 17, name: 'Purple Shamrock', category: 'Pattern & Color', price: 16, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85', description: 'Deep purple foliage that adds contrast to a room.' },
  { id: 18, name: 'Bird’s Nest Fern', category: 'Pattern & Color', price: 17, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85', description: 'Fresh rippled fronds in a bright leafy rosette.' },
];

const categories = ['Statement Plants', 'Easy-Care Favorites', 'Pattern & Color'];
const money = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="shop-page">
      <nav className="navbar">
        <button className="brand brand-button" onClick={() => onNavigate('home')}><span className="brand-mark">✳</span> paradise nursery</button>
        <div className="nav-links">
          <button onClick={() => onNavigate('home')}>Home</button>
          <button className="active" onClick={() => onNavigate('plants')}>Plants</button>
          <button className="cart-nav" onClick={() => onNavigate('cart')}><ShoppingCart size={18} /> Cart <span className="cart-badge">{cartCount}</span></button>
        </div>
      </nav>
      <header className="shop-header">
        <div className="section-eyebrow">THE PLANT COLLECTION</div>
        <h1>Find your kind of green.</h1>
        <p>Thoughtful greenery for your favorite corners, sunny windows, and everyday rituals.</p>
      </header>
      {categories.map((category) => (
        <section className="product-section" key={category}>
          <div className="category-heading">
            <div><div className="section-eyebrow">GROW SOMETHING GOOD</div><h2>{category}</h2></div>
            <span>{products.filter((product) => product.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => {
              const inCart = cartItems.some((item) => item.id === product.id);
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">Indoor plant</span></div>
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-card-bottom"><strong>{money(product.price)}</strong>
                      <button className={`add-button ${inCart ? 'added' : ''}`} disabled={inCart} onClick={() => dispatch(addItem(product))}>
                        {inCart ? <><Check size={15} /> Added</> : <><ShoppingCart size={15} /> Add to cart</>}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
      <footer className="site-footer"><span className="brand-mark">✳</span> Paradise Nursery <span>Rooted in good living.</span></footer>
    </main>
  );
}
