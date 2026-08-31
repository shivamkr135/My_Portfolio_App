import React from 'react';


const Academics = () => {
  const educationData = [
    {
      id: 1,
      type: "University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "The ICFAI University Raipur",
      duration: "2023 — 2027",
      grade: "8.0 CGPA",
      highlights: ["Data Structures & Algorithms", "Full Stack Development", "Database Management", "Software Engineering"]
    },
    {
      id: 2,
      type: "Higher Secondary",
      degree: "Class XII (Senior Secondary)",
      field: "Science Stream (PCM)",
      institution: "LYCEUM international School",
      duration: "2021 — 2023",
      grade: "74%",
      highlights: ["Physics, Chemistry, Mathematics", "Fine Arts", "Merit Certificate in Programming"]
    },
    {
      id: 3,
      type: "Secondary School",
      degree: "Class X (Secondary Education)",
      field: "General Academics",
      institution: "St. Joseph sr. sec. School",
      duration: "2019 — 2021",
      grade: "79%",
      highlights: ["Science & Mathematics Focus", "School Science Exhibition Coordinator"]
    }
  ];

  const certificationsData = [
    {
      id: 1,
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Issued 2024",
      badge: "Cloud"
    },
    {
      id: 2,
      title: "Meta Front-End Developer Specialization",
      issuer: "Coursera",
      date: "Issued 2023",
      badge: "Frontend"
    },
    {
      id: 3,
      title: "Node.js & Express API Certification",
      issuer: "FreeCodeCamp",
      date: "Issued 2023",
      badge: "Backend"
    }
  ];

  return (
    <div className="academics-page">
      <div className="academics-container">
        
        {/* Header Section */}
        <header className="academics-header">
          <p className="sub-title">MY JOURNEY</p>
          <h2 className="main-title">
            Academic <span className="highlight">Background</span>
          </h2>
          <p className="header-desc">
            A chronological timeline of my formal education and professional certifications.
          </p>
        </header>

        {/* Timeline Grid */}
        <div className="academics-grid">
          
          {/* Main Education Timeline */}
          <section className="timeline-section">
            <h3 className="section-heading">
              <span className="heading-icon">🎓</span> Formal Education
            </h3>

            <div className="timeline-wrapper">
              {educationData.map((item) => (
                <div key={item.id} className="timeline-card">
                  <div className="timeline-node"></div>
                  <div className="card-top">
                    <span className="type-badge">{item.type}</span>
                    <span className="duration-pill">{item.duration}</span>
                  </div>

                  <h4 className="degree-title">{item.degree}</h4>
                  <p className="field-text">{item.field}</p>

                  <div className="institution-info">
                    <span className="institution-name">{item.institution}</span>
                    <span className="grade-badge">{item.grade}</span>
                  </div>

                  <div className="highlights-group">
                    {item.highlights.map((point, index) => (
                      <span key={index} className="mini-pill">{point}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Sidebar */}
          <section className="certifications-section">
            <h3 className="section-heading">
              <span className="heading-icon">📜</span> Certifications
            </h3>

            <div className="cert-list">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-header">
                    <span className="cert-badge">{cert.badge}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default Academics;