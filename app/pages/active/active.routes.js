export default function routes($stateProvider) {
  $stateProvider
    .state('active', {
      url: '/active',
      template: require('./active.html'),
      controller: 'ActiveController',
      controllerAs: 'active'
    });
}