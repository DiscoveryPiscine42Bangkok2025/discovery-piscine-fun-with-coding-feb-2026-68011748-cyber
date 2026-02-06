const balloon = document.getElementById("balloon");

let size = 200;
let colors = ["red", "green", "blue"];
let colorIndex = 0;

/* คลิก → โต + เปลี่ยนสีไปข้างหน้า */
balloon.addEventListener("click", () => {
  size += 10;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
  } else {
    colorIndex = (colorIndex + 1) % colors.length;
  }

  updateBalloon();
});

/* เมาส์ออก → เล็กลง + เปลี่ยนสีย้อน */
balloon.addEventListener("mouseleave", () => {
  size -= 5;

  if (size < 200) {
    size = 200;
  } else {
    colorIndex =
      (colorIndex - 1 + colors.length) % colors.length;
  }

  updateBalloon();
});

/* ฟังก์ชันอัปเดตหน้าตา */
function updateBalloon() {
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
}
