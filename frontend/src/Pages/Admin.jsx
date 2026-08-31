import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Admin = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  
  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    lastUpdated: 'Updated recently',
    techStack: '',
    featuredTech: '',
    logoSymbol: '⚡',
    liveUrl: '',
    githubUrl: ''
  });

  // Fetch data on load
  useEffect(() => {
    fetchMessages();
    fetchProjects();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:4000/contacts');
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:4000/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await axios.delete(`http://localhost:4000/contacts/${id}`);
    fetchMessages();
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await axios.delete(`http://localhost:4000/projects/${id}`);
    fetchProjects();
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const formattedProject = {
      ...newProject,
      techStack: newProject.techStack.split(',').map(s => s.trim())
    };
    
    await axios.post('http://localhost:4000/projects', formattedProject);
    setNewProject({ title: '', category: '', lastUpdated: 'Updated recently', techStack: '', featuredTech: '', logoSymbol: '⚡', liveUrl: '', githubUrl: '' });
    fetchProjects();
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        
        <header className="admin-header">
          <h2>Admin <span className="highlight">Dashboard</span></h2>
          <div className="tab-buttons">
            <button className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>
              Messages ({messages.length})
            </button>
            <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
              Projects ({projects.length})
            </button>
          </div>
        </header>

        {/* TAB 1: CONTACT MESSAGES */}
        {activeTab === 'messages' && (
          <div className="messages-list">
            {messages.length === 0 ? <p>No messages received yet.</p> : messages.map((msg) => (
              <div key={msg._id} className="admin-card">
                <div className="card-header">
                  <strong>{msg.name}</strong> ({msg.email})
                  <button onClick={() => handleDeleteMessage(msg._id)} className="delete-btn">Delete</button>
                </div>
                <p className="msg-subject">Subject: {msg.subject}</p>
                <p className="msg-body">{msg.message}</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: MANAGE PROJECTS */}
        {activeTab === 'projects' && (
          <div className="projects-admin">
            
            {/* Add Project Form */}
            <form onSubmit={handleAddProject} className="add-project-form">
              <h3>Add New Project</h3>
              <input type="text" placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
              <input type="text" placeholder="Category (e.g. Full-Stack)" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} required />
              <input type="text" placeholder="Tech Stack (comma separated)" value={newProject.techStack} onChange={e => setNewProject({...newProject, techStack: e.target.value})} required />
              <input type="text" placeholder="Featured Tech / Architecture" value={newProject.featuredTech} onChange={e => setNewProject({...newProject, featuredTech: e.target.value})} required />
              <input type="text" placeholder="Live Demo URL" value={newProject.liveUrl} onChange={e => setNewProject({...newProject, liveUrl: e.target.value})} />
              <input type="text" placeholder="GitHub URL" value={newProject.githubUrl} onChange={e => setNewProject({...newProject, githubUrl: e.target.value})} />
              <button type="submit" className="submit-btn">Add Project</button>
            </form>

            {/* Existing Projects List */}
            <div className="existing-projects">
              <h3>Existing Projects</h3>
              {projects.map((proj) => (
                <div key={proj._id} className="admin-card project-row">
                  <div>
                    <strong>{proj.title}</strong> — <span className="cat">{proj.category}</span>
                  </div>
                  <button onClick={() => handleDeleteProject(proj._id)} className="delete-btn">Delete</button>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;