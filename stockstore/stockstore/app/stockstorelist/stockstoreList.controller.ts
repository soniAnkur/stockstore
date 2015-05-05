module ss.controllers{
    'use strict'
    interface IStockstoreList extends ng.IScope {
        stockList: Array<any>;
        dummyData: string; 
        loadData: (providerId) => void;
    }
    class StockstoreList {

        dummyData: string; 
        static $inject = ['ss.services.StockstoreService', '$scope'];
        constructor(private stockstoreService: ss.services.IStockstoreService, private $scope: IStockstoreList) {
            $scope.dummyData = "my dummy data for the for the list of stocks from perticular provider.";
            $scope.loadData = (providerId) => {
                stockstoreService.getStocksByProvider(providerId).then((response: any): void => {
                    $scope.stockList = response;
                });
            }
        }
    }
    angular.module('ss.controllers').controller('ss.controllers.StockstoreList', StockstoreList);
} 
