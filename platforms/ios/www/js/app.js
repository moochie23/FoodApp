// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  


    .state('app.fodmap_categories', {
      url: "/fodmap_categories",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_categories.html",
          controller: 'FruitCtrl'
        }
      }
    })
    
  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  
   .state('app.Fruit', {
      url: "/Fruit",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_fruit.html",
          controller: 'FruitCtrl'
        }
      }
    })
    
       .state('app.aaa', {
      url: "/aaa",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_001.html",
          controller: 'aaaCtrl'
        }
      }
    })
       .state('app.bbb', {
      url: "/bbb",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_002.html",
          controller: 'bbbCtrl'
        }
      }
    })

       .state('app.ccc', {
      url: "/ccc",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_003.html",
          controller: 'cccCtrl'
        }
      }
    })
           .state('app.ddd', {
      url: "/ddd",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_004.html",
          controller: 'dddCtrl'
        }
      }
    })
         .state('app.eee', {
      url: "/eee",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_005.html",
          controller: 'eeeCtrl'
        }
      }
    })
       .state('app.fff', {
      url: "/fff",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_006.html",
          controller: 'fffCtrl'
        }
      }
    })

       .state('app.ggg', {
      url: "/ggg",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_007.html",
          controller: 'gggCtrl'
        }
      }
    })
           .state('app.hhh', {
      url: "/hhh",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_008.html",
          controller: 'hhhCtrl'
        }
      }
    })
         .state('app.iii', {
      url: "/iii",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_009.html",
          controller: 'iiiCtrl'
        }
      }
    })
       .state('app.jjj', {
      url: "/jjj",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_010.html",
          controller: 'jjjCtrl'
        }
      }
    })
       .state('app.kkk', {
      url: "/kkk",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_011.html",
          controller: 'kkkCtrl'
        }
      }
    })
           .state('app.lll', {
      url: "/lll",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_012.html",
          controller: 'kkkCtrl'
        }
      }
    })
       .state('app.Vegetable', {
      url: "/Vegetable",
      views: {
        'menuContent': {
          templateUrl: "templates/fodmap_vegetable.html",
          controller: 'VegetableCtrl'
        }
      }
    })
    
  .state('app.single', {
    url: "/Fruit/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/fodmap_categories');
});

