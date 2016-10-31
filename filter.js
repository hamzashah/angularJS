var myApp=angular.module("myApp",[]);
myApp.controller("controller",function($log,$filter,$scope){
	
	$scope.name="hafiz syed shah hamza alam";
	$scope.changedname=$filter('uppercase')($scope.name);
	$log.info($scope.name);
	$log.info($scope.changedname);
})