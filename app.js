/**
 * Created by nutan on 4/2/2017.
 */
(function () {


    var app = angular.module('myApp', ["ngRoute"]);
    app.config(function ($routeProvider) {

        $routeProvider
            .when("/main",{
            templateUrl : "main.html",
            controller : "myCtrl"
        })
            .when("/user/:username",{
                templateUrl : "userDetails.html",
                controller : "userDetailsCtrl"
            })
            .when("/repo/:username/:reponame",{
                templateUrl : "repo.html",
                controller : "repoctrl"
            })
            .otherwise({redirectTo:"/main"});

    });
    
}())