// Import express
let express = require('express')
let bodyParser = require('body-parser');
var cors = require('cors');

// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8081;

let apiRoutes = require("./api-routes")

// Use Api routes in the App

app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors({origin: '*'}));
  app.use('/api', apiRoutes);
  
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running Fix Street server on port " + port);
});

