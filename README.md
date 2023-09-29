# Masterthesis

This repository contains the code for an Express.js API that demonstrates a Monolithic architecture.

## Purpose

The primary purpose of this project is to serve as a practical component of a Master's thesis aimed at comparing different server architectures - Monolithic, Serverless, and Microservices with Kubernetes. This Express.js API project encapsulates a Monolithic architecture, providing a simplified yet representative model for evaluation and analysis.

This API is designed to handle basic CRUD (Create, Read, Update, Delete) operations on users, products, and orders. It is structured to simulate a scenario where all requests are routed to a single server managing all functionalities. This setup aims to underline the core characteristics of a Monolithic architecture, demonstrating its behaviors under different workloads, particularly during load tests which are performed to measure and compare key performance metrics like response time, throughput, error rates, and resource utilization across different server architectures.

Moreover, this project is not only an academic endeavor but also a learning pathway to understanding the practical implications, benefits, and limitations of a Monolithic architecture in real-world scenarios. Through this project, insights into scalability, maintainability, and performance of Monolithic architecture are expected to be garnered, contributing significantly to the comparative analysis essential for the Master's thesis.

The code, findings, and analyses from this project are intended to be shared with the academic and developer communities to foster understanding and discussions around server architecture designs, and their impact on application performance and scalability.

### Prerequisites

- Node.js
- MySQL

### Endpoints

Here are the available endpoints:

`GET /users`: Fetch all users.

`POST /users`: Create a new user.

`PUT /users/:id`: Update a user.

`DELETE /users/:id`: Delete a user.

`GET /products`: Fetch all products.

`POST /products`: Create a new product.

`PUT /products/:id`: Update a product.

`DELETE /products/:id`: Delete a product.

`GET /orders`: Fetch all orders.

`POST /orders`: Create a new order.

`PUT /orders/:id`: Update an order.

`DELETE /orders/:id`: Delete an order.
