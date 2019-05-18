$(document).ready(function () {
 

  $(".main_btna").on("click", function () {
    $(".overlay").fadeIn("slow");
    $(".modal").css({ "top": "-40px", "display": "block", "opacity": "0" });
    $(".modal").animate({ "top": "30px", "opacity": "1" }, "slow");
  });

  $(".main_btn").on("click", function () {
    $(".overlay").fadeIn("slow");
    $(".modal").css({ "top": "-40px", "display": "block", "opacity": "0" });
    $(".modal").animate({ "top": "30px", "opacity": "1" }, "slow");
  });

  $('.main_nav a[href="#sheldure"]').on("click", function () {

    $(".overlay").fadeIn("slow");
    $(".modal").css({ "top": "-40px", "display": "block", "opacity": "0" });
    $(".modal").animate({ "top": "30px", "opacity": "1" }, "slow");
  });

  $(".close").on("click", function () {
    $(".overlay").fadeToggle("slow");
    $(".modal").animate({ "top": "-30px", "opacity": "0" }, 500);
    $(".modal").fadeToggle(500);
  });



});