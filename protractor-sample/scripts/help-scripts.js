var fs = require('fs');
var writeScreenShot = function (data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

var isClickable = function(elem){
  var EC = protractor.ExpectedConditions;     
  return EC.elementToBeClickable(elem);
}

var printScreen = function (filename){
  var path = "./images"
  if ((path+filename).exists()){
    browser.takeScreenshot()
            .then(function(png){
              writeScreenShot(png,"./images/"+filename);
        });
  }
}

module.exports.writeScreenShot = writeScreenShot;
module.exports.isClickable = isClickable;
module.exports.printScreen = printScreen;