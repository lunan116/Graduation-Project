var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var id = req.query.id;
    console.log(id);
    var projectInfs = global.dbHelper.getModel('projectInfs');
    projectInfs.find({id:id},function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
        } else {
            res.json({"total": docs.length,"rows": docs}); //以json格式输出
        }
    })

});
module.exports = router;