// slick slider
$(document).ready(function () {
  $(".photo-slider").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow_l.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow_r.svg" alt="arrow"></button>',
  });
});
// трансформація бутербродного меню в хрестик і назад
$(function () {
  document.querySelector(".menu-icon-wrapper").onclick = function () {
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  };
});
// виїзд меню при натисканні на іконку бутербодного меню
$(function () {
  $(".menu-icon-wrapper").on("click", function () {
    $(".menu-list").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});
