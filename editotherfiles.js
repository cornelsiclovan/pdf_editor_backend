const { PDFDocument, StandardFonts, degrees, rgb } = require('pdf-lib');
//for editing word documents. only docx
const admZip = require('adm-zip');
const xml2js = require('xml2js');

const fontkit = require('@pdf-lib/fontkit')

const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
let descriptionString = '';
const readFolder = './MODELE_DOCUMENTE_PDF_DIN_DOCX/';

let fontBytes;

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

     // custom fonts 
     const fontfile = path.join(__dirname, "fonts/RedRose-Regular.ttf");
    
     await fs.readFile(fontfile, (error, data) => {
        console.log("fontbytes fetch"); 
        fontBytes = data;
     });
     /// end custom fonts


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

                 //custom fonts
                 pdfDoc.registerFontkit(fontkit);
                 const customFont = await pdfDoc.embedFont(fontBytes);
                 
                 //// end custom fonts
        
                const pages = await pdfDoc.getPages();
                const firstPage = await pages[0]; 
                
                const { width, height } = firstPage.getSize();

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\declaratie_de_participare_sot_sotie.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 230,
                        y: 612,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 93,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 179,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.numar, {
                        x: 305,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 365,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 435,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 484,
                        y: 597,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    
                    firstPage.drawText(formData.apartament, {
                        x: 100,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.judet, {
                        x: 250,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.telefon, {
                        x: 410,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                
                    firstPage.drawText(formData.act_ident, {
                        x: 150,
                        y: 567,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                
                    firstPage.drawText(formData.act_ident_seria, {
                        x: 235,
                        y: 567,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 275,
                        y: 567,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.cnp_nif, {
                        x: 400,
                        y: 567,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 150,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 249,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.calitate, {
                        x: 205,
                        y: 537,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.firma, {
                        x: 370,
                        y: 537,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.nr_ordine_rc, {
                        x: 340,
                        y: 522,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.cui, {
                        x: 100,
                        y: 508,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 380,
                        y: 508,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_strada, {
                        x: 100,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_numar, {
                        x: 225,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 285,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_scara, {
                        x: 345,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_etaj, {
                        x: 395,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 440,
                        y: 493,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_judet, {
                        x: 100,
                        y: 478,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_telefon, {
                        x: 285,
                        y: 478,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_fax, {
                        x: 435,
                        y: 478,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_mail, {
                        x: 140,
                        y: 464,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_web, {
                        x: 305,
                        y: 464,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.data, {
                        x: 130,
                        y: 165,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                } 

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\model_declaratie_pfa_2.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 212,
                        y: 652,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 400,
                        y: 638,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 120,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.numar, {
                        x: 320,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 370,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 420,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 455,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.apartament, {
                        x: 502,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.judet, {
                        x: 150,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_seria, {
                        x: 385,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 420,
                        y: 610,
                        size: 9,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 100,
                        y: 596,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 225,
                        y: 596,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.cnp_nif, {
                        x: 310,
                        y: 596,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.tribunalul, {
                        x: 100,
                        y: 512,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.data, {
                        x: 445,
                        y: 426,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                }   
                
                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\pfa_sediu.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 205,
                        y: 652,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 312,
                        y: 624,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 112,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.numar, {
                        x: 352,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.bloc, {
                        x: 385,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 412,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.etaj, {
                        x: 454,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.apartament, {
                        x: 485,
                        y: 610,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.judet, {
                        x: 160,
                        y: 596,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_seria, {
                        x: 120,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 165,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });


                    firstPage.drawText(formData.eliberat, {
                        x: 300,
                        y: 582,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.eliberat_data, {
                        x: 97,
                        y: 568,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  

                    firstPage.drawText(formData.cnp_nif, {
                        x: 180,
                        y: 568,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  

                    firstPage.drawText(formData.firma, {
                        x: 97,
                        y: 554,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 260,
                        y: 512,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 
  
                    firstPage.drawText(formData.sediu_strada, {
                        x: 97,
                        y: 498,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 
  
                    firstPage.drawText(formData.sediu_numar, {
                        x: 345,
                        y: 498,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 393,
                        y: 498,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_scara, {
                        x: 424,
                        y: 498,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.sediu_etaj, {
                        x: 465,
                        y: 498,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 97,
                        y: 484,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   

                    firstPage.drawText(formData.sediu_judet, {
                        x: 192,
                        y: 484,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   

                    firstPage.drawText(formData.tribunalul, {
                        x: 97,
                        y: 450,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });     

                    firstPage.drawText(formData.data, {
                        x: 170,
                        y: 353,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   
                }    
        
                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\act_constitutiv.pdf") {
                    firstPage.drawText(formData.firma, {
                        x: 255,
                        y: 678,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.subsemnatul, {
                        x: 190,
                        y: 604,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });
   
                    firstPage.drawText(formData.domiciliat, {
                        x: 97,
                        y: 576,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.strada, {
                        x: 315,
                        y: 576,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.numar, {
                        x: 97,
                        y: 562,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 145,
                        y: 562,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.scara, {
                        x: 175,
                        y: 562,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 212,
                        y: 562,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.apartament, {
                        x: 242,
                        y: 562,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.judet, {
                        x: 295,
                        y: 562,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.act_ident_seria, {
                        x: 478,
                        y: 562,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 97,
                        y: 550,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 212,
                        y: 550,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 352,
                        y: 550,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.cnp_nif, {
                        x: 180,
                        y: 538,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.firma, {
                        x: 250,
                        y: 484,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_judet, {
                        x: 430,
                        y: 324,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 97,
                        y: 311,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_strada, {
                        x: 280,
                        y: 311,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_numar, {
                        x: 480,
                        y: 311,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 107,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_scara, {
                        x: 147,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_etaj, {
                        x: 190,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 230,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
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