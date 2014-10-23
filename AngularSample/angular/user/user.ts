/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />

'use strict';
angular
    .module('app.user', ['ngRoute', 'ngResource'])

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

    .controller('UserCtrl', ['$resource', function ($resource) {
        var vm = this;

        var fb = new Firebase('https://angularsample2014.firebaseio.com/users/');
        fb.on('child_added', function (snapshot:IFirebaseDataSnapshot) {
            vm.users.push(snapshot.val());
        });
        vm.users = [
            { name: '鹿目まどか', gender: 'Female', age: 14, work: '魔法少女' },
            { name: '暁美ほむら', gender: 'Female', age: 14, work: '魔法少女' },
        ];

        vm.toggleChecked = function (user) {
            user.checked = !user.checked;
        };

        vm.range = function (count) {
            console.log('range');
            return new Array(count);
        };

        //var api = $resource('http://localhost:54176/', {}, {
        //    'save': {
        //        method: 'POST',
        //    }
        //});
        vm.create = function (user) {
            var userRef = fb.push(user);


        };
        vm.update = function (user) {
            fb.child
            fb.update(user);
        };
        vm.delete = function (user) {
            fb.remove(
        };
    }])
;
 