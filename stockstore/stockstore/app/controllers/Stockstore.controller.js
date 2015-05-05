var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var Stockstore = (function () {
            function Stockstore(stockstoreService, $scope) {
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                // var vm = this;
                stockstoreService.getProviders().then(function (response) {
                    $scope.providersList = response;
                });
                //$scope.providersList = stockstoreService.getProviders();
            }
            Stockstore.$inject = ['ss.services.StockstoreService', '$scope'];
            return Stockstore;
        })();
        angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstore.controller.js.map