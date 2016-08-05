angular.module("sharedModule").factory("cartFactory", function ($http) {

    return {
        cart: [],
        addTocart: function (product, quantity) {
            console.log("addTocart added product: "+product+" quantity"+quantity+ " - cartFactory");
        },
        removeFromCart: function (product) {
            console.log("removeFromCart is called - cartFactory");
        },
        getCartTotal: function () {
            console.log("getCartTotal is called - cartFactory");
        }
    };
});