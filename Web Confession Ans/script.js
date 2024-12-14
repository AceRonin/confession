const wrapper = document.querySelector(".wrapper");
const qustion = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "yey, we're a couple now. I Love you!";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/img/main/gif6.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = randomX + "px";
    const randomY = randomY + "px";
});