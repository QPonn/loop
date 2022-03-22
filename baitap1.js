document.getElementById("button-1").addEventListener("click", () => {
    let sum = 0;
    let n = 0;
    while (sum <= 10000) {
      n++;
      sum += n;
    }
    document.getElementById("tinh-bai-1-ne").value = n;
  });
  