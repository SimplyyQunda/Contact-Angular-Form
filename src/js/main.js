import angular from 'angular';
import { ContactController } from './controllers/main';




angular
  .module('app', [])
  .controller('ContactController', ContactController);