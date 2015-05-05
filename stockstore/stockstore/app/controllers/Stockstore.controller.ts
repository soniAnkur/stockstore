module ss.controllers {
    'use strict'

    interface IStockstore extends ng.IScope{
        providersList: any;
    }
    class Stockstore {

        providersList: Array<ss.services.IStockProvider>;
        static $inject = ['ss.services.StockstoreService','$scope'];

        constructor(private stockstoreService: ss.services.IStockstoreService, private $scope: IStockstore) {

            $scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';

           // var vm = this;
            //stockstoreService.getProviders().then((response: ss.services.IStockProvider[]): void=> {
            //    $scope.providersList = response;
            //});
            //$scope.providersList = stockstoreService.getProviders();

        }
    }
   
    angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
}

