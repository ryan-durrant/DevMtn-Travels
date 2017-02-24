angular.module('devmtnTravel').controller('bookedCtrl', function($state, $scope, mainSrv){
  console.log($state);

  $scope.selectedObj = $state.params.id;

  console.log('Ryan', $scope.selectedObj);

  //set up a function that loops through the mainSrv.travelInfo and checks to see if the id on $state.params = one of the id's in mainSrv.travelInfo
});
