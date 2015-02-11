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

	setTimeout(function() { $(".pause-button").addClass("slideDown")}, 4400);
	setTimeout(function() { $(".youtube-button").addClass("slideDown")}, 4600);
	setTimeout(function() { $(".git-button").addClass("slideDown")}, 4700);
	setTimeout(function() { $(".face-button").addClass("slideDown")}, 4800);		
});

var vid = document.getElementById("bg-video");
var pauseButton = document.querySelector(".pause-button");
var pauseIcon = '<svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/><path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/></g></svg>';
var playIcon =	'<svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M184.7,413.1l2.1-1.8l156.5-136c5.3-4.6,8.6-11.5,8.6-19.2c0-7.7-3.4-14.6-8.6-19.2L187.1,101l-2.6-2.3  C182,97,179,96,175.8,96c-8.7,0-15.8,7.4-15.8,16.6h0v286.8h0c0,9.2,7.1,16.6,15.8,16.6C179.1,416,182.2,414.9,184.7,413.1z"/></svg>'

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
    pauseButton.innerHTML = pauseIcon;
  } else {
    vid.pause();
    pauseButton.innerHTML = playIcon;
  }
})
