var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});*/
var registerRouter = require('./login/register');
var loginRouter = require('./login/login');
var usermanageRouter = require('./usermanage/usermanage');
var deleteUserRouter = require('./usermanage/deleteUser');
var findUserRouter = require('./usermanage/findUser');
var updateUserRouter = require('./usermanage/updateUser');
var partlistRouter = require('./partlist/partlist');
var projectsmanageRouter = require('./projects/projectsmanage');
var addProjectRouter = require('./projects/addProject');
var deleteProjectRouter = require('./projects/deleteProject');
var findProjectRouter = require('./projects/findProject');
var updateProjectRouter = require('./projects/updateProject');
var projectInfoRouter = require('./projects/projectInfo');
var countryResultRouter = require('./countryResult/countryResult');
var unitResultRouter = require('./unitResult/unitResult');
var deletecompanyRouter = require('./company/deletecompanyInfo');
var companymanageRouter = require('./company/companymanage');
var findcompanyInfoRouter = require('./company/findcompanyInfo');
var updateCompanyInfoRouter = require('./company/updateCompanyInfo');
var deletecompanyRouter1 = require('./partment/deletecompanyInfo');
var companymanageRouter1 = require('./partment/companymanage');
var findcompanyInfoRouter1 = require('./partment/findcompanyInfo');
var updateCompanyInfoRouter1 = require('./partment/updateCompanyInfo');
var uploadRouter = require('./upload/upload');

router.use('/register',registerRouter);
router.use('/login',loginRouter);
router.use('/usermanage',usermanageRouter);
router.use('/deleteUser',deleteUserRouter);
router.use('/findUser',findUserRouter);
router.use('/updateUser',updateUserRouter);
router.use('/partlistUser',partlistRouter);
router.use('/projectsmanage',projectsmanageRouter);
router.use('/addProject',addProjectRouter);
router.use('/deleteProject',deleteProjectRouter);
router.use('/findProject',findProjectRouter);
router.use('/updateProject',updateProjectRouter);
router.use('/projectInfo',projectInfoRouter);
router.use('/countryResult',countryResultRouter);
router.use('/unitResult',unitResultRouter);
router.use('/deletecompanyInfo',deletecompanyRouter);
router.use('/companymanage',companymanageRouter);
router.use('/findcompanyInfo',findcompanyInfoRouter);
router.use('/updateCompanyInfo',updateCompanyInfoRouter);
router.use('/partment/deletecompanyInfo',deletecompanyRouter1);
router.use('/partment/companymanage',companymanageRouter1);
router.use('/partment/findcompanyInfo',findcompanyInfoRouter1);
router.use('/partment/updateCompanyInfo',updateCompanyInfoRouter1);
router.use('/upload',uploadRouter);

module.exports = router;