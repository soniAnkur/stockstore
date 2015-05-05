var application;
(function (application) {
    var routes;
    (function (routes) {
        var Route = (function () {
            function Route() {
            }
            Route.configuration = function ($routeProvider) {
                $routeProvider.when("/providers", {
                    controller: "ss.controllers.Stockstore",
                    templateUrl: "views/providers.html"
                });
                $routeProvider.otherwise({ redirectTo: "/providers" });
            };
            Route.$inject = ["$routeProvider"];
            return Route;
        })();
        routes.Route = Route;
    })(routes = application.routes || (application.routes = {}));
})(application || (application = {}));
//# sourceMappingURL=routes.js.map