const buttons = document.querySelectorAll("[data-silder-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.silderButton === "next" ? 1 : -1;
        const slides = document.querySelector('.slider');

        const activeSlide = slides.querySelector("[data-active]")
        const slideArray = [...slides.children].filter(child => child.classList.contains('slide'))
        let index = slideArray.indexOf(activeSlide) + offset

        if (index > 2)
            index = 0;
        else if (index < 0)
            index = slideArray.length - 1;

        console.log(slideArray[index].dataset.active = true)
        delete activeSlide.dataset.active;
    })
})