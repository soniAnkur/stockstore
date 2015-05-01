module ss.controllers {
    'use strict'

    interface IStockstore {
        providersList: Array<ss.services.IStockProvider>;
    }
    class Stockstore implements IStockstore {

        providersList: Array<ss.services.IStockProvider>;
        static $inject = ['ss.services.StockStoreService'];
        constructor(private stockstoreService: ss.services.IStockstoreService) {
            var vm = this;
            stockstoreService.getProviders().then((response: ss.services.IStockProvider[]): void=> {
                vm.providersList = response;
            });
        }
    }
    angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
}

