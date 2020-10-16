var bouton = document.querySelector("#bouton");

bouton.addEventListener("click", function() {
  document.getElementById("premier").classList.toggle("prout");
  document.getElementById("second").classList.toggle("prout");
  //   document.querySelector(".navbar").classList.toggle("prout");

  console.log("cheh");
});
