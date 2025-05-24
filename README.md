# 📝 Lead Generation Form

A full-stack lead generation application that allows users to submit their name, email, company, and message. The frontend is built using React with Bootstrap styling, and the backend uses Node.js, Express, and MySQL to store the submitted leads.

---

## 🌐 Live Demo

🟢 [Visit the Live Site](https://lead-generation-form-x2en.vercel.app)

---

## 📁 Project Structure

- **Frontend:** React, Bootstrap, Formik, Yup, Axios
- **Backend:** Node.js, Express, MySQL
- **Database:** MySQL (`lead_db`)

---

## 🚀 Features

- Clean UI with Bootstrap styling
- Email form validation using Yup
- Form submission using Axios
- MySQL database integration
- REST API to save leads to the backend

---

## 📦 Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/pervez107/lead-generation-form.git
cd lead-generation-form

###2️⃣ Backend Setup
📂 Navigate to backend folder
bash
Copy
Edit
cd server
📦 Install dependencies
bash
Copy
Edit
npm install
⚙️ Create .env file
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=lead_db
🛢️ Create MySQL Database & Table
sql
Copy
Edit
CREATE DATABASE lead_db;

CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  company VARCHAR(100),
  message TEXT
);
▶️ Start Backend Server
bash
Copy
Edit
node index.js
Backend runs at: http://localhost:5000


###3️⃣ Frontend Setup
📂 Navigate to frontend folder
bash
Copy
Edit
cd ../client
📦 Install dependencies
bash
Copy
Edit
npm install
▶️ Start Frontend
bash
Copy
Edit
npm run dev
Frontend runs at: http://localhost:5173

🧪 Form Validation
Validation powered by Formik + Yup:

Name: Required, 4–20 characters

Email: Required, must be a valid Gmail (@gmail.com) address

Company/Message: Optional

📂 Folder Structure
pgsql
Copy
Edit
lead-generation-form/
├── client/       <-- React frontend
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
│       ├── Home.jsx
│       └── Email-form.jsx
│
├── server/       <-- Node.js backend
│   ├── db.js
│   └── index.js
🛠 Tech Stack
Frontend	Backend	Database
React, Bootstrap, Axios, Formik, Yup	Node.js, Express	MySQL

📬 API Endpoint
POST /api/leads
Description: Save a new lead to the database.

Request Body:

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "company": "Example Corp",
  "message": "Interested in your services."
}
Response:

json
Copy
Edit
{
  "message": "Lead submitted successfully!"
}
💻 Deployment
Frontend Deployed on Vercel:
🔗 https://lead-generation-form-x2en.vercel.app

Backend Deployment Options:
You can deploy the backend using services like:

Render

Railway

Cyclic

Glitch

Once deployed, update the frontend .env or API URL with your live backend URL.

🙌 Acknowledgements
React

Bootstrap

Formik

Yup

MySQL

Express.js

📃 License
This project is licensed under the MIT License – feel free to use and modify it for your own projects.


