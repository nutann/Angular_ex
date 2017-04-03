/**
 * Created by nutan on 4/3/2017
 */
 
(function () {

    var github =function ($http) {
        var getUser = function (username) {
            return   $http.get("https://api.github.com/users/" +username )
                .then(function (response) {
                   return response.data;
                });
        };

        var getRepos = function (user) {

            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });

        };
        
        var getRepoDetails = function (username,repo) {
            var repo;
            var repourl = "https://api.github.com/repos/"+username +"/"+repo;

            return $http.get(repourl)
                .then(function (response) {
                repo = response.data;
                return response.data;
               // $http.get(repourl +"/collaborators");
             });
                // .then(function (response) {
            //     //repo.collaborators = response.data;
            //     return repo;
            // })
            
        };


        return {
            getUser : getUser,
            getRepos : getRepos,
            getRepoDetails : getRepoDetails

        };

    }

    var app = angular.module("myApp");
    app.factory("github",github);
    

    
})();
