# AutoFlex - Industrial Management System

This project is a full-stack application designed to optimize industrial production management. It features a **Quarkus (Java)** backend, a **React (Vite)** frontend, and automated testing with **JUnit** and **Cypress**.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### 1. Prerequisites
Ensure you have the following installed:
* **JDK 17** or higher
* **Node.js** (v18+) and **npm**
* **Docker** and **Docker Desktop**
* **Git**

### 2. Installation & Setup

First, clone the repository:

# Clone the repository
git clone [https://github.com/elizeu-lima/Teste-Pr-tico---Autoflex.git](https://github.com/elizeu-lima/Teste-Pr-tico---Autoflex.git)
cd Teste-Pr-tico---Autoflex

# Step 1: Start Database (Run from root)
docker-compose up -d

# Step 2: Run Backend
cd backend
./mvnw install -DskipTests
./mvnw quarkus:dev

# Step 3: Run Frontend (Open new terminal)
cd FrontEnd
npm install
npm run dev
🧪 Testing & Evidences
The project follows a rigorous testing strategy to ensure data integrity and UI reliability.

1. Backend Integration Tests
Validates the calculation logic and API endpoints.

Command: ./mvnw test
![Backend Success](./screenshots/backend-success.pn)
Status: BUILD SUCCESS ✅

2. Frontend E2E Tests (Cypress)
Simulates a real user journey to verify the production dashboard.

Command: npx cypress run

Coverage:

[x] Navigation to Production tab.

[x] Verification of Estimated Gross Value (R$ 7.500,00).

[x] Validation of Optimized Suggestion (Industrial Chair | 50 units).

![Backend Success](./screenshots/backend-success.png)

📁 Project Structure
/backend: Java Quarkus API and database configuration.

/FrontEnd: React interface and Cypress test suites.

docker-compose.yml: Database orchestration.
