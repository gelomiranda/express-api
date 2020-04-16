const db = require('../models');


exports.create = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    await db.Document.create({
        filePath: 'documents',
        fileName: sampleFile.name,
        patientId:req.params.patientId
        
    })
    .then(() => {
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('documents/' + sampleFile.name, function (err) {
            if (err)
                return res.status(500).send(err);
            res.send('File uploaded!');
        });
        res.status(200).send(req.body)
    }).catch(function (err) {
        var errors = err.message.split(',');
        return res.status(500).json({ error: errors });
    });

    
};

exports.findAll = async (req, res) => {
    await db.Patient.findAll({
        where: { id: req.params.patientId },
        include: [{
            model: db.Document,
            as: 'Documents'
        }]
    })
    .then(Patient => res.status(200).send(Patient))
    .catch(err => res.status(500).send(err.toString()));
};
