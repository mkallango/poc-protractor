# poc-protractor
Basic script to log into GMail using Protractor Framework.

## Requirements:
* [Vagrant](https://www.vagrantup.com/) installed to start selenium-grid.
* [Protractor](http://www.protractortest.org/#/) installed.

## Starting Vagrant
``
  vagrant up
`` 

## Run automation:
``
  protractor conf.js --params.login.email=[email] --params.login.password=[pass]
``
