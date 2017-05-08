# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
 
  config.vm.box = "williamyeh/ubuntu-trusty64-docker"
  # Add forwarded ports
  config.vm.network "forwarded_port", guest: 4444, host: 4444  

  config.vm.synced_folder ".", "/vagrant", disabled: false
  
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end

  # Setup Test env
  config.vm.provision "shell", inline: "apt-get update"  
  
  config.vm.provision :docker
  
  config.vm.provision "shell", privileged: false, inline: 'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -'  
  config.vm.provision "shell", inline: 'apt-get install -y nodejs'
  config.vm.provision "shell", inline: 'npm install -g protractor'
  # config.vm.provision "shell", path: './provision.sh'

  # Install the plugin: vagrant plugin install vagrant-docker-compose
  config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"
  
end