var aux = require("../scripts/aux-scripts");

class LeftMenu {
  constructor() {
    this.btnEscrever = element(by.css('.z0 > .T-I.J-J5-Ji.T-I-KE.L3'));
  }

  abreEscreverEmail(){
    browser
      .wait(aux.isClickable(this.btnEscrever),20000)
      .then(aux.printScreen('test-logged.png'))
      .then(this.btnEscrever.click());
  }
}

module.exports = new LeftMenu();