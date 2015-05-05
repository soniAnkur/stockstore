var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var Stockstore = (function () {
            function Stockstore(stockstoreService, $scope) {
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                $scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';
                // var vm = this;
                //stockstoreService.getProviders().then((response: ss.services.IStockProvider[]): void=> {
                //    $scope.providersList = response;
                //});
                //$scope.providersList = stockstoreService.getProviders();
            }
            Stockstore.$inject = ['ss.services.StockstoreService', '$scope'];
            return Stockstore;
        })();
        angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstore.controller.js.map