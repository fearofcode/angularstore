angular.module("cart", [])
    .factory("cart", function() {
        var cartData = [];

        return {
            addProduct: function(id, name, price) {
                var exists = false;

                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id == id) {
                        cartData[i].count++;
                        exists=true;
                        break;
                    }
                }

                if(!exists) {
                    cartData.push({count: 1, id: id, name: name, price: price})
                }
            },

            removeProduct: function(id) {
                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id == id) {
                        cartData.splice(i,1);
                        break;
                    }
                }
            },

            total: function() {
                var total = 0;

                for(var i = 0; i < cartData.length; i++){
                    total += cartData[i].price*cartData[i].count;
                }

                return total;
            },

            itemCount: function() {
                var total = 0;

                for(var i = 0; i < cartData.length; i++){
                    total += cartData[i].count;
                }

                return total;
            },

            getProducts: function() {
                return cartData;
            },

            length: function() {
                return cartData.length;
            }
        }
    })
    .directive("cartSummary", function(cart) {
        return {
            restrict: "E",
            templateUrl: "js/components/cart/cartSummary.html",
            controller: function($scope) {
                $scope.total = cart.total;

                $scope.itemCount = cart.itemCount;

            }
        }
    });