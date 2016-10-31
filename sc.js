var myApp=angular.module('myApp',[]);
/* $confuse k liye likha ha yeh name ka he part hai.*/
myApp.controller('thecontroller',function($scope){
	/* How to create variable*/
	$scope.name="HAFIZ SYED SHAH HAMZA ALAM";
	$scope.fathername="SYED TANZEER ALAM";
	$scope.misson="You mission is not finished until you can't reached your purpose";
	/* How to create function */
	$scope.getname=function(){
		return "Hamza Shah";
	}
	$scope.getname();
	console.log($scope);
});
