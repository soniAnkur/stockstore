var ss;
(function (ss) {
    var controllers;
    (function (controllers) {
        'use strict';
        var Stockstore = (function () {
            function Stockstore(stockstoreService, $scope, $http) {
                //$scope.providersList = stockstoreService.getProviders();
                //$scope.$apply();
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                this.$http = $http;
                //$http.jsonp('http://192.168.158.125:5050/QuandlAAS/v1/providers/').success(function (data) {
                //    $scope.providersList = data;
                //});
                stockstoreService.getProviders().then(function (response) {
                    $scope.providersList = response;
                });
            }
            Stockstore.$inject = ['ss.services.StockstoreService', '$scope', '$http'];
            return Stockstore;
        })();
        angular.module('ss.controllers').controller('ss.controllers.Stockstore', Stockstore);
    })(controllers = ss.controllers || (ss.controllers = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstore.controller.js.map