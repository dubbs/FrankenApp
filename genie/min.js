(function () {
  'use strict';
  $('#genie').sprite({
    fps: 5,
    no_of_frames: 17,
    on_last_frame: function(obj) {
      obj.spStop();
      $('#genie').destroy();
      $('#genie').remove();
    },
    on_frame: {
      1: function(obj) {
        var audio = new Audio("genie/genie.wav");
        audio.play();
      },
      5: function(obj) {
        var audio = new Audio("genie/gun-cock.mp3");
        audio.play();
      },
      13: function(obj) {
        var audio = new Audio("genie/gun-shot.mp3");
        audio.play();
      }
    }
  });
}());

