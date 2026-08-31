const express = require('express');
const contactModel = require("./models/contact.model");
const projectModel = require('./models/project.model');

const cors = require("cors");


// Initialize app first
const app = express();

// Middleware after initialization
app.use(express.json());
app.use(cors());

// Route handler with async/await
app.post("/submit", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await contactModel.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    // THIS LOG WILL SHOW THE EXACT REASON IN YOUR VS CODE TERMINAL
    console.error("Backend Error:", error); 
    res.status(500).json({ error: error.message });
  }
});


// GET route to fetch projects dynamically from MongoDB
app.get("/projects", async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// --- CONTACT MESSAGES ENDPOINTS ---
// Get all contact form submissions
app.get("/contacts", async (req, res) => {
  try {
    const messages = await contactModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Delete a message
app.delete("/contacts/:id", async (req, res) => {
  try {
    await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});

// --- PROJECTS MANAGEMENT ENDPOINTS ---
// Add a new project
app.post("/projects", async (req, res) => {
  try {
    const newProject = await projectModel.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" });
  }
});

// Delete a project
app.delete("/projects/:id", async (req, res) => {
  try {
    await projectModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project" });
  }
});

module.exports = app;