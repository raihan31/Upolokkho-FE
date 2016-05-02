'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope, AuthorsData, BooksData) {
    $scope.Authors = AuthorsData.value;
    console.log($scope.Authors);
    $scope.Books = BooksData.value;
    console.log($scope.Books);
  });
