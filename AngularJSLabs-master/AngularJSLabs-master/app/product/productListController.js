( function(){

	angular.module("productModule").controller("productListController", productListCtrl);
	
	productListCtrl.$Inject=['$scope', 'categoryService','productService'];
	function productListCtrl($scope, categoryService, productService) {
	    console.log("about to get products");
	    productService.getAllProducts().then(function (res) {
	        console.log(res);
	        //products = res.data;
	        console.log(res.data);
	        $scope.products = res.data;
	        //return $scope.products;
	    });
	    console.log("product " + $scope.products);
	    $scope.categories = categoryService.getAllCategories();	
	   // console.log("TEST getProduct " + productService.getProduct(56).productName);
	}
})();