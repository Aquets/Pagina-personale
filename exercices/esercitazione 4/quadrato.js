
function sposta_a_sinistra() {
  $("#quadrato").removeClass("right");
  $("#quadrato").addClass("left")
}

function sposta_a_destra() {
  $("#quadrato").removeClass("left");
  $("#quadrato").addClass("right")
}
function quando_clicco() {
  if($("#quadrato").hasClass("top-left"))
  {$("#quadrato").removeClass("top-left");
  $("#quadrato").addClass("top-right")}

  else if($("#quadrato").hasClass("top-right"))
  {$("#quadrato").removeClass("top-right");
  $("#quadrato").addClass("bottom-right")}

  else if($("#quadrato").hasClass("bottom-right"))
  {$("#quadrato").removeClass("bottom-right");
  $("#quadrato").addClass("bottom-left")}


  else if($("#quadrato").hasClass("bottom-left"))
  {$("#quadrato").removeClass("bottom-left");
  $("#quadrato").addClass("top-left")}
  }


$("#quadrato").on("click", quando_clicco);
