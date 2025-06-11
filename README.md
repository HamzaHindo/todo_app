# 🛡️ Auth REST API

A lightweight authentication API built with **Node.js**, **Express**, **JWT**, and **experimental-sqlite** for simple database access.

---

## 🚀 Features

- 🔐 JWT-based authentication (Register & Login)
- 🔒 Protected routes using middleware
- 🗃️ SQLite for storage via experimental-sqlite
- 🌐 REST API architecture

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Make sure that you are running node 22
install [NVM](https://github.com/nvm-sh/nvm)
```bash
nvm install 22
nvm use 22
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Setup environment variables
Create a .env file:
```
PORT 3000
JWT_SECRET=your_secret_key
```

### 5. Run the server
``` bash
npm run dev
```

## End points 

| Method | Endpoint                  | Description            | Requires Auth | Body Example (JSON)                              |
|--------|---------------------------|------------------------|---------------|--------------------------------------------------|
| GET    | `/`                       | Root                   | ❌ No          | —                                                |
| POST   | `/auth/register`          | Register a new user    | ❌ No          | `{ "username": "Hamza", "password": "pass" }`  |
| POST   | `/auth/login`             | Login user             | ❌ No          | `{ "username": "Hamza", "password": "pass" }`      |
| GET    | `/todos`                  | Get all todos          | ✅ Yes         | —                                                |
| POST   | `/todos`                  | Create a new todo      | ✅ Yes         | `{ "task": "coding the projects" }`     |
| PUT    | `/todos/:id`              | Update a todo          | ✅ Yes         | `{ "completed": 1, "task": "go to the gym" }`    |
| DELETE | `/todos/:id`              | Delete a todo          | ✅ Yes         | —                                                |

