const express=require('express');

const HttpError = require('../models/http-errors');
const Client = require('../models/client');

const router = express.Router();

const getClients = async (req, res, next) => {
    let clients;

    try {
        clients = await Client.find({});
    } catch (error) {
        return next(new HttpError('Fetching clients failed, please try again later', 500));
    }

    res.json({clients: clients.map(client => client.toObject({getters: true}))});
};

const getClientById = async ((req, res, next) => {
    const clientId = req.params.id;
    
    let client;

    try{
        client = await Client.findById(clientId);
    } catch (error) {
        error = new HttpError('Could not find client for the provided id', 404);
    }

    res.json({client: client.toObject( {getters: true} )});
});

const createClient = async (req, res, next) => {
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed, please check your data', 422));
    }

    const {
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
        data
    } = req.body;

    const createdClient = new Client({
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
        data
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