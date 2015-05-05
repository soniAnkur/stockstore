(function () {
    'use strict';
    angular.module('ssmainmodule').config(config);
    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
//# sourceMappingURL=app.config.module.js.map