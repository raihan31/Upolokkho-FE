'use strict';

angular.module('myAppApp')
  .factory('Authors', function ($resource,endpoint) {
    return $resource( endpoint+'Authors?$select=Id,Name,Age',{},{
        query: {method: 'Get', isArray: false, header: {Accept: 'application/json;odata=verbose'}}
    });
  });
