(function () {
  'use strict';
angular.module("DIApp",[])
.controller("DIController",DIController);

function DIController($scope, $filter, $injector) {
  $scope.name="Hamza shah";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

// console.log($injector.annotate(DIController));
}
function Annoteme(freinds, cousins, relations){
  return "Mehmood Sheikh Ali";
}
console.log(DIController.toString());

})();
