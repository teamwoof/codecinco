'use strict';

angular.module('myApp')
  .controller('SingleOutfitCtrl', ['$scope', '$stateParams', 'Register', function($scope, $stateParams, Register) {
    $scope.singleImageUrl = 'client/uploads/' + $stateParams.imageUrl;
    $scope.comments = [];
    $scope.getComments = function(){

    	Register.register.fetchComments($stateParams.imageId)
    	.then(function(data){
    		$scope.comments = data.result;
            console.log('$scope.comments: ', $scope.comments[0]);
            // if($scope.comments.message)
    	})

    };	
    $scope.getComments();
  }]);
