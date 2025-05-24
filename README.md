# 📩 Lead Generation Form

A full-stack Lead Generation Form built with **React**, **Express**, **MySQL**, and deployed using **Vercel** and **Render**.

---

## 🔗 Live Links

- **Frontend:** [https://lead-generation-form-x2en.vercel.app](https://lead-generation-form-x2en.vercel.app)
- **Backend (API):** [https://lead-generation-form-1.onrender.com](https://lead-generation-form-1.onrender.com)

---

## 🗂️ Project Structure

/
├── client/ # React frontend (Vercel)
├── server/ # Express backend (Render)
└── README.md # Project documentation

---

## 🚀 Tech Stack

### Frontend
- React
- React Router
- Formik + Yup (Form validation)
- Bootstrap

### Backend
- Node.js
- Express.js
- MySQL
- dotenv
- CORS

---

## 🧪 Features

- 📩 Lead form with validation
- ✅ Stores data to MySQL database
- 🚀 Deployed frontend on **Vercel**
- 🛠️ Backend + MySQL deployed on **Render + Railway**

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

git clone https://github.com/your-username/your-repo.git

cd your-repo

2. Frontend Setup (client/)

cd client

npm install

npm run dev

Runs on http://localhost:5173 by default.

3. Backend Setup (server/)
   
Create .env file inside server/ folder:
env

PORT=5000

DB_HOST=yamabiko.proxy.rlwy.net

DB_PORT=14223

DB_USER=root

DB_PASSWORD=rcRhXxICRRrQkbDOAQFuNvMAvldyddhm

DB_NAME=railway

Then run:

cd server

npm install

node index.js

Runs on http://localhost:5000 by default.

🛠️ Deployment
Frontend (Vercel)
Push your client/ folder to GitHub.

Connect to vercel.com.

Import project → Set root directory to client/.

Done!

Backend (Render)
Push your server/ folder to GitHub.

Go to render.com.

Create a new Web Service.

Set build & start command:

Build Command: npm install

Start Command: node index.js

Add environment variables (from .env) in the Render dashboard.

Database (Railway)
Create a MySQL database at railway.app.

Use the external hostname/port for Render (not mysql.railway.internal).

Add table:

CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  company VARCHAR(255),
  message TEXT
);

🧪 API Endpoint
POST /api/leads
Saves lead data to the database.

Example Request:

{
  "name": "John Doe",
  "email": "john.doe@gmail.com",
  "company": "Tech Corp",
  "message": "Interested in your service."
}

🙌 Author
Built by [sk pervez ahmmed]

📌 License
This project is licensed under the MIT License.

---

Let me know if you'd like this in a downloadable file or want help pushing it to GitHub.
