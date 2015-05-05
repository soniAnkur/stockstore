((): void=> {
    'use strict'
    angular.module('ssmainmodule', ['ss.services', 'ss.controllers', 'ngRoute'])
        .config(application.routes.Route.configuration);

    angular.module('ssmainmodule').directive('providerDirective', function () {
        return {
            restrict: 'AEC',
            templateUrl: 'views/directive/providerDirective.html'
        }
    });
   
})(); 
