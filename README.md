# Cybersecurity Incident API

## Overview

Cybersecurity Incident API is a RESTful backend application built using TypeScript, Node.js, and Express.

The project demonstrates backend software engineering concepts including REST API development, TypeScript interfaces, modular architecture, JSON request handling, request validation, and HTTP status code implementation.

---

## Purpose

This project was developed to strengthen backend software engineering skills by building a modular REST API using TypeScript and Express. It demonstrates clean code organisation and RESTful API design through a simple cybersecurity incident management system.

---

## Technologies Used

- TypeScript
- Node.js
- Express.js
- REST API
- Git & GitHub

---

## Project Structure

```
cybersecurity-incident-api/
│
├── src/
│   ├── index.ts
│   ├── routes/
│   │   └── incidents.ts
│   └── data/
│       └── incidents.ts
│
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

## Features

- Retrieve all cybersecurity incidents
- Retrieve an incident by ID
- Create new cybersecurity incidents
- Validate incoming request data
- Return appropriate HTTP status codes
- Modular backend architecture

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Verify the API is running |
| GET | `/incidents` | Retrieve all incidents |
| GET | `/incidents/:id` | Retrieve a specific incident |
| POST | `/incidents` | Create a new incident |

---

## Running the Project

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The API runs at:

```
http://localhost:3000
```

---

## Example Request

### POST /incidents

```json
{
  "title": "Brute Force Login Attempt",
  "severity": "High",
  "status": "Open"
}
```

---

## Example Response

```json
{
  "id": 4,
  "title": "Brute Force Login Attempt",
  "severity": "High",
  "status": "Open"
}
```

---

## Future Improvements

Future enhancements may include:

- PostgreSQL integration
- User authentication and authorization
- JWT authentication
- Docker containerisation
- Azure deployment
- Redis caching
- Automated API testing

---

## Author

**Sufiya Khader**

Bachelor of Cyber Security / Bachelor of Criminology

Deakin University