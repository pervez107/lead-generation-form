
## 🖥️ Backend Setup (Express + MySQL)

### 📁 Folder: `/server`

### ⚙️ Technologies Used

- Node.js
- Express.js
- MySQL (Railway or other cloud provider)
- dotenv
- cors

### 📦 Installation

1. Navigate to the server folder:
   ```bash
   cd server
2.Install dependencies:
npm install

3.Create a .env file with your database credentials:
PORT=5000
DB_HOST=your_mysql_host         # e.g. containers-us-west-99.railway.app
DB_USER=your_mysql_user         # e.g. root
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name      # e.g. railway

4.Run the server:
node index.js


##Server runs at: http://localhost:5000

📬 API Endpoint
POST /api/leads
##-Accepts JSON body:

{
  "name": "John Doe",
  "email": "john.doe@gmail.com",
  "company": "Example Corp",   // optional
  "message": "Looking for help" // optional
}

##-Response:

{
  "message": "Lead submitted successfully!"
}


🗄️ MySQL Table Schema

CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  company VARCHAR(100),
  message TEXT
);
