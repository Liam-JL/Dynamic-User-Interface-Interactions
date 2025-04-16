
const dotContainer = document.querySelector("[data-dot-container]");

const slides = dotContainer
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

for(let i = 0; i < slides.children.length; i++) {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("data-dot", "");
    dotContainer.append(dot);
}

dotContainer.children[0].dataset.active = true;

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        const activeSlide = slides.querySelector("[data-active]");
        const activeDot = dotContainer.querySelector("[data-active]")

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        }
        if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        

        dotContainer.children[newIndex].dataset.active = true;
        delete activeDot.dataset.active;
    })
});


//Make dot clickable to change to pic
const dots = [...dotContainer.children]
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        let newIndex = dots.indexOf(dot);

        const activeSlide = slides.querySelector("[data-active]");
        const activeDot = dotContainer.querySelector("[data-active]")

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        

        dotContainer.children[newIndex].dataset.active = true;
        delete activeDot.dataset.active;
    })
})

//Make images cyclle forward every 5 seconds

