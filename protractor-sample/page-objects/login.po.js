var hs = require("../scripts/help-scripts");

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
            .wait(hs.isClickable(this.username),10000)
            .then(this.username.sendKeys(user))
            .then(hs.printScreen('01-test.png'));
        
        //Click Next button
        browser
            .wait(hs.isClickable(this.nextFromEmail),10000)
            .then(this.nextFromEmail.click())
            .then(hs.printScreen('02-test-click.png'));
        
        //Fill password field
        browser
            .wait(hs.isClickable(this.password),10000)
            .then(this.password.sendKeys(pass))
            .then(hs.printScreen('03-test-pass.png'));
        
        //Click Next button
        browser
            .wait(hs.isClickable(this.nextFromPass),10000)
            .then(this.nextFromPass.click())
            .then(hs.printScreen('04-test-click-pass.png'));
    }

    logarNaPagina(){
        this.acessaPagina();
        this.credenciais(browser.params.login.email, browser.params.login.password);
    }
}

module.exports = new Login();