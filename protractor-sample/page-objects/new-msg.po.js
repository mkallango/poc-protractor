var aux = require("../scripts/aux-scripts");

class NewMsg {
  constructor() {
    this.titleNewMessage = element(by.id(':lh'));
  }

  validatePopupTitle(){    
    browser
      .wait(aux.isClickable(this.titleNewMessage),20000)      
      .then(aux.printScreen('test-write.png'));
  }
}

module.exports = new NewMsg();