var Login = require('./login.po');

describe('Login', () => {
    beforeEach(() => {
        Login.acessaPagina();
    });

    it('deve logar com as credenciais corretas', () => {
       Login.credenciais(params.login.email, params.login.password);
       
       Login
        .btnSeguinte
        .click()
        .then(() => {
            expect(browser.getCurrentUrl()).not.toContain('accounts.google.com');
        });

    });
});


