import React from 'react';
import Hero from '../components/Hero';

// Import other components here if you build them (e.g., Skills, FeaturedProjects)

const Home = () => {
  return (
    <main className="home-page">
      {/* Top Hero Section */}
      <Hero />

      {/* You can add additional homepage sections below Hero */}
      <section className="quick-summary">
        {/* Additional homepage content */}
      </section>
    </main>
  );
};

export default Home;