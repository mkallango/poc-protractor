var Login = require('../page-objects/login.po');

describe('Login into Gmail', function() {
  beforeEach(() => {
    Login.acessaPagina();
  });

  it('should pass with no error', function() {
    Login.credenciais(browser.params.login.email, browser.params.login.password);
  });
});