const { PDFDocument, StandardFonts } = require('pdf-lib');

const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
let descriptionString = '';
const readFolder = './MODELE_DOCUMENTE/';



let files = [];
const getFiles = () => {
    return readDir(readFolder, files);
};

const editfiles = async (formData) => {
    await getFiles().then(data => {
        data.forEach(file => {
            files.push(file);
        });
    });

    files.forEach(file => {
        let filename = file;

        file = path.join(readFolder, file);
        
        let pathWrite = path.join(__dirname, 'DOCUMENTE_COMPLETATE');
        let descriptionFilePath = path.join(__dirname, "descriere.txt");
       
        
        let userFolder = path.join('DOCUMENTE_COMPLETATE', formData.subsemnatul);
    
        if(!fs.existsSync(userFolder))
            fs.mkdirSync(userFolder);

        pathWrite = path.join(pathWrite, formData.subsemnatul);
 
        pathWrite = path.join(pathWrite, filename);


        fs.readFile(file, async (error, data) => {
            
            const pdfDoc =await PDFDocument.load(data);
    
            const pages = await pdfDoc.getPages();
            const firstPage = await pages[0]; 
           
           
           const { width, height } = firstPage.getSize();
           const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
           
           const form = pdfDoc.getForm();
           const fields = form.getFields();

           
           descriptionString += filename;
           descriptionString += '\n';
           descriptionString += '------------------------------------';
           descriptionString += '\n';

           fields.forEach(field => {
               const type = field.constructor.name;
               const name = field.getName();
               descriptionString += `${type}: ${name}`;
               descriptionString += '\n'
     
               if(type === 'PDFTextField') {
                    if(name === 'CUI') {

                        let nameField = "cui";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form1') {
                     
                        let nameField = "subsemnatul";
                        form.getTextField(name).setText(formData[nameField]);
                   } else if(name === 'form2'){

                        let nameField = "domiciliat";
                        form.getTextField(name).setText(formData[nameField]);
                   } else if(name === 'form3' || name === "6"){

                        let nameField = "strada";
                        form.getTextField(name).setText(formData[nameField]);
                   } else if(name === 'form4' || name === "7"){

                        let nameField = "numar";
                        form.getTextField(name).setText(formData[nameField]);
                   } else if(name === 'form5' || name === "8" ){

                        let nameField = "bloc";
                        form.getTextField(name).setText(formData[nameField]);
                   } else if(name === 'form6' || name === "9"){

                        let nameField = "scara";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form7' || name === "10"){

                        let nameField = "etaj";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form8' || name === "11"){

                        let nameField = "apartament";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form9'){

                        let nameField = "judet";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form10'){

                        let nameField = "telefon";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form11'){

                        let nameField = "act_ident";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form12'){

                        let nameField = "act_ident_seria";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form13'){

                        let nameField = "act_ident_numar";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form14'){

                        let nameField = "eliberat";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form15'){

                        let nameField = "eliberat_data";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form16'){

                        let nameField = "cnp_nif";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form17'){

                        let nameField = "calitate";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'form19'){

                        let nameField = "cui";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'declar.0') {
                        
                        let nameField = "declar_0";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'declar.1') {
                        
                        let nameField = "declar_1";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'declar.2') {
                        
                        let nameField = "declar_2";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'declar.3') {
                        
                        let nameField = "declar_3";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'bloc') {
                        
                        let nameField = "sediu_bloc";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'str') {
                        
                        let nameField = "sediu_strada";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'nr') {
                        
                        let nameField = "sediu_numar";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'localitate') {
                        
                        let nameField = "domiciliat";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'domn_doamna') {
                        
                        let nameField = "subsemnatul";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'str') {
                        
                        let nameField = "sediu_strada";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'domiciliu' || name === '5') {
                        
                        let nameField = "domiciliat";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_str') {
                        
                        let nameField = "sediu_strada";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_nr') {
                        
                        let nameField = "sediu_numar";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_bloc') {
                        
                        let nameField = "sediu_bloc";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_sc') {
                        
                        let nameField = "sediu_scara";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_et') {
                        
                        let nameField = "sediu_etaj";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_ap' || name === 'sediu_ap') {
                        
                        let nameField = "sediu_apartament";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'dom_calitate') {
                        
                        let nameField = "calitate";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_str1' || name === 'sediu_str') {
                        
                        let nameField = "sediu_strada";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_nr') {
                        
                        let nameField = "sediu_numar";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_sc') {
                        
                        let nameField = "sediu_scara";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_et') {
                        
                        let nameField = "sediu_etaj";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_localitate' || name=== 'sediu_loco') {
                        
                        let nameField = "sediu_domiciliat";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_firma') {
                        
                        let nameField = "firma";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'cod') {
                        
                        let nameField = "nr_ordine_rc";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'CIF') {
                        
                        let nameField = "cui";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'subsemnat' || name === '4') {
                        
                        let nameField = "subsemnatul";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'bi') {
                        
                        let nameField = "act_ident";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'serie_bi') {
                        
                        let nameField = "act_ident_seria";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'numar_bi') {
                        
                        let nameField = "act_ident_numar";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'CIF') {
                        
                        let nameField = "cnp_nif";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'firma_j') {
                        
                        let nameField = "nr_ordine_rc";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'firma_cui') {
                        
                        let nameField = "cui";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'cnp' || name === 'CNP') {
                        
                        let nameField = "cnp_nif";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if(name === 'sediu_codpo') {

                        let nameField = "sediu_cod_post";
                        form.getTextField(name).setText(formData[nameField]);
                    } else if (name === "orc" || name === "ORC" || name === "3") {

                        let nameField = "tribunalul";
                        form.getTextField(name).setText(formData[nameField]);
                    } else {
                        form.getTextField(name).setText(formData[name]);
                    }
                }
           });

           descriptionString += '\n';


           fs.writeFile(descriptionFilePath, descriptionString, err => {})

           const pdfBytes = await pdfDoc.save();
    
           fs.writeFile( pathWrite, pdfBytes, () => {
            console.log(pathWrite);   
            console.log("done"); 
           });       

        });
        
    });
}

exports.editfiles = editfiles;