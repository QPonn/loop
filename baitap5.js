const numPrime = document.getElementById("so-lon-hon-bang-2");
const xuat = document.getElementById("ketQua");

document.getElementById("tinh").addEventListener("click", () => {
  const numPrimeValue = +numPrime.value;
  if (!numPrimeValue || numPrimeValue < 0) return;

  let all = "";
  for (let i = 2; i <= numPrimeValue; i++) {
    if (i === 2) all += 2;
    if (i % 2 !== 0) {
      let check = true;
      for (let j = 3; j < i; j += 2) {
        if (i % j === 0) {
          check = false;
          break;
        }
      }
      if (check) all += " - " + i;
    }
  }
  xuat.value = all;
});


