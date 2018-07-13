
var tweenO = TweenMax.from("#q", 2, {rotation: "+=360", repeat: -1, ease: Power0.easeNone});
var stato = 1;

function reversare(){
if(stato==0){
  TweenMax.to("#q", 2, {
  rotation: "-=360",
  repeat: -1, ease: Power0.easeNone});
  stato=1;
}
else if(stato==1){
  TweenMax.to("#q", 2, {
  rotation: "+=360",
  repeat: -1, ease: Power0.easeNone});
  stato=0;
}

}
$("#q").on("click", reversare)

/*$("#q").on("click",() => {

  if(stato==0){
  tween.pause();
  stato=1;
  }
  else if (stato==1){
    tween.reverse();
    stato=0;
  }

};*/
