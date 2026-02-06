let size = 200;
let colors = ["red", "green", "blue"];
let index = 0;

$("#balloon")
  .click(function () {
    size += 10;
    index = (index + 1) % colors.length;

    if (size > 420) {
      size = 200;
      index = 0;
    }

    $(this).css({
      width: size,
      height: size,
      background: colors[index]
    });
  })
  .mouseleave(function () {
    size = Math.max(200, size - 5);
    index = (index - 1 + colors.length) % colors.length;

    $(this).css({
      width: size,
      height: size,
      background: colors[index]
    });
  });
