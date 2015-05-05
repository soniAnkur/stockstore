module ss.controllers {
    'use strict'

    interface IStockstore extends ng.IScope{
        providersList: Array<ss.services.IStockProvider>;
    }
    class Stockstore {

        providersList: Array<ss.services.IStockProvider>;
        static $inject = ['ss.services.StockstoreService','$scope'];

        constructor(private stockstoreService: ss.services.IStockstoreService, private $scope: IStockstore) {
           // var vm = this;
            stockstoreService.getProviders().then((response: ss.services.IStockProvider[]): void=> {
                $scope.providersList = response;
            });
            //$scope.providersList = stockstoreService.getProviders();

        }
    }
   
    angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
}

