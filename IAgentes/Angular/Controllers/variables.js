applicacion.controller('variablescontroller', ['$scope', 'toastr', '$http', function($scope, toastr, $http) {
    toastr.info('Información', 'Ingreso de variables para simulacion');
    // $stateProvider.state(stateName, stateConfig);

    // var paramClima = ["SOLEADO", "TEMPLADO", "NUBLADO", "LLUVIA", "GRANIZO"];
    // var paramTraf = ["BAJO", "MEDIO", "ALTO"];
    // var paramDN = ["DIA", "NOCHE"];

    $scope.parametroAmbiente = function(clima, trafico, dianoche) {

        $scope.clima = clima;
        $scope.trafico = trafico;
        $scope.dianoche = dianoche;


        var parametroListaAmbiente = ["", "", "", "", "", "", "", "", "", ""];

        for (var i = 0; i < 10; i++) {
            parametroListaAmbiente[i] = {
                idRuta: i,
                clima: $scope.clima,
                trafico: $scope.trafico,
                dianoche: $scope.dianoche
            };
        }
        console.log(parametroListaAmbiente);
        $scope.AmbienteImprimir = parametroListaAmbiente;

    }

      $http({
          method: 'POST',
          url: 'http://localhost:8080/ProyectoFinal/rest/Simulacion',
          data:$scope.AmbienteImprimir          
      }).then(
          function correctoLlamoEntrenadores(respuesta) {
              console.log(respuesta);
              $scope.entrenadores.push(respuesta.data);
          },
          function errorNoLlamoEntrenadores(error) {
              console.log(error);
          });







}]);
