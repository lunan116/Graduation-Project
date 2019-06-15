var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var Parts = global.dbHelper.getModel('parts');
    //console.log("step1");
    Parts.find({},function(err, docs){
        //console.log("step2");
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
            //console.log("hh")
        } else {
            res.json({"total": docs.length,"rows": docs}); //以json格式输出
            //console.log(docs)
        }
    })

});

module.exports = router;
