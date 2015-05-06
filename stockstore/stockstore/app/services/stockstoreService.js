var ss;
(function (ss) {
    var services;
    (function (services) {
        'use strict';
        ;
        ;
        ;
        ;
        var StockStoreService = (function () {
            function StockStoreService($http) {
                this.$http = $http;
                this.$http = $http;
            }
            StockStoreService.prototype.getProviders = function () {
                return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/').then(function (response) {
                    return response.data;
                });
            };
            StockStoreService.prototype.getStocksByProvider = function (providerId) {
                return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/' + providerId + '/stocks').then(function (response) {
                    return response.data;
                });
            };
            StockStoreService.prototype.getStockDetail = function (providerId, stockId) {
                return this.$http.get('/v1/provider/' + providerId + '/stock/' + stockId).then(function (response) {
                    return response.data;
                });
            };
            return StockStoreService;
        })();
        ;
        factory.$inject = ['$http'];
        function factory($http) {
            return new StockStoreService($http);
        }
        angular.module('ss.services').factory('ss.services.StockstoreService', factory);
    })(services = ss.services || (ss.services = {}));
})(ss || (ss = {}));
//# sourceMappingURL=stockstoreService.js.map