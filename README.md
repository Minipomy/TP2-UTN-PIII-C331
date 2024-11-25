![alt text](./assets/utn_logo.svg "Logo")
# API - Hardware Products

## Welcome to the best API of Hardware Products, this will allow you to fecth and manage differents Products/Categories. This was built with CRUD Functionallity to CREATE, READ, UPDATE, DELETE. 

## Technologies Used:
- **Node.js**: JavaScript runtime environment for server-side programming.
- **Express**: Framework for building web applications and APIs.
- **EJS**: Template engine for generating HTML views.
- **CORS**: Middleware to allow requests from different origins.
- **MySQL2**: Client for interacting with MySQL databases.
- **Sequelize**: ORM for managing SQL databases.
- **dotenv**: Loads environment variables from a .env file.
- **Nodemon**: Tool that automatically restarts the application when file changes are detected.
- **Swagger**: Tool that automatically generates APIRest Docs.

```plaintext 
src/
├── controllers/  # API Controllers
├── models/       # Sequelize Models
├── routes/       # API Routes
├── data/         # SQL Scripts
└── app.js        # Main Application
```

## Installation

Simply clone this repository
```
git clone https://github.com/Minipomy/TP2-UTN-PIII-C331.git
```

## Requirements

Before anything you must install all the dependencies:

```
npm i
```

<span style="color: red"> **Then at a MySQL intance run the db-creation.sql script** </span>

Located at:
```
TP2-UTN-PIII-C331\db-creation.sql
```

## Usage

Open a Windows Terminal or Bash, and run any options from below:

```
npm run prod
```
```
nodemon app.js
```
```
node app.js
```

Enjoy!