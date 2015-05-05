module application.routes {
    export class Route {
        static $inject = ["$routeProvider"];


        static configuration($routeProvider: ng.route.IRouteProvider) {
            $routeProvider

                .when("/providers", {

                controller: "ss.controllers.Stockstore",
                templateUrl: "views/providers.html"
                
                }).when("/providers/:id", {

                controller: "ss.controllers.StockstoreList",
                templateUrl: "views/stock-list.html"

            });
            $routeProvider.otherwise({ redirectTo: "/providers" });
        }

    }
} 