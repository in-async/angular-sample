'use strict';
angular
    .module('app.user', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/user', {
                templateUrl: 'angular/user/_user.html',
                controller: 'UserCtrl',
                controllerAs: 'ctrl',
            })
            .when('/user/register', {
                templateUrl: 'angular/user/_register.html',
                controller: 'UserCtrl',
                controllerAs: 'ctrl',
            })
        ;
    }])

    .controller('UserCtrl', [function () {
        var vm = this;

        vm.users = [
            { name: '鹿目まどか', gender: 'Female', age: 14, work:'魔法少女' },
            { name: '暁美ほむら', gender: 'Female', age: 14, work: '魔法少女' },
        ];

        vm.toggleChecked = function (user) {
            user.checked = !user.checked;
        };

        vm.range = function (count) {
            console.log('range');
            return new Array(count);
        };

        vm.create = function (user) {
            console.log(user);
        };
    }])
;
