var myApp=angular.module("myApp",[]);
myApp.controller("controller",["$scope","$filter",function($scope,$filter){
	$scope.handle="";
	$scope.characters=6;
}]);