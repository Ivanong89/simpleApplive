app.controller('detailController', ['$scope', 'customerList', '$stateParams', function($scope, customerList, $stateParams) {
let findId = function(find) {
    for (let i= 0; i < customerList.customers.length; i++) {
        if (find == customerList.customers[i].custId) {
            return customerList.customers[i];
        }
    }
};

$scope.customer = findId($stateParams.id);

console.log($scope.customer)

$scope.deleteCust = function() {
    if(confirm("Confirm delete customer?"))
    {customerList.customers.splice($scope.customer.custId, 1, 'deleted');
alert("User Deleted")}
    else
    {return;}
};

}]);
