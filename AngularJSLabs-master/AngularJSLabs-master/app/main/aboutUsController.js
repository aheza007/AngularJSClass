(function (){
//var mod = angular.module("mainModule");
angular.module("mainModule").controller("abooutUsController",aboutCtrl);
aboutCtrl.$Inject=['$scope'];

function aboutCtrl($scope){
	console.log("start abooutUsController");
	$scope.company={
		name:"US",
		streetAddress:"805 W Moberly Lane",
		phoneNumber:"4796250000",
		city:"Bentonville",
		region:"Arkansas",
		postalCode:"72712"
	};
	$scope.salary=5000;
	$scope.numberOfYear=1;
	$scope.TotalCash=$scope.salary*$scope.numberOfYear;
	console.log($scope.TotalCash);
	$scope.today=new Date();
};
})();