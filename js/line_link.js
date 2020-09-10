// $(".complit_car-dot").hover(
//   function () {
//     $el = $(this);
//     leftPos = $el.position().left;
//     newWidth = $el.parent().width();
//     $magicLineTwo.stop().animate({
//       left: leftPos,
//       width: newWidth,
//       backgroundColor: $el.attr("rel"),
//     });
//   },
//   function () {
//     $magicLineTwo.stop().animate({
//       left: $magicLineTwo.data("origLeft"),
//       width: $magicLineTwo.data("origWidth"),
//       backgroundColor: $magicLineTwo.data("origColor"),
//     });
//   }
// );

.complit_car - dot.onmouseover = function (event) {
  let target = event.target;
  target.style.background = "pink";
  text.value += "mouseover " + target.tagName + "\n";
  text.scrollTop = text.scrollHeight;
};

.complit_car - dot.onmouseout = function (event) {
  let target = event.target;
  target.style.background = "";
  text.value += "mouseout " + target.tagName + "\n";
  text.scrollTop = text.scrollHeight;
};
