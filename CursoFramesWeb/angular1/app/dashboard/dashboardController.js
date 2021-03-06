(function(){
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$scope',
    '$http',
    DashBoardController
  ])

  function DashBoardController($scope, $http){
    $scope.getSummary = function(){
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response){
        const {credit = 0, debt = 0} = response.data
        $scope.credit = credit;
        $scope.debt = debt;
        $scope.total = credit - debt
      })
    }

    $scope.getSummary()
  }
})()
