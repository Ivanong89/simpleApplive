app.controller('editController', ['$scope', 'customerList', function($scope, customerList) {
    $scope.customers = customerList.customers
    }]);
