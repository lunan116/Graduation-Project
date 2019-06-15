var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var obj = {
        a: 1,
        b: 2
    };
    res.json(res.obj); //以json格式输出
});

router.post('/', function (req, res, next){
        var param = req.body;
        var name = param.name,
            password = param.password,
            type = param.type,
            workspace = param.workspace
        var User = global.dbHelper.getModel('users');
        var companys = global.dbHelper.getModel('companys');
        var partments = global.dbHelper.getModel('partments');
        User.findOne({name: name}, function (doc,error) {
            if (error){
                res.json({"errorCode": 406,"errorMessage": '注册失败，查询失败'});
            } else if(doc) {
                res.json({"errorCode": 405, "errorMessage": '注册失败，用户名已存在'});
            }else{
                if (param.type=="2"){
                    companys.findOne({companyTitle: param.workspace}, function (doc,error) {
                        if (error){
                            console.log(error);
                        } else if(doc) {
                            console.log(doc);
                        }else{
                            //res.json({"errorCode": 200,"errorMessage": '注册成功！'});
                            companys.create({
                                companyTitle : param.workspace,
                                registeredCapital : "-",
                                founder : "-",
                                companySize : "-",
                                address :"-",
                                type : "-",
                                qualityRating : "-",
                                summary : "-",
                            }, function (error, doc) {
                                if (error) {
                                    console.log(error);
                                    //console.log("添加企业信息失败");
                                } else {
                                    /*req.session.error = '用户名创建成功！';*/
                                    //res.json({"errorCode": 200,"errorMessage": '注册成功'});
                                    console.log("添加部门信息成功");
                                }
                            });
                        }
                    })
                }else if (param.type=="4"){
                    partments.findOne({companyTitle: param.workspace}, function (doc,error) {
                        if (error){
                            console.log(error);
                        } else if(doc) {
                            console.log(doc);
                        }else{
                            //res.json({"errorCode": 200,"errorMessage": '注册成功！'});
                            partments.create({
                                companyTitle : param.workspace,
                                registeredCapital : "-",
                                founder : "-",
                                companySize : "-",
                                address :"-",
                                type : "-",
                                qualityRating : "-",
                                summary : "-",
                            }, function (error, doc) {
                                if (error) {
                                    //console.log(error);
                                    //console.log("添加企业信息失败");
                                } else {
                                    /*req.session.error = '用户名创建成功！';*/
                                    //res.json({"errorCode": 200,"errorMessage": '注册成功'});
                                    //console.log("添加企业信息成功");
                                }
                            });
                        }
                    })
                }


                //res.json({"errorCode": 200,"errorMessage": '注册成功！'});
                User.create({
                    name: name,
                    password: password,
                    type:type,
                    workspace:workspace
                }, function (error, doc) {
                    if (error) {
                        res.json({"errorCode": 404,"errorMessage": '注册失败'});
                        console.log(error);
                    } else {
                        /*req.session.error = '用户名创建成功！';*/
                        res.json({"errorCode": 200,"errorMessage": '注册成功'});
                    }
                });
            }
        })
        //console.log(param);
        //todo something
        //res.json({"errorCode": 0,"errorMessage": 'save'});
     });
module.exports = router;
