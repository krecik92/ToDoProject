import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './active.routes';
import ActiveController from './active.controller';

export default angular.module('app.active', [uirouter])
  .config(routing)
  .controller('ActiveController', ActiveController)
.name;