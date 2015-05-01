module ss.controllers{
    'use strict'
    interface IStockstoreList {
        stockList : Array<any>; 
    }
    class StockstoreList implements IStockstoreList {

        stockList: Array<any>; 

        constructor(private stockstoreService : ss.services.IStockstoreService,providerId : string){
            var vm = this;
            stockstoreService.getStocksByProvider(providerId).then((response: any): void => {
                vm.stockList = response;
            });
        }
    };
    angular.module('ss.controllers').controller('ss.controllers.StockstoreList', StockstoreList);
} 