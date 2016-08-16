applicacion.controller('variablescontroller', ['$scope', 'toastr', '$http', function($scope, toastr, $http) {
    toastr.info('Información', 'Ingreso de variables para simulacion');
    // $stateProvider.state(stateName, stateConfig);

    // var paramClima = ["SOLEADO", "TEMPLADO", "NUBLADO", "LLUVIA", "GRANIZO"];
    // var paramTraf = ["BAJO", "MEDIO", "ALTO"];
    // var paramDN = ["DIA", "NOCHE"];

    $scope.parametroAmbiente = function(idRuta, clima, trafico, dianoche) {
        $scope.idRuta = idRuta;
        $scope.clima = clima;
        $scope.trafico = trafico;
        $scope.dianoche = dianoche;


        var parametroListaAmbiente = null;
        var parametroListaAmbiente2 = null;

        // for (var i = 0; i < 10; i++) {
        parametroListaAmbiente = { //parametroListaAmbiente[i]
            idRuta: $scope.idRuta, //idRuta: i
            clima: $scope.clima,
            trafico: $scope.trafico,
            dianoche: $scope.dianoche
        };
        // }
        //console.log(parametroListaAmbiente);
        $scope.AmbienteImprimir = parametroListaAmbiente;

        // console.log(parametroListaAmbiente.indexOf());

        var x = document.getElementById("idRuta").selectedIndex;
        var y = document.getElementById("idRuta").options;

        var x1 = document.getElementById("clima").selectedIndex;
        var y1 = document.getElementById("clima").options;

        var x2 = document.getElementById("trafico").selectedIndex;
        var y2 = document.getElementById("trafico").options;

        var x3 = document.getElementById("dianoche").selectedIndex;
        var y3 = document.getElementById("dianoche").options;
        // console.log(1+y[x].index);
        parametroListaAmbiente2 = {
            idRuta: 1 + y[x].index, //idRuta: i
            clima: 1 + y1[x1].index,
            trafico: 1 + y2[x2].index,
            dianoche: 1 + y3[x3].index
        }
        console.log(parametroListaAmbiente2);
        $scope.AmbienteImprimir2 = parametroListaAmbiente2;

        $scope.arreglo = [parametroListaAmbiente,parametroListaAmbiente2];
        console.log($scope.arreglo);


    }

    $http({
        method: 'POST',
        url: 'http://localhost:8080/ProyectoFinal/rest/Simulacion',
        data: $scope.arreglo
    }).then(
        function correctoLlamoEntrenadores(respuesta) {
            console.log(respuesta);
            $scope.entrenadores.push(respuesta.data);
        },
        function errorNoLlamoEntrenadores(error) {
            console.log(error);
        });







}]);
