const mongoose=require('mongoose');
const uniqueValidator= require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    subsemnatul: {
        type: String,
        required: true
    },
    domiciliat: {
        type: String,
        required: true,
    },
    strada: {
        type: String,
        required: true,
    },
    numar: {
        type: String,
        required: true
    },
    bloc: {
        type: String
    },
    scara: {
        type: String
    },
    etaj: {
        type: String
    },
    apartament: {
        type: String
    },
    judet: {
        type: String,
        required: true
    },
    telefon: {
        type: String,
        required: true
    },
    act_ident: {
        type: String,
        required: true
    },
    act_ident_seria: {
        type: String,
        required: true
    }, 
    act_ident_numar: {
        type: String,
        required: true
    },
    cnp_nif: {
        type: String,
        required: true,
        unique: true
    },
    eliberat: {
        type: String,
        required: true
    },
    eliberat_data: {
        type: String,
        required: true
    },
    calitate: {
        type: String,
        required: true
    },
    firma: {
        type: String,
        required: true
    },
    nr_ordine_rc: {
        type: String,
        required: true
    },
    cui: {
        type: String,
        required: true
    },
    sediu_domiciliat: {
        type: String,
        required: true
    },
    sediu_strada: {
        type: String,
        required: true
    },
    sediu_numar: {
        type: String,
        required: true
    }, 
    sediu_bloc: {
        type: String
    },
    sediu_scara: {
        type: String
    }, 
    sediu_etaj: {
        type: String
    },
    sediu_apartament: {
        type: String
    },
    sediu_judet: {
        type: String,
        required: true
    },
    sediu_cod: {
        type: String,
        required: true
    },
    sediu_cod_post: {   
        type: String,
        required: true
    },
    sediu_telefon: {
        type: String,
        required: true
    },
    sediu_telefon1: {
        type: String,
        required: true
    },
    sediu_fax: {
        type: String
    },
    sediu_fax1: {
        type: String
    },
    sediu_mail: {
        type: String
    },
    sediu_web: {
        type: String
    },
    declar_0: {
        type: String
    },
    declar_1: {
        type: String,
        required: true
    },
    declar_2: {
        type: String,
        required: true
    },
    declar_3: {
        type: String,
        required: true
    }, 
    data: {
        type: String,
        required: true
    }
});

clientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Client', clientSchema);