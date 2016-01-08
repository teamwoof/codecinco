navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.getUserMedia;
window.URL = window.URL || window.webkitURL;

var video = document.getElementById('live');
var canvas = document.getElementById('photo').getContext('2d');
var countown_sec = 3;
var feed;


function gotStream(stream) {
  feed = stream;
  photo.width = 0;
  photo.height = 0;
  video.src = window.URL.createObjectURL(feed);
}

function countdown(){
  document.getElementById("countdown").innerHTML = countown_sec;

  (function tick(){
    setTimeout(function(){
      document.getElementById("countdown").innerHTML = parseInt(document.getElementById("countdown").innerHTML)-1;
      if(document.getElementById("countdown").innerHTML !== "0") tick();
      else{
        document.getElementById("cam").remove();
        capture();
      }
    },1000)
  })()
}

function capture() {  
  var context = photo.getContext('2d');
  photo.width = 520;
  photo.height = 390;
  context.drawImage(video, 0, 0, 520, 390);

  var data = photo.toDataURL('image/jpeg');
  video.remove();
  // var image = new Image();
  // image.src = data;
  // canvas.drawImage(image,0,0);
  feed.getVideoTracks()[0].stop();
  document.getElementById('camContainer').remove();
  $('#imgPreviewPlaceholder').css("visibility","visible");
  $('#imgPreviewPlaceholder').append('<img id="imgPreview" src="">');
  $('#imgPreview').attr('src', data);
  setTimeout(function(){
    nude.load('imgPreview');
    nude.scan(function(result){
      if(result){
        $('#imgPreview').attr('src', './client/img/nonudity.jpg');
        $('#imgPreview').css("visibility","visible");
        setTimeout(function(){$('#imgPreview').fadeOut(1000);},1000);
        setTimeout(function(){location.reload();},3000);
      }else{
        var formImage = document.getElementById("camImage");
        formImage.value = data;
      }
    });
  },10);
  $('.clothingType').fadeIn(1000);
}


function init() {
  navigator.getUserMedia({video: true}, gotStream, function(){});
};