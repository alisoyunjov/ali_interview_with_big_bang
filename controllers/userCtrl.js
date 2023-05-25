const fs = require('fs');


// Define the endpoint to return the user data
getAllUsers = (req, res) => {
  // Read the JSON file
  fs.readFile('./data/data.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      // Parse the JSON data
      const users = JSON.parse(data);

      // Format the data as desired
      const returnData = {
        "users": users
      };

      // Return the formatted data
      res.send(JSON.stringify(returnData));
    }
  });
};

module.exports = {
  getAllUsers
}