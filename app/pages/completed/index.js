import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './completed.routes';
import CompletedController from './completed.controller';

export default angular.module('app.completed', [uirouter])
  .config(routing)
  .controller('CompletedController', CompletedController)
.name;