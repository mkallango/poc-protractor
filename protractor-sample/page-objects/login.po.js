var aux = require("../scripts/aux-scripts");

class Login {
    constructor() {
        this.username = element(by.id('identifierId'));
        this.password = element(by.css('[name="password"]'));
        this.nextFromEmail = element(by.id('identifierNext')).element(by.css('span.RveJvd.snByac'));    
        this.nextFromPass = element(by.id('passwordNext')).element(by.css('span.RveJvd.snByac'));
    }

    acessaPagina() {
        browser.get('http://www.gmail.com');
    }

    credenciais(user,pass) {
        //Fill email field
        browser
            .wait(aux.isClickable(this.username),10000)
            .then(this.username.sendKeys(user))
            .then(aux.printScreen('test.png'));
        
        //Click Next button
        browser
            .wait(aux.isClickable(this.nextFromEmail),10000)
            .then(this.nextFromEmail.click())
            .then(aux.printScreen('test-click.png'));
        
        //Fill password field
        browser
            .wait(aux.isClickable(this.password),10000)
            .then(this.password.sendKeys(pass))
            .then(aux.printScreen('test-pass.png'));
        
        //Click Next button
        browser
            .wait(aux.isClickable(this.nextFromPass),10000)
            .then(this.nextFromPass.click())
            .then(aux.printScreen('test-click-pass.png'));
    }

    logarNaPagina(){
        this.acessaPagina();
        this.credenciais(browser.params.login.email, browser.params.login.password);
    }
}

module.exports = new Login();