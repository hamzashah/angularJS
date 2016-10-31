var myApp=angular.module("myApp",[]);
myApp.controller("thecontroller",function($log,$scope){
	$log.log($scope);
	$log.info("Your new section will be started on next month");
	$log.warn("Please be serious on Education");
	$log.error("Typing mistake");
	$log.debug("Hello");
})