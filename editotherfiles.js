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
                        x: 190,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 75,
                        y: 635,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 270,
                        y: 635,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.numar, {
                        x: 470,
                        y: 635,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.bloc, {
                        x: 75,
                        y: 618,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 145,
                        y: 618,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 185,
                        y: 618,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    
                    firstPage.drawText(formData.apartament, {
                        x: 225,
                        y: 618,
                        size: 11, 
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.judet, {
                        x: 325,
                        y: 618,
                        size: 11,
                        font: customFont, 
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.telefon, {
                        x: 74,
                        y: 602,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                 
                    firstPage.drawText(formData.act_ident, {
                        x: 225,
                        y: 602,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                
                    firstPage.drawText(formData.act_ident_seria, {
                        x: 325,
                        y: 602,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.act_ident_numar, {
                        x: 390,
                        y: 602,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.cnp_nif, {
                        x: 75,
                        y: 587,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0), 
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 312,
                        y: 587,
                        size: 11, 
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 93,
                        y: 572,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.calitate, {
                        x: 87,
                        y: 556,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.firma, {
                        x: 270,
                        y: 556,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.nr_ordine_rc, {
                        x: 295,
                        y: 540,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.cui, {
                        x: 75,
                        y: 525,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 75,
                        y: 508,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_strada, {
                        x: 295,
                        y: 508,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_numar, {
                        x: 470,
                        y: 508,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 75,
                        y: 492,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.sediu_scara, {
                        x: 145,
                        y: 492,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_etaj, {
                        x: 205,
                        y: 492,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 260,
                        y: 492,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_judet, {
                        x: 355,
                        y: 492,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.sediu_telefon, {
                        x: 75,
                        y: 476,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_fax, {
                        x: 215,
                        y: 476,
                        size: 9,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_mail, {
                        x: 315,
                        y: 476,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.sediu_web, {
                        x: 75,
                        y: 460,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.data, {
                        x: 101,
                        y: 130,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
                } 

                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\model_declaratie_pfa_2.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 180,
                        y: 694,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 75,
                        y: 664,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 270,
                        y: 664,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.numar, {
                        x: 427,
                        y: 664,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 468,
                        y: 664,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 517,
                        y: 664,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 85,
                        y: 648,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.apartament, {
                        x: 125,
                        y: 648,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.judet, {
                        x: 220,
                        y: 648,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
  
                    firstPage.drawText(formData.act_ident_seria, {
                        x: 95,
                        y: 633,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 132,
                        y: 633,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 285,
                        y: 633,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 75,
                        y: 618,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.cnp_nif, {
                        x: 210,
                        y: 618,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.tribunalul, {
                        x: 80,
                        y: 530,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.data, {
                        x: 450,
                        y: 438,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  
                }   
                
                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\pfa_sediu.pdf") {
                    firstPage.drawText(formData.subsemnatul, {
                        x: 188,
                        y: 695,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.domiciliat, {
                        x: 317,
                        y: 665,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.strada, {
                        x: 75,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  

                    firstPage.drawText(formData.numar, {
                        x: 305,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
  
                    firstPage.drawText(formData.bloc, {
                        x: 360,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.scara, {
                        x: 395,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.etaj, {
                        x: 435,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });    
 
                    firstPage.drawText(formData.apartament, {
                        x: 490,
                        y: 650,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.judet, {
                        x: 130,
                        y: 635,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_seria, {
                        x: 110,
                        y: 620,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 150,
                        y: 620,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
 
                    firstPage.drawText(formData.eliberat, {
                        x: 335,
                        y: 620,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 
      
                    firstPage.drawText(formData.eliberat_data, {
                        x: 140,
                        y: 605,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  

                    firstPage.drawText(formData.cnp_nif, {
                        x: 290,
                        y: 605,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });  
   
                    firstPage.drawText(formData.firma, {
                        x: 155,
                        y: 590,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 330,
                        y: 545,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 
  
                    firstPage.drawText(formData.sediu_strada, {
                        x: 75,
                        y: 530, 
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 
  
                    firstPage.drawText(formData.sediu_numar, {
                        x: 305,
                        y: 530,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    }); 

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 380,
                        y: 530,
                        size: 10, 
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.sediu_scara, {
                        x: 418,
                        y: 530,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });
 
                    firstPage.drawText(formData.sediu_etaj, {
                        x: 465,
                        y: 530,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 75,
                        y: 515,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   

                    firstPage.drawText(formData.sediu_judet, {
                        x: 170,
                        y: 515,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });     

                    firstPage.drawText(formData.tribunalul, {
                        x: 75,
                        y: 478,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });     

                    firstPage.drawText(formData.data, {
                        x: 150,
                        y: 372,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                    });   
                }    
            
                if(file === "MODELE_DOCUMENTE_PDF_DIN_DOCX\\act_constitutiv.pdf") {
                    firstPage.drawText(formData.firma, {
                        x: 200,
                        y: 673,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.subsemnatul, {
                        x: 172,
                        y: 595,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });
   
                    firstPage.drawText(formData.domiciliat, {
                        x: 85,
                        y: 565,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.strada, {
                        x: 310,
                        y: 565,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.numar, {
                        x: 70,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.bloc, {
                        x: 120,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.scara, {
                        x: 155,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.etaj, {
                        x: 190,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.apartament, {
                        x: 227,
                        y: 552,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });
      
                    firstPage.drawText(formData.judet, {
                        x: 290,
                        y: 552,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.act_ident_seria, {
                        x: 70,
                        y: 537,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.act_ident_numar, {
                        x: 120,
                        y: 537,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.eliberat, {
                        x: 288,
                        y: 537,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.eliberat_data, {
                        x: 70,
                        y: 523,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });
  
                    firstPage.drawText(formData.cnp_nif, {
                        x: 430,
                        y: 523,
                        size: 11,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.firma, {
                        x: 230,
                        y: 468,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_judet, {
                        x: 347,
                        y: 311,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_domiciliat, {
                        x: 90,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_strada, {
                        x: 270,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_numar, {
                        x: 514,
                        y: 298,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_bloc, {
                        x: 87,
                        y: 284,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_scara, {
                        x: 137,
                        y: 284,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_etaj, {
                        x: 185,
                        y: 284,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });

                    firstPage.drawText(formData.sediu_apartament, {
                        x: 242,
                        y: 284,
                        size: 10,
                        font: customFont,
                        color: rgb(0, 0 ,0),
                        
                    });
                }

               
   

                fs.writeFile(descriptionFilePath, descriptionString, err => {})

                const pdfBytes = await pdfDoc.save();
            
                fs.writeFileSync( pathWrite, pdfBytes, () => {
                    console.log(pathWrite);   
                    console.log("done"); 
                });       

        });
          
    });
}

exports.editotherfiles = editotherfiles;