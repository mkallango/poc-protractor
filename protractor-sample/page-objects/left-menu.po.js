var hs = require("../scripts/help-scripts");

class LeftMenu {
  constructor() {
    this.btnEscrever = element(by.css('.z0 > .T-I.J-J5-Ji.T-I-KE.L3'));
    this.titleNewMessage = element(by.id(':lh'));
  }

  abreEscreverEmail(){
    browser
      .wait(hs.isClickable(this.btnEscrever),20000)
      .then(hs.printScreen('05-test-logged.png'))
      .then(this.btnEscrever.click());

    browser
      .wait(hs.isClickable(this.titleNewMessage),20000)      
      .then(hs.printScreen('06-test-write.png'));
  }
}

module.exports = new LeftMenu();