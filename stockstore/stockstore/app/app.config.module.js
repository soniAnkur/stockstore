(function () {
    'use strict';
    angular.module('ss').config(config);
    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
//# sourceMappingURL=app.config.module.js.map