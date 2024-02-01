const createTable = function () {
  const tabellone = document.querySelector("tabellone");

  for (let i = 0; i < 76; i++) {
    const singleCell = document.createElement("div");
    singleCell.classList.add("cell");
    const cellNum = document.createElement("h1");
    cellNum.innerText = 1 + 1;
    singleCell.style.display = "inline";
    singleCell.appendChild(cellNum);
    tabellone.appendChild(singleCell);
  }
};

window.onload = function () {
  createTable();
};
