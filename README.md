## Overview

This project is a production-ready RESTful API built with **Node.js**, **Express**, and **MongoDB**.
It manages **Items** with full CRUD operations and includes an asynchronous processing endpoint.
Interactive documentation is provided via **Swagger (OpenAPI 3.0)**, and endpoints can be tested with **Postman**.

---

## Getting Started

### Prerequisites

* Node.js v24+
* MongoDB installed and running locally
* npm (Node package manager)

### Installation

1. Clone the repository:
   git clone <your-github-repo-url>
   cd <your-repo-folder>

2. Install dependencies:
   npm install

3. Start MongoDB if not already running:
   mongod

4. Start the server:
   node index.js

You should see:
Index.js is running...
Server is running on port 3000
Connected to MongoDB
Swagger docs available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Swagger Documentation

Swagger UI provides interactive documentation for all API endpoints:
URL: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

**Endpoints Included:**

| Method | Endpoint            | Description                                 |
| ------ | ------------------- | ------------------------------------------- |
| POST   | /items              | Create a new item                           |
| GET    | /items              | Retrieve all items                          |
| PATCH  | /items/{id}         | Update an item by ID                        |
| DELETE | /items/{id}         | Delete an item by ID                        |
| POST   | /items/{id}/process | Simulate asynchronous processing of an item |

**Example Request (Create Item):**
POST /items
{
"name": "My Item",
"description": "This is an item description"
}

**Example Response (201 Created):**
{
"_id": "64f8e12b7a2b9f0012345678",
"name": "My Item",
"description": "This is an item description"
}

---

## Postman Testing

1. Import the provided Postman collection (`postman_collection.json`) to test all endpoints.
2. Run tests to verify:

   * 201 Created for POST /items
   * 200 OK for GET, PATCH, DELETE, POST /items/{id}/process
3. Capture Test Results screenshot to demonstrate all tests passing.

---

## Project Structure

.
├── models/
│   └── item.js          # Mongoose schema for Items
├── routes/
│   └── items.js         # Express routes with Swagger JSDoc
├── index.js             # Main server file
├── package.json
└── README.md

---

## Notes

* Swagger UI automatically documents all endpoints based on **JSDoc comments** in routes/items.js.
* Asynchronous processing (POST /items/{id}/process) simulates a delay for demonstration purposes.
* All database operations are handled via **Mongoose**.

---

## References

* Swagger/OpenAPI: [https://swagger.io/](https://swagger.io/)
* Postman: [https://learning.postman.com/](https://learning.postman.com/)

---

(This MIGHT be made by Chat GPT)