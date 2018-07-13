
function revolution() {
  if($(".orbit").hasClass("revolution")) {

    $(".orbit2").addClass("revolution2");
  }
  $(".orbit").addClass("revolution");

}

$(".star").on("click", revolution);
