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

color = "red";

const addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow);

const select = document.getElementById("options");

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
select.addEventListener("change", selectColor);
