var application;
(function (application) {
    var routes;
    (function (routes) {
        var Route = (function () {
            function Route() {
            }
            Route.configuration = function ($routeProvider) {
                $routeProvider.when("/BSE", {
                    controller: "ss.controllers.Stockstore",
                    templateUrl: "views/bse-data.html"
                }).when("/NSE", {
                    controller: "ss.controllers.StockstoreList",
                    templateUrl: "views/nse-data.html"
                }).when("/NASDEQ", {
                    controller: "ss.controllers.StockstoreDetail",
                    templateUrl: "views/nasdeq-data.html"
                });
                $routeProvider.otherwise({ redirectTo: "/BSE" });
            };
            Route.$inject = ["$routeProvider"];
            return Route;
        })();
        routes.Route = Route;
    })(routes = application.routes || (application.routes = {}));
})(application || (application = {}));
//# sourceMappingURL=routes.js.map