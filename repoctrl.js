/**
 * Created by nutan on 4/3/2017.
 */

(function () {

    var app = angular.module("myApp");
    
    var repoctrl = function ($scope,github,$routeParams) {

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        var onSuccess = function (response) {
            $scope.repo = response;
            console.log("repo : " +$scope.repo.name)
        };

        github.getRepoDetails(username,reponame).then(onSuccess);


        
    }

    app.controller("repoctrl",repoctrl);

})();
