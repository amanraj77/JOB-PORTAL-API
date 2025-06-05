# Node.js Job Portal API

A backend-only job portal system built with Node.js, Express, and MongoDB. This API allows recruiters to post jobs and applicants to apply, with secure JWT-based authentication and role-based access control.

---

## Features

- User authentication (register/login) with JWT tokens  
- Role-based access control (Recruiter / Applicant)  
- CRUD operations for jobs  
- Input validation and error handling  
- Secure headers with Helmet, XSS protection, and MongoDB sanitization  
- API documentation with Swagger UI  

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT for authentication  
- Bcrypt for password hashing  
- Helmet, XSS-clean, express-mongo-sanitize for security  
- Morgan for logging  
- Swagger for API docs  

---

## Getting Started

### Prerequisites

- Node.js installed  
- MongoDB URI (Atlas or local)  
- Postman or any API testing tool  

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/Nodejs-Job-Portal-App.git
   cd Nodejs-Job-Portal-App
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory with the following variables:

env
Copy
Edit
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
DEV_MODE=development
Start the server:

bash
Copy
Edit
npm run dev
or

bash
Copy
Edit
node server.js
API Endpoints
Authentication
POST /api/v1/auth/register — Register new user

POST /api/v1/auth/login — Login user and get JWT token

Jobs (Require Authorization)
POST /api/v1/job/create-job — Create a job (Recruiter only)

GET /api/v1/job/get-job — Get all jobs

PATCH /api/v1/job/update-job/:id — Update a job by ID

DELETE /api/v1/job/delete-job/:id — Delete a job by ID

GET /api/v1/job/job-stats — Get job statistics

How to Test
Register a user with /api/v1/auth/register

Login via /api/v1/auth/login and get your JWT token

Use the token in the Authorization header as:

makefile
Copy
Edit
Authorization: Bearer <your_token_here>
Test protected routes (create/update/delete job) using Postman or any REST client

Swagger API Documentation
Access the API docs at:

bash
Copy
Edit
http://localhost:5000/api-doc
Notes
Ensure MongoDB URI is valid and accessible

Use strong JWT secret for security

Use HTTPS in production for secure token transmission

Author
Aman Raj

License
MIT License
