module.exports = {
  params: {
    login: {
      email: 'default',
      password: 'default'
    }
  },
  config: {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*.spec.js'],

    onPrepare: function(){
      browser.ignoreSynchronization = true;
    }
  }
};