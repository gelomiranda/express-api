var express = require('express');
var router = express.Router();
var patient_controller = require('../controllers/patients');


//* Patient routing

router.get('/create',function(req,res){
  res.render('patient/create',{data:''})
});

router.route('/')
.get(function(req, res, next) {
  patient_controller.find_all(req,res);
}).post(function (req, res){
  patient_controller.save(req,res);
}).delete;



module.exports = router;
