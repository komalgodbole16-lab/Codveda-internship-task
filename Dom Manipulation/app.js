let count = 0;

    const countDisplay = document.getElementById("count");
    const incBtn = document.getElementById("increment");
    const decBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    incBtn.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });

    decBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        countDisplay.textContent = count;
      }
    });

    resetBtn.addEventListener("click", () => {
      count = 0;
      countDisplay.textContent = count;
    });
