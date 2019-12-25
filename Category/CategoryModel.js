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





admin.GetCategory=function(data,result){
    var screen=data.screen;
    var id;
    if(screen=="GetCategory"){
              id=0;
    }else if(screen=="GetSubCategoryByCategory"){
        id=data.id;
    }else if(screen=="GetItemBySubCategory"){
        
        id=data.id;
      // SendMail.caller();

        
    }
     
// result(null,"yes");

    var query=mysql.format("call Fix_my_street.Category_Procedure('"+screen+"', '"+id+"', 'null', 'null')");
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
            
                
                result(null,res[0]);
            
        }
    });

}







module.exports= admin;