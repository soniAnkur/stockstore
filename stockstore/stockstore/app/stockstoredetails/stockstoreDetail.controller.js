var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var StockstoreDetail = (function () {
            function StockstoreDetail(stockstoreService, providerId, stockId) {
                this.stockstoreService = stockstoreService;
                var vm = this;
                stockstoreService.getStockDetail(providerId, stockId).then(function (response) {
                    vm.stockDetail = response;
                });
            }
            return StockstoreDetail;
        })();
        ;
        angular.module('ss.controllers').controller('ss.controllers.StockstoreDetail', StockstoreDetail);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstoreDetail.controller.js.map