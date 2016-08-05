( function(){

	angular.module("orderingModule").controller("checkoutController", checkoutCtrl);
	
	checkoutCtrl.$Inject=['$scope'];
	function checkoutCtrl($scope){
		$scope.cart=[
						{
						  "product":  {
							"productID" : 12,
							"productName" : "Another fake product",
							"supplierID" : 8,
							"categoryID" : 3,
							"quantityPerUnit" : "Box of 12",
							"unitPrice" : 11.23,
							"unitsInStock" : 40,
							"unitsOnOrder" : 0,
							"reorderLevel" : 0,
							"discontinued" : 0,
							"featured" : true
						  },
						  "quantity": 4
						},
						{
						  "product":  {
							"productID" : 25,
							"productName" : "A fourth fake product",
							"supplierID" : 8,
							"categoryID" : 4,
							"quantityPerUnit" : "Box of 12",
							"unitPrice" : 81.34,
							"unitsInStock" : 40,
							"unitsOnOrder" : 0,
							"reorderLevel" : 0,
							"discontinued" : 0,
							"featured" : true
						  },
						  "quantity": 2
						},
						{
						  "product":  {
							"productID" : 55,
							"productName" : "This hardcoded product",
							"supplierID" : 8,
							"categoryID" : 4,
							"quantityPerUnit" : "A plethora",
							"unitPrice" : 44.25,
							"unitsInStock" : 40,
							"unitsOnOrder" : 0,
							"reorderLevel" : 0,
							"discontinued" : 0,
							"featured" : true
						  },
						  "quantity": 2
						}
					  ];
					  
			$scope.cartTotal=  getCartTotal($scope.cart);
			$scope.trash = [];
			$scope.$watch('cart', function(){
				$scope.cartTotal=getCartTotal($scope.cart);
			},true);
			
			$scope.removeFromCart = function (product) {
				//$scope.cart[c].
				var index = $scope.indexOf(product);
				if (index > -1) {
					$scope.cart.splice(index, 1);
					$scope.trash.push(product);
				}
			};
			
			$scope.processOrder = function(){
				for (var c in $scope.cart){
					console.log ($scope.cart[c]);
					$scope.removeFromCart($scope.cart[c]);
				};
			};
					  
	}
	function getCartTotal(cart){
				var sum=0;
				//console.log(cart);
				var crt;
				for ( crt in cart){
					var c=cart[crt];
					//console.log(cart[crt].quantity);
					sum+=c.quantity*c.product.unitPrice;
				}
				
				return sum;
			};	
	
	

})();