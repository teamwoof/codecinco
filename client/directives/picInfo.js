angular.module('myApp')
  .directive('picInfo', function($state){
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: '../client/views/picInfo.html',
      link: function(scope, element, attrs){
        // scope.confirm = info.confirm;
        // info.confirm = scope.confirm;
              scope.goToSingleOutfit = function(imageUrl, imageId){
                console.log('imageID', imageId);
                console.log('imageUrl', imageUrl);
                $state.go('singleOutfit', {imageUrl: imageUrl, imageId: imageId});
              };
              scope.confirmDelete = function(choice){
                console.log('something')
                if (choice === 1){
                scope.info.confirm = true;
                } else {
                scope.info.confirm = false;
              }
             };
      }
    };
  });