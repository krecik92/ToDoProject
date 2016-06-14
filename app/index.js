import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from "angular-ui-router";

import routing from "./config";

import home from "./pages/home";
import active from "./pages/active";
import completed from "./pages/completed";

const ngModule = angular.module('app', [uirouter, home, active, completed])
                        .config(routing);
