applicacion.controller('variablescontroller', ['$scope', 'toastr', '$http', function($scope, toastr, $http) {
  toastr.info('Info', 'Entraste a la vista 1');
  // $scope.Clima = "Soleado";
  $scope.variables = {
    agClima: null,
    agTrafico: null,
    agDiaNoche: null
  }

  $scope.agregarNuevaVariable = function() {

  }

}]);
