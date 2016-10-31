var myApp=angular.module("myApp",[]);
myApp.controller("thecontroller",["$log","$scope",function($scope,$log){
	console.log($scope)
}])

/* 
	minifier variable k name ko change kr rha hai.
	minifier string ko change ni kar tha.
	function k parameter main $scope,$log as a variable kr k kaam kr rhe hain.
	fucntion se phele $scope,$log as a service/dependency injection work kr rhe hain.

*/