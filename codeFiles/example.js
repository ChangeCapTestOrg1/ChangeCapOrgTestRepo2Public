const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

connection.connect();

// Vulnerable route: Directly using user input in an SQL query without sanitization
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  
  // This SQL query is vulnerable to SQL injection
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Database error');
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

  //codeScanningIssue
  324!!!!
let AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
let AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
let Bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViNjAxNjY5LTJhMhZTQ2LWYwODk5MDk3MjlhYyIsImVtYWlsIjoidGVzdGluZ2N5cHJlc3MyQGdtYWlsLmNvbSIsIm1mYSI6ZmFsc2UsImTcyNTg5NDcwNoxNzI2MTUzOTA3fQ.GyI6jzxLFHMP-lgWqDT_kwxVklIFHnUuA9D3RXDJYCg"