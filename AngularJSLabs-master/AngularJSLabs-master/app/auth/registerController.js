(function (){
//var mod = angular.module("authModule");
angular.module("authModule").controller("registerController",registerCtrl);
registerCtrl.$Inject=['$scope'];

function registerCtrl($scope){

	$scope.register = function(user){
		//console.log("in register method");
		$scope.successMessage = "You are now logged in as " + user.userName;
	};


};

})();