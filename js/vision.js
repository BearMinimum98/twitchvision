$(window).ready(function() {


    $(".full1").hover(
    function() {
      player1.unmute();
    }, function() {
      player1.mute();
    });
  // uncomment for the rest of the players
  // $(".full2").hover(
  //   function() {
  //     player2.unmute();
  //   }, function() {
  //     player2.mute();
  //   });
  //   $(".full3").hover(
  //   function() {
  //     player3.unmute();
  //   }, function() {
  //     player3.mute();
  //   });
  //     $(".full4").hover(
  //   function() {
  //     player4.unmute();
  //   }, function() {
  //     player4.mute();
  //   });

	$("#refresh").click(function() {
		//socket.emit("getvideos", {});
	});


	
      $(".norm").click(function() {
        $("iframe").css("-webkit-filter", "");
      });
      $(".sepia").click(function() {
        $("iframe").css("-webkit-filter", "sepia(100%)");
      });
      $(".grayscale").click(function() {
        $("iframe").css("-webkit-filter", "grayscale(100%)");
      });

});

    function first() {
      $(".vidwrapper").addClass("unfeatured");
      $(this).parent().removeClass("unfeatured");
      $("#refresh").addClass("refresh-full"); 
      $("#refresh").removeClass("grad"); 
      $("#menu").addClass("hidden");
      $(this).parent().addClass("featured"); 
      if($(this).hasClass("full1")) {
        $(".full1").css("opacity", 0.01)

      };
      if($(this).hasClass("full2")) {
        $(".full2").css("opacity", 0.01)

      };
      if($(this).hasClass("full3")) {
        $(".full3").css("opacity", 0.01)
      };
      if($(this).hasClass("full4")) {
        $(".full4").css("opacity", 0.01)

      };

      $(this).one("click", second);
    }
    function second() {
      $(".vidwrapper").removeClass("unfeatured");
      $(".vidwrapper").removeClass("featured");
      $("#refresh").addClass("grad"); 
      $("#refresh").removeClass("refresh-full"); 
      $("#menu").removeClass("hidden");
      $(this).one("click", first);}

    $(".full1").one("click", first);
    $(".full2").one("click", first);
    $(".full3").one("click", first);
    $(".full4").one("click", first);
  



var tag = document.createElement('script');

  
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1;
      var player2;
      var player3;
      var player4;
     

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        player1.mute();
        player2.mute();
        player3.mute();
        player4.mute();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player1.stopVideo();
      }