angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page1.news', {
    url: '/feed',
    views: {
      'tab1': {
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
      }
    }
  })

  .state('page1.chat', {
    url: '/chat',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('page1.proflie', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/proflie.html',
        controller: 'proflieCtrl'
      }
    }
  })

  .state('page1', {
    url: '/cmru',
    templateUrl: 'templates/page1.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('post', {
    url: '/post',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })

  .state('image', {
    url: '/image',
    templateUrl: 'templates/image.html',
    controller: 'imageCtrl'
  })

$urlRouterProvider.otherwise('/cmru/feed')

  

});