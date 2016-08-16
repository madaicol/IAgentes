

applicacion.controller('rutascontroller',['$scope','toastr',function($scope,toastr){

    toastr.info('Info','Bienvenido a Rutas');
    $scope.listaRutas=[
      {idRuta:0, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:1, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:2, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:3, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:4, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:5, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},
      {idRuta:6, clima:"Bueno",trafico:"Moderado",dianoche:"Madrugada"},

    ]

}]);
