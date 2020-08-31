const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  console.log(score);
  let showthis = document.querySelector(".result");
  scrollTo(0, 0);
  showthis.querySelector("span").textContent = `${score}%`;
  showthis.classList.remove("d-none");
  let solution = 0;
  const timethis = setInterval(() => {
    showthis.querySelector("span").textContent = `${solution}%`;
    if (solution === score) {
      clearInterval(timethis);
    } else {
      solution++;
    }
  }, 20);
});

setTimeout(() => {
  alert("hello, ninjas");
}, 3000);

let i = 0;
const timer = setInterval(() => {
  console.log("time is up");
  i++;
  if (i === 5) {
    clearInterval(timer);
  }
}, 1000);
