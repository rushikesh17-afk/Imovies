# iMovies - Movie Ticket Booking Made Simple

A Full Stack MERN (MongoDB, Express.js, React.js, Node.js) Web Application developed for the College Project Curriculum (SkillWallet LMS).

---

## 📌 Project Overview

**iMovies** is an online cinema ticket reservation platform that allows users to browse movies, view showtimes, select seats in real-time, make secure payments, and manage their bookings. The system also provides an admin portal for managing movies, theaters, shows, bookings, and users.

### Key Features

#### For Users
- **User Registration & Authentication** - Secure account creation and login with JWT authentication
- **Movie Listings** - Browse available movies with details like title, genre, language, duration, ratings, cast, and release dates
- **Movie & Show Browsing** - Search and filter movies by genre, language, and ratings
- **Theater & Show Selection** - Choose from available theaters, screens, and show timings
- **Seat Selection & Availability** - View interactive seat layouts with real-time seat availability
- **Ticket Booking Management** - Confirm bookings, manage reservations, and access booking history
- **Secure Payment Integration** - Process payments securely with payment tracking
- **Watchlist & Favorites** - Save favorite movies or upcoming releases for future reference
- **Reviews & Ratings** - Submit movie reviews and ratings to help other customers

#### For Admin
- **Admin Dashboard** - Centralized interface to manage the entire platform
- **Movie Management** - Add, update, or remove movie details
- **Theater & Show Management** - Manage theaters, screens, and movie show schedules
- **Booking Monitoring** - Track seat availability and booking statuses
- **User Management** - Manage users and resolve booking-related issues
- **Payment & Reports** - Track payments and generate revenue reports
- **Review Moderation** - Moderate user reviews and maintain platform integrity
- **Notifications & Alerts** - Send booking confirmations, ticket details, and payment receipts via email

---

## 🏗️ Technical Architecture

The iMovies application follows a three-tier architecture with clear separation of concerns:

### 1. Frontend Layer (Client-Side)
**Purpose:** Provide an interactive, responsive, and intuitive interface for end-users.

**Technologies:**
- **React.js + Vite** - Build dynamic UI components
- **Bootstrap / SCSS** - Responsive design & styling
- **React Router DOM** - Navigation between pages (Home, Movies, Shows, Seats, Bookings, Profile)
- **Axios** - Communication with backend REST APIs
- **JWT Handling** - Store tokens securely in localStorage
- **React Toastify** - User notifications and alerts

**Key Modules:**
- User Registration & Authentication (Login/Signup)
- Movies & Shows Browsing (Filters by genre)
- Seat Selection with Real-Time Updates
- Booking Management (View, Cancel)
- Profile & Watchlist (Favorites, History)
- Payment & Ticket Confirmation UI
- Admin Dashboard & Management Panels

### 2. Backend Layer (Server-Side)
**Purpose:** Manage business logic, security, and data flow between client and database.

**Technologies:**
- **Node.js + Express.js** - REST API framework
- **JWT (JSON Web Tokens)** - Secure login & authorization
- **bcrypt.js** - Password hashing & protection
- **Mongoose (ODM)** - MongoDB schema & queries
- **Node-cron** - Background jobs for reminders and cleanup
- **Nodemailer** - Email notifications for bookings

**Key Services:**
- **Auth Service** - Registration, Login, JWT generation
- **User Service** - Profile management, favorites, history
- **Movie & Show Service** - CRUD for movies, theaters, showtimes
- **Seat Management Service** - Seat locking, booking confirmation
- **Booking Service** - Ticket booking, cancellations
- **Notification Service** - Email reminders & confirmations

### 3. Database Layer
**Purpose:** Persist and manage application data efficiently.

**Technology:**
- **MongoDB** - NoSQL database for scalability and flexibility

**Main Collections:**
- **Users** - Login details, profiles, preferences
- **Admins** - Admin credentials and access control
- **Movies** - Movie info (title, genre, description, poster, rating, cast, trailer)
- **Theaters** - Theater details with seat tiers and pricing (Balcony, Middle, Lower)
- **Shows** - Theater, movie, timings, available seats, pricing per tier
- **Bookings** - Booking details, seat numbers, payment status
- **Favorites/Watchlist** - User saved movies
- **Reviews** - User ratings and feedback for movies

### 4. Payment & Transaction Flow
**Purpose:** Enable secure and seamless online payments.

**Flow:**
1. User selects seats and proceeds to checkout
2. Frontend sends booking request to backend with seat and payment details
3. Backend validates seat availability and locks seats
4. Booking is created with payment status (Currently supports simulated/online payment flow)
5. Confirmation email is sent to the user via Nodemailer
6. Booking details are stored and seats are marked as booked

### 5. Real-Time Seat Management
**Purpose:** Prevent double-booking through seat locking mechanism.

**Flow:**
- User selects seats → Backend tracks seat availability per show
- On booking confirmation → Seats are marked as booked in the show's ticket data
- On cancellation → Seats are released automatically back to availability
- Background cleanup service handles expired/unconfirmed bookings

### 6. Security Measures
- **HTTPS Ready** - For secure API communication in production
- **JWT Authentication** - Token-based authentication for protected routes
- **Password Hashing** - bcrypt.js for secure password storage
- **Input Validation** - Server-side validation for all requests
- **Role-Based Access Control** - Separate routes for Users and Admins
- **Route Protection** - Frontend route guards (`UserProtection`, `AdminProtection`)

---

## 🗂️ Project Structure

```text
iMovies - Movie ticket booking made simple/
├── client/                               # Frontend (React 19 + Vite 8 + SCSS/Bootstrap)
│   ├── src/
│   │   ├── components/
│   │   │   ├── header/                   # Navigation & search bar
│   │   │   ├── footer/                   # Footer links & copyright
│   │   │   ├── loader/                   # Loading spinner
│   │   │   └── protection/               # Route protection (UserProtection, AdminProtection)
│   │   ├── hooks/
│   │   │   └── useFetch.js               # Reusable data-fetching hook
│   │   ├── pages/
│   │   │   ├── landing/                  # Welcome Hero Page
│   │   │   ├── home/                     # Movie Catalog & Genre filter
│   │   │   ├── login/                    # User & Admin Login
│   │   │   ├── register/                 # User & Admin Registration
│   │   │   ├── movieDetails/             # Synopsis, Trailer, Reviews
│   │   │   ├── movieShows/               # Theater and Showtimes
│   │   │   ├── seatsPage/                # Interactive Seat Layout & Checkout
│   │   │   ├── bookings/                 # Customer Bookings History
│   │   │   ├── favoriteShows/            # Watchlist / Favorites
│   │   │   ├── profile/                  # User Profile Details
│   │   │   ├── editUserDetails/          # Profile Edit Form
│   │   │   ├── admin/                    # Admin Dashboard (Shows & Bookings)
│   │   │   ├── addMovie/                 # Admin Add Movie
│   │   │   ├── addTheatre/               # Admin Add Cinema Hall & Seat Tiers
│   │   │   ├── addShow/                  # Admin Schedule Showtimes
│   │   │   └── adminBookings/            # Admin Reservations Management Table
│   │   ├── App.jsx                       # Master Routes with Lazy Loading
│   │   ├── index.css                     # Cinema Dark Mode Theme System
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js                    # Reverse Proxy Configuration
│
└── server/                               # Backend (Node.js + Express.js + Mongoose)
    ├── middlewares/
    │   └── fetchUser.js                  # JWT Token verification middleware
    ├── models/
    │   ├── adminModel.js                 # Admin Mongoose Schema
    │   ├── bookingModel.js               # Booking Mongoose Schema
    │   ├── favoriteModel.js              # Watchlist Mongoose Schema
    │   ├── movieModel.js                 # Movie Mongoose Schema
    │   ├── reviewModel.js                # Reviews & Ratings Schema
    │   ├── showModel.js                  # Showtimes Mongoose Schema
    │   ├── theatreModel.js               # Theatre & Seat Tiers Schema
    │   └── userModel.js                  # User Mongoose Schema
    ├── routes/
    │   ├── adminRoutes.js                # /api/auth/admin (Login, Register, Stats)
    │   ├── authRoutes.js                 # /api/auth (Login, Register, User Info)
    │   ├── bookingRoutes.js              # /api/bookings (Create, List, Cancel)
    │   ├── favoriteRoutes.js             # /api/favorite (Add, Remove, List)
    │   ├── movieRoutes.js                # /api/movie (CRUD movies)
    │   ├── reviewRoutes.js               # /api/review (Add, List reviews)
    │   ├── showRoutes.js                 # /api/shows (CRUD & /getmovieshows/:name)
    │   └── theatreRoutes.js              # /api/theatre (CRUD theaters & tiers)
    ├── utils/
    │   ├── db.js                         # Mongoose MongoDB Connection
    │   ├── mailer.js                     # Nodemailer confirmation transport
    │   ├── reminderService.js            # Node-cron background reminder job
    │   ├── cleanupService.js             # Node-cron seat cleanup job
    │   ├── seeder.js                     # Seed script for initial movies & shows
    │   └── mockStore.js                  # Seamless offline fallback
    ├── .env                              # Environment configuration
    ├── .env.example
    ├── package.json
    └── server.js                         # Master Express API Server
``` 

---

## 🗄️ ER Diagram (Entity Relationships)

The system consists of the following core entities and relationships:

| Entity | Purpose | Key Relationships |
|---|---|---|
| **User** | Customers who browse and book tickets | Has many Bookings, Favorites, Reviews |
| **Admin** | Platform administrators | Manages Movies, Theaters, Shows, Bookings |
| **Movie** | Movie information | Has many Shows and Reviews |
| **Theater** | Cinema halls with screens | Has many Shows with seat layouts |
| **Show** | Specific screening schedule | Belongs to Movie & Theater, has booked seats |
| **Seat** | Individual seats in theater | Tracked per show with availability status |
| **Booking** | Ticket reservation records | Belongs to User & Show, linked to Payment |
| **Payment** | Transaction details | Linked to Booking with payment status |
| **Review** | User feedback and ratings | Belongs to User and Movie |

**Key Relationships:**
- `Movie` → `Show` → `Seat` (Movies have shows, shows have seats)
- `User` → `Booking` → `Payment` (Users make bookings with payments)
- `Booking` → `Show` → `Seat` (Bookings are for specific shows and seats)
- `User` → `Review` → `Movie` (Users review movies)

---

## 🧩 MVC Pattern Implementation

This project follows the **Model-View-Controller (MVC)** architectural pattern:

| Layer | Implementation | Responsibility |
|---|---|---|
| **Model** | `server/models/` (Mongoose Schemas) | Data schemas, validation rules, and database operations |
| **View** | `client/src/` (React Components & Pages) | User interface, presentation logic, and user interactions |
| **Controller** | `server/routes/` (Route handlers) | Business logic, request processing, validation, and response handling |

**Advantages:**
- **Separation of Concerns** - Clear boundaries between data, logic, and presentation
- **Scalability** - Easy to add new features by extending any layer
- **Reusability** - Controllers and models can be reused across the application
- **Testability** - Each layer can be tested independently
- **Collaboration-Friendly** - Multiple developers can work on different layers simultaneously

---

## 🚀 How to Run the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or [MongoDB Atlas](https://www.mongodb.com/atlas)) - Optional, app has mock fallback

### 1. Clone the Repository
```bash
git clone <repository-url>
cd imovies-ticket-booking-main
```

### 2. Start Backend Server
Open a terminal in the `server` directory:
```bash
cd server
npm install
npm run dev
# or: node server.js
```
* The backend server runs on: **`http://localhost:3000`**

### 3. Start Frontend Client
Open a second terminal in the `client` directory:
```bash
cd client
npm install
npm run dev
```
* The frontend client runs on: **`http://localhost:5173`**

---

## 🔑 Default Demo Accounts

For quick testing and college evaluation demonstrations:

| Role | URL | Email | Password |
|---|---|---|---|
| **User** | `http://localhost:5173/login` | `tanishq@example.com` | `user1234` |
| **Admin** | `http://localhost:5173/admin/login` | `admin@imovies.com` | `admin1234` |

---

## ⚙️ Environment Configuration

### Backend (`server/.env`)
Create a `.env` file in the `server` directory (refer to `.env.example`):

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/imovies
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/imovies

# JWT Secret (optional, for enhanced security)
JWT_SECRET=your_jwt_secret_key

# Email Configuration (for booking confirmations)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**Note:** If `MONGODB_URI` is not provided or unreachable, the server will automatically fall back to in-memory `mockStore` with seed data.

---

## 🌐 Deployment Guide

### MongoDB Setup
- **MongoDB Atlas (Recommended)**: Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas), get your connection string, and add your IP to the allowlist.
- **Local MongoDB**: Run MongoDB locally and use `mongodb://localhost:27017/imovies`.

### Deployment Options

#### Option 1: Render (Recommended - Separate Services)
**Backend (Web Service):**
1. Push code to GitHub
2. Create Web Service on [Render](https://render.com/), set root directory to `server`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add environment variables (`MONGODB_URI`, `PORT`, `JWT_SECRET`, email credentials)

**Frontend (Static Site):**
1. Create Static Site on Render, set root directory to `client`
2. Build Command: `npm install && npm run build`
3. Publish Directory: `dist`
4. Add `_redirects` file in `client/public/` with `/* /index.html 200` for SPA routing
5. Update API base URL to point to your deployed backend URL

#### Option 2: Vercel (Frontend) + Railway/Render (Backend)
- Deploy frontend to [Vercel](https://vercel.com/) from `client/` directory
- Deploy backend to [Railway](https://railway.app/) or [Render](https://render.com/) from `server/` directory
- Update CORS settings in `server.js` to allow your frontend domain
- Set `VITE_API_BASE_URL` in frontend environment variables

#### Option 3: Single Service Deployment
Build the frontend into the server's public folder:
```bash
cd client
npm run build
# Copy dist contents to server/public/
```
Add a catch-all route in `server.js` to serve `index.html` for SPA routes. Deploy the entire `server/` directory as one web service.

### Pre-Deployment Checklist
- [ ] Update API URLs in frontend (replace localhost with deployed backend URL)
- [ ] Configure CORS for production domain
- [ ] Set all environment variables on hosting platform
- [ ] Add `_redirects` for SPA routing if hosting frontend separately
- [ ] Use MongoDB Atlas for production database
- [ ] Consider using a proper scheduler for cron jobs if using serverless hosting

---

## 🛠️ Technologies Used

| Category | Technologies |
|---|---|
| **Frontend** | React 19, Vite 8, React Router DOM 7, Bootstrap 5, SCSS, Axios, React Toastify, React Icons |
| **Backend** | Node.js, Express.js 4, Mongoose 8, JWT, bcryptjs, Nodemailer, node-cron |
| **Database** | MongoDB |
| **Development Tools** | Vite, Nodemon, Oxlint |
| **Deployment** | Render, Vercel, Railway, MongoDB Atlas |

---

## 📝 Project Information

- **Project Type:** College Project (SkillWallet LMS)
- **Category:** Full Stack Web Application
- **Domain:** Online Movie Ticket Booking System
- **Architecture:** MERN Stack with MVC Pattern

---

## 📄 License

This project is developed for educational purposes as part of the college curriculum.
