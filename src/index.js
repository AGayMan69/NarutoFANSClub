function activatePage() {
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

    const aniObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate")
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5})


    Array.from(sections).forEach(section => {
        navObserver.observe(section)
        aniObserver.observe(section)
    })

}

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

const panels = document.querySelectorAll('.ninjutsu__panel')

function activateNinjutsu() {
    Array.from(panels).forEach(panel => {
        panel.addEventListener('click', toggleNinjutsu)
        panel.addEventListener('transitionstart', displayArticle)
    })
}

function toggleNinjutsu() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        Array.from(panels).filter(panel => panel.classList.contains('shrink')).forEach(panel => {
            panel.classList.remove('shrink')
        });
        const article = this.querySelector('.ninjutsu-article')
        article.style.width = "0"
        article.style.height = "0"
    } else {
        this.classList.add('active')
        Array.from(panels).filter(panel => !panel.classList.contains('active')).forEach(panel => {
            panel.classList.add('shrink')
        })
    }
}

function displayArticle(e) {
    if (!(e.propertyName === "flex-grow"))
        return
    if (e.target.classList.contains('shrink')) {
        const panelArticle = document.querySelector('.ninjutsu__panel.active .ninjutsu-article')
        if (panelArticle.style.width === "unset") {
            return 0;
        }
        setTimeout(() => {
            panelArticle.style.width = "unset"
            panelArticle.style.height = "unset"
        }, 150)
    }
}

activatePage();
activateSlider();
activateNinjutsu();
