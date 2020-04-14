const db = require('../models');

exports.findAll = async (req, res,next) => {
  await db.Patient.findAll()
  .then(patients => (res.status(200).json({patients:patients}))) //Fetch all the patient
  .catch(err => err)
};


exports.findByPk = async (req,res) => {
  await db.Patient.findByPk(req.params.id)
  .then(function(Patient){
    return res.status(200).send(Patient);
  }).catch(function(err){
    return res.status(500).send('Err');
  })
};

exports.create = async (req, res) => {
    await db.Patient.create(req.body)
    .then(() => res.status(200).send(req.body)
    ).catch(function(err){
      var errors = err.message.split(',');
      return res.status(500).json({ error: errors });
    });
};

exports.update = async (req, res) => {
  await db.Patient.findByPk(req.params.id)
    .then(function(Patient){
      if(Patient){
        Patient.update(req.body)
          .then(() => res.status(200).send('Ok'))
          .catch((err) => res.status(500).send(err));
      }else{
        return res.status(500).json('Record no found');
      }
    }).catch(function(err){
      return res.status(500).json({err:err});
    })
};

exports.delete = async (req,res) => {
  await db.Patient.findByPk(req.params.id)
    .then(function (Patient) {
      if (Patient) {
        Patient.destroy()
          .then(() => res.status(200).send('Ok'))
          .catch((err) => res.status(500).send(err));
      } else {
        return res.status(500).json('Record no found');
      }
    }).catch(function (err) {
      return res.status(500).json({ err: err });
    })
}
