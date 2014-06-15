angular.module("sportsStore")
    .controller("cartSummaryController", function($scope, cart) {
        $scope.length = cart.length;

        $scope.total = cart.total;

        $scope.remove = cart.removeProduct;

        $scope.products = cart.getProducts;
    });