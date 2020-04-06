const db = require('../models');

exports.find_all = async (req, res,next) => {
  await db.Patient.findAll()
  .then(function(patients){
    console.log(patients);
    return res.render('patient/index', { patients: patients });
  });
};



exports.save = async (req, res) => {
    const post = await db.Patient.create(req.body)
    .then(function() {
      return res.redirect('patients/create');
    }).catch(function(err){
      var errors = err.message.split(',');
      return res.render('patient/create',
                          {data : req.body, 
                          errors: errors });
    });
};