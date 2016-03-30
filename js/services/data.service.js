(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataSvc', DataSvc);

    // serves as a easy way to get and put data into localStorage and
    // should only be consumed from other data services (not controllers)
    function DataSvc() {
        // localStorage key - increment version when data structure changes
        var STORAGE_ID = 'ionExpenseTracker.1.0';

        // sample data to be used if no data exists in localStorage        
        var defaultObj = '{"budget": 0, "categories": [{"id":"29d03fcf-9281-4509-b535-1ac8ffb8fec1", "bgColor": "#66cc33", "cssClass": "balanced", "name": "Food and Drinks", "slug": "food-and-drink"}, {"id":"8c8ab1c1-6a15-4a20-96d4-7473b9f227e4", "bgColor": "#ef4e3a", "cssClass": "assertive", "name": "Health", "slug": "health"}, {"id":"5e3a786e-be5e-47a6-84e1-79eac30e58f5", "bgColor": "#4a87ee", "cssClass": "positive", "name": "Leisure", "slug": "leisure"}, {"id":"ee4c2ae9-f3d2-419a-90da-31c90449a10b", "bgColor": "#f0b840", "cssClass": "energized", "name": "Transportation", "slug": "transportation"}, {"id":"18380e14-c94f-4e01-8bec-e5382b01fc84", "bgColor": "#444", "cssClass": "dark", "name": "Other", "slug": "other"} ], "expenses": [ ] }';

        var svc = {            
            get: get,
            del: del,
            put: put
        };

        return svc;

        // get the whole "Expense Object" from localStorage
        function get() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || defaultObj, function (key, value) {
                // get a real date
                return key === 'date' ? new Date(value) : value;
            });
        }

        // put the whole "Expense Object" in localStorage
        function put(expenseObj) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(expenseObj, function (key, value) {
                // prevent a few properties (computed or from Angular) from being persisted in localStorage
                return key === 'htmlContent' || key === '$$hashKey' || key === 'category' ? undefined : value;
            }));
        }
        
        function del(){
            localStorage.clear();
        }
    }
})();