'use strict';

angular.module('myApp')
  .controller('ClosetCtrl', ['$scope','$http', '$window','$state','Register', 'Authorization', function($scope,$http,$window,$state, Register, Authorization) {
    $scope.header = 'You will find your closet here';
    $scope.username = $window.localStorage.getItem('username');
    $scope.search = "-1";
    $scope.confirm = false;

    $scope.getCloset = function(){

      //Call the factory method which gets a users images and votes for those images
      Register.register.getCloset($scope.username)
      .then(function(data){
        /*************this needs to be moved into the factory******************/
        $scope.pics = data.pics;  //data.pics is an array of the users images
        //for each picture, we have an inner for loop that checks every vote to see if it belongs to the current picture
        for(var j = 0; j<data.pics.length; j++){
          $scope.pics[j].total = 0; //total number of votes
          $scope.pics[j].stars = 0; //total number of 'up' votes
          $scope.pics[j].confirm = false;
          $scope.pics[j].remove = $scope.removeImage;
          $scope.pics[j].test = $scope.test;

            //loop through every vote that belongs to one of the user's pictures
            for(var i = 0; i<data.votes.length; i++){
              var row = data.votes[i]; //data.votes is an array of objects, so this grabs the individual object
              var rating = row["rating"]; //value is either a 1 for 'up' or 0 for 'down' vote
              console.log('rating', rating);
              var imageName = row["image_name"];
              if($scope.pics[j].image_name === imageName){
                // if(vote === 1){
                //   $scope.pics[j].yes += 1;
                //   $scope.pics[j].total += 1;
                // }
                // else{
                //   $scope.pics[j].total += 1;
                // }
                $scope.pics[j].stars += rating;
                $scope.pics[j].total += 1;
                $scope.pics[j].rating = $scope.pics[j].stars / $scope.pics[j].total;
            }
          }//end first for loop
        }
        /*************this needs to be moved into the factory******************/
      }); //end .then
    };

  $scope.test = function(){
    console.log('test');
  }
  $scope.removeImage = function(imageId, imageName){
    console.log('removing');
    Register.register.removeImage(imageId, imageName)
    .then(function(data){
      console.log(data);
      $scope.reloadPage();
    })

  };

  $scope.customPicTypeFilter = function (pic) {
    if (pic.type_id === parseInt($scope.search)) {
      return true;
    }else if (parseInt($scope.search) === -1) {
      return true;
    }else {
      return false;
    }
  };

  $('#fileImage').change(function(){
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imgPreviewPlaceholder').append('<img id="imgPreview" src="">');
        $('#imgPreview').attr('src', e.target.result);
      }
      reader.readAsDataURL(this.files[0]);
    }
  });

  $scope.takePhoto = function(){
    $window.countdown();
    setTimeout(function(){
      $scope.savePhoto();
    },countown_sec * 1020)
  }

  $scope.showCamera = function(){
    $window.init()
    $scope.webcam = true;
  }

  $scope.savePhoto = function(){
    var formImage = document.getElementById("camImage");
    formImage.value = $window.captured;
    console.log(formImage.value);
  }



  // initialize page with closet images if auth is good
  if(Authorization.authorized) {
      $scope.getCloset();
  }

  $scope.reloadPage = function(){
    $state.go($state.current, {}, {reload: true});
  };

}]);
