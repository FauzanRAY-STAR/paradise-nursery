import { Leaf, Heart, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="section-eyebrow">OUR ROOTS</div>
      <h2>Growing a little more green into every day.</h2>
      <p className="about-intro">
        Paradise Nursery makes it easier to bring the calm, beauty, and joy of
        nature into your home. We believe every room can thrive with the right plant.
      </p>
      <div className="values-grid">
        <article className="value-card">
          <span className="value-icon"><Leaf size={22} /></span>
          <h3>Thoughtfully chosen</h3>
          <p>Friendly indoor plants selected for a range of spaces and experience levels.</p>
        </article>
        <article className="value-card">
          <span className="value-icon"><Heart size={22} /></span>
          <h3>Care made simple</h3>
          <p>We help you find plants that fit your routine, light, and lifestyle.</p>
        </article>
        <article className="value-card">
          <span className="value-icon"><Sprout size={22} /></span>
          <h3>Grow with confidence</h3>
          <p>Start small, learn as you go, and enjoy the process of watching things grow.</p>
        </article>
      </div>
    </section>
  );
}
