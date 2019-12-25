var mysql  = require('mysql');

//production connection
var connection = mysql.createConnection({
    host     : 'database-1.cursebjdpqsq.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'Tgbyhnujm8ik',
    database : 'Fix_my_street'
});

//testing connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'nkdelivery2'
// });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports =connection; 