(function () {

    var app = angular.module("myApp");

    app.controller('userDetailsCtrl', function($scope,github,$routeParams,$log) {

        var onUserComplete = function (response) {
            $scope.user = response;
            github.getRepos($scope.user).then(onSuccess);;
            //$http.get($scope.user.repos_url).then(onSuccess);
        }


        var onSuccess = function (response) {
           // $location.hash($scope.username);
            $scope.repos = response;


        }
        $scope.username = $routeParams.username;
        $scope.reposortoder = "name";
        // $http.get("https://api.github.com/users/odetocode").then(onUserComplete);



          //  $http.get("https://api.github.com/users/" +$scope.username ).then(onUserComplete);
        github.getUser($scope.username ).then(onUserComplete);;





    });
}());
