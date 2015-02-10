$(document).ready(function() {
	setTimeout(function() { $(".logo").addClass("slideExpandUp")}, 1000);

	setTimeout(function() { $(".info-block h2").addClass("stretchRight")}, 1650);
	setTimeout(function() { $(".info-block h4").addClass("stretchRight")}, 2050);
	setTimeout(function() { $(".info-block h3").addClass("stretchRight")}, 2450);	
	setTimeout(function() { $(".button-inscrever").addClass("fadeIn")}, 2650);	

	setTimeout(function() { $(".thunder-right").addClass("slideDown")}, 3200);
	setTimeout(function() { $(".thunder-left").addClass("slideDown")}, 3200);

	setTimeout(function() { $(".thunder-right").addClass("floating")}, 4250);
	setTimeout(function() { $(".thunder-left").addClass("floating")}, 4250);	
		
});

var vid = document.getElementById("bg-video");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
