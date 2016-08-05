(function () {

angular.module("mainModule").controller("mainProductController",productControBusiness );
//inject parameters
productControBusiness.$inject=['$scope','productService'];

//our business logic
function productControBusiness ($scope,productService){
	console.log("start mainProductController");
	//console.log($http.getName());//="hdashbd";
	productService.getFeaturedProducts().then(function (res) {
	    console.log(res);
	   
	    console.log(res.data);
	    $scope.topProducts= res.data;
	    
	});
	
};})();