PR 624
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Vulnerable route: directly rendering user input without escaping
app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;

  // The following line is vulnerable to XSS
  res.send(`<html><body>Your input: ${userInput}</body></html>`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

let AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
let AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
let Bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViNjAxNjY5LTJhMhZTQ2LWYwODk5MDk3MjlhYyIsImVtYWlsIjoidGVzdGluZ2N5cHJlc3MyQGdtYWlsLmNvbSIsIm1mYSI6ZmFsc2UsImTcyNTg5NDcwNoxNzI2MTUzOTA3fQ.GyI6jzxLFHMP-lgWqDT_kwxVklIFHnUuA9D3RXDJYCg"
// new commit - 2
