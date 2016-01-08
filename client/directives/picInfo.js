angular.module('myApp')
  .directive('picInfo', function($state){
    return {
      restrict: 'EA',
      scope: {
        info: '='
      },
      templateUrl: '../client/views/picInfo.html',
      link: function(scope, element, attrs){
<<<<<<< HEAD

=======
>>>>>>> master
        // scope.confirm = info.confirm;
        // info.confirm = scope.confirm;
              scope.goToSingleOutfit = function(imageUrl, imageId){
                console.log('imageID', imageId);
                console.log('imageUrl', imageUrl);
                $state.go('singleOutfit', {imageUrl: imageUrl, imageId: imageId});
              };
              scope.confirmDelete = function(choice){
                if (choice === 1){
<<<<<<< HEAD
                scope.info.confirm = true;
                } else {
                scope.info.confirm = false;
              }
=======
                  scope.info.confirm = true;
                } else {
                  scope.info.confirm = false;
                }
>>>>>>> master
             };
             scope.deleteImage = function(imageId, imageName){
              scope.info.remove(scope.info.image_id, scope.info.image_name);
             }
<<<<<<< HEAD

=======
>>>>>>> master
      }
    };
  });