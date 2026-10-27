import "./Hero.css";

import React from "react";

export default function Hero() {
  return (
    <section className="ykr-hero" id="home">
      <div className="ykr-hero-container">
        <div className="ykr-hero-content">
          <span className="ykr-hero-label">
            YKR TRAINING INSTITUTE • PCMC, PUNE
          </span>

          <h1>
            Speak with Confidence.
            <span> Connect with Impact.</span>
          </h1>

          <p className="ykr-hero-tagline">
            Learn the Art, Win the Heart.
          </p>

          <p className="ykr-hero-description">
            Improve your Spoken English, Public Speaking,
            Communication Skills and Personality Development
            through practical, activity-based training.
          </p>

          <div className="ykr-hero-actions">
            <a
              href="https://wa.me/917218550652?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo."
              target="_blank"
              rel="noreferrer"
              className="ykr-hero-primary"
            >
              Book a Free Demo <span>↗</span>
            </a>

            <a href="#courses" className="ykr-hero-secondary">
              Explore Courses <span>→</span>
            </a>
          </div>

          <div className="ykr-hero-stats">
            <div>
              <strong>6</strong>
              <span>PCMC Branches</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Training Courses</span>
            </div>

            <div>
              <strong>8 AM – 9 PM</strong>
              <span>Flexible Batches</span>
            </div>
          </div>
        </div>

        <div className="ykr-hero-visual">
          <div className="ykr-hero-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
              alt="Communication and professional training session"
            />
          </div>

          <div className="ykr-hero-floating-card">
            <span className="ykr-hero-card-icon">✦</span>
            <div>
              <strong>Practice Makes Confidence</strong>
              <span>Learn • Practice • Perform</span>
            </div>
          </div>

          <div className="ykr-hero-image-decoration" />
        </div>
      </div>
    </section>
  );
}
