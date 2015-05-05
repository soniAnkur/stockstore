module application.routes {
    export class Route {
        static $inject = ["$routeProvider"];


        static configuration($routeProvider: ng.route.IRouteProvider) {
            $routeProvider

                .when("/BSE", {

                controller: "ss.controllers.Stockstore",
                templateUrl: "views/bse-data.html"
                
                })

                .when("/NSE", {

                controller: "ss.controllers.StockstoreList",
                templateUrl: "views/nse-data.html"
              
                })

                .when("/NASDEQ", {

                controller: "ss.controllers.StockstoreDetail",
                templateUrl: "views/nasdeq-data.html"
               
            }) ;
            $routeProvider.otherwise({ redirectTo: "/BSE" })
        }

    }
} 