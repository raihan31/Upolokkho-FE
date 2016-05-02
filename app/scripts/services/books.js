'use strict';

angular.module('myAppApp')
    .factory('Books', function ($resource, endpoint) {
        return $resource( endpoint+'Books?$select=Id,Name,Price,Category',{},{
            query: {method: 'Get', isArray: false,header: {Accept: 'application/json;odata=verbose'}}
        });
    });