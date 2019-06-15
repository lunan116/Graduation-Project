var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var partments = global.dbHelper.getModel('partments');
    var param = req.query;
    var _id = param._id;
    var condition = {_id :_id};
    //console.log("woighio")
    //console.log(_id)
    partments.find(condition,function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
            //console.log("hh")
        } else {
            res.json({"errorCode": 200,"data": docs}); //以json格式输出
            console.log(docs)
        }
    })

});

module.exports = router;
