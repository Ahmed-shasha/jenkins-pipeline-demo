# Jenkins Pipeline Demo 

A simple end-to-end **CI/CD pipeline** using **Jenkins, Node.js, Docker, GitHub, and Docker Hub**.

This project demonstrates how Jenkins can automatically build, test, containerize, push, and deploy a Node.js application.

---

## Project Overview

The pipeline follows this workflow:

```text
Developer
   │
   ▼
GitHub
   │
   ▼
Jenkins
   │
   ├── Checkout
   │
   ├── Install Dependencies
   │
   ├── Run Tests
   │
   ├── Build Docker Image
   │
   ├── Push Image to Docker Hub
   │
   └── Deploy Container
           │
           ▼
      Node.js Application
```

---

##  Technologies Used

* **Jenkins** — CI/CD automation
* **Git & GitHub** — Source code management
* **Node.js** — Application runtime
* **Express.js** — REST API framework
* **Jest** — Testing
* **Supertest** — API testing
* **Docker** — Containerization
* **Docker Hub** — Container image registry
* **Linux / Ubuntu** — Jenkins host

---

##  Project Structure

```text
jenkins-pipeline-demo/
│
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
└── README.md
```

---

##  Application

The application is a simple Node.js REST API.

### API Endpoints

#### GET `/`

Returns:

```json
{
  "message": "Hello from Jenkins Pipeline!",
  "status": "success"
}
```

#### GET `/health`

Returns:

```json
{
  "status": "UP"
}
```

---

#  Running the Application Locally

## 1. Clone the Repository

```bash
git clone https://github.com/Ahmed-shasha/jenkins-pipeline-demo.git
cd jenkins-pipeline-demo
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Run Tests

```bash
npm test
```

Expected result:

```text
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

## 4. Start the Application

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

Test the API:

```bash
curl http://localhost:3000
```

Test the health endpoint:

```bash
curl http://localhost:3000/health
```

---

#  Docker

## Build the Image

```bash
docker build -t ahmedamgadshasha/jenkins-pipeline-demo:latest .
```

## Run the Container

```bash
docker run -d \
  --name jenkins-pipeline-demo \
  -p 3001:3000 \
  ahmedamgadshasha/jenkins-pipeline-demo:latest
```

The application will be available at:

```text
http://localhost:3001
```

Test:

```bash
curl http://localhost:3001
```

Health check:

```bash
curl http://localhost:3001/health
```

---

#  Jenkins CI/CD Pipeline

The Jenkins pipeline automatically performs the following stages:

```text
Checkout
   ↓
Install Dependencies
   ↓
Test
   ↓
Docker Build
   ↓
Docker Push
   ↓
Deploy
```

## Pipeline Stages

### 1. Checkout

Jenkins clones the source code from GitHub.

```groovy
stage('Checkout')
```
