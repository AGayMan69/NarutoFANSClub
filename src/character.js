// generate and populating the dot navigation for the character page
function generateDotNavigation() {
    const characters = document.querySelectorAll('.character-container');
    // creating container for the dot navigation
    const nav = document.createElement("nav");
    nav.classList.add('dotnav-container')
    // generating the navigation links for each character
    const dotNav = Array.from(characters).map(character => {
        return `
        <a href="#${character.id}" data-section="${character.id}" class="dotnav-link"></a>
        `
    })

    nav.innerHTML = dotNav.join("")
    // appending the dot navigation links to the dot nav container
    document.querySelector('main').appendChild(nav)

    // adding intersection observer for changing the behavior of the dot navigation
    const dotNavObserver = new IntersectionObserver(entries => {
        const dotNavs = document.querySelectorAll('.dotnav-link')
        // reset the dot navigation links
        dotNavs.forEach(dotNav => {
            dotNav.classList.remove('selected')
        })
        // finding the active/ intersecting section
        const activeSection = entries.filter(entry => entry.isIntersecting)[0]
        if (activeSection) {
            // making the dot navigation link relate to that section active
            document.querySelector(`.dotnav-link[data-section="${activeSection.target.id}"]`).classList.add('selected')
        }
    }, {threshold: 0.5})

    // let the observer observe every sections of the character page
    characters.forEach(character => {
        dotNavObserver.observe(character)
    })
}

function activateAnimation() {
    // intersectionObserver for starting the scrolling animation when scrolling 50% into the next section
    const animateObserver = new IntersectionObserver(entries => {
        // finding the intersecting section to be animated
        const activeSection = entries.filter(entry => entry.isIntersecting)[0]
        if (activeSection) {
            // start the animation
            activeSection.target.classList.add('animate')
            // prevent the observer from observing this section again
            animateObserver.unobserve(activeSection.target)
        }
    }, {threshold: 0.5})

    const characters = document.querySelectorAll('.character-container')
    characters.forEach(character => {
        animateObserver.observe(character)
    })
}

generateDotNavigation()
activateAnimation()