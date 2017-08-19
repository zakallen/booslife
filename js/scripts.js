$(function() {
  var BV = new $.BigVideo();
  BV.init();
  if ($('body').width() <= 768) {
    BV.show('images/phone-before.png');
    $('#big-video-wrap').fadeIn();
  }else{
    BV.show('images/before1.mp4',{ambient:true});
    
  }

  BV.getPlayer().on('durationchange',function(){
    $('#big-video-wrap').fadeIn();
  });

  var switchedVideo = false;

  if ($('body').width() > 768) {
    $('.logo-email-container').hover(function(){
      BV.show('images/after3.mp4',{ambient:true});
    }, function(){
      BV.show('images/before1.mp4',{ambient:true});
    });
  }

  if ($('body').width() <= 768) {
    var toggle = true;
    $('.logo-email-container').click(function(){
      if (toggle){
        BV.show('images/phone-after.png');
      }else{
        BV.show('images/phone-before.png');  
      }
      toggle = !toggle;
    });
  }

});