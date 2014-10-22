'use strict';
angular
    .module('app', [
        'ngRoute',
        'app.user'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/user'});
    }])
;
