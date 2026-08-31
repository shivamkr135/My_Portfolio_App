import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Project Card Component
const ProjectCard = ({ 
  title, 
  category, 
  lastUpdated, 
  techStack = [], 
  featuredTech, 
  liveUrl = "#", 
  githubUrl = "#", 
  logoSymbol = "⚡", 
  initialStarred = false 
}) => {
  const [isStarred, setIsStarred] = useState(initialStarred);

  return (
    <article className="portfolio-card">
      <div className="card-top-bar">
        <div className="project-logo-badge">{logoSymbol}</div>
        <button 
          className={`star-btn ${isStarred ? 'starred' : ''}`}
          onClick={() => setIsStarred(!isStarred)}
          type="button"
        >
          {isStarred ? 'Starred ★' : 'Star ★'}
        </button>
      </div>

      <div className="project-meta">
        <span className="category-name">{category}</span>
        <span className="bullet-dot">•</span>
        <span className="time-text">{lastUpdated}</span>
      </div>

      <h3 className="project-title">{title}</h3>

      <div className="tech-pill-container">
        {techStack.map((tech, idx) => (
          <span key={idx} className="tech-pill">{tech}</span>
        ))}
      </div>

      <div className="card-bottom-bar">
        <div className="stack-info">
          <span className="stack-title">{featuredTech}</span>
          <span className="stack-subtitle">Architecture</span>
        </div>

        <div className="action-button-group">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="code-btn" title="View Source Code">
            &lt;/&gt;
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer" className="demo-btn">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

// Main Projects Component
const Projects = () => {
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project list from backend Express API
    axios.get('http://localhost:4000/projects')
      .then((response) => {
        setPortfolioProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error connecting to server:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-projects-page">
      <div className="portfolio-container">
        
        <header className="portfolio-header">
          <p className="sub-title">MY WORK</p>
          <h2 className="main-title">Featured <span className="highlight">Projects</span></h2>
        </header>

        {loading ? (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p className="loading-text">Fetching projects from database...</p>
  </div>
) : (
  <div className="portfolio-grid">
    {portfolioProjects.map((project) => (
      <ProjectCard key={project._id || project.id} {...project} />
    ))}
  </div>
)}

      </div>
    </div>
  );
};

export default Projects;