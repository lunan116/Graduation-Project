var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next){
    var param = req.body;
    var name = param.name,
        password = param.password,
        type = param.type,
        workspace = param.workspace,
        _id = param._id;
    var User = global.dbHelper.getModel('users')
    var condition = {_id :_id};

   /* User.findOneAndUpdate({_id:_id},{
        name: name,
        type:type,
        password:password,
        workspace:workspace,
        _id:_id
    },function (error,doc) {
        if (error) {
            res.json({"errorCode": 405,"errorMessage": "修改失败！"});
            //console.log(error);
        }else{
            //console.log(doc);
            res.json({"errorCode": 200,"errorMessage": "修改成功！"});
        }
    })*/

    User.findOneAndUpdate(condition,{
        name: name,
        type:type,
        password:password,
        workspace:workspace
    },function (error,doc) {
        if (error) {
            res.json({"errorCode": 405,"errorMessage": "修改失败！"});
            //console.log(error);
        }else{
            //console.log(doc);
            res.json({"errorCode": 200,"errorMessage": "修改成功！"});
        }
    })

    /*User.find(condition,function(err, docs){
        if (err){
            console.log(err);
            console.log("123");
        } else {
            var condition1 = {
                name: docs[0].name,
                type:docs[0].type,
                password:docs[0].password,
                workspace:docs[0].workspace,
                _id:docs[0]._id
            }

            /!*User.updateOne(condition1,{
                name: name,
                type:type,
                password:password,
                workspace:workspace,
                _id:_id
            }, function (error,doc) {
                if (error) {
                    res.json({"errorCode": 405,"errorMessage": "修改失败！"});
                    //console.log(error);
                }else{
                    //console.log(doc);
                    res.json({"errorCode": 200,"errorMessage": "修改成功！"});
                }
            })*!/
        }
    })*/

    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
