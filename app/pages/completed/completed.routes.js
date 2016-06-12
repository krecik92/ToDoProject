export default function routes($stateProvider) {
  $stateProvider
    .state('completed', {
      url: '/',
      template: require('./completed.html'),
      controller: 'CompletedController',
      controllerAs: 'completed'
    });
}