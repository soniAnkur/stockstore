module ss.controllers {
    'use strict'

    interface IStockstore extends ng.IScope{
        providersList: any;
    }
    class Stockstore {

        providersList: Array<ss.services.IStockProvider>;
        static $inject = ['ss.services.StockstoreService','$scope','$http'];

        constructor(private stockstoreService: ss.services.IStockstoreService, private $scope: IStockstore, private $http: ng.IHttpService) {

            //$scope.providersList = stockstoreService.getProviders();
            //$scope.$apply();

            //$http.jsonp('http://192.168.158.125:5050/QuandlAAS/v1/providers/').success(function (data) {
            //    $scope.providersList = data;
            //});

            stockstoreService.getProviders().then((response: any): void=> {
                $scope.providersList = response;
            });
            
        }
    }
   
    angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
}

