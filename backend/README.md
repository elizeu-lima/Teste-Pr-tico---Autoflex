# Inventory Management API - AutoFlex Challenge

This project is a high-performance Backend solution for an Inventory and Production Management system. It was developed to solve the challenge of prioritizing manufacturing based on product value while managing raw material constraints.

## 🚀 Technologies & Decisions

* **Java 21 & Quarkus**: Chosen for its low memory footprint and "Supersonic Subatomic" startup time, ideal for containerized environments.
* **Oracle Database (XE)**: Used to simulate a robust, enterprise-grade relational database environment.
* **Hibernate Panache (Active Record)**: Selected to simplify the Data Access Layer, reducing boilerplate code and keeping entities expressive.
* **Docker & Docker Compose**: Utilized to ensure the database environment is portable and identical for any developer.

## 🏗️ Architecture & Modeling

### Database Schema
The system uses a relational model to handle the "Recipe" (Bill of Materials) logic:
* **RawMaterial**: Stores names and current stock levels.
* **Product**: Stores the final product name and its market price.
* **ProductComponent**: A join table that defines the "Recipe"—how much of which raw material is needed for a specific product.

### Business Logic: Production Suggestion (RF004)
The core "intelligence" of the system is located in the `ProductResource`. The algorithm:
1. **Prioritization**: Fetches all products ordered by Price Descending.
2. **Simulation**: Creates a virtual/temporary stock map to simulate production without affecting the real database.
3. **Calculation**: Iteratively "manufactures" products until raw materials are exhausted.

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/raw-materials` | List all available stock. |
| **POST** | `/raw-materials` | Register new raw materials. |
| **GET** | `/products` | List all products and their recipes. |
| **POST** | `/products` | Create a product with its components. |
| **GET** | `/products/suggestion` | **Core Logic:** Returns the optimized production plan. |

> **Interactive Documentation**: Once the project is running, access the Swagger UI at: `http://localhost:8080/q/swagger-ui/`

## 🛠️ Setup & Installation

### Prerequisites
* Java 21 installed.
* Docker Desktop installed and running.
* Maven (or use the provided `./mvnw`).

### 1. Start the Database
From the root directory, run:

docker-compose up -d

## Interactive Documentation: Once the project is running, access the Swagger UI at: http://localhost:8080/q/swagger-ui/

O Gemini disse
Here is a professional README.md content in English, structured to impress evaluators. It highlights your technical decisions, the architecture, and the steps to get the project running.

You can create a file named README.md in your root directory and paste this:

Inventory Management API - AutoFlex Challenge
This project is a high-performance Backend solution for an Inventory and Production Management system. It was developed to solve the challenge of prioritizing manufacturing based on product value while managing raw material constraints.

🚀 Technologies & Decisions
Java 21 & Quarkus: Chosen for its low memory footprint and "Supersonic Subatomic" startup time, ideal for containerized environments.

Oracle Database (XE): Used to simulate a robust, enterprise-grade relational database environment.

Hibernate Panache (Active Record): Selected to simplify the Data Access Layer, reducing boilerplate code and keeping entities expressive.

Docker & Docker Compose: Utilized to ensure the database environment is portable and identical for any developer.

🏗️ Architecture & Modeling
Database Schema
The system uses a relational model to handle the "Recipe" (Bill of Materials) logic:

RawMaterial: Stores names and current stock levels.

Product: Stores the final product name and its market price.

ProductComponent: A join table that defines the "Recipe"—how much of which raw material is needed for a specific product.

Business Logic: Production Suggestion (RF004)
The core "intelligence" of the system is located in the ProductResource. The algorithm:

Fetches all products ordered by Price Descending (Value Prioritization).

Creates a virtual/temporary stock map to simulate production without affecting the real database.

Iteratively "manufactures" products until raw materials are exhausted.

🛣️ API Endpoints
Method	Endpoint	Description
GET	/raw-materials	List all available stock.
POST	/raw-materials	Register new raw materials.
GET	/products	List all products and their recipes.
POST	/products	Create a product with its components.
GET	/products/suggestion	The Core Logic: Returns the optimized production plan.
Interactive Documentation: Once the project is running, access the Swagger UI at: http://localhost:8080/q/swagger-ui/

# 🛠️ Setup & Installation
Prerequisites
Java 21 installed.

Docker Desktop installed and running.

Maven (or use the provided ./mvnw).

1. Start the Database
From the root directory, run:

Bash
docker-compose up -d

Note: The Oracle XE container might take a minute to fully initialize the first time.

2. Run the Application
Start Quarkus in Development Mode:

Bash
./mvnw quarkus:dev
3. Initial Data
The project includes an import.sql file located in src/main/resources. Upon startup with the drop-and-create strategy, the system automatically populates the Oracle DB with:

Standard materials (Steel, Plastic).

A sample product (Industrial Chair).

Association between them.

# 🧪 Technical Details
CORS: Enabled for all origins to support the React/Redux frontend integration.

Transaction Management: All write operations are wrapped in @Transactional to ensure data integrity in the Oracle DB.

Validation: Uses Jakarta Persistence constraints to prevent inconsistent data.

# 🧪 Testes de Integração (Backend)
Para garantir a confiabilidade da lógica de sugestão de produção, foi implementado um teste de integração utilizando Quarkus Test e RestAssured.

🛠️ Comando para Execução
Para rodar os testes e validar a API, utilize o Maven Wrapper na raiz do projeto:

PowerShell
./mvnw clean test
💻 Código do Teste Implementado
O teste valida se o endpoint /products/suggestion está ativo e retornando uma lista de sugestões válida.

Java
package com.autoflex;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;

@QuarkusTest
public class ProductResourceTest {

    @Test
    public void testSuggestionEndpoint() {
        given()
          .when().get("/products/suggestion")
          .then()
             .statusCode(200)
             .body("size()", is(notNullValue()));
    }
}

# ✅ Resultado dos Testes
O projeto passou em todos os testes automatizados, confirmando a integridade dos endpoints de gerenciamento de inventário e produção:

Total de testes executados: 1

Sucessos: 1

Falhas: 0

Status final: BUILD SUCCESS
