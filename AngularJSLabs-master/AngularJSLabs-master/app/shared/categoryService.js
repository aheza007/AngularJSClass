﻿(function () {
    console.log("sharedModule not yet started");
    angular.module("sharedModule").service("categoryService", function () {
        console.log("sharedModule started");
        this.getAllCategories = function () {
            console.log("getAllCategories about to retun");
            return [
			  {
			      "categoryID": 2,
			      "categoryName": "Condiments",
			      "description": "Sweet and savory sauces, relishes, spreads, and seasonings"
			  },
			  {
			      "categoryID": 4,
			      "categoryName": "Dairy Products",
			      "description": "Cheeses"
			  },
			  {
			      "categoryID": 1,
			      "categoryName": "Beverages",
			      "description": "Soft drinks, coffees, teas, beers, and ales"
			  },
			  {
			      "categoryID": 5,
			      "categoryName": "Grains/Cereals",
			      "description": "Breads, crackers, pasta, and cereal"
			  },
			  {
			      "categoryID": 7,
			      "categoryName": "Produce",
			      "description": "Dried fruit and bean curd"
			  },
			  {
			      "categoryID": 6,
			      "categoryName": "Meat/Poultry",
			      "description": "Prepared meats"
			  },
			  {
			      "categoryID": 8,
			      "categoryName": "Seafood",
			      "description": "Seaweed and fish"
			  },
			  {
			      "categoryID": 3,
			      "categoryName": "Confections",
			      "description": "Desserts, candies, and sweet breads"
			  }
            ];
        };

    });






})();