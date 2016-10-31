var myApp=angular.module("myApp",[]);
myApp.controller("controller",["$scope","$timeout",function($scope,$timeout){

	$scope.name="Hamza Shah";
	$scope.developer="Web developer";

	$timeout(function() {
		$scope.developer=" PHP developer";
	}, 1000);
}])

/*
	INTERPOLATION:
		It means string aur kisi aur cheez ko merge kr k string bnana.
		For example:
			var name="HAFIZ SYED SHAH HAMZA ALAM";
			"My name is" + Name
			Output:
			My name is HAFIZ SYED SHAH HAMZA ALAM
*/
