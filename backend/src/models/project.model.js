const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  lastUpdated: { type: String, required: true },
  techStack: [{ type: String }],
  featuredTech: { type: String, required: true },
  logoSymbol: { type: String, default: "⚡" },
  initialStarred: { type: Boolean, default: false },
  liveUrl: { type: String, default: "#" },
  githubUrl: { type: String, default: "#" }
});

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;