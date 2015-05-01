var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var Stockstore = (function () {
            function Stockstore(stockstoreService) {
                this.stockstoreService = stockstoreService;
                var vm = this;
                stockstoreService.getProviders().then(function (response) {
                    vm.providersList = response;
                });
            }
            Stockstore.$inject = ['ss.services.StockStoreService'];
            return Stockstore;
        })();
        angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=Stockstore.controller.js.map