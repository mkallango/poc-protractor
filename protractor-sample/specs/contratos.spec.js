var PDFJS = require('../node_modules/pdfjs/build/pdf.js')

describe('Validação de contratos', function() {
  it('deve retornar o pdf como texto', function() {
    
    // If absolute URL from the remote server is provided, configure the CORS
// header on that server.
    var url = './data/pdf/Contrato2017900083.pdf';

    // The workerSrc property shall be specified.
    PDFJS.workerSrc = '../node_modules/pdfjs/build/pdf.worker.js';
    
    console.log("URL: "+url);
    console.log(PDFJS.getDocument(url));
    
    PDFJS.getDocument(url).then(function (pdf) {
        var pdfDocument = pdf;
        var pagesPromises = [];

        for (var i = 0; i < pdf.pdfInfo.numPages; i++) {
            // Required to prevent that i is always the total of pages
            (function (pageNumber) {
                pagesPromises.push(getPageText(pageNumber, pdfDocument));
            })(i + 1);
        }

        Promise.all(pagesPromises).then(function (pagesText) {
            // Remove loading
            $("#loading-info").remove();
            
            // Render text
            for(var i = 0;i < pagesText.length;i++){
              $("#pdf-text").append("<div><h3>Page "+ (i + 1) +"</h3><p>"+pagesText[i]+"</p><br></div>")
            }
        });

    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });


    /**
     * Retrieves the text of a specif page within a PDF Document obtained through pdf.js 
     * 
     * @param {Integer} pageNum Specifies the number of the page 
     * @param {PDFDocument} PDFDocumentInstance The PDF document obtained 
     **/
    function getPageText(pageNum, PDFDocumentInstance) {
        // Return a Promise that is solved once the text of the page is retrieven
        return new Promise(function (resolve, reject) {
            PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
                // The main trick to obtain the text of the PDF page, use the getTextContent method
                pdfPage.getTextContent().then(function (textContent) {
                    var textItems = textContent.items;
                    var finalString = "";

                    // Concatenate the string of the item to the final string
                    for (var i = 0; i < textItems.length; i++) {
                        var item = textItems[i];

                        finalString += item.str + " ";
                    }

                    // Solve promise with the text retrieven from the page
                    resolve(finalString);
                });
            });
        });
    }

    // var pdfreader = require('pdfreader');

    // new pdfreader.PdfReader().parseFileItems('./data/pdf/Contrato2017900083.pdf', function(err, item){
    //   if (err)
    //     console.error("ERROR1 \n"+err);
    //   else if (!item)
    //     console.error('null item');
    //   else if (item.file) {
    //     console.log("file =", item.file.path);
    //     console.log("filetext =", item.file.text);
    //   }
    //   else if (item.page)
    //     console.log("page =", item.page);
    //   else if (item.x)
    //     console.log([item.x, item.y, item.oc, item.A, Math.floor(item.w), item.text].join("\t"));
    //   else
    //     console.warn(item);
  });
});