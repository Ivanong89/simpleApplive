app.controller('editDetailController', ['$scope', 'customerList', '$stateParams', function($scope, customerList, $stateParams) {
    
    $(document).ready(function(){
        $('#date').datepicker({
            format: "yyyy-mm-dd",
            clearBtn: true,
            autoclose: true
        });
      });
    
    let findId = function(find) {
        for (let i= 0; i < customerList.customers.length; i++) {
            if (find == customerList.customers[i].custId) {
                return customerList.customers[i];
            }
        }
    };
    
    $scope.customer = findId($stateParams.id);


$scope.editCustomer = function() {
    
    let addCustomer = { 
    firstName: $scope.customer.firstName,
    lastName: $scope.customer.lastName,
    country: $scope.customer.country,
    lastPurchased: $scope.customer.lastPurchased,
    notes: $scope.customer.notes,
    custId: $scope.customer.custId};

customerList.customers.splice($scope.customer.custId, 1, addCustomer);
alert("Customer Detail Upated");
};

$scope.deleteCust = function() {
    if(confirm("Confirm delete customer?"))
    customerList.customers.splice($scope.customer.custId, 1, 'deleted');
alert("User Deleted")
};

}]);