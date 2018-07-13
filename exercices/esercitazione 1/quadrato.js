
function rotate() {
  $(".q").addClass("rotate");

}

function dis_qu(){
  $(".qu").removeClass("off")
  $(".qu").addClass("on");
}

function tot () {
  rotate();
  dis_qu();
}

function tutto(){
  $(".q").addClass("orario");
  $(".qu").addClass("antiorario");
}

$(".q").on("click", tot);

$(".qu").on("click", tutto);
