module ss.controllers{
    'use strict'
    interface IStockstoreDetail {
        stockDetail:any; 
    }
    class StockstoreDetail implements IStockstoreDetail {

        stockDetail: any; 

        constructor(private stockstoreService : ss.services.IStockstoreService,providerId : string,stockId : string){
            var vm = this;
            stockstoreService.getStockDetail(providerId,stockId).then((response: any): void => {
                vm.stockDetail = response;
            });
        }
    };
    angular.module('ss.controllers').controller('ss.controllers.StockstoreDetail', StockstoreDetail);
} 