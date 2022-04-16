function activatePage() {
    const sections = document.querySelectorAll('.homepage-section');
    const navbar = document.querySelector('header');

    // intersection observer for switch the navbar color for section the screen is intersecting
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // if the section is full-screen size make the nav bar transparent
                if (entry.target.classList.contains("fullsize"))
                    navbar.classList.remove("scrolled")
                else
                    // make the nav bar white in color
                    navbar.classList.add("scrolled")
            }
        })
    }, {threshold: [0.9, 0.99]})

    // intersection observer for starting the scrolling animation for each section
    const aniObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // if the screen is intersecting the section start the animation of that section
            if (entry.isIntersecting) {
                entry.target.classList.add("animate")
                // prevent the observer from observing that section again
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5})


    // start observing the sections
    sections.forEach(section => {
        navObserver.observe(section)
        aniObserver.observe(section)
    })

}

function activateSlider() {
    const buttons = document.querySelectorAll("[data-silder-button]")

    buttons.forEach(button => {
        // adding callback function if the slider button is click
        button.addEventListener("click", () => {
            // 1 if for next button -1 for previous button
            const offset = button.dataset.silderButton === "next" ? 1 : -1;
            const slideArray = [...document.querySelectorAll('.slide')]

            // get current active slide
            const activeSlide = document.querySelector('.slide.active')
            // calculate next active slide
            let index = slideArray.indexOf(activeSlide) + offset

            if (index > 2)
                index = 0;
            else if (index < 0)
                index = slideArray.length - 1;

            // assigning new active slide
            slideArray[index].classList.add('active')
            activeSlide.classList.remove('active')
        })
    })
}


const panels = document.querySelectorAll('.ninjutsu__panel')

function activateNinjutsu() {
    // adding eventlistener listening for click, transition start for each of the ninjutsu panel
    Array.from(panels).forEach(panel => {
        panel.addEventListener('click', toggleNinjutsu)
        panel.addEventListener('transitionstart', displayArticle)
    })
}

function toggleNinjutsu() {
    // if the ninjutsu is click and it's already expanded
    if (this.classList.contains('active')) {
        // set the active panel to default state
        this.classList.remove('active')
        Array.from(panels).filter(panel => panel.classList.contains('shrink')).forEach(panel => {
            // set the shrink panel to default state
            panel.classList.remove('shrink')
        });
        const article = this.querySelector('.ninjutsu-article')
        // hide the clicked article
        article.style.width = "0"
        article.style.height = "0"
    } else {
        // make the clicked panel expand
        this.classList.add('active')
        // make the other panels shrink
        Array.from(panels).filter(panel => !panel.classList.contains('active')).forEach(panel => {
            panel.classList.add('shrink')
        })
    }
}

function displayArticle(e) {
    // filtering other transition that is not flex-grow
    if (!(e.propertyName === "flex-grow"))
        return
    if (e.target.classList.contains('shrink')) {
        const panelArticle = document.querySelector('.ninjutsu__panel.active .ninjutsu-article')
        // prevent mutiple width assign if already assigned
        if (panelArticle.style.width === "unset") {
            return;
        }

        // make the article visible
        setTimeout(() => {
            panelArticle.style.width = "unset"
            panelArticle.style.height = "unset"
        }, 150)
    }
}

activatePage();
activateSlider();
activateNinjutsu();
