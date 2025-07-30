# Task Management System Backend 🚀

This repository contains the backend code for a Task Management System, designed to streamline task organization, project collaboration, and overall productivity. It provides a robust API for managing users, workspaces, projects, and tasks, with features like authentication, authorization, and real-time updates. This backend is built with Node.js, Express, and MongoDB, ensuring scalability and reliability.

## 🚀 Key Features

- **User Authentication:** Secure user registration, login, and logout functionality using local strategy and Google OAuth 2.0. 🔐
- **Workspace Management:** Create, update, delete, and manage workspaces, allowing users to organize their projects. 🏢
- **Project Management:** Create, update, delete, and retrieve projects within specific workspaces. 📂
- **Task Management:** Create, update, delete, and retrieve tasks associated with projects. ✅
- **Role-Based Access Control:** Implement role-based access control to manage user permissions within workspaces and projects. 🛡️
- **Real-time Updates:** (Potentially - not explicitly stated but implied) Provides real-time updates to clients via WebSockets or similar technologies. ⚡
- **API Documentation:** (Implied) Comprehensive API documentation using Swagger or similar tools. 📚
- **Analytics:** Provides analytics data for workspaces and projects. 📊

## 🛠️ Tech Stack

| Category    | Technology                      | Description                                                                 |
|-------------|---------------------------------|-----------------------------------------------------------------------------|
| **Backend** | Node.js                         | JavaScript runtime environment for server-side development.                 |
|             | Express.js                      | Web application framework for building APIs.                               |
| **Database**| MongoDB                         | NoSQL database for storing application data.                               |
|             | Mongoose                        | MongoDB object modeling tool.                                               |
| **Authentication**| Passport.js                     | Authentication middleware for Node.js.                                    |
|             | passport-google-oauth20         | Passport strategy for Google OAuth 2.0 authentication.                      |
|             | passport-local                  | Passport strategy for local authentication (username/password).             |
| **Middleware**| CORS                            | Middleware for enabling Cross-Origin Resource Sharing.                      |
|             | cookie-session                  | Middleware for managing session data using cookies.                         |
| **Environment**| dotenv                          | Loads environment variables from a `.env` file.                             |
| **Build Tools**| (Likely - not explicitly stated) |  Likely includes tools like npm or yarn for package management.           |
| **Other**   | (Likely - not explicitly stated) |  Likely includes testing frameworks like Jest or Mocha.                    |

## 📦 Getting Started

Follow these steps to set up the backend application locally.

### Prerequisites

- Node.js (v16 or higher) installed on your machine.
- MongoDB installed and running or a MongoDB Atlas account.
- npm or yarn package manager.

### Installation

1.  Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2.  Install dependencies:

```bash
npm install # or yarn install
```

3.  Create a `.env` file in the root directory and configure the environment variables.  Example:

```
NODE_ENV=development
PORT=4000
BASE_PATH=/api
SESSION_SECRET=your-secret-key
MONGO_URI=mongodb://localhost:27017/task-management
SESSION_EXPIRES_IN=86400 # 24 hours in seconds
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:4000/api/auth/google/callback
FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

4. Configure Passport.js Google OAuth credentials in `.env` file.

### Running Locally

1.  Start the MongoDB server (if running locally).
2.  Start the backend server:

```bash
npm run dev # or yarn dev (if a dev script is defined in package.json)
```

3.  The server will start listening on the configured port (default: 4000).

## 📂 Project Structure

```
backend/
├── src/
│   ├── config/                  # Configuration files (app, database, passport, http)
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   ├── http.config.ts
│   │   └── passport.config.ts
│   ├── controllers/             # Route handlers (controllers)
│   │   ├── auth.controller.ts
│   │   ├── project.controller.ts
│   │   ├── task.controller.ts
│   │   ├── user.controller.ts
│   │   └── workspace.controller.ts
│   ├── middlewares/             # Custom middleware
│   │   ├── asyncHandler.middleware.ts
│   │   ├── errorHandler.middleware.ts
│   │   └── isAuthenticated.middleware.ts
│   ├── models/                  # Database models (schemas)
│   │   └── (e.g., project.model.ts, user.model.ts)
│   ├── routes/                  # API routes
│   │   ├── auth.route.ts
│   │   ├── member.route.ts
│   │   ├── project.route.ts
│   │   ├── task.route.ts
│   │   ├── user.route.ts
│   │   └── workspace.route.ts
│   ├── services/                # Business logic services
│   │   ├── auth.service.ts
│   │   ├── project.service.ts
│   │   ├── task.service.ts
│   │   ├── user.service.ts
│   │   └── workspace.service.ts
│   ├── utils/                   # Utility functions
│   │   ├── appError.ts
│   │   ├── get-env.ts
│   │   └── roleGuard.ts
│   ├── validation/              # Request body validation schemas
│   │   ├── auth.validation.ts
│   │   ├── project.validation.ts
│   │   └── workspace.validation.ts
│   ├── enums/                   # Enumerations
│   │   ├── account-provider.enum.ts
│   │   └── role.enum.ts
│   ├── index.ts                 # Main entry point of the application
├── package.json
├── README.md
└── .env                       # Environment variables
```


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📬 Contact

Vasudev - vasudevfbp7@gmail.com


