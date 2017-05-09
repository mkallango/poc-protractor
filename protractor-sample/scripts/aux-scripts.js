var fs = require('fs');
var path = "./images/";
  
var writeScreenShot = function (data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

var isClickable = function(elem){
  var EC = protractor.ExpectedConditions;     
  return EC.elementToBeClickable(elem);
}

var count = 0;
      
var printScreen = function (filename){
  browser
    .takeScreenshot()
    .then(function(png){
      count++;      
      var formattedNumber = ("0" + count).slice(-2);
      filepath = path+formattedNumber+'-'+filename;
      writeScreenShot(png,filepath);
      console.log(filepath);      
    });
}

module.exports.writeScreenShot = writeScreenShot;
module.exports.isClickable = isClickable;
module.exports.printScreen = printScreen;