var sql=require('../mysqlConnection');
var mysql = require('mysql');
var Promise=require('promise');
var SendMail=require('../SendMail/SendMailCall');
var admin= function(driver){
    this.driver = driver.driver;
    
};
// admin.AddCategory=function(req,res){
   
    
//     var query=mysql.format("select face_authentication.User('"+screen+"', '"+id+"', '"+name+"', '"+father+"', '"+s+"') as result");
    
//     sql.query(query, function (err, res) {
//         console.log(query);
            
//         if(err) {
//             console.log(err);
           
//             result(err, null);
//         }
//         else {
            
            
//                 result(null,res[0].result);
            
           

       
//         }
//     }); 
//  };





admin.AddIncident=function(data,result){
    var screen=data.screen;
    // var id;
    var type = data.type;
    var query,query2;
        
        // id=data.id;
      // SendMail.caller();

     
// result(null,"yes");

     query=mysql.format("select Fix_my_street.add_incident('"+screen+"', '"+type+"', 'SA', 'ABC', '12.12132', '32.234324', '', '', '', '', '') as id");
     sql.query(query, function (err, res) {
        console.log(query);
            
        if(err) {
            console.log(err);
            
            result(err, null);
        }
        else {
            
            console.log(res[0].id);
            var id=res[0].id;
          //  result(null,res[0].id);
            query2=mysql.format("select Fix_my_street.add_incident('AddIncidentReportDetail', '"+id+"', '1', 'ABC', '12.12132', '32.234324', '', '', '', '', '')");

            sql.query(query2, function (err, res) {
                console.log(query2);
                    
                if(err) {
                    console.log(err);
                    
                    result(err, null);
                }
                else {
                    
                    console.log(res);
                  //  var id=res[0].id;
                    result(null,res);
                  //  query2=mysql.format("select Fix_my_street.add_incident('AddIncidentReportDetail', '"+id+"', '1', 'ABC', '12.12132', '32.234324', '', '', '', '', '')");
        
                    
                }
            });
        }
    });

   
}


admin.GetIncident=function(data,result){
    var screen=data.screen;
    var id = data.id;
    var type = data.type;
    var query;

    if(data.screen == "GetIncidentReport") {
        query=mysql.format("call Fix_my_street.Incident_procedure('"+screen+"', '', '', '', '', '')");
    }
    else if(data.screen == "GetIncidentReportSearch") {
        query=mysql.format("call Fix_my_street.Incident_procedure('"+screen+"', '"+id+"', '', '', '', '')");
    }
    else if(data.screen == "GetSearchFilter") {

    }
        

    // query=mysql.format("select Fix_my_street.Incident_procedure('"+screen+"', '"+type+"', 'SA', 'ABC', '12.12132', '32.234324', '', '', '', '', '') as id");
    MySqlQueryCaller(query,result);

   
}








function MySqlQueryCaller(query,result){
    sql.query(query, function (err, res) {
        console.log(query);
            
        if(err) {
            console.log(err);
            
            result(err, null);
        }
        else {
            
            console.log(res);
            result(null,res);
            
        }
    });

}







module.exports= admin;