angular.module('myApp')
  .directive('picInfo', function($state){
    return {
      restrict: 'EA',
      scope: {
        info: '='
      },
      templateUrl: '../client/views/picInfo.html',
      link: function(scope, element, attrs){
        // scope.confirm = info.confirm;
        // info.confirm = scope.confirm;
              scope.goToSingleOutfit = function(imageUrl, imageId){
                $state.go('singleOutfit', {imageUrl: imageUrl, imageId: imageId});
              };
              scope.confirmDelete = function(choice){
                scope.info.confirm = choice ? true : false;
             };
             scope.deleteImage = function(imageId, imageName){
              scope.info.remove(scope.info.image_id, scope.info.image_name);
             }
      }
    };
  });