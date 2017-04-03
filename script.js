(function () {

    var app = angular.module("myApp");

    app.controller('myCtrl', function($scope,$location,$log) {
        $scope.username = "Angular";



        $scope.search = function () {
            $log.info("Searching for "+$scope.username);
            $location.path("/user/" +$scope.username);

           // $http.get("https://api.github.com/users/" +$scope.username ).then(onUserComplete);
        }




    });
}());
