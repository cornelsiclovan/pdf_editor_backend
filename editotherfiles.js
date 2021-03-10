const { PDFDocument, StandardFonts, degrees, rgb } = require('pdf-lib');
//for editing word documents. only docx
const admZip = require('adm-zip');
const xml2js = require('xml2js');

const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
let descriptionString = '';
const readFolder = './MODELE_DOCUMENTE_PDF_DIN_DOCX/';



let files = [];
const getFiles = () => {
    return readDir(readFolder, files);
};

const editotherfiles = async (formData) => {
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
                const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

                console.log(file);

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\declaratie_de_participare_sot_sotie.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 230,
                        y: 612,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 93,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 179,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.numar, {
                        x: 305,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 365,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 435,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 484,
                        y: 597,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    
                    firstPage.drawText(formData.apartament, {
                        x: 100,
                        y: 582,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.judet, {
                        x: 250,
                        y: 582,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.telefon, {
                        x: 410,
                        y: 582,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });
                
                    firstPage.drawText(formData.act_ident, {
                        x: 150,
                        y: 567,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });
                
                    firstPage.drawText(formData.act_ident_seria, {
                        x: 235,
                        y: 567,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 275,
                        y: 567,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.cnp_nif, {
                        x: 400,
                        y: 567,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 150,
                        y: 552,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 249,
                        y: 552,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.calitate, {
                        x: 205,
                        y: 537,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.firma, {
                        x: 370,
                        y: 537,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.nr_ordine_rc, {
                        x: 340,
                        y: 522,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.cui, {
                        x: 100,
                        y: 508,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 380,
                        y: 508,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_strada, {
                        x: 100,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_numar, {
                        x: 225,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 285,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_scara, {
                        x: 345,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_etaj, {
                        x: 395,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 440,
                        y: 493,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_judet, {
                        x: 100,
                        y: 478,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_telefon, {
                        x: 285,
                        y: 478,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_fax, {
                        x: 435,
                        y: 478,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_mail, {
                        x: 140,
                        y: 464,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.sediu_web, {
                        x: 305,
                        y: 464,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });

                    firstPage.drawText(formData.data, {
                        x: 130,
                        y: 165,
                        size: 11,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });
                } 

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\act_constitutiv.pdf") {
                    firstPage.drawText("act constit", {
                        x: 5,
                        y: height / 2 + 300,
                        size: 50,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                        rotate: degrees(-45)
                    });
                }

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\model_declaratie_pfa_1.pdf") {
                    firstPage.drawText("pfa1", {
                        x: 140,
                        y: 600,
                        size: 12,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                    });
                }

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\model_declaratie_pfa_2.pdf") {
                    firstPage.drawText("pfa2", {
                        x: 5,
                        y: height / 2 + 300,
                        size: 50,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1),
                        rotate: degrees(-45)
                    });
                }

                fs.writeFile(descriptionFilePath, descriptionString, err => {})

                const pdfBytes = await pdfDoc.save();
            
                fs.writeFile( pathWrite, pdfBytes, () => {
                    console.log(pathWrite);   
                    console.log("done"); 
                });       

        });
          
    });
}

exports.editotherfiles = editotherfiles;