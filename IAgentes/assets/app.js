


var applicacion = angular.module('artificial', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {

    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/portada");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('variables', {
            url: "/variables",
            templateUrl: "Angular/Rutas/variables.html",
            controller: 'variablescontroller'
        })
        .state('rutas', {
            url: "/rutas",
            templateUrl: "Angular/Rutas/rutas.html",
            controller: 'rutascontroller'
        })
        .state('portada', {
            url: "/portada",
            templateUrl: "Angular/Rutas/portada.html",
            controller: 'portadacontroller'
        });


});
