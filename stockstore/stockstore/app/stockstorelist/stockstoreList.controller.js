var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var StockstoreList = (function () {
            function StockstoreList(stockstoreService, $scope) {
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                $scope.dummyData = "my dummy data for the for the list of stocks from perticular provider.";
                $scope.loadData = function (providerId) {
                    stockstoreService.getStocksByProvider(providerId).then(function (response) {
                        $scope.stockList = response;
                    });
                };
            }
            StockstoreList.$inject = ['ss.services.StockstoreService', '$scope'];
            return StockstoreList;
        })();
        angular.module('ss.controllers').controller('ss.controllers.StockstoreList', StockstoreList);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstoreList.controller.js.map