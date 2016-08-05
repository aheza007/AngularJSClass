(function () {
    angular.module("productModule").controller("productDetailController", prodDetailCtrl);
    prodDetailCtrl.$Inject = ['$scope', 'productService', 'cartFactory'];
    function prodDetailCtrl($scope, productService, cartFactory) {

        productService.getProduct(20).then(function (resp) {
            console.log("getProduct by Id service returned");
            $scope.product = resp.data;
        });

        $scope.addToCart = function(product, quantity) {
            console.log(product);
            cartFactory.addTocart(product, quantity);
        }

    }
})();