var express = require('express');
var router = express.Router();
var patient_controller = require('../controllers/patients');
var history_controller = require('../controllers/histories');
var document_controller = require('../controllers/documents');
var models = require('../models');

/*Patients Routes
-Find all Patienst
-Create Patient
*/
/*------------------------------------------------------------------*/
router.route('/')
    .get((req, res, next) => patient_controller.findAll(req,res))
    .post((req, res) => patient_controller.create(req,res));
/*------------------------------------------------------------------*/

/*Patients Routes
-Find patient by primary key
-Update patient
-Delete patient
*/
/*------------------------------------------------------------------*/
router.route('/:id')
    .get( (req,res) => patient_controller.findByPk(req,res) )
    .put( (req,res) => patient_controller.update(req,res))
    .delete((req, res) => patient_controller.delete(req, res));
/*------------------------------------------------------------------*/    

router.route('/:patientId/histories')
    .get( (req,res) =>  history_controller.findAll(req,res))
    .post( (req,res) => history_controller.create(req,res) );

router.route('/:patientId/histories:id')
    .get((req, res) => history_controller.findByPk.findByPk(req, res))
    .put((req, res) => history_controller.update(req, res))
    .delete((req, res) => history_controller.delete(req, res));


router.route('/:patientId/documents')
    .get((req, res) => document_controller.findAll(req, res))
    .post((req, res) => document_controller.create(req, res));
module.exports = router;
