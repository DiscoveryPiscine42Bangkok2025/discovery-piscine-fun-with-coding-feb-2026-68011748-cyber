let todos = [];

$(document).ready(function () {
  load();
  render();
});

$("#new").click(function () {
  const text = prompt("New TO DO:");
  if (!text) return;

  todos.unshift(text);
  save();
  render();
});

function render() {
  $("#ft_list").empty();

  todos.forEach((t, i) => {
    $("<div>")
      .text(t)
      .click(() => remove(i))
      .appendTo("#ft_list");
  });
}

function remove(i) {
  if (confirm("Remove?")) {
    todos.splice(i, 1);
    save();
    render();
  }
}

function save() {
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function load() {
  const c = document.cookie
    .split("; ")
    .find(e => e.startsWith("todos="));
  if (c) todos = JSON.parse(decodeURIComponent(c.split("=")[1]));
}
