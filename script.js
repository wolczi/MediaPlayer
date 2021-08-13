 var video= document.querySelector(".video");
 var fullBar=document.querySelector(".fulltime-bar");
 var liveBar= document.querySelector(".live-bar");
 
 var btn= document.getElementById("play-pause");
 var btn2= document.getElementById("volume");
 var btn3= document.getElementById("compress");
 
 var vs=document.getElementById("volumeslider");
 
 var film1=document.getElementById("raz");
 var film2=document.getElementById("dwa");
 var film3=document.getElementById("trzy"); 

  
 function PlayPause(){
	  if(video.paused){
		  btn.className="pause";
		  video.play();
	  }
	  else{
		  btn.className="play";
		  video.pause();
	  }
  };
  
 function volumeOnOff(){
	 if(video.muted){
		btn2.className="on";
		video.muted=false;
		vs.value=100;
	 }		 
	 else{
		btn2.className="off";
		video.muted=true;
		vs.value=0;
	 }
	  
  };
  
  function update(){
	var livePos= video.currentTime / video.duration;
	liveBar.style.width= livePos * 100 + "%";
	if(video.ended){
		btn.className="play";
	}
  }
  
 function setvolume(){
	video.volume = volumeslider.value / 100;
	if(volumeslider.value==0){
		btn2.className="off";
	}
	else if(volumeslider.value<40){
		btn2.className="half";
	}
	else{
		btn2.className="on";
	}
	
  };
  
 function przewin(e)
 {
	const przewinTime = (e.offsetX / fullBar.offsetWidth) * video.duration;
	video.currentTime=przewinTime;
	update();
 } 
  
 btn.onclick=function(){
	  PlayPause();
  };
  
 btn2.onclick=function(){
	 volumeOnOff();
  };
  
 btn3.onclick=function(){
	 video.requestFullscreen();
  };
  
 film1.onclick=function(){
	video.src="film11.mp4"; 
	liveBar.style.width= 0 + "%";
	btn.className="play";
	
  };
  
 film2.onclick=function(){
	video.src="film22.mp4";
	liveBar.style.width= 0 + "%";
	btn.className="play";
	
  };
  
 film3.onclick=function(){
	video.src="film33.mp4";
	liveBar.style.width= 0 + "%";
	btn.className="play";
  };
	
  
 video.addEventListener("timeupdate",update);
 
 video.addEventListener("dblclick",function(){
	if (!video.fullscreenElement) {
    video.requestFullscreen();}
    else {
    video.exitFullscreen();
	}
 });
 
 video.addEventListener("click",PlayPause);
 vs.addEventListener("change",setvolume);
 fullBar.addEventListener("click",przewin);