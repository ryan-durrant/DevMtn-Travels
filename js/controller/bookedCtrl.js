angular.module('devmtnTravel').controller('bookedCtrl', function($state, $scope, mainSrv){
  console.log($state);

  $scope.selectedObj = $state.params.id;
  var idNum = $scope.selectedObj;
  console.log('Ryan', $scope.selectedObj, idNum);

  //set up a function that loops through the mainSrv.travelInfo and checks to see if the id on $state.params = one of the id's in mainSrv.travelInfo

  $scope.loopThrough = function(id){
    for(var i = 0, len = mainSrv.travelInfo.length; i < len; i++){
      if(mainSrv.travelInfo[i].id == id){
        // console.log(mainSrv.travelInfo[i].image);
        return mainSrv.travelInfo[i];
      }
    }
  };

  $scope.bookedDestination = $scope.loopThrough(idNum);
  // console.log(bookedDestination);
  // $scope.imageURL = $scope.bookedDestination.image;
  // console.log($scope.imageURL);
  // // $scope.styleObj = {
  // //   "background": "url($scope.bookedDestination.image)"
  // // };
});
