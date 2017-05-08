var Login = require('./page-objects/login.po');
var LeftMenu = require('./page-objects/left-menu.po');

describe('Login into Gmail', function() {
  beforeEach(() => {
    Login.acessaPagina();
  });

  it('should pass correct', function() {
    Login.credenciais(browser.params.login.email, browser.params.login.password);
  });

  it('should open popup to write an Email', function(){
    LeftMenu.abreEscreverEmail();
  });

});