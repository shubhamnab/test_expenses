(function () {
    'use strict';

    angular
        .module('app')
        .controller('delete', Delete);

    function Delete($scope, $state, BudgetSvc,ExpenseSvc) {
        // get data from localStorage
        // NOTE: we use an object because of the problem outlined 
        //       in http://codetunnel.com/angularjs-controller-as-or-scope/
       // $scope.data = {
       //     budget: BudgetSvc.getBudget()
       // };

        // method to update the budget      
       

        // method to cancel (i.e. navigate to the dashboard)
       
        
        $scope.delete= function (){
            $scope.expenses = ExpenseSvc.deleteTotal();
            alert("Deleted successfully");
        };
         $scope.cancel = function () {
            $state.go('app.overview');
        };
    }
})();