# 🔐 MERN Authentication System

## 📝 Description
A full-stack authentication system built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This app includes **user registration**, **login**, **JWT-based authentication**, and **protected routes** — providing a solid starting point for any secure web application.

---

## 🚀 Features
- ✅ User registration and login
- 🔐 JWT (JSON Web Token) authentication
- 🧾 Form validation with error handling
- 🔒 Protected frontend routes
- 🚫 Logout and session clearing

---

## 🛠️ Tech Stack

| Layer        | Tech Used               |
|--------------|-------------------------|
| Frontend     | React.js, Axios         |
| Backend      | Node.js, Express.js     |
| Database     | MongoDB, Mongoose       |
| Auth         | JWT, Bcrypt.js          |

---

## 📦 Installation & Setup

> ⚠️ Prerequisites:
> - Node.js & npm  
> - MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

```bash
# Clone the repository
git clone https://github.com/Ashish-Rautela/Authentication-MERN.git
cd Authentication-MERN

# Install server dependencies
cd server
npm install

# Create a .env file in /server with:
# MONGO_URI = your_mongodb_connection_string
# JWT_SECRET = your_jwt_secret_key

# Start the backend server
npm start

# Open a new terminal for frontend
cd ../client
npm install
npm start
