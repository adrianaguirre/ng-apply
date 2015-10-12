/* What happens without an $apply() */

angular.module('myApp', []).controller('MessageController', function ($scope) {

    $scope.getMessage = function () {
        setTimeout(function () {
            $scope.$apply(function () {
                //wrapped this within $apply
                $scope.message = 'Fetched after 1 seconds';
                console.log('message:' + $scope.message);
            });
        }, 500);
    }

    $scope.getMessage();

});