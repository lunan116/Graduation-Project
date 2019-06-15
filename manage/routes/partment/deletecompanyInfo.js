var express = require('express');
var router = express.Router();



router.post('/', function (req, res, next){
    var param = req.body;
    var _id = param._id;
    var condition = {_id : _id};
    console.log(_id)
    var partments = global.dbHelper.getModel('partments');
    partments.findOne({_id: _id}, function (error,doc) {
        if (error){
            res.json({"errorCode": 405,"errorMessage": '查询数据库失败'});
        } else if(doc){
            partments.remove(condition , function (error) {
                if (error) {
                    res.json({"errorCode": 405,"errorMessage": error});
                } else {
                    res.json({"errorCode": 200,"errorMessage": "企业信息删除成功"});
                }
            });
        } else {
            res.json({"errorCode": 401, "errorMessage": '企业信息不存在'});
        }
    })
    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
