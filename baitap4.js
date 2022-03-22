const numDiv = document.getElementById("so-div");
const xuat = document.getElementById("ket-qua");

document.getElementById("xuat").addEventListener("click", () => {
  if (!numDiv.value) return;

  const numDivValue = +numDiv.value;
  const redDiv = `<div style="height: 50px; width: 200px; background-color: red ; margin: 10px 0"></div>`;
  const blueDiv = `<div style="height: 50px; width: 200px; background-color: blue;"></div>`;

  for (let i = 1; i <= numDivValue; i++) {
    if (i % 2 === 0) {
      xuat.insertAdjacentHTML("afterbegin", redDiv);
    } else {
      xuat.insertAdjacentHTML("afterbegin", blueDiv);
    }
  }
});

