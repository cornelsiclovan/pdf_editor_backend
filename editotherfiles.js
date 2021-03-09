const { PDFDocument, StandardFonts } = require('pdf-lib');
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
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  


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