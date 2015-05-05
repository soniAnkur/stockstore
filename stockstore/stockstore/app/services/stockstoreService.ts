module ss.services {
    'use strict'
    export interface IStockstoreService {

        getProviders(): ng.IPromise<Array<IStockProvider>>;
      
        getStocksByProvider(providerId: string): ng.IPromise<any>;
        getStockDetail(providerId: string, stockId: string): ng.IPromise<any>;

    };
    export interface IStockProvider {

        source_code: string;
        source_id: string;

       };
    export interface IStock {

        id: string;
        name: string;
        code: string;
        description: string;

    };
    export interface IstockDetail {

        id: string;
        map: Map<string, string>;

    };

    class StockStoreService implements IStockstoreService {

        constructor(private $http: ng.IHttpService) {
            this.$http = $http;
        }


        getProviders(): ng.IPromise<Array<any>> {

            return this.$http.get('http://192.168.158.125:5050/QuandlAAS/v1/providers/').then((response: ng.IHttpPromiseCallbackArg<IStockProvider[]>): IStockProvider[]=> {

               return response.data;
            });
        }
        getStocksByProvider(providerId: string): ng.IPromise<Array<IStock>> {
            return this.$http.get('/v1/provider/' + providerId).then((response: ng.IHttpPromiseCallbackArg<any>): any=> {
                return response.data;
            });
        }
        getStockDetail(providerId: string, stockId: string): ng.IPromise<IstockDetail> {
            return this.$http.get('/v1/provider/' + providerId + '/stock/' + stockId).then((response: ng.IHttpPromiseCallbackArg<any>): any=> {
                return response.data;
            });
        }


    };

    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IStockstoreService {
        return new StockStoreService($http);
    }
    
    angular.module('ss.services').factory('ss.services.StockstoreService', factory);

}