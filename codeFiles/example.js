const express = require('express');
const mysql = require('mysql');
const app = express();

// Vulnerable code: directly using user input in an SQL query
app.get('/user/:id', (req, res) => {
  let userId = req.params.id; 
  let query = `SELECT * FROM users WHERE id = ${userId}`; // Vulnerable to SQL injection
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

let AWS_ACCESS_KEY_ID = AKIAIOSFODNN7EXAMPLE
let AWS_SECRET_ACCESS_KEY = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY