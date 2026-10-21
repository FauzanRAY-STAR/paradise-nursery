import { useState } from 'react';
import { ArrowRight, Leaf, Sprout, Sun } from 'lucide-react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'plants') return <ProductList onNavigate={navigate} />;
  if (page === 'cart') return <CartItem onNavigate={navigate} />;

  return (
    <main className="landing-page">
      <nav className="navbar landing-nav">
        <button className="brand brand-button" onClick={() => navigate('home')}><span className="brand-mark">✳</span> paradise nursery</button>
        <div className="nav-links">
          <button className="active" onClick={() => navigate('home')}>Home</button>
          <button onClick={() => navigate('plants')}>Plants</button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Our story</button>
        </div>
        <button className="nav-cta" onClick={() => navigate('plants')}>Explore plants <ArrowRight size={16} /></button>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker"><span></span> A LITTLE MORE NATURE, EVERY DAY</div>
          <h1>Make room<br />for <em>something</em><br /><em>growing.</em></h1>
          <p className="hero-description">Bring home a little calm. Discover easy-going houseplants and leafy statement pieces made for the spaces you love.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate('plants')}>Get Started <ArrowRight size={17} /></button>
            <span className="hero-note"><Leaf size={16} /> Good things grow here</span>
          </div>
          <div className="hero-stats"><div><strong>18+</strong><span>plant favorites</span></div><div><strong>3</strong><span>curated collections</span></div><div><strong>100%</strong><span>good green energy</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"></div>
          <div className="floating-note"><span className="floating-icon"><Sprout size={19} /></span><div><strong>Grow at your pace</strong><small>There's a plant for everyone.</small></div></div>
          <div className="sun-stamp"><Sun size={21} /><span>ROOTED IN<br />GOOD LIVING</span></div>
        </div>
      </section>

      <section className="promise-strip">
        <div><Leaf size={21} /><span>Plants with personality</span></div><div><Sun size={21} /><span>For every kind of light</span></div><div><Sprout size={21} /><span>Easy to love, easy to grow</span></div>
      </section>
      <AboutUs />
      <section className="closing-cta"><div className="section-eyebrow">YOUR NEXT FAVORITE LEAF IS HERE</div><h2>A happier space starts with a little green.</h2><button className="primary-button" onClick={() => navigate('plants')}>Find your plant <ArrowRight size={17} /></button></section>
      <footer className="site-footer"><span className="brand-mark">✳</span> Paradise Nursery <span>Rooted in good living.</span></footer>
    </main>
  );
}
