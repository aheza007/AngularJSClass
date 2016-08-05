(function (){
//var mod = angular.module("authModule");
angular.module("authModule").controller("loginController",loginCtrl);
loginCtrl.$Inject=['$scope'];

function loginCtrl($scope){

	//$scope.user = [];;
	
	$scope.login = function(user){
		$scope.successMessage = "You are now logged in as " + user.userName;
	};

};
	
})();