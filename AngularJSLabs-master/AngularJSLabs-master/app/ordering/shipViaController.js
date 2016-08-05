( function(){

	angular.module("orderingModule").controller("shipViaController", shipViaCtrl);
	
	shipViaCtrl.$Inject=['$scope'];
	function shipViaCtrl($scope){
		$scope.shipViaOptions=[
			{id:1, name:'Next Day',price:100},
			{id:2, name:'Two Day',price:50},
			{id:3, name:'Ground ',price:0}
		];
		
		
		
					  
	}	

})();