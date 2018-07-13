var stato=0;

function revolution() {
  if (stato==0)
  {
      $(".orbit").addClass("revolution");
      stato=1
  }
  else if(stato==1)
  {
      $(".orbit2").addClass("revolution2");
      stato=2
  }
  else if(stato==2)
  {
    $(".orbit2").removeClass("revolution2");
    $(".orbit2").addClass("revolution1");
    $(".orbit").removeClass("revolution1");
    $(".orbit").addClass("revolution2");
    stato=3
  }
  else if(stato==3)
  {

  }

}

$(".star").on("click", revolution);

/* da sistemare */
