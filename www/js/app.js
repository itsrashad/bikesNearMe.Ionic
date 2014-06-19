/**
 * @class Application
 *
 * Ionic Bikes Near Me App
 *
 * angular.module is a global place for creating, registering and retrieving Angular modules
 * 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
 * the 2nd parameter is an array of 'requires'
 * 'starter.services' is found in services.js
 * 'starter.controllers' is found in controllers.js
 *
 */
angular.module('starter', ['ngCordova', 'ionic', 'google-maps', 'starter.controllers', 'starter.services', 'ngResource'])
/**
 * @class starter.run
 *
 *
 */
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
/**
 * @class starter.config
 *
 * Ionic uses AngularUI Router which uses the concept of states
 * Learn more here: https://github.com/angular-ui/ui-router
 * Set up the various states which the app can be in.
 * Each state's controller can be found in controllers.js
 */
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];


        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'MainCtrl'
                    }
                }
            })

            .state('tab.bikeStations', {
                url: '/bikeStations',
                views: {
                    'tab-bikeStations': {
                        templateUrl: 'templates/tab-bikeStations.html',
                        controller: 'BikesMainCtrl as bikesMain'
                    }
                }
            })
            .state('tab.bikeStation-detail', {
                url: '/bikeStation/:data',
                views: {
                    'tab-bikeStations': {
                        templateUrl: 'templates/bikeStation-detail.html',
                        controller: 'BikeStationDetailCtrl as stationDetail'
                    }
                }
            })
            /* tab.account */
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl as acctCtrl'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });

