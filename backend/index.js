const express = require('express');
const cors = require('cors'); // Import the cors middleware
const otherFile = require('./Files/Example-use-another-file'); //Avoir accès à d'autres fichiers (Backend)
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/data', (req, res) => {
  // Replace this with actual data or database query
  const responseData = { message: otherFile.GetExampleMessage()}; //Example-use-another-file
  res.json(responseData);
});

app.get('/api/data2', (req, res) => {
    const param1 = req.query.param1;
    const param2 = req.query.param2;
  
    // Perform some operation with the parameters
    const responseData = {
      message: `Data with param1: ${param1} and param2: ${param2}`
    };
  
    res.json(responseData);
  });


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
