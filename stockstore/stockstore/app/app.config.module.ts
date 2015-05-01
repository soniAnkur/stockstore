((): void=>{
    'use strict'
    angular.module('ss').config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider : ng.ILocationProvider): void {
        $locationProvider.html5Mode(true);
    }

})();