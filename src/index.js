function activateSlider() {
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
}

function activateNavigation() {
    const sections = document.querySelectorAll('.homepage-section');
    const navbar = document.querySelector('header');

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("fullsize"))
                    navbar.classList.remove("scrolled")
                else
                    navbar.classList.add("scrolled")
            }
        })

    }, {threshold: [0.9, 0.99]})

    const aniObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("wait-for-animate")
                console.log('animated')
            }
        })

    }, {threshold: 0.4})


    Array.from(sections).forEach(section => {
        navObserver.observe(section)
        aniObserver.observe(section)
        section.classList.add("wait-for-animate")
    })
}

const panels = document.querySelectorAll('.ninjutsu__panel')

function activateNinjutsu() {
    Array.from(panels).forEach(panel => {
        panel.addEventListener('click', toggleNinjutsu)
        console.log(panel)
    })
}

function toggleNinjutsu() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        this.querySelector(".ninjutsu-article").style.display = "none";
        Array.from(panels).filter(panel => panel.classList.contains('shrink')).forEach(panel => {
            panel.classList.remove('shrink')
        });
    } else {
        this.classList.add('active')
        this.querySelector('.ninjutsu-article').style.display = "flex";
        Array.from(panels).filter(panel => !panel.classList.contains('active')).forEach(panel => {
            panel.classList.add('shrink')
        })
    }
}

activateSlider();
activateNavigation();
activateNinjutsu();