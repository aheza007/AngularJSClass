
angular.module("sharedModule").service("productService", function ($http) {
    console.log("productService started");
    var products = [];

    var baseUrl = "http://dgtcw-trn-10.corp.dom:3000/api/product";
    
    this.getAllProducts = function () {
        console.log("getAllProducts about to return");
        var p;
        return $http({
            url: baseUrl,
            headers: { "Access-Control-Allow-Origin": '*' }

        });
    }
    this.getFeaturedProducts = function () {
        console.log("getFeaturedProducts about to return");
        var p;
        return $http({
            url: baseUrl + "/featured",
            

        });
    }

    this.getProduct = function (prodID) {

        console.log("getProduct about to return");
        var p;
        return $http({
            url: baseUrl + "/" + prodID
            

        });
        
    };
});