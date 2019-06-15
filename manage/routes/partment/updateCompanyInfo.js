var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next){
    var param = req.body;
    var _id=param._id;
    var partments = global.dbHelper.getModel('partments');
    var condition = {_id :_id};

    partments.findOneAndUpdate(condition,{
        companyTitle : param.companyTitle,
        registeredCapital : param.registeredCapital,
        founder : param.founder,
        companySize : param.companySize,
        address : param.address,
        type : param.type,
        qualityRating : param.qualityRating,
        summary : param.summary
    },function (error,doc) {
        if (error) {
            res.json({"errorCode": 405,"errorMessage": "修改失败！"});
            //console.log(error);
        }else{
            //console.log(doc);
            res.json({"errorCode": 200,"errorMessage": "修改成功！"});
        }
    })


});
module.exports = router;
