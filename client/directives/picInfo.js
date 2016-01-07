angular.module('myApp')
  .directive('picInfo', function($state){
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: '../client/views/picInfo.html',
      link: function(scope, element, attrs){
            // console.log('client/uploads/' + scope.info.image_name);

            // nude.load(scope.info.image_name);
            // nude.scan(function(result){
            //   if(!result) console.log('Not nude!!'); 
            //   else console.log('Nude!!');
            // });

            scope.goToSingleOutfit = function(imageUrl){
              $state.go('singleOutfit', {imageUrl: imageUrl});
            };
            element.bind('load', function() {

              alert('image is loaded');
          });
      }
    };
  });