let todos = [];

/* โหลดข้อมูลจาก cookie ตอนเปิดหน้า */
window.onload = function () {
  loadTodos();
};

/* เพิ่ม TO DO ใหม่ */
function newTodo() {
  const text = prompt("Enter a new TO DO:");

  if (!text || text.trim() === "") return;

  todos.unshift(text.trim());
  saveTodos();
  renderTodos();
}

/* แสดง TO DO ทั้งหมด */
function renderTodos() {
  const list = document.getElementById("ft_list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = todo;

    div.onclick = function () {
      removeTodo(index);
    };

    list.appendChild(div);
  });
}

/* ลบ TO DO */
function removeTodo(index) {
  if (confirm("Do you want to remove this TO DO?")) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }
}

/* บันทึก cookie */
function saveTodos() {
  document.cookie =
    "todos=" +
    encodeURIComponent(JSON.stringify(todos)) +
    "; path=/";
}

/* โหลด cookie */
function loadTodos() {
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("todos="));

  if (cookie) {
    todos = JSON.parse(
      decodeURIComponent(cookie.split("=")[1])
    );
    renderTodos();
  }
}
