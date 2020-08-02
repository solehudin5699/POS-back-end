const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Create database connection
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products_db'
});

//Connect to database
dbConnect.connect((err, data) => {
    if (err) throw err;
    console.log("Database connected");
});
app.use('/products', getData);
//get data
const getData = express.Router();
// const postData = express.Router();
// const deleteData = express.Router();
// const updateData = express.Router();
// getData.get('/produk', (req, res) => {
//     dbConnect.query('Select * FROM products_table', (error, result) => {
//         if (error) throw error;
//         res.json(result);
//     })
// });

getData.get('/produk', (req, res) => {
    res.send(req.query);
});


//post data
// postData.post('/add', (req, res) => {
//     let data = { product_id: req.body.id, product_name: req.body.name, product_price: req.body.price, category_id: req.body.c_id };
//     let sql = "INSERT INTO products_table SET ?";
//     dbConnect.query(sql, data, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

//Delete data
// deleteData.delete('/delete/:id', (req, res) => {
//     let deleteQuery = "DELETE FROM products_table where product_id=" + req.params.id;
//     dbConnect.query(deleteQuery, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// });

//Update Data
// updateData.put('/update/:id', (req, res) => {
//     let updateQuery = `UPDATE products_table SET product_name="${req.body.name}", product_price="${req.body.price}", category_id="${req.body.c_id}" WHERE product_id="${req.params.id}"`;
//     dbConnect.query(updateQuery, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

//Server listening
app.listen(8000, () => {
    console.log('Port 8000 executed');
});

// app.use('/products', postData);
// app.use('/products', deleteData);
// app.use('/products', updateData);