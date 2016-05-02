'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ])
  .config(function ($compileProvider, DEBUG_MODE) {
      if (!DEBUG_MODE) {
          $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
      }
  })
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
      if(DEBUG_MODE){
          $translateProvider.useMissingTranslationHandlerLog();
      }
      
      $translateProvider.useStaticFilesLoader({
          prefix: 'i18n/locale-',// path to translations files
          suffix: '.json'// suffix, currently- extension of the translations
      });
      $translateProvider.preferredLanguage(LOCALES.preferredLocale);// is applied on first load
      $translateProvider.useLocalStorage();// saves selected language to localStorage
  })
  .config(function (tmhDynamicLocaleProvider) {
      tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve : {
            AuthorsData: function (Authors, $q) {
                var deferred = $q.defer();
                Authors.query({},function (response) {
                    deferred.resolve(response);
                },function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            BooksData:function (Books, $q) {
                var deferred = $q.defer();
                Books.query({},function (response) {
                    deferred.resolve(response);
                },function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
            }
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      });
  });
