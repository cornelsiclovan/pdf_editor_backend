const express=require('express');
const { validationResult } = require('express-validator');
const Fawn = require('fawn');
const mongoose = require('mongoose');

const HttpError = require('../models/http-errors');
const Client = require('../models/client');
const {editfiles} = require('../editfiles');
const {editotherfiles} = require('../editotherfiles');
const cnp = require('cnp');
const fs = require('fs');
const base64Img = require('base64-img');

const router = express.Router();

Fawn.init(mongoose);

const getClients = async (req, res, next) => {
    let clients;

    try {
        clients = await Client.find({});
    } catch (error) {
        return next(new HttpError('Fetching clients failed, please try again later', 500));
    }

    serializedClients = clients.map(client => {
        return {
            _id: client._id,
            subsemnatul: client.subsemnatul,
            cnp_nif: client.cnp_nif
        }
    });
  
    res.json({clients: clients.map(client => client.toObject({getters:true}))});
};

const getClientById = async (req, res, next) => {
    const clientId = req.params.id;
    
    //console.log(req.params);


    let client;

    try{
        client = await Client.findById(clientId);
    } catch (error) {
        error = new HttpError('Could not find client for the provided id', 404);
    }

    // console.log(client.image);

    // var data = base64Img.base64Sync(client.image);
    // client.imageUrl = client.image;
    
    // console.log(client.imageUrl);
    // client.image = data;
   

    res.json({client: client.toObject( {getters: true} )});
};

const createClient = async (req, res, next) => {
    const validationErrors = validationResult(req);

    console.log("controller", req.body);

    if(!validationErrors.isEmpty()) {

        return next(new HttpError('Invalid inputs passed, please check your data', 422));
    }

    const {
        tribunalul,
        subsemnatul,
        domiciliat,
        strada,
        numar,
        bloc,
        scara,
        etaj,
        apartament,
        judet,
        telefon,
        act_ident,
        act_ident_seria, 
        act_ident_numar,
        cnp_nif,
        eliberat,
        eliberat_data,
        calitate,
        firma,
        nr_ordine_rc,
        cui,
        sediu_domiciliat,
        sediu_strada,
        sediu_numar, 
        sediu_bloc,
        sediu_scara, 
        sediu_etaj,
        sediu_apartament,
        sediu_judet,
        sediu_cod,
        sediu_cod_post,
        sediu_telefon,
        sediu_telefon1,
        sediu_fax,
        sediu_fax1,
        sediu_mail,
        sediu_web,
        declar_0,
        declar_1,
        declar_2,
        declar_3, 
        data, 
        message
    } = req.body;

    let existingClient;
    try {
        existingClient = await Client.findOne({ cnp_nif: cnp_nif });
    } catch (error) {
        return next(new HttpError('Incercati va rugam mai tarziu. Serviciu indisponibil', 500));
    }


    if(existingClient) {
        return next(new HttpError("Acest client identificat prin CNP deja exista."));
    }

    const createdClient = new Client({
        tribunalul,
        subsemnatul,
        domiciliat,
        strada,
        numar,
        bloc,
        scara,
        etaj,
        apartament,
        judet,
        telefon,
        act_ident,
        act_ident_seria, 
        act_ident_numar,
        cnp_nif,
        eliberat,
        eliberat_data,
        calitate,
        firma,
        nr_ordine_rc,
        cui,
        sediu_domiciliat,
        sediu_strada,
        sediu_numar, 
        sediu_bloc,
        sediu_scara, 
        sediu_etaj,
        sediu_apartament,
        sediu_judet,
        sediu_cod,
        sediu_cod_post,
        sediu_telefon,
        sediu_telefon1,
        sediu_fax,
        sediu_fax1,
        sediu_mail,
        sediu_web,
        declar_0,
        declar_1,
        declar_2,
        declar_3, 
        data, 
        message,
        image: req.file.path
    });

    try {
        new Fawn.Task()
            .save('clients', createdClient)
            .run();
    } catch (error) {
        error = new HttpError(error, 500);
        return next(error);
    }

    res.status(201).json({ client: createdClient });
};

const updateClient = async (req, res, next) => {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        throw new HttpError('Invalid input passed, please check your data', 422);
    }

    const {
        tribunalul,
        subsemnatul,
        domiciliat,
        strada,
        numar,
        bloc,
        scara,
        etaj,
        apartament,
        judet,
        telefon,
        act_ident,
        act_ident_seria, 
        act_ident_numar,
        cnp_nif,
        eliberat,
        eliberat_data,
        calitate,
        firma,
        nr_ordine_rc,
        cui,
        sediu_domiciliat,
        sediu_strada,
        sediu_numar, 
        sediu_bloc,
        sediu_scara, 
        sediu_etaj,
        sediu_apartament,
        sediu_judet,
        sediu_cod,
        sediu_cod_post,
        sediu_telefon,
        sediu_telefon1,
        sediu_fax,
        sediu_fax1,
        sediu_mail,
        sediu_web,
        declar_0,
        declar_1,
        declar_2,
        declar_3, 
        data,
        message,
    } = req.body;

    const clientId = req.params.id; 

    let client;
    try {
        client = await Client.findById(clientId);
    }   catch (err) {
        return next( new HttpError('Updating client failed, client not found.', 500));
    }
   
    console.log(tribunalul);

    client.tribunalul = tribunalul;
    client.subsemnatul = subsemnatul;
    client.domiciliat  = domiciliat;
    client.strada = strada;
    client.numar = numar;
    client.bloc = bloc;
    client.scara = scara;
    client.etaj = etaj;
    client.apartament = apartament;
    client.judet = judet;
    client.telefon = telefon;
    client.act_ident = act_ident;
    client.act_ident_seria = act_ident_seria;
    client.act_ident_numar = act_ident_numar;
    client.cnp_nif = cnp_nif;
    client.eliberat = eliberat;
    client.eliberat_data = eliberat_data;
    client.calitate = calitate;
    client.firma = firma;
    client.nr_ordine_rc = nr_ordine_rc;
    client.cui = cui;
    client.sediu_domiciliat = sediu_domiciliat;
    client.sediu_strada = sediu_strada;
    client.sediu_numar = sediu_numar;
    client.sediu_bloc = sediu_bloc;
    client.sediu_scara = sediu_scara;
    client.sediu_etaj = sediu_etaj;
    client.sediu_apartament = sediu_apartament;
    client.sediu_judet = sediu_judet;
    client.sediu_cod = sediu_cod;
    client.sediu_cod_post = sediu_cod_post;
    client.sediu_telefon = sediu_telefon;
    client.sediu_telefon1 = sediu_telefon1;
    client.sediu_fax = sediu_fax;
    client.sediu_fax1 = sediu_fax1;
    client.sediu_mail = sediu_mail;
    client.sediu_web = sediu_web;
    client.declar_0 = declar_0;
    client.declar_1 = declar_1;
    client.declar_2 = declar_2;
    client.declar_3 = declar_3;
    client.data = data;
    client.message = message;

    console.log(client);

    try {
        await client.save();
    } catch (err) {
        return next( new HttpError(err, 500));
    }   

    res.status(200).json({client: client.toObject({ getters: true })});
}

const deleteClient = async (req, res, next) => {
    const clientId = req.params.id;

    let client;

    try {
        client = await Client.findById(clientId);
    } catch(err) {
        return next(new HttpError(err), 500);
    }

    if(!client) {
        return next(new HttpError("Could not find the client with this id"), 404);
    } 

    const imagePath = client.image;

    try {
        new Fawn.Task()
            .remove('clients', {_id: mongoose.Types.ObjectId(clientId)})
            .run();
    } catch(err) {
        return next(new HttpError("Something went wrong" + err), 500);
    }

    fs.unlink(imagePath, err => {
        console.log(err);
    })

    res.status(200).json({message: 'Deleted client'})
}

const editFiles = async (req, res, next) => {
    const clientId = req.params.id;

    let client;
    
    try{
        client = await Client.findById(clientId);
    } catch (error) {
        error = new HttpError('Could not find client for the provided id', 404);
    }

    editfiles(client);
    editotherfiles(client);
    res.status(200).json({message: "files generated succesfull"});
}


exports.editFiles = editFiles;
exports.getClients = getClients;
exports.getClientById = getClientById;
exports.createClient = createClient;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
