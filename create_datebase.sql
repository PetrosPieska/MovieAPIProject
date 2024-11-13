CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    address VARCHAR(255)
);

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    quantity INT
);

CREATE TABLE Order (
    order_id INT PRIMARY KEY,
    date DATE,
    amount DECIMAL(10, 2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Shipment (
    shipment_id INT PRIMARY KEY,
    date DATE,
    tracking_number VARCHAR(50),
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES Order(order_id)
);
