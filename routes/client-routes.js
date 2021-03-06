const express = require('express');
const clientControllers = require('../controllers/client-controllers');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-uploads');

const router = express.Router();


router.get('/', clientControllers.getClients);

router.get('/:id', clientControllers.getClientById);

router.post('/', 
    fileUpload.single('image'),
    clientControllers.createClient
    );

router.patch('/:id',
    clientControllers.updateClient
    );

router.delete('/:id', clientControllers.deleteClient);

router.get('/editfiles/:id', clientControllers.editFiles);

module.exports = router;