(function() {
'user strict';

angular.module('MyFirstCalculator',[])
.controller('CalculatorController',function($scope){
  $scope.name="";
  $scope.totalValue=0;

  $scope.dislplayNumeric=function(){
    var totalNameValue=calculatNumericForString($scope.name);
    $scope.totalValue=totalNameValue;
  };

  function calculatNumericForString(string){
    var totalStringValue= 0;
    for (var i=0; i<string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
});

}());
