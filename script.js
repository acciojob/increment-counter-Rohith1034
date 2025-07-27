const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", () => {
      const currentValue = parseInt(counterElement.textContent, 10);
      alert(`Current counter value: ${currentValue}`);
      counterElement.textContent = currentValue + 1;
    });
