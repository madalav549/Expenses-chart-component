const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const bars = document.querySelectorAll(".bar-fill");

bars.forEach((bar) => {
  bar.addEventListener("mouseenter", () => {
    data.forEach((item) => {
      if (bar.parentElement.classList.contains(item.day)) {
        const amount = bar.parentElement.querySelector(".amount");
        amount.textContent = `$${item.amount}`;
        amount.style.display = "block";
      }
    });
  });
});

bars.forEach((bar) => {
  bar.addEventListener("mouseleave", () => {
    data.forEach((item) => {
      if (bar.parentElement.classList.contains(item.day)) {
        const amount = bar.parentElement.querySelector(".amount");
        amount.style.display = "none";
      }
    });
  });
});