// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to Fix Street Api',
    });
});


   var CategoryController=require('./Category/CategoryController');
   var IncidentController=require('./Incident/IncidentController');


   router.route('/Category/Get')
   .get(CategoryController.GetCategory);



   router.route('/Incident/Add')
   .post(IncidentController.AddIncident);

   router.route('/Incident/Get')
   .post(IncidentController.GetIncident);




  
   


module.exports = router;