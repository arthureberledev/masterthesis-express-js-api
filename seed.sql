CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (name, price) VALUES ('Product A', 29.99);
INSERT INTO products (name, price) VALUES ('Product B', 45.50);
INSERT INTO products (name, price) VALUES ('Product C', 60.75);

INSERT INTO products (name, price) VALUES
    ('Product 1', 10.00),
    ('Product 2', 20.00),
    ('Product 3', 30.00),
    ('Product 4', 40.00),
    ('Product 5', 50.00),
    ('Product 6', 60.00),
    ('Product 7', 70.00),
    ('Product 8', 80.00),
    ('Product 9', 90.00),
    ('Product 10', 100.00);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL);

CREATE TABLE orders (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, product_id INT NOT NULL, quantity INT NOT NULL);