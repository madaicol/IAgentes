applicacion.controller('variablescontroller', ['$scope', 'toastr', '$http', function($scope, toastr, $http) {
    toastr.info('Info', 'Entraste a la vista 1');
    // $scope.Clima = "Soleado";
    $scope.parametroAmbiente = {
        agClima: null,
        agTrafico: null,
        agDiaNoche: null,
        agIdAgente: null
    }

    var paramPeaton_Auto_Baches_IdAgente = ["ALTO", "MEDIO", "BAJO"];
    var paramSenalesTransito = ["NULO", "MINIMO", "NORMAL", "ALTO", ];
    var prueba = ["", "", "", "", "", "", "", "", "", "", ];

    for (var i = 0; i < 10; i++) {
        prueba[i] = [paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],paramSenalesTransito[Math.floor(Math.random() * 4)]];
    }
    console.log(prueba);


    $scope.parametroRuta = {
        agPeaton: paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],
        agAuto: paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],
        agBaches: paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],
        agIdAgente: paramPeaton_Auto_Baches_IdAgente[Math.floor(Math.random() * 3)],
        agSenalesTransito: paramSenalesTransito[Math.floor(Math.random() * 4)]
    }

    $scope.agregarNuevaVariable = function() {

    }

}]);
