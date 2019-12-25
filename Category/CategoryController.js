var Model=require('./CategoryModel');
exports.GetCategory=function(req,res){
    if(req.query.screen!=null){

           
    
  Model.GetCategory(req.query,function(err,result){
      
    console.log(result);

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
                status: {result},
                message: "Success",
                screen:  req.query.screen
                
            });
       
        
    })
}
}

