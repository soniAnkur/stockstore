var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var StockstoreList = (function () {
            function StockstoreList(stockstoreService, providerId) {
                this.stockstoreService = stockstoreService;
                var vm = this;
                stockstoreService.getStocksByProvider(providerId).then(function (response) {
                    vm.stockList = response;
                });
            }
            return StockstoreList;
        })();
        ;
        angular.module('ss.controllers').controller('ss.controllers.StockstoreList', StockstoreList);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstoreList.controller.js.map