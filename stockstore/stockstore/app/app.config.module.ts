((): void=>{
    'use strict'
    angular.module('ssmainmodule').config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider : ng.ILocationProvider): void {
        $locationProvider.html5Mode(true);
    }
})();