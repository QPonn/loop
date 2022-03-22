const numEnter = document.getElementById("so-n");
const ketQua3 = document.getElementById("ketQua3");
document.getElementById("tinh-so-n").addEventListener("click", () => {
  if (numEnter.value) {
    const numEnterValue = +numEnter.value;
    let sum = 1;
    if (numEnterValue === 0) sum = 0;
    for (let i = 2; i <= numEnterValue; i++) {
      sum *= i;
    }
    ketQua3.value = sum;
  }
});

