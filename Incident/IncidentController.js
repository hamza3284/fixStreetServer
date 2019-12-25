var Model=require('./IncidentModel');


exports.AddIncident=function(req,res){
    if(req.body.screen!=null){

           
    
  Model.AddIncident(req.body,function(err,result){
      
    console.log(result);

        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
                status: result,
                message: "Success",
                screen:  req.body.screen
            });
       
        
    })
}
}

exports.GetIncident=function(req,res){
    if(req.body.screen!=null){

           
    
  Model.GetIncident(req.body,function(err,result){
      
    console.log(result);

        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
                status: result,
                message: "Success",
                screen:  req.body.screen
            });
       
        
    })
}
}
