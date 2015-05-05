module ss.controllers{
    'use strict'
    interface IStockstoreDetail extends ng.IScope {
        stockDetail:any; 
    }
    class StockstoreDetail{

        stockDetail: any; 
        static $inject = ['ss.services.StockstoreService','$scope']

        constructor(private stockstoreService : ss.services.IStockstoreService,$scope:IStockstoreDetail,providerId : string,stockId : string){
          
            $scope.stockDetail ="will have the detail information for each stock."
             //stockstoreService.getStockDetail(providerId,stockId).then((response: any): void => {
            //    $scope.stockDetail = response;
            //});
        }
    };
    angular.module('ss.controllers').controller('ss.controllers.StockstoreDetail', StockstoreDetail);
} 