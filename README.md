# Shoppy Cart - Full-Stack MERN E-Commerce App

A professionally engineered full-stack MERN E-Commerce platform built using modern React (Create React App) for the frontend and Node.js, Express.js, and MongoDB for the backend. Shoppy Cart provides a complete online shopping experience with secure authentication, product management, shopping cart functionality, order processing, image uploads, and Razorpay payment integration.

---

## 🛠 Tech Stack

**Frontend**

* React.js (Create React App)
* Redux Toolkit (Cart State Management)
* React Router DOM
* Context API (Authentication)
* CSS3

**Backend**

* Node.js
* Express.js
* JWT Authentication
* REST APIs

**Database**

* MongoDB
* Mongoose

**Cloud Storage**

* Cloudinary
* Multer

**Payments**

* Razorpay Payment Gateway

---

## ✨ Features

* User Registration & Login (JWT Authentication)
* Secure User Profiles
* Product Listing & Categories
* Product Search
* Shopping Cart Management
* Checkout & Shipping Address
* Razorpay Payment Integration
* Order History
* Admin Dashboard
* Product Management (Add, Update, Delete)
* Cloudinary Image Upload
* Responsive User Interface

---

# 🚀 Quick Start / Local Development

The project uses a monorepo-style structure where both the frontend and backend can be managed from the project root.

## 1️⃣ Install Dependencies

Make sure MongoDB is running locally or use a MongoDB Atlas connection string.

Inside the **backend** folder, create a `.env` file similar to:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/shoppycart
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Install all dependencies:

```bash
npm install
```

Install frontend dependencies (if required):

```bash
cd frontend
npm install
```

---

## 2️⃣ Seed the Database (Optional)

Populate MongoDB with sample products and an admin account.

```bash
npm run seed
```

Example Admin Credentials:

**Email:** [admin@shoppy.com](mailto:admin@shoppy.com)

**Password:** password123

---

## 3️⃣ Start the Application

Run both frontend and backend together:

```bash
npm run dev
```

Or start them individually:

Backend

```bash
cd backend
npm start
```

Frontend

```bash
cd frontend
npm start
```

---

# ☁️ Deployment (Render)

The project is deployment-ready for Render.

### Build Command

```bash
npm run render-build
```

### Start Command

```bash
npm start
```

### Environment Variables

Configure the following variables in Render:

* NODE_ENV=production
* MONGO_URI
* JWT_SECRET
* RAZORPAY_KEY_ID
* RAZORPAY_KEY_SECRET
* CLOUDINARY_CLOUD_NAME
* CLOUDINARY_API_KEY
* CLOUDINARY_API_SECRET

After deployment, the Express server serves the React production build from the frontend, allowing the complete application to run on a single Render web service.

---

# 📄 API Testing

A Postman collection can be included for testing all APIs.

Import the Postman collection into Postman to test:

* Authentication APIs
* Product APIs
* Cart APIs
* Order APIs
* Payment APIs
* Admin APIs

---

# 📌 Project Highlights

* Full-Stack MERN Architecture
* Secure JWT Authentication
* Redux Toolkit State Management
* RESTful API Design
* Razorpay Payment Integration
* Cloudinary Image Uploads
* MongoDB Database
* Responsive Design
* Admin Dashboard
* Production Ready Deployment
