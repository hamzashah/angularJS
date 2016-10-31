var myApp=angular.module("myApp",[]);
myApp.controller("controller",["$scope","$filter",function($scope,$filter) {
		$scope.catch="";
	$scope.$watch('catch',function(newValue,oldValue)
		{
			console.log("Typing");
			console.log("New: " + newValue);
			console.log("Old: " + oldValue);
		}
	);

	setTimeout(function(){
		$scope.$apply(function(){
			$scope.catch="New things";
			console.log("New things has been changed successfully");
	});
	},3000);	
}]);

/* 
	Automatic:
	AngularJS apne sath he aik watcher add kr de tha ha or 
	us k change hone pe digest loop run kr tha ha or wo kaam kr tha ha
*/