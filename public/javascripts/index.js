// angular.module('componentExample').controller('appCtrl',[$scope], function ($scope) {

  angular.module('componentExample',['ngMaterial']).controller('appCtrl', function ($scope) {
                $scope.title = 'Title of the page';
                $scope.obj={
                  'heading':"hello"
                }
                $scope.funcexample=function(){var a=0,b=9;alert("done"+a+b);};

            });
