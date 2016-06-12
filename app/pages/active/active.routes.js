export default function routes($stateProvider) {
  $stateProvider
    .state('active', {
      url: '/',
      template: require('./active.html'),
      controller: 'ActiveController',
      controllerAs: 'active'
    });
}