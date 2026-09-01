# ⚡ Shivam's Portfolio 

A full-stack, responsive portfolio website built with the **MERN** stack (MongoDB, Express, React, Node.js). Features dynamic project rendering from MongoDB, an automated contact form

---

## ✨ Features

- **Dynamic Work Showcase:** Projects are served directly from a MongoDB database and rendered dynamically with interactive tech stack pills and star buttons.
- **Contact Form Integration:** Visitors can send messages that validate and save directly to MongoDB.
- **Protected Admin Dashboard:** Secure `/admin` portal allowing the owner to view received contact messages and add/delete projects without touching the database directly.
- **JWT Authentication:** Admin routes are secured using JSON Web Tokens (JWT) and persistent browser storage.
- **Fully Responsive UI:** Built with custom CSS featuring a mobile drawer navigation bar and CSS grid cards.

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** (Vite)
- **React Router DOM** (Client-side Routing)
- **Axios** (HTTP Requests)
- **CSS3** (Flexbox, Grid, Animations)

### **Backend**
- **Node.js & Express.js** (REST API)
- **MongoDB & Mongoose** (Database & Schemas)
- **JSON Web Token (JWT)** (Authentication)
- **Cors & Dotenv** (Security & Environment Variables)

---

## 📁 Project Structure

```text
sample-project/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── contact.model.js    # Mongoose Contact Schema
│   │   │   └── project.model.js    # Mongoose Project Schema
│   │   ├── app.js                 # Express Application & Routes
│   │   └── server.js              # Entry point & DB Connection
│   
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navigation.jsx     # Sticky Header & Mobile Drawer
    │   │   
    │   ├── pages/
    │   │   ├── Projects.jsx       # Dynamic Projects Page
    │   │   ├── Contact.jsx        # Contact Submission Form
    │   │   ├── Admin.jsx          # Protected Admin Panel
    │   │   └── ...
    │   └── App.jsx                 # React Router Config
        └── App.css 
    └── package.json
