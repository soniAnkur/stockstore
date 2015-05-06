module ss.controllers{
    'use strict'
    interface IStockstoreList extends ng.IScope {
        stockList: any;
       
        
    }

    interface RouteParamConfig extends ng.route.IRouteParamsService {
        id: string;
    }

    class StockstoreList {

        dummyData: string; 
        static $inject = ['ss.services.StockstoreService', '$scope','$routeParams'];
        constructor(private stockstoreService: ss.services.IStockstoreService, private $scope: IStockstoreList, $routeParams: RouteParamConfig) {
            $scope.stockList = stockstoreService.getStocksByProvider($routeParams.id).then((response: any): void => {
                return response;
            });
                
           
           
        }
    }
    angular.module('ss.controllers').controller('ss.controllers.StockstoreList', StockstoreList);
} 
