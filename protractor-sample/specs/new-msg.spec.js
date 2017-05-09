var Login = require('../page-objects/login.po');
var LeftMenu = require('../page-objects/left-menu.po');
var NewMsg = require('../page-objects/new-msg.po');

describe('Validate New Message popup', () => {

  it('should open popup email and validate title', ()=>{
    LeftMenu.abreEscreverEmail();
    NewMsg.validatePopupTitle();
  });

});