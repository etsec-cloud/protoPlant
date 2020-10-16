var bouton = document.querySelector("#bouton");
var bouton2 = document.querySelector("#bouton2");

bouton.addEventListener("click", function() {
  document.getElementById("premier").classList.toggle("prout");
  document.getElementById("second").classList.toggle("prout");
  document.querySelector(".navbar").classList.toggle("prout");
});

bouton2.addEventListener("click", function() {
  document.getElementById("evole").classList.toggle("prout");
  document.getElementById("planters").classList.toggle("prout");

  // document.querySelector(".navbar").classList.toggle("prout");
});
