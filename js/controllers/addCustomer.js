app.controller('addCustomer', ['$scope', 'customerList', function($scope, customerList) {

    $(document).ready(function(){
        $('#date').datepicker({
            format: "yyyy-mm-dd",
            clearBtn: true,
            autoclose: true
        });
      });

    $scope.addCustomer = function() {
       
        if(!$scope.firstName || $scope.firstName === "") {
            alert("All fields required for submission")
                        return;
                    }
            if(!$scope.lastName || $scope.lastName === ""){
                alert("All fields required for submission")
                        return;
                    }
                if(!$scope.country || $scope.country === "") {
                    alert("All fields required for submission")
                        return;
                    }
                    if(!$scope.lastPurchased || $scope.lastPurchased === "") {
                        
                        alert("All fields required for submission")
                        return;
                    }
    
        

        customerList.customers.push({
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            country: $scope.country,
            lastPurchased: $scope.lastPurchased,
            notes: $scope.notes,
            custId: customerList.customers.length
        });

        alert("Customer added");

        $scope.firstName = "";
        $scope.lastName = "";
        $scope.country = "";
        $scope.lastPurchased = "";
        $scope.notes = "";

    };
}]);