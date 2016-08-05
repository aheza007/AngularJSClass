( function(){

	angular.module("orderingModule").controller("shipAddressController", shipAddressCtrl);
	
	shipAddressCtrl.$Inject=['$scope'];
	function shipAddressCtrl($scope){
		$scope.customer ={
			"companyName":"Bottom-Dollar Markets",
			"contactName": "Elizabeth Lincoln",
			"address": "23 Tsawassen Blvd",
			"city":"Tsawassen",
			"region": "BC",
			"postalCode":"T2F 8M4",
			"country": "Canada"
		};
		
					  
	}	

})();