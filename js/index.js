window.onload = function () {
  const table = document.getElementById("table");
  const btnEstrai = document.getElementById("randbtn");

  for (let i = 0; i < 76; i++) {
    const containerNumber = document.createElement("div");
    containerNumber.classList.add("numero");
    containerNumber.innerText = i;
    table.appendChild(containerNumber);
  }
};
