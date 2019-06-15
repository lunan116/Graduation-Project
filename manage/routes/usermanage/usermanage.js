var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var User = global.dbHelper.getModel('users');
    User.find({type: {$lte: 5}},function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
        } else {
            /*res.json({

                "total": 14,

                "rows": [

                    {

                        "id": "014b79558bc746f5b8b472706a17e229",

                        "companyId": "be2d9f3b9cdb4923a6cd5c43d56edf29",

                        "outUserId": "831b2188a80342299b36dead10396b80",

                        "inCaseCount": 0,

                        "inCaseAmount": 0.0,

                        "callBackCaseCount": 0,

                        "callBackCaseAmount": 0.0,

                        "reductionAmount": 0.0,

                        "callBackRate": "-",

                        "collectingCaseCount": 0,

                        "collectingCaseAmount": 0.0,

                        "status": 2,

                        "inDate": 1508428800000,

                        "gmtCreate": 1508588401000,

                        "gmtModify": 1508588401000,

                        "outUserName": "lcs测试1",

                        "index": 2

                    }

                ]

            })*/
           res.json({"total": docs.length,"rows": docs}); //以json格式输出
        }
    })

});

router.post('/', function (req, res, next){
    var param = req.body;
    var name = param.name,
        password = param.password;
    var User = global.dbHelper.getModel('users');
    User.findOne({name: name}, function (error,doc) {
        if (error){

            res.json({"errorCode": 405,"errorMessage": '登录失败，查询数据库失败'});
        } else if(doc){
            User.findOne({name: name , password:password}, function (error,doc) {
                if (error){
                    console.log(error);
                    res.json({"errorCode": 405,"errorMessage": '登录失败，查询数据库失败'});
                } else if (doc){
                    res.json({"errorCode": 200,"errorMessage": '登录成功',"data":doc});
                } else{
                    res.json({"errorCode": 405, "errorMessage": '登录失败，密码错误'});
                }
            })
        } else {
            res.json({"errorCode": 405, "errorMessage": '用户名不存在'});
        }
    })
    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
