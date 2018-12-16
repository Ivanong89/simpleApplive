app.controller('indexController', ['$scope', 'customerList', function($scope, customerList) {
$scope.customers = customerList.customers
}]);