var stato=0;

function revolution(x) {
  if (x==0)
  {
      $(".orbit").addClass("revolution");
      x=1
  }
  else if(x==1)
  {
      $(".orbit2").addClass("revolution2");
      x=2
  }
  else if(x==2)
  {

  }
  else if(x==3)
  {

  }

  return=x;
}

$(".star").on("click", stato=revolution(stato));
