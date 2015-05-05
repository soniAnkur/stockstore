((): void=> {
    'use strict'
    angular.module('ssmainmodule', ['ss.services', 'ss.controllers', 'ngRoute'])
        .config(application.routes.Route.configuration);
   
})(); 
