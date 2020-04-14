const db = require('../models');

exports.findAll = async (req, res) => {
    await db.Patient.findAll({
        where:{id:req.params.patientId},
        include:[{
            model:db.History,
            as:'Histories'
        }]
    })
    .then(Patient => res.status(200).send(Patient))
    .catch(err => res.status(500).send(err.toString()));
};

exports.create = async (req,res) => {
    await db.History.create(req.body)
    .then(() => res.status(200).send('Ok'))
    .catch(err => res.status(500).send(err.toString()));
};

exports.update = async (req,res) => {
    await db.History.update(req.body,{where:{id:req.params.id}})
        .then(() => res.status(200).send('Ok'))
        .catch((err) => res.status(500).send(err.toString()));
};

exports.delete = async (req, res) => {
    await db.History.destroy({where : { id: req.params.id }})
        .then(() => res.status(200).send('Ok'))
        .catch((err) => res.status(500).send(err.toString()));
};

