const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',            //username
    password: '',            //password
    database: 'movie_store'  // Database name
});

// Connect to Database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to the MySQL database');
});


// Fetch all customers
app.get('/customers', (req, res) => {
    db.query('SELECT * FROM Customer', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ customers: results });
    });
});

// All products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM Product', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ products: results });
    });
});

// Place an order
app.post('/orders', (req, res) => {
    const { customer_id, amount, date } = req.body;
    const sql = 'INSERT INTO `Order` (customer_id, amount, date) VALUES (?, ?, ?)';
    db.query(sql, [customer_id, amount, date], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Order created', order_id: results.insertId });
    });
});

// shipment
app.post('/shipments', (req, res) => {
    const { date, tracking_number, order_id } = req.body;
    const sql = 'INSERT INTO Shipment (date, tracking_number, order_id) VALUES (?, ?, ?)';
    db.query(sql, [date, tracking_number, order_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Shipment created', shipment_id: results.insertId });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
