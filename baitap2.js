const numX = document.getElementById("so-x");
const numN = document.getElementById("so-n");
const ketQua = document.getElementById("tinh-bai-2");
document.getElementById("button-2").addEventListener("click", () => {
  if (numN.value && numX.value) {
    let numXValue = +numX.value;
    let numNValue = +numN.value;
    let sum = 0;
    for (let i = 1; i <= numNValue; i++) {
      sum += numXValue ** i;
    }

    ketQua.value = sum;
  }
});

