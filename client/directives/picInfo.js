angular.module('myApp')
  .directive('picInfo', function($state){
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: '../client/views/picInfo.html',
      link: function(scope, element, attrs){
              scope.goToSingleOutfit = function(imageUrl, imageId){
                console.log('imageID', imageId);
                console.log('imageUrl', imageUrl);
                $state.go('singleOutfit', {imageUrl: imageUrl, imageId: imageId});
              };
      }
    };
  });