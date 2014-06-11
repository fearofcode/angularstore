angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products/")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
        $scope.data = {};

        $http.defaults.headers.common.Accept = "application/json";

        $http.get(dataUrl)
            .success(function(data) {
                $scope.data.products = data;
            })
            .error(function(error) {
                $scope.data.error = true;
            })
    });