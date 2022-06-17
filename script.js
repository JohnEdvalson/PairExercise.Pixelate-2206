// Your code here
const table = document.querySelector("table");
function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
const addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow);

color = "red";

function colorize(event) {
  const target = event.target;

  if (target.tagName === "TD") {
    target.className = color;
  }
}

function selectColor(event) {
  color = event.target.value;
}

table.addEventListener("click", colorize);

const select = document.getElementById("options");
select.addEventListener("change", selectColor);
