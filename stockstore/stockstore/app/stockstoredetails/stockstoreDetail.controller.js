var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var StockstoreDetail = (function () {
            function StockstoreDetail(stockstoreService, $scope, providerId, stockId) {
                this.stockstoreService = stockstoreService;
                $scope.stockDetail = "will have the detail information for each stock.";
                //stockstoreService.getStockDetail(providerId,stockId).then((response: any): void => {
                //    $scope.stockDetail = response;
                //});
            }
            StockstoreDetail.$inject = ['ss.services.StockstoreService', '$scope'];
            return StockstoreDetail;
        })();
        ;
        angular.module('ss.controllers').controller('ss.controllers.StockstoreDetail', StockstoreDetail);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstoreDetail.controller.js.map